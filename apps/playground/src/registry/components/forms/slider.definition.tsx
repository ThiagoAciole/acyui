import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';
import { buildOpeningTag, SliderPreview, wrapSnippet } from '../../../shared/playground/playground-helpers';

type SliderPlaygroundProps = { label: string; supportText: string; min: string; max: string; value: string };

const initialProps: SliderPlaygroundProps = {
  label: 'Volume',
  supportText: 'Ajuste o valor',
  min: '0',
  max: '100',
  value: '40',
};

const sliderDefinition: ComponentDefinition<SliderPlaygroundProps> = defineComponent({
  id: 'slider',
  name: 'Slider',
  category: 'forms',
  icon: 'sliders-horizontal',
  description: 'Controle de faixa numerica.',
  playground: {
    initialProps,
    controls: [
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Volume' },
      { type: 'text', name: 'supportText', label: 'Support text', placeholder: 'Ajuste o valor' },
      { type: 'text', name: 'min', label: 'Min', placeholder: '0' },
      { type: 'text', name: 'max', label: 'Max', placeholder: '100' },
      { type: 'text', name: 'value', label: 'Value', placeholder: '40' },
    ],
    render: (props) => <SliderPreview {...props} />,
    code: (props) => wrapSnippet(['Slider'], [
      'return (',
      `  ${buildOpeningTag('Slider', { label: props.label, supportText: props.supportText, min: Number(props.min), max: Number(props.max), value: Number(props.value) })} />`,
      ');',
    ]),
  },
});

export default sliderDefinition;
