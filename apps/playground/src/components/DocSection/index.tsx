import { Box, Flex, Heading2, Icon } from '@aciole/acyon';
import './styles.css';

interface DocSectionProps {
  title: string;
  children: React.ReactNode;
}

export function DocSection({ title, children }: DocSectionProps) {
  return (
    <Box className="home-doc-section">
      <Flex align="center" justify="space-between" className="home-doc-section__header">
        <Heading2>{title}</Heading2>
        <Icon name="component" size={14} color="var(--text-subtle)" />
      </Flex>
      <Box className="home-doc-section__body">{children}</Box>
    </Box>
  );
}
