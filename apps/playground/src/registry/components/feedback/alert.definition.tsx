import * as Labs from 'acioleui';
import { wrapSnippet } from '../../../shared/playground/playground-helpers';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

type AlertPlaygroundProps = Pick<Labs.AlertProps, 'variant' | 'title'> & {
  content: string;
  actionLabel: string;
};

const alertDefinition: ComponentDefinition<AlertPlaygroundProps> = defineComponent<AlertPlaygroundProps>({
  id: 'alert',
  name: 'Alert',
  category: 'feedback',
  icon: 'alert-triangle',
  description: 'Mensagens contextuais para destaque de estados e informacoes.',
  playground: {
    initialProps: {
      variant: 'warning',
      title: 'Atencao',
      content: 'Verifique os dados antes de continuar.',
      actionLabel: 'Revisar',
    },
    controls: [
      { type: 'select', name: 'variant', label: 'Variant', options: [{ label: 'Primary', value: 'primary' }, { label: 'Neutral', value: 'neutral' }, { label: 'Success', value: 'success' }, { label: 'Warning', value: 'warning' }, { label: 'Error', value: 'error' }] },
      { type: 'text', name: 'title', label: 'Title', placeholder: 'Atencao' },
      { type: 'textarea', name: 'content', label: 'Content', placeholder: 'Verifique os dados antes de continuar.' },
      { type: 'text', name: 'actionLabel', label: 'Action label', placeholder: 'Revisar' },
    ],
    render: (props) => (
      <Labs.Alert
        variant={props.variant}
        title={props.title}
        action={props.actionLabel ? <Labs.Button size="small" variant="ghost" color={props.variant}>{props.actionLabel}</Labs.Button> : undefined}
      >
        {props.content}
      </Labs.Alert>
    ),
    code: (props) => wrapSnippet(['Alert', 'Button'], [
      'return (',
      '  <Alert',
      `    variant="${props.variant}"`,
      `    title="${props.title}"`,
      props.actionLabel ? `    action={<Button size="small" variant="ghost" color="${props.variant}">${props.actionLabel}</Button>}` : undefined,
      '  >',
      `    ${props.content}`,
      '  </Alert>',
      ');',
    ].filter(Boolean) as string[]),
  },
});

export default alertDefinition;
