# @aciole/acyon

Biblioteca de componentes React para uso em aplicacoes web.

## Instalacao

```bash
npm install @aciole/acyon
```

## Uso

```tsx
import { ThemeProvider, Button } from '@aciole/acyon';
import '@aciole/acyon/styles';

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">Hello Acyon</Button>
    </ThemeProvider>
  );
}
```

## Publicacao

```bash
npm run build --workspace=packages/ui
npm publish --workspace=packages/ui --access=public
```

`prepublishOnly` ja executa o build automaticamente no pacote.
