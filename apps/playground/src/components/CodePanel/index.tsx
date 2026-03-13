import { Box, Icon, IconButton, Text, useToast } from '@aciole/acyon';
import './styles.css';

interface CodePanelProps {
  code: string;
  language?: string;
}

export function CodePanel({ code, language }: CodePanelProps) {
  const { toast } = useToast();

  const handleCopy = async () => {
    await navigator.clipboard?.writeText(code);

    toast({
      title: 'Codigo copiado',
      description: 'O trecho foi copiado para a area de transferencia.',
      color: 'success',
    });
  };

  return (
    <Box className="home-code-panel">
      <Box className="home-code-panel__actions">
        <IconButton
          aria-label="Copiar codigo"
          icon={<Icon name="copy" size={16} />}
          onClick={() => { void handleCopy(); }}
          variant="ghost"
          size="small"
          style={{ color: '#e5eefc' }}
        />
      </Box>
      {language ? (
        <Text size="extraSmall" className="home-code-panel__language">
          {language}
        </Text>
      ) : null}
      <pre className="home-code-panel__block">
        <code>{code}</code>
      </pre>
    </Box>
  );
}
