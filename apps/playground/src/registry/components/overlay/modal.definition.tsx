import { ModalPreview } from '../../../shared/playground/playground-helpers';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

type ModalPlaygroundProps = {
  title: string;
  description: string;
  body: string;
  confirmLabel: string;
  size: 'small' | 'medium' | 'large' | 'extraLarge';
  closeOnOverlayClick: boolean;
};

const modalDefinition: ComponentDefinition<ModalPlaygroundProps> = defineComponent<ModalPlaygroundProps>({
  id: 'modal',
  name: 'Modal',
  category: 'overlay',
  icon: 'app-window',
  description: 'Dialogo modal para acoes focadas.',
  playground: {
    initialProps: {
      title: 'Confirmar acao',
      description: 'Revise os detalhes antes de continuar.',
      body: 'Este modal usa o componente real da biblioteca.',
      confirmLabel: 'Confirmar',
      size: 'medium',
      closeOnOverlayClick: true,
    },
    controls: [
      { type: 'text', name: 'title', label: 'Title', placeholder: 'Confirmar acao' },
      { type: 'textarea', name: 'description', label: 'Description', placeholder: 'Revise os detalhes antes de continuar.' },
      { type: 'textarea', name: 'body', label: 'Body', placeholder: 'Conteudo do modal' },
      { type: 'text', name: 'confirmLabel', label: 'Confirm label', placeholder: 'Confirmar' },
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }, { label: 'ExtraLarge', value: 'extraLarge' }] },
      { type: 'boolean', name: 'closeOnOverlayClick', label: 'Close on overlay click' },
    ],
    render: (props) => <ModalPreview {...props} />,
    code: (props) => `import { useState } from 'react';
import { Button, Flex, Modal, Text } from '@aciole/acyon';

export function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Abrir modal</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="${props.title}"
        description="${props.description}"
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
      </Modal>
    </>
  );
}`,
  },
});

export default modalDefinition;
