import * as Labs from '@aciole/acyon';
import imageAsset from '../../assets/image.jpg';
import { wrapSnippet } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type ImagePlaygroundProps = {
  src: string;
  alt: string;
  objectFit: Labs.ImageObjectFit;
  radius: Labs.ImageRadius;
};

export const imageDefinition = {
  id: 'image',
  name: 'Image',
  category: 'data-display',
  icon: 'image',
  description: 'Renderizacao de imagens com estilos padronizados.',
  imports: ['Box', 'Image'],
  initialProps: { src: imageAsset, alt: 'Exemplo', objectFit: 'cover', radius: 'medium' },
  controls: [
    { type: 'text', name: 'src', label: 'Src', placeholder: imageAsset },
    { type: 'text', name: 'alt', label: 'Alt', placeholder: 'Exemplo' },
    { type: 'select', name: 'objectFit', label: 'Object fit', options: [{ label: 'Cover', value: 'cover' }, { label: 'Contain', value: 'contain' }, { label: 'Fill', value: 'fill' }, { label: 'None', value: 'none' }, { label: 'ScaleDown', value: 'scaleDown' }] },
    { type: 'select', name: 'radius', label: 'Radius', options: [{ label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }, { label: 'Full', value: 'full' }] },
  ],
  render: (props: ImagePlaygroundProps) => (
    <Labs.Image {...props} style={{ width: '50%' }} />
  ),
  generateCode: (props) => wrapSnippet(['Box', 'Image'], [
    `      <Image src="${props.src}" alt="${props.alt}" objectFit="${props.objectFit}" radius="${props.radius}" />`,

  ]),

} satisfies ComponentDefinition<ImagePlaygroundProps>;
