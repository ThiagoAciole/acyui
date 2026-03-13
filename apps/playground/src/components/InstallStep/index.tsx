import { Box, Heading3, Text } from '@aciole/acyon';
import { CodePanel } from '../CodePanel';
import './styles.css';

interface InstallStepProps {
  step: number;
  title: string;
  description: React.ReactNode;
  code?: string;
}

export function InstallStep({ step, title, description, code }: InstallStepProps) {
  return (
    <Box className="home-install-step">
      <Box className="home-install-step__marker">{step}</Box>
      <Box className="home-install-step__content">
        <Heading3>{title}</Heading3>
        <Text color="neutral">{description}</Text>
        {code ? <CodePanel code={code} /> : null}
      </Box>
    </Box>
  );
}
