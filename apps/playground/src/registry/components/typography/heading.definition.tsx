import * as Labs from 'acioleui';
import * as React from 'react';
import { wrapSnippet } from '../../../shared/playground/playground-helpers';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

type HeadingLevel = 'Heading' | 'Heading2' | 'Heading3' | 'Heading4' | 'Heading5' | 'Heading6';

type HeadingPlaygroundProps = {
  level: HeadingLevel;
  weight?: Labs.HeadingWeight;
  children: string;
};

const headingDefinition: ComponentDefinition<HeadingPlaygroundProps> = defineComponent<HeadingPlaygroundProps>({
  id: 'heading',
  name: 'Heading',
  category: 'typography',
  icon: 'heading1',
  description: 'Titulos com escala tipografica consistente.',
  playground: {
    initialProps: {
      level: 'Heading',
      weight: 'bold',
      children: 'Titulo de exemplo',
    },
    controls: [
      {
        type: 'select',
        name: 'level',
        label: 'Component',
        options: [
          { label: 'Heading', value: 'Heading' },
          { label: 'Heading2', value: 'Heading2' },
          { label: 'Heading3', value: 'Heading3' },
          { label: 'Heading4', value: 'Heading4' },
          { label: 'Heading5', value: 'Heading5' },
          { label: 'Heading6', value: 'Heading6' },
        ],
      },
      {
        type: 'select',
        name: 'weight',
        label: 'Weight',
        options: [
          { label: 'Medium', value: 'medium' },
          { label: 'Semibold', value: 'semibold' },
          { label: 'Bold', value: 'bold' },
        ],
      },
      { type: 'text', name: 'children', label: 'Text', placeholder: 'Titulo de exemplo' },
    ],
    render: (props) => {
      const Component = ((Labs as unknown) as Record<string, React.ElementType>)[String(props.level)] ?? Labs.Heading;
      return <Component weight={props.weight}>{String(props.children ?? '')}</Component>;
    },
    code: (props) => wrapSnippet([String(props.level ?? 'Heading')], [
      'return (',
      `  <${props.level} weight="${props.weight}">${props.children}</${props.level}>`,
      ');',
    ]),
  },
});

export default headingDefinition;
