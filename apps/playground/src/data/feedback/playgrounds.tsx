import * as Labs from '@aciole/acyon';
import { buildOpeningTag, normalizeDimension, ToastPreview, wrapSnippet } from '../playgroundShared';
import type { PlaygroundConfig, PlaygroundConfigMap } from '../types';

type AlertPlaygroundProps = Pick<Labs.AlertProps, 'variant' | 'title'> & { content: string; actionLabel: string };
type LoaderPlaygroundProps = Pick<Labs.LoaderProps, 'size' | 'label'> & { color: 'primary' | 'neutral' | 'success' | 'warning' | 'error' };
type SkeletonPlaygroundProps = { width: string; height: string; circle: boolean; animated: boolean };
type ProgressPlaygroundProps = Pick<Labs.ProgressProps, 'value' | 'size' | 'animated' | 'showValue' | 'label'> & { color: 'primary' | 'neutral' | 'success' | 'warning' | 'error' };
type ToastPlaygroundProps = { title: string; description: string; color: 'primary' | 'neutral' | 'success' | 'warning' | 'error'; actionLabel: string };

export const feedbackPlaygrounds: PlaygroundConfigMap = {

  alert: {
    imports: ['Alert', 'Button'],
    initialProps: { variant: 'warning', title: 'Atenção', content: 'Verifique os dados antes de continuar.', actionLabel: 'Revisar' },
    controls: [
      { type: 'select', name: 'variant', label: 'Variant', options: [{ label: 'Primary', value: 'primary' }, { label: 'Neutral', value: 'neutral' }, { label: 'Success', value: 'success' }, { label: 'Warning', value: 'warning' }, { label: 'Error', value: 'error' }] },
      { type: 'text', name: 'title', label: 'Title', placeholder: 'Atenção' },
      { type: 'textarea', name: 'content', label: 'Content', placeholder: 'Verifique os dados antes de continuar.' },
      { type: 'text', name: 'actionLabel', label: 'Action label', placeholder: 'Revisar' },
    ],
    render: (props: AlertPlaygroundProps) => (
      <Labs.Alert
        variant={props.variant}
        title={props.title}
        action={props.actionLabel ? <Labs.Button size="small" variant="ghost" color={props.variant}>{props.actionLabel}</Labs.Button> : undefined}
      >
        {props.content}
      </Labs.Alert>
    ),
    generateCode: (props) => wrapSnippet(['Alert', 'Button'], [
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
  } satisfies PlaygroundConfig<AlertPlaygroundProps>,

  loader: {
    imports: ['Loader'],
    initialProps: { size: 'medium', color: 'primary', label: 'Carregando dados' },
    controls: [
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'ExtraSmall', value: 'extraSmall' }, { label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }] },
      { type: 'select', name: 'color', label: 'Color', options: [{ label: 'Primary', value: 'primary' }, { label: 'Neutral', value: 'neutral' }, { label: 'Success', value: 'success' }, { label: 'Warning', value: 'warning' }, { label: 'Error', value: 'error' }] },
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Carregando dados' },
    ],
    render: (props: LoaderPlaygroundProps) => <Labs.Loader size={props.size} color={props.color} label={props.label} />,
    generateCode: (props) => wrapSnippet(['Loader'], [
      'return (',
      `  ${buildOpeningTag('Loader', props as Record<string, unknown>)} />`,
      ');',
    ]),
  } satisfies PlaygroundConfig<LoaderPlaygroundProps>,

  progress: {
    imports: ['Progress'],
    initialProps: { value: 64, size: 'medium', animated: false, showValue: true, label: 'Progresso', color: 'primary' },
    controls: [
      { type: 'text', name: 'value', label: 'Value', placeholder: '64' },
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }] },
      { type: 'select', name: 'color', label: 'Color', options: [{ label: 'Primary', value: 'primary' }, { label: 'Neutral', value: 'neutral' }, { label: 'Success', value: 'success' }, { label: 'Warning', value: 'warning' }, { label: 'Error', value: 'error' }] },
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Progresso' },
      { type: 'boolean', name: 'animated', label: 'Animated' },
      { type: 'boolean', name: 'showValue', label: 'Show value' },
    ],
    render: (props: ProgressPlaygroundProps) => <Labs.Progress value={Number(props.value)} size={props.size} animated={Boolean(props.animated)} showValue={Boolean(props.showValue)} label={props.label} color={props.color} />,
    generateCode: (props) => wrapSnippet(['Progress'], [
      'return (',
      `  ${buildOpeningTag('Progress', { value: Number(props.value), size: props.size, animated: props.animated, showValue: props.showValue, label: props.label, color: props.color })} />`,
      ');',
    ]),
  } satisfies PlaygroundConfig<ProgressPlaygroundProps>,

  skeleton: {
    imports: ['Skeleton'],
    initialProps: { width: '100%', height: '50px', circle: false, animated: true },
    controls: [
      { type: 'text', name: 'width', label: 'Width', placeholder: '100%' },
      { type: 'text', name: 'height', label: 'Height', placeholder: '50' },
      { type: 'boolean', name: 'circle', label: 'Circle' },
      { type: 'boolean', name: 'animated', label: 'Animated' },
    ],
    render: (props: SkeletonPlaygroundProps) => (
      <div style={{ width: 320, padding: '8px 0', display: 'flex', gap: '8px' }}>
        <Labs.Skeleton
          width={normalizeDimension(props.width)}
          height={props.circle ? normalizeDimension(props.width) : normalizeDimension(props.height)}
          circle={Boolean(props.circle)}
          animated={Boolean(props.animated)}
        />
        <Labs.Skeleton
          width={normalizeDimension(props.width)}
          height={props.circle ? normalizeDimension(props.width) : normalizeDimension(props.height)}
          circle={Boolean(props.circle)}
          animated={Boolean(props.animated)}
        />
      </div>
    ),
    generateCode: (props) => wrapSnippet(['Skeleton'], [
      'return (',
      `  ${buildOpeningTag('Skeleton', { width: normalizeDimension(props.width), height: props.circle ? undefined : normalizeDimension(props.height), circle: props.circle, animated: props.animated })} />`,
      ');',
    ]),
  } satisfies PlaygroundConfig<SkeletonPlaygroundProps>,

  toast: {
    imports: ['Button', 'useToast'],
    initialProps: { title: 'Salvo com sucesso', description: 'Alteracao aplicada no playground.', color: 'success', actionLabel: 'Disparar toast' },
    controls: [
      { type: 'text', name: 'title', label: 'Title', placeholder: 'Salvo com sucesso' },
      { type: 'textarea', name: 'description', label: 'Description', placeholder: 'Alteracao aplicada no playground.' },
      { type: 'select', name: 'color', label: 'Color', options: [{ label: 'Primary', value: 'primary' }, { label: 'Neutral', value: 'neutral' }, { label: 'Success', value: 'success' }, { label: 'Warning', value: 'warning' }, { label: 'Error', value: 'error' }] },
      { type: 'text', name: 'actionLabel', label: 'Button label', placeholder: 'Disparar toast' },
    ],
    render: (props: ToastPlaygroundProps) => <ToastPreview {...props} />,
    generateCode: (props) => `import { Button, useToast } from '@aciole/acyon';

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

return <ToastDemo />;`,
  } satisfies PlaygroundConfig<ToastPlaygroundProps>,
};
