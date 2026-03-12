import { Box, Flex, Grid, Icon, List, PageHeader, Text } from '@aciole/acyon';
import { DocSection } from '../../../../components/DocSection';
import { QuickStartCard } from '../../../../components/QuickStartCard';
import './styles.css';

export function OverviewPage() {
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
          <Box className="home-overview-page__callout">
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
        <List variant="checklist">
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
        <Grid columns={2} gap="4" className="home-overview-page__quickstart-grid">
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
