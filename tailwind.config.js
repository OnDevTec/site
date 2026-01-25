import tokens from './src/design-system/tokens.js'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: tokens.colors.primary,
        secondary: tokens.colors.secondary,
        accent: tokens.colors.accent,
        success: tokens.colors.success,
        warning: tokens.colors.warning,
        error: tokens.colors.error,
        neutral: tokens.colors.neutral,
      },
      fontFamily: {
        sans: tokens.typography.fontFamily.sans.split(', '),
        mono: tokens.typography.fontFamily.mono.split(', '),
      },
      fontSize: tokens.typography.fontSize,
      fontWeight: tokens.typography.fontWeight,
      lineHeight: tokens.typography.lineHeight,
      letterSpacing: tokens.typography.letterSpacing,
      spacing: tokens.spacing,
      borderRadius: tokens.borderRadius,
      boxShadow: {
        ...tokens.shadows,
      },
      transitionDuration: tokens.transitions.duration,
      transitionTimingFunction: tokens.transitions.timing,
      zIndex: tokens.zIndex,
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'pulse': 'pulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: tokens.animations.fadeIn.keyframes,
        slideUp: tokens.animations.slideUp.keyframes,
        slideDown: tokens.animations.slideDown.keyframes,
        scaleIn: tokens.animations.scaleIn.keyframes,
        pulse: tokens.animations.pulse.keyframes,
      },
    },
  },
  plugins: [],
}
