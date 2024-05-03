import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
    content: [
        './app/**/*.{js,ts,jsx,tsx,.md}', //
    ],
    theme: {
        extend: {},
    },
    plugins: [typography],
} satisfies Config
