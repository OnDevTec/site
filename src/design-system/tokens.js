/**
 * OnDoctor Design System - Design Tokens
 * 
 * Este arquivo contém todos os tokens de design do sistema.
 * Use estes tokens em vez de valores hardcoded para manter consistência.
 */

export const tokens = {
  // ============================================
  // COLORS
  // ============================================
  colors: {
    // Primary - Teal (Cor principal do OnDoctor)
    primary: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf',
      500: '#14b8a6',
      600: '#0d9488',
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a',
      950: '#042f2e',
    },

    // Secondary - Purple (Para destaques secundários)
    secondary: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7e22ce',
      800: '#6b21a8',
      900: '#581c87',
    },

    // Accent - Orange (Para CTAs e elementos de atenção)
    accent: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
    },

    // Success - Green
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },

    // Warning - Yellow
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
    },

    // Error - Red
    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
    },

    // Neutral - Gray
    neutral: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
      950: '#030712',
    },

    // Semantic Colors
    background: {
      primary: '#ffffff',
      secondary: '#f9fafb',
      tertiary: '#f3f4f6',
      dark: '#111827',
    },

    text: {
      primary: '#111827',
      secondary: '#4b5563',
      tertiary: '#9ca3af',
      inverse: '#ffffff',
      link: '#0d9488',
      linkHover: '#0f766e',
    },

    border: {
      light: '#e5e7eb',
      default: '#d1d5db',
      dark: '#9ca3af',
    },
  },

  // ============================================
  // TYPOGRAPHY
  // ============================================
  typography: {
    fontFamily: {
      sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      mono: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
    },

    fontSize: {
      xs: '0.75rem',      // 12px
      sm: '0.875rem',     // 14px
      base: '1rem',       // 16px
      lg: '1.125rem',     // 18px
      xl: '1.25rem',      // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
      '6xl': '3.75rem',   // 60px
      '7xl': '4.5rem',    // 72px
    },

    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },

    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },

    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },

  // ============================================
  // SPACING
  // ============================================
  spacing: {
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
    32: '8rem',     // 128px
    40: '10rem',    // 160px
    48: '12rem',    // 192px
    56: '14rem',    // 224px
    64: '16rem',    // 256px
  },

  // ============================================
  // BORDER RADIUS
  // ============================================
  borderRadius: {
    none: '0',
    sm: '0.25rem',    // 4px
    base: '0.375rem', // 6px
    md: '0.5rem',     // 8px
    lg: '0.75rem',    // 12px
    xl: '1rem',       // 16px
    '2xl': '1.5rem',  // 24px
    '3xl': '2rem',    // 32px
    full: '9999px',
  },

  // ============================================
  // SHADOWS
  // ============================================
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
    none: 'none',
    
    // Colored shadows
    primary: '0 10px 25px -5px rgba(20, 184, 166, 0.3)',
    secondary: '0 10px 25px -5px rgba(163, 85, 247, 0.3)',
    accent: '0 10px 25px -5px rgba(249, 115, 22, 0.3)',
  },

  // ============================================
  // TRANSITIONS
  // ============================================
  transitions: {
    duration: {
      fast: '150ms',
      base: '200ms',
      slow: '300ms',
      slower: '500ms',
    },

    timing: {
      ease: 'ease',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
      linear: 'linear',
    },
  },

  // ============================================
  // BREAKPOINTS
  // ============================================
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // ============================================
  // Z-INDEX
  // ============================================
  zIndex: {
    base: 0,
    dropdown: 1000,
    sticky: 1100,
    fixed: 1200,
    modalBackdrop: 1300,
    modal: 1400,
    popover: 1500,
    tooltip: 1600,
  },

  // ============================================
  // COMPONENT SPECIFIC
  // ============================================
  components: {
    button: {
      height: {
        sm: '2rem',      // 32px
        md: '2.5rem',    // 40px
        lg: '3rem',      // 48px
      },
      padding: {
        sm: '0.5rem 1rem',
        md: '0.75rem 1.5rem',
        lg: '1rem 2rem',
      },
    },

    card: {
      padding: {
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
      },
      borderRadius: '1rem',
      shadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    },

    input: {
      height: {
        sm: '2rem',
        md: '2.5rem',
        lg: '3rem',
      },
      padding: '0.75rem 1rem',
      borderRadius: '0.5rem',
    },

    container: {
      maxWidth: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      padding: {
        mobile: '1rem',
        desktop: '2rem',
      },
    },
  },

  // ============================================
  // ANIMATIONS
  // ============================================
  animations: {
    fadeIn: {
      keyframes: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      duration: '500ms',
      timing: 'ease-in',
    },

    slideUp: {
      keyframes: {
        '0%': { transform: 'translateY(20px)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
      duration: '500ms',
      timing: 'ease-out',
    },

    slideDown: {
      keyframes: {
        '0%': { transform: 'translateY(-20px)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
      duration: '500ms',
      timing: 'ease-out',
    },

    scaleIn: {
      keyframes: {
        '0%': { transform: 'scale(0.95)', opacity: '0' },
        '100%': { transform: 'scale(1)', opacity: '1' },
      },
      duration: '300ms',
      timing: 'ease-out',
    },

    pulse: {
      keyframes: {
        '0%, 100%': { opacity: '1' },
        '50%': { opacity: '0.5' },
      },
      duration: '2s',
      timing: 'ease-in-out',
      iteration: 'infinite',
    },
  },
}

export default tokens
