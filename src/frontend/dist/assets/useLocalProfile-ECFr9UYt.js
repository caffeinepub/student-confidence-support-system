const USER_ID_KEY = "askspark_userId";
const PROFILE_KEY = "askspark_profile";
function getOrCreateUserId() {
  let userId = localStorage.getItem(USER_ID_KEY);
  if (!userId) {
    userId = `user_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    localStorage.setItem(USER_ID_KEY, userId);
  }
  return userId;
}
function saveLocalProfile(profile) {
  const userId = getOrCreateUserId();
  const full = { userId, ...profile };
  localStorage.setItem(PROFILE_KEY, JSON.stringify(full));
  return full;
}
function loadLocalProfile() {
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
export {
  getOrCreateUserId as g,
  loadLocalProfile as l,
  saveLocalProfile as s
};
