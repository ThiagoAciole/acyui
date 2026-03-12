import {
  Box,
  Card,
  CardBody,
  Flex,
  Grid,
  Heading2,
  Heading3,
  Heading5,
  Icon,
  PageHeader,
  Text,
} from 'acyon';
import './styles.css';

export function Dashboard() {
  return (
    <Box className="dashboard-page">
      <PageHeader
        title="Bem-vindo ao Laboratorio de Componentes"
        description="Explore nossa biblioteca de componentes modulares, acessiveis e altamente customizaveis. Sinta-se livre para experimentar e compartilhar seus comentarios."
        width="80%"
      />

      <Grid columns={3} gap="6">
        <Card variant="outlined">
          <CardBody>
            <Flex direction="column" gap="4">
              <Icon name="zap" />
              <Heading3>Performance</Heading3>
              <Text color="subtle">Componentes otimizados para zero runtime overhead e carregamento instantaneo.</Text>
            </Flex>
          </CardBody>
        </Card>

        <Card variant="outlined">
          <CardBody>
            <Flex direction="column" gap="4">
              <Icon name="shield" />
              <Heading3>Acessibilidade</Heading3>
              <Text color="subtle">Seguindo padroes WAI-ARIA para garantir que todos possam usar sua aplicacao.</Text>
            </Flex>
          </CardBody>
        </Card>

        <Card variant="outlined">
          <CardBody>
            <Flex direction="column" gap="4">
              <Icon name="layout" />
              <Heading3>Design System</Heading3>
              <Text color="subtle">Consistencia visual garantida atraves de tokens semanticos e escala tipografica.</Text>
            </Flex>
          </CardBody>
        </Card>
      </Grid>

      <Box className="dashboard-page__shortcuts">
        <Heading2 className="dashboard-page__shortcuts-title">Atalhos Rapidos</Heading2>
        <Grid columns={2} gap="4">
          <Card as="a" href="#" className="dashboard-page__shortcut-card">
            <CardBody>
              <Flex align="center" gap="4">
                <Box className="dashboard-page__shortcut-icon">
                  <Icon name="book" />
                </Box>
                <Flex direction="column">
                  <Heading5>Documentacao</Heading5>
                  <Text size="xs" color="subtle">Leia as guias completas de uso.</Text>
                </Flex>
                <Icon name="arrow-right" color="var(--text-subtle)" />
              </Flex>
            </CardBody>
          </Card>

          <Card as="a" href="https://github.com/thiagoaciole/labs" target="_blank" className="dashboard-page__shortcut-card">
            <CardBody>
              <Flex align="center" gap="4">
                <Box className="dashboard-page__shortcut-icon dashboard-page__shortcut-icon--labs">
                  <Icon name="github" />
                </Box>
                <Flex direction="column">
                  <Heading5>GitHub</Heading5>
                  <Text size="xs" color="subtle">Contribua para o projeto.</Text>
                </Flex>
                <Icon name="external-link" color="var(--text-subtle)" />
              </Flex>
            </CardBody>
          </Card>
        </Grid>
      </Box>
    </Box>
  );
}
