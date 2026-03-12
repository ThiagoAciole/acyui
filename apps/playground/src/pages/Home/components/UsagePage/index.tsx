import { Accordion, Code, Flex, Link, PageHeader, Text } from 'acyon';
import { CodePanel } from '../../../../components/CodePanel';
import { DocSection } from '../../../../components/DocSection';

export function UsagePage() {
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
            Envolva a aplicacao com <Code>ThemeProvider</Code> na raiz. Ele ja compoe tema e toast global em um unico ponto.
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
