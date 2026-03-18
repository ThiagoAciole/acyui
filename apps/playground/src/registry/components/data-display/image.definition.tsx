import * as Labs from 'acioleui';
import { wrapSnippet } from '../../../shared/playground/playground-helpers';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

type ImagePlaygroundProps = {
  src: string;
  alt: string;
  objectFit: Labs.ImageObjectFit;
  radius: Labs.ImageRadius;
};

const imageDefinition: ComponentDefinition<ImagePlaygroundProps> = defineComponent<ImagePlaygroundProps>({
  id: 'image',
  name: 'Image',
  category: 'data-display',
  icon: 'image',
  description: 'Renderizacao de imagens com estilos padronizados.',
  playground: {
    initialProps: {
      src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe',
      alt: 'Exemplo',
      objectFit: 'cover',
      radius: 'medium',
    },
    controls: [
      { type: 'text', name: 'src', label: 'Src', placeholder: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe' },
      { type: 'text', name: 'alt', label: 'Alt', placeholder: 'Exemplo' },
      { type: 'select', name: 'objectFit', label: 'Object fit', options: [{ label: 'Cover', value: 'cover' }, { label: 'Contain', value: 'contain' }, { label: 'Fill', value: 'fill' }, { label: 'None', value: 'none' }, { label: 'ScaleDown', value: 'scaleDown' }] },
      { type: 'select', name: 'radius', label: 'Radius', options: [{ label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }, { label: 'Full', value: 'full' }] },
    ],
    render: (props) => <Labs.Image {...props} style={{ width: '50%' }} />,
    code: (props) => wrapSnippet(['Box', 'Image'], [
      `      <Image src="${props.src}" alt="${props.alt}" objectFit="${props.objectFit}" radius="${props.radius}" />`,
    ]),
  },
});

export default imageDefinition;
