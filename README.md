# acioleui

Biblioteca de componentes React para uso em aplicacoes web.

## Instalacao

```bash
npm install acioleui
```

## Uso

```tsx
import 'acioleui/styles';
import { ThemeProvider, Button } from 'acioleui';

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">Hello AcioleUI</Button>
    </ThemeProvider>
  );
}
```

## Entry points publicos

```ts
import { Button, ThemeProvider, useTheme, useOverlay } from 'acioleui';
import { Icon, iconRegistry } from 'acioleui/icons';
```
