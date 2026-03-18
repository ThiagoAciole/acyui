import { Flex, Icon, IconButton, Text, useToast } from 'acioleui';
import type { PlaygroundControl } from '../../../registry/types';
import { ControlField } from './control-field';
import { PlaygroundCode } from './playground-code';

interface PlaygroundControlsProps {
  code: string;
  controls: PlaygroundControl[];
  name: string;
  propsState: Record<string, unknown>;
  onChange: (name: string, value: unknown) => void;
  onReset: () => void;
}

export function PlaygroundControls({
  code,
  controls,
  propsState,
  name,
  onChange,
  onReset,
}: PlaygroundControlsProps) {
  const { toast } = useToast();

  const handleCopySource = async () => {
    const snippetOnly = code
      .replace(/^(?:import[\s\S]*?from\s+['"][^'"]+['"];\s*)+/m, '')
      .trim();

    await navigator.clipboard?.writeText(snippetOnly || code);

    toast({
      title: 'Codigo copiado',
      description: `O componente ${name} foi copiado.`,
      color: 'success',
    });
  };

  return (
    <div className="component-playground__panel-content">
      <section className="component-playground__panel-section component-playground__panel-section--properties">
        <div className="component-playground__panel-header">
          <Flex align="center" gap="2">
            <Icon name="settings" size={16} />
            <Text as="span" size="small" weight="bold">Properties</Text>
          </Flex>

          <IconButton
            aria-label="Resetar propriedades"
            icon={<Icon name="refresh" size={16} />}
            onClick={onReset}
            variant="ghost"
            size="small"
          />
        </div>

        <div className="component-playground__panel-body">
          {controls.length > 0 ? (
            controls.map((control) => (
              <ControlField
                key={control.name}
                control={control}
                value={propsState[control.name]}
                onChange={(value) => onChange(control.name, value)}
              />
            ))
          ) : (
            <div className="component-playground__empty">
              <Text weight="semibold">Sem propriedades configuradas</Text>
              <Text size="small" color="neutral">
                Este componente ainda nao possui controles para o playground.
              </Text>
            </div>
          )}
        </div>
      </section>

      <section className="component-playground__panel-section component-playground__panel-section--source">
        <div className="component-playground__panel-header">
          <Flex align="center" gap="2">
            <Icon name="code" size={16} />
            <Text as="span" size="small" weight="bold">Source</Text>
          </Flex>

          <IconButton
            aria-label="Copiar source"
            icon={<Icon name="copy" size={16} />}
            onClick={() => { void handleCopySource(); }}
            variant="ghost"
            size="small"
          />
        </div>

        <div className="component-playground__panel-body">
          <PlaygroundCode code={code} compact />
        </div>
      </section>
    </div>
  );
}
