# i18n Implementation Guide

## Overview

The application now supports full internationalization (i18n) using `next-intl` library.

## Features

- ✅ Multi-language support (19 languages including Vietnamese)
- ✅ Multi-currency support (11 currencies)
- ✅ Persistent user preferences (stored in localStorage)
- ✅ Dynamic translation loading
- ✅ Global state management via Context API

## Supported Languages

- English (EN) 🇬🇧
- Tiếng Việt (VI) 🇻🇳
- Deutsch (DE) 🇩🇪
- Français (FR) 🇫🇷
- And 15 more...

## Usage in Components

### Basic Translation

```tsx
import { useTranslations } from 'next-intl';

function MyComponent() {
  const t = useTranslations('userMenu');

  return <div>{t('dashboard')}</div>;
}
```

### Accessing Settings

```tsx
import { useSettings } from '@/app/context/SettingsContext';

function MyComponent() {
  const { language, setLanguage, currency, setCurrency } = useSettings();

  return (
    <button onClick={() => setLanguage('VI')}>
      Switch to Vietnamese
    </button>
  );
}
```

## Adding New Translations

1. Add the key to all language files in `/messages` directory
2. Use the key in your component with `useTranslations`

Example:

```json
// messages/en.json
{
  "mySection": {
    "newKey": "New text"
  }
}
```

```tsx
// Component
const t = useTranslations('mySection');
<span>{t('newKey')}</span>
```

## File Structure

```
├── app/
│   ├── context/
│   │   └── SettingsContext.tsx    # Global settings state
│   ├── providers/
│   │   └── I18nProvider.tsx       # next-intl wrapper
│   └── layout.tsx                 # Root layout with providers
├── i18n/
│   ├── config.ts                  # i18n configuration
│   ├── request.ts                 # Server-side config
│   └── index.ts                   # Utility exports
└── messages/
    ├── en.json                    # English translations
    ├── vi.json                    # Vietnamese translations
    ├── de.json                    # German translations
    └── fr.json                    # French translations
```

## How It Works

1. **User selects language** in UserMenu sidebar
2. **SettingsContext** updates and persists to localStorage
3. **I18nProvider** detects change and loads new translation file
4. **All components** using `useTranslations` automatically re-render with new text

## Next Steps

To add more translations:

1. Create new language file in `/messages` (e.g., `es.json` for Spanish)
2. Add locale mapping in `/i18n/config.ts`
3. Language will be automatically available in the selector
