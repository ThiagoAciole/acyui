import * as Labs from 'acioleui';
import { buildOpeningTag, wrapSnippet } from '../../../shared/playground/playground-helpers';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

type AvatarPlaygroundProps = Pick<Labs.AvatarProps, 'name' | 'src' | 'size' | 'status'>;

const avatarDefinition: ComponentDefinition<AvatarPlaygroundProps> = defineComponent<AvatarPlaygroundProps>({
  id: 'avatar',
  name: 'Avatar',
  category: 'data-display',
  icon: 'user-circle',
  description: 'Representacao visual de pessoas e entidades.',
  playground: {
    initialProps: {
      name: 'Thiago Aciole',
      src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      size: 'medium',
      status: 'online',
    },
    controls: [
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'ExtraSmall', value: 'extraSmall' }, { label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }, { label: 'ExtraLarge', value: 'extraLarge' }] },
      { type: 'select', name: 'status', label: 'Status', options: [{ label: 'Online', value: 'online' }, { label: 'Offline', value: 'offline' }, { label: 'Away', value: 'away' }, { label: 'Busy', value: 'busy' }] },
      { type: 'text', name: 'name', label: 'Name', placeholder: 'Thiago Aciole' },
      { type: 'text', name: 'src', label: 'Src', placeholder: 'https://...' },
    ],
    render: (props) => <Labs.Avatar {...props} />,
    code: (props) => wrapSnippet(['Avatar'], [
      'return (',
      `  ${buildOpeningTag('Avatar', props as Record<string, unknown>)} />`,
      ');',
    ]),
  },
});

export default avatarDefinition;
