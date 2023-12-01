import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'white': 'rgba(255, 255, 255, 1)',
        'azure-blue': 'rgba(0, 123, 255, 1)',
        'soft-black': 'rgba(30, 30, 30, 1)',
        'light-gray': 'rgba(239, 240, 242, 1)',
        'blue-ish-gray': 'rgba(202, 207, 219, 1)',
        'dark-gray': 'rgba(158, 163, 172, 1)',
        'night': 'rgba(15, 15, 15, 1)',
        'eerie-black': 'rgba(24, 24, 24, 1)',
        'ruddy-blue': 'rgba(76, 163, 255, 1)',
      },
    },
  },
  plugins: [],
}
export default config
