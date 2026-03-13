import { Badge, Box, Button, Card, CardBody, Flex, Grid, Heading, Heading4, Icon, Text } from '@aciole/acyon';
import { useNavigate } from 'react-router-dom';
import type { HomeRouteId } from '../../app/router';
import './home-page.css';
import { InstallationSection } from './sections/installation-section';
import { OverviewSection } from './sections/overview-section';
import { UsageSection } from './sections/usage-section';

interface HomePageProps {
  route: HomeRouteId;
}

export function HomePage({ route }: HomePageProps) {
  const isOverview = route === 'home-overview';
  const navigate = useNavigate();

  return (
    <Box className="home-page">
      {isOverview ? (
        <Box className="home-hero">
          <Box className="home-hero__copy">
            <Badge>Acyon UI</Badge>
            <Flex direction="column" gap="5">
              <Heading>A biblioteca para montar interfaces reais com mais velocidade e menos atrito.</Heading>
              <Text className="home-hero__description" color="neutral">
                Componentes React com playground ao vivo, tokens semanticos e uma base pronta para produto.
              </Text>
            </Flex>

            <Flex gap="3" wrap="wrap">
              <Button onClick={() => navigate('/home-installation')}>
                Comecar instalacao
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate('/button')}
              >
                Explorar componentes
              </Button>
            </Flex>

            <Grid columns={3} gap="4" className="home-hero__stats">
              <Card className="home-hero__stat-card">
                <CardBody>
                  <Text className="home-hero__stat-value">50+</Text>
                  <Text size="small" color="neutral">componentes catalogados</Text>
                </CardBody>
              </Card>
              <Card className="home-hero__stat-card">
                <CardBody>
                  <Text className="home-hero__stat-value">Live</Text>
                  <Text size="small" color="neutral">preview, props e codigo lado a lado</Text>
                </CardBody>
              </Card>
              <Card className="home-hero__stat-card">
                <CardBody>
                  <Text className="home-hero__stat-value">Tokens</Text>
                  <Text size="small" color="neutral">cores, espacamentos e raios consistentes</Text>
                </CardBody>
              </Card>
            </Grid>
          </Box>

          <Box className="home-hero__preview">
            <Box className="home-hero__preview-shell">
              <Flex align="center" justify="space-between" className="home-hero__preview-bar">
                <Flex gap="2">
                  <span className="home-hero__preview-dot" />
                  <span className="home-hero__preview-dot" />
                  <span className="home-hero__preview-dot" />
                </Flex>
                <Text size="small" color="neutral">Playground</Text>
              </Flex>

              <Box className="home-hero__preview-stage">
                <Flex direction="column" gap="4">
                  <Badge>Button / Preview</Badge>
                  <Heading4>Teste variacoes e gere codigo com contexto visual.</Heading4>
                  <Text color="neutral">
                    Ajuste props, leia exemplos e compare o comportamento do componente sem sair da documentacao.
                  </Text>
                  <Flex gap="3" wrap="wrap">
                    <Button>Primary action</Button>
                    <Button variant="outline">Secondary</Button>
                  </Flex>
                </Flex>
              </Box>

              <Box className="home-hero__preview-panel">
                <Flex align="center" justify="space-between">
                  <Text size="small">Controls</Text>
                  <Icon name="settings" size={16} />
                </Flex>
                <Box className="home-hero__preview-field" />
                <Box className="home-hero__preview-field home-hero__preview-field--short" />
                <Box className="home-hero__preview-field" />
              </Box>
            </Box>
          </Box>
        </Box>
      ) : null}

      {route === 'home-installation' ? <InstallationSection /> : null}
      {route === 'home-usage' ? <UsageSection /> : null}
      {route === 'home-overview' ? <OverviewSection /> : null}
    </Box>
  );
}
