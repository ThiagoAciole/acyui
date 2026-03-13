import type * as React from 'react';
import { Box, Code, Text } from '@aciole/acyon';

interface PlaygroundPreviewProps {
  element: React.ReactNode;
  error: string | null;
}

export function PlaygroundPreview({ element, error }: PlaygroundPreviewProps) {
  return (
    <Box className="live-preview-shell">
      <div className="live-preview-shell__label">Live Preview</div>
      <div className="live-preview-shell__stage">
        {error ? (
          <Box className="live-preview-error">
            <Text weight="bold">Erro ao renderizar</Text>
            <Code>{error}</Code>
          </Box>
        ) : (
          element
        )}
      </div>
    </Box>
  );
}
