import { getRelativeLocaleUrl } from 'astro:i18n'
import { en } from './en'
import { zhCN, type Translation } from './zh-cn'
import { zhHK } from './zh-hk'

export const locales = ['zh-hk', 'zh-cn', 'en'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'zh-hk'

const dictionary: Record<Locale, Translation> = {
  'zh-cn': zhCN,
  'zh-hk': zhHK,
  en,
}

export function t(lang: Locale): Translation {
  return dictionary[lang]
}

export function toTarget(lang: Locale, originalPath: string) {
  for (const locale of locales) {
    if (originalPath.startsWith(`/${locale}`)) {
      originalPath = originalPath.replace(`/${locale}`, '')
      break
    }
  }
  return getRelativeLocaleUrl(lang, originalPath)
}
