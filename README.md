# @acyui/components

Biblioteca de componentes React para uso em aplicacoes web.

## Instalacao

```bash
npm install @acyui/components
```

## Uso

```tsx
import '@acyui/components/styles';
import { ThemeProvider, Button } from '@acyui/components';

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">Hello Acyui</Button>
    </ThemeProvider>
  );
}
```
