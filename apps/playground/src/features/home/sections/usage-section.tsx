import { Accordion, Box, Code, Flex, Link, PageHeader, Text } from 'acioleui';
import { CodePanel } from '../../../components/CodePanel';
import { DocSection } from '../../../components/DocSection';
import { homeContent } from '../content';

export function UsageSection() {
  const { usage } = homeContent;

  return (
    <>
      <PageHeader
        title={usage.header.title}
        description={usage.header.description}
        width="84%"
      />

      <Box className="home-usage-section__intro">
        <Text color="neutral">
          A experiencia ideal aqui e iterativa: abra um componente, teste props no playground, compare o codigo gerado e depois leve a composicao para a aplicacao real.
        </Text>
      </Box>

      <DocSection title={usage.quickStart.title}>
        <Flex direction="column" gap="4">
          <Text>
            Depois da <Link href="/home-installation">instalacao</Link>, {usage.quickStart.paragraphs[0].replace('Depois da instalacao, ', '')}
          </Text>
          <CodePanel
            language="tsx"
            code={usage.quickStart.snippet}
          />
        </Flex>
      </DocSection>

      <DocSection title={usage.globals.title}>
        <Flex direction="column" gap="4">
          {usage.globals.paragraphs.map((paragraph) => (
            <Text key={paragraph}>{paragraph}</Text>
          ))}
        </Flex>
      </DocSection>

      <DocSection title={usage.bestPractices.title}>
        <Accordion>
          {usage.bestPractices.items.map((item) => (
            <Accordion.Item key={item.title} title={item.title}>
              {item.content.split('<Code>').map((part, index) => {
                if (index === 0) return part;
                const [codeText, rest] = part.split('</Code>');
                return (
                  <span key={`${item.title}-${index}`}>
                    <Code>{codeText}</Code>
                    {rest}
                  </span>
                );
              })}
            </Accordion.Item>
          ))}
        </Accordion>
      </DocSection>
    </>
  );
}
