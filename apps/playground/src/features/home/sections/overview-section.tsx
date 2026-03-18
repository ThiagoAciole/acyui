import { Badge, Box, Card, CardBody, Flex, Grid, Icon, PageHeader, Text } from 'acioleui';
import { DocSection } from '../../../components/DocSection';
import { QuickStartCard } from '../../../components/QuickStartCard';
import { homeContent } from '../content';

export function OverviewSection() {
  const { overview } = homeContent;

  return (
    <>
      <PageHeader
        title={overview.header.title}
        description={overview.header.description}
        width="84%"
      />

      <DocSection title={overview.introduction.title}>
        <Flex direction="column" gap="4">
          {overview.introduction.paragraphs.map((paragraph) => (
            <Text key={paragraph}>{paragraph}</Text>
          ))}
          <Box className="home-overview-section__callout">
            <Flex align="flex-start" gap="3">
              <Icon name="info" size={16} />
              <Text size="small">{overview.introduction.callout}</Text>
            </Flex>
          </Box>
        </Flex>
      </DocSection>

      <DocSection title={overview.benefits.title}>
        <Grid columns={2} gap="4" className="home-overview-section__benefits-grid">
          {overview.benefits.items.map((item) => (
            <Card key={item.title} className="home-overview-section__benefit-card">
              <CardBody>
                <Flex direction="column" gap="3">
                  <Badge>{item.kicker}</Badge>
                  <Flex direction="column" gap="2">
                    <Text weight="semibold">{item.title}</Text>
                    <Text size="small" color="neutral">{item.description}</Text>
                  </Flex>
                </Flex>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </DocSection>

      <DocSection title={overview.quickStart.title}>
        <Text color="neutral">{overview.quickStart.description}</Text>
        <Grid columns={2} gap="4" className="home-overview-section__quickstart-grid">
          {overview.quickStart.links.map((link) => (
            <QuickStartCard
              key={link.href}
              href={link.href}
              icon={link.icon}
              title={link.title}
              description={link.description}
            />
          ))}
        </Grid>
      </DocSection>
    </>
  );
}
