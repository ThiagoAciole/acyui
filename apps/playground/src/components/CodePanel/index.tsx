import { Box, Text } from 'acyon';
import './styles.css';

interface CodePanelProps {
  code: string;
  language?: string;
}

export function CodePanel({ code, language }: CodePanelProps) {
  return (
    <Box className="home-code-panel">
      {language ? (
        <Text size="xs" className="home-code-panel__language">
          {language}
        </Text>
      ) : null}
      <pre className="home-code-panel__block">
        <code>{code}</code>
      </pre>
    </Box>
  );
}
