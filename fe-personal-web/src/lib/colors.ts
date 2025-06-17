// Centralized color palette for the entire application
export const colors = {
  // Primary dark colors
  darkBg: "#101722",
  darkBgAlt: "#17212E",
  darkHeader: "#17212E",
  darkFooter: "#17212E",

  // Accent colors
  accentBlue: "#00E8F8",
  accentOrange: "#FFB800",
  accentPurple: "#7A47E0",
  accentPurpleLight: "#D0B3FF",
  accentGreen: "#22C55E",
  accentBlueAlt: "#3B82F6",

  // UI colors
  cardBg: "#252B39",
  inactiveBg: "#374153",
  formBg: "#1F2632",
  inputBg: "#17212E",
  buttonHover: "#6A37D0",
  paginationActive: "#E6A700",

  // Text colors
  textPrimary: "#FFFFFF",
  textSecondary: "rgba(255, 255, 255, 0.7)",
  textMuted: "#9CA3AF",
};

// Export specific color groups for easier access
export const darkColors = {
  bg: colors.darkBg,
  bgAlt: colors.darkBgAlt,
  header: colors.darkHeader,
  footer: colors.darkFooter,
};

export const accentColors = {
  blue: colors.accentBlue,
  orange: colors.accentOrange,
  purple: colors.accentPurple,
  purpleLight: colors.accentPurpleLight,
  green: colors.accentGreen,
  blueAlt: colors.accentBlueAlt,
};

export const uiColors = {
  cardBg: colors.cardBg,
  inactiveBg: colors.inactiveBg,
  formBg: colors.formBg,
  inputBg: colors.inputBg,
  buttonHover: colors.buttonHover,
  paginationActive: colors.paginationActive,
};

export const textColors = {
  primary: colors.textPrimary,
  secondary: colors.textSecondary,
  muted: colors.textMuted,
};

// Export CSS variable mapping for Tailwind
export const cssVariables = {
  "--color-dark-bg": colors.darkBg,
  "--color-dark-bg-alt": colors.darkBgAlt,
  "--color-dark-header": colors.darkHeader,
  "--color-dark-footer": colors.darkFooter,
  "--color-accent-blue": colors.accentBlue,
  "--color-accent-orange": colors.accentOrange,
  "--color-accent-purple": colors.accentPurple,
  "--color-accent-purple-light": colors.accentPurpleLight,
  "--color-accent-green": colors.accentGreen,
  "--color-accent-blue-alt": colors.accentBlueAlt,
  "--color-card-bg": colors.cardBg,
  "--color-inactive-bg": colors.inactiveBg,
  "--color-form-bg": colors.formBg,
  "--color-input-bg": colors.inputBg,
  "--color-button-hover": colors.buttonHover,
  "--color-pagination-active": colors.paginationActive,
  "--color-text-primary": colors.textPrimary,
  "--color-text-secondary": colors.textSecondary,
  "--color-text-muted": colors.textMuted,
};

export default colors;
