import { Box, Flex, Grid, Icon, List, PageHeader, Text } from '@aciole/acyon';
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
        <List variant="checklist">
          {overview.benefits.items.map((item) => (
            <List.Item key={item.title} description={item.description}>
              {item.title}
            </List.Item>
          ))}
        </List>
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
