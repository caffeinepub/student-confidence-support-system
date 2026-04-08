interface AskSparkLogoProps {
  /** "horizontal" = icon + wordmark side by side (navbar/hero), "icon" = icon only */
  variant?: "horizontal" | "icon";
  /** Height in pixels – width is proportional */
  height?: number;
  className?: string;
}

/** Inline SVG logo — never depends on a missing image file. */
export default function AskSparkLogo({
  variant = "horizontal",
  height = 40,
  className = "",
}: AskSparkLogoProps) {
  const iconSize = height;

  if (variant === "icon") {
    return (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="AskSpark"
        role="img"
      >
        <defs>
          <linearGradient id="spark-icon-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          <filter id="spark-glow-icon">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        {/* Bulb body */}
        <ellipse
          cx="32"
          cy="28"
          rx="14"
          ry="16"
          fill="url(#spark-icon-grad)"
          filter="url(#spark-glow-icon)"
          opacity="0.15"
        />
        <path
          d="M22 28c0-5.523 4.477-10 10-10s10 4.477 10 10c0 3.5-1.8 6.6-4.5 8.4V40H26.5v-3.6C23.8 34.6 22 31.5 22 28z"
          fill="url(#spark-icon-grad)"
        />
        {/* Base rings */}
        <rect
          x="26.5"
          y="40"
          width="11"
          height="2.5"
          rx="1.25"
          fill="url(#spark-icon-grad)"
          opacity="0.7"
        />
        <rect
          x="28"
          y="43"
          width="8"
          height="2"
          rx="1"
          fill="url(#spark-icon-grad)"
          opacity="0.5"
        />
        {/* Lightning bolt */}
        <path
          d="M33.5 22l-4 7h3.5l-2 7 6-8.5H33l2.5-5.5z"
          fill="white"
          opacity="0.95"
        />
      </svg>
    );
  }

  // Horizontal variant: icon + wordmark
  const wordmarkFontSize = height * 0.48;
  const totalWidth = iconSize + 8 + wordmarkFontSize * 4.2;

  return (
    <svg
      width={totalWidth}
      height={height}
      viewBox={`0 0 ${totalWidth} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="AskSpark"
      role="img"
    >
      <defs>
        <linearGradient id="spark-h-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id="spark-text-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <filter id="spark-glow-h">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Icon group centered vertically */}
      <g transform={`translate(0, ${(height - iconSize) / 2})`}>
        {/* Glow backdrop */}
        <ellipse
          cx={iconSize / 2}
          cy={iconSize * 0.44}
          rx={iconSize * 0.22}
          ry={iconSize * 0.25}
          fill="url(#spark-h-grad)"
          opacity="0.18"
          filter="url(#spark-glow-h)"
        />
        {/* Bulb body */}
        <path
          d={`M${iconSize * 0.345} ${iconSize * 0.438}
             c0-${iconSize * 0.156} ${iconSize * 0.07}-${iconSize * 0.282} ${iconSize * 0.156}-${iconSize * 0.282}
             s${iconSize * 0.156} ${iconSize * 0.126} ${iconSize * 0.156} ${iconSize * 0.282}
             c0 ${iconSize * 0.109}-${iconSize * 0.056} ${iconSize * 0.206}-${iconSize * 0.141} ${iconSize * 0.263}
             V${iconSize * 0.625}H${iconSize * 0.414}v-${iconSize * 0.063}
             c-${iconSize * 0.085}-${iconSize * 0.057}-${iconSize * 0.069}-${iconSize * 0.154}-${iconSize * 0.069}-${iconSize * 0.263}z`}
          fill="url(#spark-h-grad)"
        />
        {/* Base */}
        <rect
          x={iconSize * 0.414}
          y={iconSize * 0.625}
          width={iconSize * 0.172}
          height={iconSize * 0.063}
          rx={iconSize * 0.031}
          fill="url(#spark-h-grad)"
          opacity="0.7"
        />
        <rect
          x={iconSize * 0.438}
          y={iconSize * 0.703}
          width={iconSize * 0.125}
          height={iconSize * 0.047}
          rx={iconSize * 0.023}
          fill="url(#spark-h-grad)"
          opacity="0.5"
        />
        {/* Lightning bolt */}
        <path
          d={`M${iconSize * 0.523} ${iconSize * 0.281}
             l-${iconSize * 0.063} ${iconSize * 0.109}
             h${iconSize * 0.055}
             l-${iconSize * 0.031} ${iconSize * 0.109}
             l${iconSize * 0.094}-${iconSize * 0.133}
             H${iconSize * 0.516}
             l${iconSize * 0.039}-${iconSize * 0.086}z`}
          fill="white"
          opacity="0.95"
        />
      </g>

      {/* Wordmark */}
      <text
        x={iconSize + 8}
        y={height * 0.72}
        fontSize={wordmarkFontSize}
        fontWeight="700"
        fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
        letterSpacing="-0.02em"
        fill="url(#spark-text-grad)"
      >
        AskSpark
      </text>
    </svg>
  );
}
