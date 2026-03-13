import { Flex, Icon, IconButton, Text } from '@aciole/acyon';
import type { PlaygroundControl } from '../../../registry/types';
import { ControlField } from './control-field';

interface PlaygroundControlsProps {
  controls: PlaygroundControl[];
  propsState: Record<string, unknown>;
  onChange: (name: string, value: unknown) => void;
  onReset: () => void;
}

export function PlaygroundControls({
  controls,
  propsState,
  onChange,
  onReset,
}: PlaygroundControlsProps) {
  return (
    <aside className="component-playground__panel">
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
    </aside>
  );
}
