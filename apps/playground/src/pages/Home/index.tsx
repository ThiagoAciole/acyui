import {
  Accordion,
  Box,
  Card,
  CardBody,
  Code,
  Flex,
  Grid,
  Heading2,
  Heading3,
  Heading5,
  Icon,
  Link,
  List,
  PageHeader,
  Text,
} from 'acyon';
import './styles.css';

export type HomeRouteId = 'home-overview' | 'home-installation' | 'home-usage';

export interface HomeRoute {
  id: HomeRouteId;
  name: string;
  icon: 'home' | 'download' | 'book';
}

export const homeRoutes: HomeRoute[] = [
  { id: 'home-overview', name: 'Visao Geral', icon: 'home' },
  { id: 'home-installation', name: 'Instalacao', icon: 'download' },
  { id: 'home-usage', name: 'Uso', icon: 'book' },
];

interface HomeProps {
  route: HomeRouteId;
}

function DocSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Box className="home-page__section">
      <Flex align="center" justify="space-between" className="home-page__section-header">
        <Heading2>{title}</Heading2>
        <Icon name="component" size={14} color="var(--text-subtle)" />
      </Flex>
      <Box className="home-page__section-body">{children}</Box>
    </Box>
  );
}

function CodePanel({
  code,
  language,
}: {
  code: string;
  language?: string;
}) {
  return (
    <Box className="home-page__code-panel">
      {language ? (
        <Text size="xs" className="home-page__code-language">
          {language}
        </Text>
      ) : null}
      <pre className="home-page__code-block">
        <code>{code}</code>
      </pre>
    </Box>
  );
}

function QuickStartCard({
  href,
  icon,
  title,
  description,
}: {
  href: string;
  icon: 'download' | 'book';
  title: string;
  description: string;
}) {
  return (
    <Card as="a" href={href} className="home-page__shortcut-card">
      <CardBody>
        <Flex direction="column" gap="4">
          <Box className="home-page__shortcut-icon">
            <Icon name={icon} size={18} />
          </Box>
          <Flex direction="column" gap="2">
            <Heading5>{title}</Heading5>
            <Text size="sm" color="subtle">
              {description}
            </Text>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
}

function InstallStep({
  step,
  title,
  description,
  code,
}: {
  step: number;
  title: string;
  description: React.ReactNode;
  code?: string;
}) {
  return (
    <Box className="home-page__install-step">
      <Box className="home-page__install-step-marker">{step}</Box>
      <Box className="home-page__install-step-content">
        <Heading3>{title}</Heading3>
        <Text color="subtle">{description}</Text>
        {code ? <CodePanel code={code} /> : null}
      </Box>
    </Box>
  );
}

function OverviewPage() {
  return (
    <>
      <PageHeader
        title="Acyon UI - Visao geral"
        description="Acyon UI e uma biblioteca de componentes React focada em velocidade de implementacao, consistencia visual e composicao. A base foi pensada para uso imediato em produtos reais."
        width="84%"
      />

      <DocSection title="Introducao">
        <Flex direction="column" gap="4">
          <Text>
            Acyon UI entrega um conjunto de componentes reutilizaveis, estilos base e tokens semanticos para acelerar a construcao de interfaces sem perder controle sobre o design.
          </Text>
          <Text>
            A biblioteca cobre formularios, layout, exibicao de dados, feedback e navegacao. Em vez de impor uma camada pesada de abstracao, ela prioriza primitives simples, API clara e integracao direta com a aplicacao.
          </Text>
          <Box className="home-page__callout">
            <Flex align="flex-start" gap="3">
              <Icon name="info" size={16} />
              <Text size="sm">
                O playground ja esta configurado para demonstrar o uso dos componentes em cenarios reais. Use a sidebar para navegar entre categorias e ajustar exemplos ao vivo.
              </Text>
            </Flex>
          </Box>
        </Flex>
      </DocSection>

      <DocSection title="Vantagens do Acyon UI">
        <List variant='checklist'>
          <List.Item description="componentes prontos para uso reduzem tempo de implementacao e evitam retrabalho em telas repetitivas.">
            Entrega mais rapida:
          </List.Item>
          <List.Item description="espacamento, tipografia, estados e feedback seguem o mesmo conjunto de tokens e convencoes.">
            Consistencia visual:
          </List.Item>
          <List.Item description="os componentes foram pensados para combinacao entre si, sem travar o layout em estruturas fechadas.">
            Composicao real:
          </List.Item>
          <List.Item description="a base considera semantica, estados interativos e navegacao por teclado como requisito e nao como opcional.">
            Acessibilidade:
          </List.Item>
          <List.Item description="voce pode introduzir a biblioteca por tela, fluxo ou modulo, sem depender de uma migracao total.">
            Adocao incremental:
          </List.Item>
        </List>
      </DocSection>

      <DocSection title="Comece agora">
        <Text color="subtle">
          Escolha um dos fluxos abaixo para iniciar rapidamente com a biblioteca.
        </Text>
        <Grid columns={2} gap="4" className="home-page__quickstart-grid">
          <QuickStartCard
            href="#/home-installation"
            icon="download"
            title="Instalacao"
            description="Adicione o pacote ao projeto e configure a base de estilos e providers."
          />
          <QuickStartCard
            href="#/home-usage"
            icon="book"
            title="Uso"
            description="Veja o fluxo recomendado para navegar pela biblioteca e aplicar os componentes."
          />
        </Grid>
      </DocSection>
    </>
  );
}

function InstallationPage() {
  return (
    <>
      <PageHeader
        title="Instalacao"
        description="Configure o pacote, carregue os estilos globais e envolva a aplicacao com os providers necessarios."
        width="84%"
      />

      <Box className="home-page__steps">
        <InstallStep
          step={1}
          title="Instale o pacote"
          description={
            <>
              Adicione <Code>acyon</Code> ao seu projeto com o gerenciador de pacotes da stack.
            </>
          }
          code="npm install acyon"
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
              Envolva a aplicacao com <Code>ThemeProvider</Code> e <Code>ToastProvider</Code> para habilitar tema e feedback global.
            </>
          }
          code={`import { ThemeProvider, ToastProvider } from 'acyon';

function AppProviders({ children }) {
  return (
    <ThemeProvider defaultTheme="light">
      <ToastProvider>{children}</ToastProvider>
    </ThemeProvider>
  );
}`}
        />
      </Box>
    </>
  );
}

function UsagePage() {
  return (
    <>
      <PageHeader
        title="Uso"
        description="Aprenda o fluxo basico para explorar componentes, adaptar exemplos e compor interfaces com a biblioteca."
        width="84%"
      />

      <DocSection title="Inicio rapido">
        <Flex direction="column" gap="4">
          <Text>
            Depois da <Link href="#/home-installation">instalacao</Link>, escolha qualquer componente na sidebar e use o playground para experimentar variacoes de props, estrutura e composicao.
          </Text>
          <CodePanel
            language="tsx"
            code={`import { Button } from 'acyon';

export function Example() {
  return <Button variant="primary">Ola mundo</Button>;
}`}
          />
        </Flex>
      </DocSection>

      <DocSection title="Globais">
        <Flex direction="column" gap="4">
          <Text>
            Os componentes foram desenhados para funcionar de forma isolada, mas a experiencia melhora quando a aplicacao compartilha providers, tema e estilos base.
          </Text>
          <Text>
            Para garantir consistencia visual, mantenha a biblioteca dentro do fluxo de tokens semanticos e evite sobrescrever estilos estruturais diretamente nos componentes base.
          </Text>
        </Flex>
      </DocSection>

      <DocSection title="Boas praticas">
        <Accordion>
          <Accordion.Item title="Use tokens semanticos para cores, espacamentos e raios.">

            A biblioteca expoe tokens semanticos em <Code>./tokens/semantic.css</Code> para cores, espacamentos e raios. Usar esses tokens garante consistencia visual e facilita manutencao futura.

          </Accordion.Item>
          <Accordion.Item title="Centralize providers na raiz da aplicacao.">

            Envolva a aplicacao com <Code>ThemeProvider</Code> e <Code>ToastProvider</Code> para habilitar tema e feedback global.

          </Accordion.Item>
          <Accordion.Item title="Prefira variacoes declarativas a overrides locais repetidos.">

            Em vez de sobrescrever estilos localmente, use as variacoes disponiveis em cada componente. Isso garante consistencia e facilita manutencao.

          </Accordion.Item>
          <Accordion.Item title="Valide acessibilidade antes de publicar novos fluxos.">

            A biblioteca foi desenhada com acessibilidade em mente, mas e importante validar novos fluxos com leitores de tela e navegacao por teclado antes de publicar.

          </Accordion.Item>
        </Accordion>
      </DocSection>
    </>
  );
}

export function Home({ route }: HomeProps) {
  return (
    <Box className="home-page">
      {route === 'home-installation' ? <InstallationPage /> : null}
      {route === 'home-usage' ? <UsagePage /> : null}
      {route === 'home-overview' ? <OverviewPage /> : null}
    </Box>
  );
}
