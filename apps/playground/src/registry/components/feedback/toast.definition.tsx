import { ToastPreview } from '../../../shared/playground/playground-helpers';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

type ToastPlaygroundProps = {
  title: string;
  description: string;
  color: 'primary' | 'neutral' | 'success' | 'warning' | 'error';
  actionLabel: string;
};

const toastDefinition: ComponentDefinition<ToastPlaygroundProps> = defineComponent<ToastPlaygroundProps>({
  id: 'toast',
  name: 'Toast',
  category: 'feedback',
  icon: 'message-square',
  description: 'Sistema de feedback efemero consumido via useToast e disponibilizado pelo ThemeProvider.',
  playground: {
    initialProps: {
      title: 'Salvo com sucesso',
      description: 'Alteracao aplicada no playground.',
      color: 'success',
      actionLabel: 'Disparar toast',
    },
    controls: [
      { type: 'text', name: 'title', label: 'Title', placeholder: 'Salvo com sucesso' },
      { type: 'textarea', name: 'description', label: 'Description', placeholder: 'Alteracao aplicada no playground.' },
      { type: 'select', name: 'color', label: 'Color', options: [{ label: 'Primary', value: 'primary' }, { label: 'Neutral', value: 'neutral' }, { label: 'Success', value: 'success' }, { label: 'Warning', value: 'warning' }, { label: 'Error', value: 'error' }] },
      { type: 'text', name: 'actionLabel', label: 'Button label', placeholder: 'Disparar toast' },
    ],
    render: (props) => <ToastPreview {...props} />,
    code: (props) => `import { Button, useToast } from 'acioleui';

function ToastDemo() {
  const { toast } = useToast();

  return (
    <Button
      onClick={() =>
        toast({
          title: "${props.title}",
${props.description ? `          description: "${props.description}",\n` : ''}          color: "${props.color}",
        })
      }
    >
      ${props.actionLabel}
    </Button>
  );
}

export default function Example() {
  return <ToastDemo />;
}`,
  },
});

export default toastDefinition;
