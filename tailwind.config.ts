import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background-rgb)',
        foreground: 'var(--foreground-rgb)',
      },
      fontFamily: {
        'monaspace-krypton': ['var(--font-monaspace-krypton)', 'monospace'],
        'monaspace-neon': ['var(--font-monaspace-neon)', 'monospace'],
        'monaspace-radon': ['var(--font-monaspace-radon)', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config
