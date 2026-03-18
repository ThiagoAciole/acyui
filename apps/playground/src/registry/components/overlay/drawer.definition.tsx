import { DrawerPreview } from '../../../shared/playground/playground-helpers';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

type DrawerPlaygroundProps = {
  title: string;
  body: string;
  confirmLabel: string;
  size: 'small' | 'medium' | 'large' | 'full';
  placement: 'left' | 'right';
  closeOnOverlayClick: boolean;
};

const drawerDefinition: ComponentDefinition<DrawerPlaygroundProps> = defineComponent<DrawerPlaygroundProps>({
  id: 'drawer',
  name: 'Drawer',
  category: 'overlay',
  icon: 'panel-left',
  description: 'Painel deslizante para fluxos secundarios.',
  playground: {
    initialProps: {
      title: 'Filtros',
      body: 'Use este painel para organizar um fluxo secundario sem sair da pagina.',
      confirmLabel: 'Aplicar',
      size: 'medium',
      placement: 'right',
      closeOnOverlayClick: true,
    },
    controls: [
      { type: 'text', name: 'title', label: 'Title', placeholder: 'Filtros' },
      { type: 'textarea', name: 'body', label: 'Body', placeholder: 'Conteudo do drawer' },
      { type: 'text', name: 'confirmLabel', label: 'Confirm label', placeholder: 'Aplicar' },
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }, { label: 'Full', value: 'full' }] },
      { type: 'select', name: 'placement', label: 'Placement', options: [{ label: 'Left', value: 'left' }, { label: 'Right', value: 'right' }] },
      { type: 'boolean', name: 'closeOnOverlayClick', label: 'Close on overlay click' },
    ],
    render: (props) => <DrawerPreview {...props} />,
    code: (props) => `import { useState } from 'react';
import { Button, Drawer, Flex, Text } from 'acioleui';

export function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Abrir drawer</Button>
      <Drawer
        isOpen={open}
        onClose={() => setOpen(false)}
        title="${props.title}"
        placement="${props.placement}"
        size="${props.size}"
        closeOnOverlayClick={${Boolean(props.closeOnOverlayClick)}}
        footer={(
          <Flex justify="flex-end" gap="2">
            <Button variant="ghost" onClick={() => setOpen(false)}>Cancelar</Button>
            <Button onClick={() => setOpen(false)}>${props.confirmLabel}</Button>
          </Flex>
        )}
      >
        <Text>${props.body}</Text>
      </Drawer>
    </>
  );
}`,
  },
});

export default drawerDefinition;
