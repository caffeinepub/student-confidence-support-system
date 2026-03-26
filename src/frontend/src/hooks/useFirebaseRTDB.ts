/**
 * useFirebaseRTDB — localStorage + BroadcastChannel-based RTDB simulation.
 * Provides the same API surface expected by WebRTC signaling and live class
 * features, but works entirely in-browser without a backend.
 */

const BC_CHANNEL = "askspark_rtdb";
const STORE_KEY = "askspark_rtdb_store";

// ── helpers ────────────────────────────────────────────────────────────────

function getStore(): Record<string, unknown> {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY) || "{}");
  } catch {
    return {};
  }
}

function setStore(store: Record<string, unknown>) {
  localStorage.setItem(STORE_KEY, JSON.stringify(store));
}

function getAtPath(obj: Record<string, unknown>, parts: string[]): unknown {
  let cur: unknown = obj;
  for (const p of parts) {
    if (cur == null || typeof cur !== "object") return undefined;
    cur = (cur as Record<string, unknown>)[p];
  }
  return cur;
}

function setAtPath(
  obj: Record<string, unknown>,
  parts: string[],
  value: unknown,
): void {
  let cur: Record<string, unknown> = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const p = parts[i];
    if (cur[p] == null || typeof cur[p] !== "object") {
      cur[p] = {};
    }
    cur = cur[p] as Record<string, unknown>;
  }
  cur[parts[parts.length - 1]] = value;
}

function removeAtPath(obj: Record<string, unknown>, parts: string[]): void {
  if (parts.length === 0) return;
  let cur: Record<string, unknown> = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const p = parts[i];
    if (cur[p] == null || typeof cur[p] !== "object") return;
    cur = cur[p] as Record<string, unknown>;
  }
  delete cur[parts[parts.length - 1]];
}

function broadcast(path: string) {
  try {
    const bc = new BroadcastChannel(BC_CHANNEL);
    bc.postMessage({ path });
    bc.close();
  } catch {
    // BroadcastChannel not available in some envs
    window.dispatchEvent(new CustomEvent("rtdb_change", { detail: { path } }));
  }
}

// ── public API ─────────────────────────────────────────────────────────────

export function rtdbSet(path: string, data: unknown): void {
  const store = getStore();
  const parts = path.split("/").filter(Boolean);
  setAtPath(store, parts, data);
  setStore(store);
  broadcast(path);
}

export function rtdbPush(path: string, data: unknown): string {
  const id = `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
  const store = getStore();
  const parts = [...path.split("/").filter(Boolean), id];
  setAtPath(store, parts, data);
  setStore(store);
  broadcast(`${path}/${id}`);
  return id;
}

export function rtdbGet(path: string): unknown {
  const store = getStore();
  const parts = path.split("/").filter(Boolean);
  return getAtPath(store, parts);
}

export function rtdbRemove(path: string): void {
  const store = getStore();
  const parts = path.split("/").filter(Boolean);
  removeAtPath(store, parts);
  setStore(store);
  broadcast(path);
}

/**
 * Subscribe to a path. Returns an unsubscribe function.
 * Fires immediately with the current value, then on every change.
 */
export function rtdbListen(
  path: string,
  callback: (value: unknown) => void,
): () => void {
  const parts = path.split("/").filter(Boolean);

  const read = () => {
    const store = getStore();
    return getAtPath(store, parts);
  };

  // fire immediately
  callback(read());

  const handleChange = (e: MessageEvent | CustomEvent) => {
    let changedPath: string;
    if (e instanceof MessageEvent) {
      changedPath = e.data?.path ?? "";
    } else {
      changedPath = (e as CustomEvent).detail?.path ?? "";
    }
    // Only fire if the changed path overlaps with the listened path
    if (
      changedPath.startsWith(path) ||
      path.startsWith(changedPath.split("/").slice(0, parts.length).join("/"))
    ) {
      callback(read());
    }
  };

  let bc: BroadcastChannel | null = null;
  try {
    bc = new BroadcastChannel(BC_CHANNEL);
    bc.addEventListener("message", handleChange as EventListener);
  } catch {
    window.addEventListener("rtdb_change", handleChange as EventListener);
  }

  return () => {
    if (bc) {
      bc.removeEventListener("message", handleChange as EventListener);
      bc.close();
    } else {
      window.removeEventListener("rtdb_change", handleChange as EventListener);
    }
  };
}
