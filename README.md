# acyon

Biblioteca de componentes React para uso em aplicacoes web.

## Instalacao

```bash
npm install acyon
```

## Uso

```tsx
import { ThemeProvider, Button } from 'acyon';
import 'acyon/styles';

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">Hello acyon</Button>
    </ThemeProvider>
  );
}
```

## Publicacao

```bash
npm run build --workspace=packages/ui
npm publish --workspace=packages/ui
```

`prepublishOnly` ja executa o build automaticamente no pacote.
