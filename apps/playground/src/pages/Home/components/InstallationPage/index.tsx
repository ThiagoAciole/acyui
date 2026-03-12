import { Box, Code, PageHeader } from '@aciole/acyon';
import { InstallStep } from '../../../../components/InstallStep';
import './styles.css';

export function InstallationPage() {
  return (
    <>
      <PageHeader
        title="Instalacao"
        description="Configure o pacote, carregue os estilos globais e envolva a aplicacao com os providers necessarios."
        width="84%"
      />

      <Box className="home-installation-page__steps">
        <InstallStep
          step={1}
          title="Instale o pacote"
          description={
            <>
              Adicione <Code>acyon</Code> ao seu projeto com o gerenciador de pacotes da stack.
            </>
          }
          code="npm install @aciole/acyon"
        />

        <InstallStep
          step={2}
          title="Importe os estilos base"
          description={
            <>
              Garanta que os tokens e estilos globais sejam carregados no ponto de entrada da aplicacao.
            </>
          }
          code="import 'acyon/style.css';"
        />

        <InstallStep
          step={3}
          title="Configure os providers"
          description={
            <>
              Envolva a aplicacao com <Code>ThemeProvider</Code>. Ele ja inclui a camada de toast por padrao.
            </>
          }
          code={`import { ThemeProvider } from '@aciole/acyon';

function AppProviders({ children }) {
  return (
    <ThemeProvider defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}`}
        />
      </Box>
    </>
  );
}
