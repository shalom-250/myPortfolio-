# Localization Guide

The Shalom Dev Portfolio is designed to be easily extensible to new languages. Follow these steps to add a new locale.

## 1. Register the New Locale
Open `client/src/i18n/routing.ts` and add the new ISO 639-1 language code to the `locales` array.

```typescript
export const routing = defineRouting({
  locales: ['rw', 'en', 'fr', 'sw', 'ar', 'es', 'de', 'pt', 'zh', 'hi', 'new-code'],
  defaultLocale: 'rw'
});
```

## 2. Update the Middleware
Open `client/src/middleware.ts` and update the `matcher` regex to include the new language code.

```typescript
export const config = {
  matcher: ['/', '/(rw|en|fr|sw|ar|es|de|pt|zh|hi|new-code)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};
```

## 3. Create the Translation File
1.  Go to `client/messages/`.
2.  Duplicate an existing file (e.g., `en.json`) and rename it to `new-code.json`.
3.  Translate all values within the JSON file while **preserving the keys**.

## 4. Add to Language Switcher
Open `client/src/components/LanguageSwitcher.tsx` and add the new language to the `languages` array.

```tsx
const languages = [
    { code: "rw", name: "Kinyarwanda", flag: "🇷🇼" },
    // ...
    { code: "new-code", name: "Native Name", flag: "🚩" }
];
```

## 5. Verify RTL (Optional)
If the new language is Right-to-Left (like Arabic):
The main layout at `client/src/app/[locale]/layout.tsx` should automatically handle the `dir` attribute if you add the new code to the RTL check logic.
