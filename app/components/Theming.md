### Theming and Dark Mode

This app uses `next-themes` to toggle light/dark/system themes. Dark variants rely on a `.dark` class applied to the `<html>` tag.

#### Flowchart

```mermaid
flowchart TD
  A[User clicks ThemeToggle] --> B{Current theme}
  B -->|light| C[setTheme('dark')]
  B -->|dark| D[setTheme('system')]
  B -->|system| E[setTheme('light')]
  C --> F[next-themes sets html.class='dark']
  D --> G[next-themes sets html.class based on OS]
  E --> H[remove 'dark' class]
  F --> I[CSS uses html.dark variables]
  G --> I
  H --> I
```

#### Implementation Notes

- Provider: `app/layout.tsx` wraps the app with `ThemeProvider` (`attribute="class"`, `defaultTheme="system"`, `enableSystem`).
- Dark CSS: `app/globals.css` defines light variables on `:root` and overrides on `html.dark`.
- Components: Use Tailwind `dark:` utilities and/or CSS variables for colors.
- Avoid `@media (prefers-color-scheme: dark)` for app theme, as it can override manual toggle.

#### Debugging

- The toggle logs current and resolved theme in the console. Search for `[ThemeToggle]`.
- Ensure `<html>` toggles the `dark` class on click; if not, check the provider props in `app/layout.tsx`.


