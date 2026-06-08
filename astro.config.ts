import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  vite: { plugins: [tailwindcss()] },
  i18n: { locales: ['zh-hk', 'zh-cn', 'en'], defaultLocale: 'zh-hk' },
})
