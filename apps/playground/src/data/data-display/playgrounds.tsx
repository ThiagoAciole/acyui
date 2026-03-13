import * as Labs from '@aciole/acyon';
import { buildOpeningTag, wrapSnippet } from '../playgroundShared';
import type { PlaygroundConfig, PlaygroundConfigMap } from '../types';

type AvatarPlaygroundProps = Pick<Labs.AvatarProps, 'name' | 'src' | 'size' | 'status'>;
type BadgePlaygroundProps = Pick<Labs.BadgeProps, 'variant' | 'color' | 'size'> & { children: string };
type TagPlaygroundProps = Pick<Labs.TagProps, 'variant' | 'color' | 'size' | 'closable'> & { children: string };
type EmptyStatePlaygroundProps = { title: string; description: string; actionLabel: string };
type AccordionPlaygroundProps = { type: 'single' | 'multiple'; defaultValue: 'item-1' | 'item-2'; firstTitle: string; secondTitle: string };
type CardPlaygroundProps = { title: string; description: string; content: string; variant: 'default' | 'outlined'; padding: 'sm' | 'md' | 'lg' };
type ImagePlaygroundProps = { src: string; alt: string; objectFit: 'cover' | 'contain' | 'fill'; radius: 'none' | 'sm' | 'md' | 'lg' | 'full' };
type ListPlaygroundProps = { variant: 'default' | 'divided' | 'checklist'; activeItem: 'none' | 'first' | 'second' };
type TablePlaygroundProps = { striped: boolean; hover: boolean; compact: boolean; stickyHeader: boolean };
type TimelinePlaygroundProps = { firstTitle: string; secondTitle: string; thirdTitle: string };

export const dataDisplayPlaygrounds: PlaygroundConfigMap = {

  accordion: {
    imports: ['Accordion'],
    initialProps: { type: 'single', defaultValue: 'item-1', firstTitle: 'Primeiro item', secondTitle: 'Segundo item' },
    controls: [
      { type: 'select', name: 'type', label: 'Type', options: [{ label: 'Single', value: 'single' }, { label: 'Multiple', value: 'multiple' }] },
      { type: 'select', name: 'defaultValue', label: 'Default open', options: [{ label: 'Item 1', value: 'item-1' }, { label: 'Item 2', value: 'item-2' }] },
      { type: 'text', name: 'firstTitle', label: 'First title', placeholder: 'Primeiro item' },
      { type: 'text', name: 'secondTitle', label: 'Second title', placeholder: 'Segundo item' },
    ],
    render: (props: AccordionPlaygroundProps) => (
      <Labs.Accordion type={props.type} defaultValue={props.defaultValue}>
        <Labs.Accordion.Item id="item-1" title={props.firstTitle}>Conteudo do primeiro item.</Labs.Accordion.Item>
        <Labs.Accordion.Item id="item-2" title={props.secondTitle}>Conteudo do segundo item.</Labs.Accordion.Item>
      </Labs.Accordion>
    ),
    generateCode: (props) => wrapSnippet(['Accordion'], [
      'return (',
      `  <Accordion type="${props.type}" defaultValue="${props.defaultValue}">`,
      `    <Accordion.Item id="item-1" title="${props.firstTitle}">Conteudo do primeiro item.</Accordion.Item>`,
      `    <Accordion.Item id="item-2" title="${props.secondTitle}">Conteudo do segundo item.</Accordion.Item>`,
      '  </Accordion>',
      ');',
    ]),
  } satisfies PlaygroundConfig<AccordionPlaygroundProps>,

  avatar: {
    imports: ['Avatar'],
    initialProps: {
      name: 'Thiago Aciole',
      src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      size: 'medium',
      status: 'online',
    },
    controls: [
      {
        type: 'select', name: 'size', label: 'Size', options: [
          { label: 'ExtraSmall', value: 'extraSmall' },
          { label: 'Small', value: 'small' },
          { label: 'Medium', value: 'medium' },
          { label: 'Large', value: 'large' },
          { label: 'ExtraLarge', value: 'extraLarge' },
        ]
      },
      {
        type: 'select', name: 'status', label: 'Status', options: [
          { label: 'Online', value: 'online' },
          { label: 'Offline', value: 'offline' },
          { label: 'Away', value: 'away' },
          { label: 'Busy', value: 'busy' },
        ]
      },
      { type: 'text', name: 'name', label: 'Name', placeholder: 'Thiago Aciole' },
      { type: 'text', name: 'src', label: 'Src', placeholder: 'https://...' },
    ],
    render: (props: AvatarPlaygroundProps) => <Labs.Avatar {...props} />,
    generateCode: (props) => wrapSnippet(['Avatar'], [
      'return (',
      `  ${buildOpeningTag('Avatar', props as Record<string, unknown>)} />`,
      ');',
    ]),
  } satisfies PlaygroundConfig<AvatarPlaygroundProps>,

  badge: {
    imports: ['Badge'],
    initialProps: { variant: 'soft', color: 'primary', size: 'medium', children: 'Beta' },
    controls: [
      { type: 'select', name: 'variant', label: 'Variant', options: [{ label: 'Soft', value: 'soft' }, { label: 'Solid', value: 'solid' }, { label: 'Outline', value: 'outline' }] },
      { type: 'select', name: 'color', label: 'Color', options: [{ label: 'Primary', value: 'primary' }, { label: 'Neutral', value: 'neutral' }, { label: 'Success', value: 'success' }, { label: 'Warning', value: 'warning' }, { label: 'Error', value: 'error' }] },
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }] },
      { type: 'text', name: 'children', label: 'Text', placeholder: 'Beta' },
    ],
    render: (props: BadgePlaygroundProps) => <Labs.Badge variant={props.variant} color={props.color} size={props.size}>{String(props.children ?? '')}</Labs.Badge>,
    generateCode: (props) => wrapSnippet(['Badge'], [
      'return (',
      `  ${buildOpeningTag('Badge', { variant: props.variant, color: props.color, size: props.size })}>${props.children}</Badge>`,
      ');',
    ]),
  } satisfies PlaygroundConfig<BadgePlaygroundProps>,

  card: {
    imports: ['Card', 'CardBody', 'CardHeader', 'Text'],
    initialProps: { title: 'Card title', description: 'Descricao complementar', content: 'Conteudo de exemplo em um card.', variant: 'default', padding: 'md' },
    controls: [
      { type: 'text', name: 'title', label: 'Title', placeholder: 'Card title' },
      { type: 'text', name: 'description', label: 'Description', placeholder: 'Descricao complementar' },
      { type: 'textarea', name: 'content', label: 'Content', placeholder: 'Conteudo de exemplo em um card.' },
      { type: 'select', name: 'variant', label: 'Variant', options: [{ label: 'Default', value: 'default' }, { label: 'Outlined', value: 'outlined' }] },
      { type: 'select', name: 'padding', label: 'Padding', options: [{ label: 'SM', value: 'sm' }, { label: 'MD', value: 'md' }, { label: 'LG', value: 'lg' }] },
    ],
    render: (props: CardPlaygroundProps) => <Labs.Card variant={props.variant} padding={props.padding}><Labs.CardHeader title={props.title} description={props.description} /><Labs.CardBody><Labs.Text>{props.content}</Labs.Text></Labs.CardBody></Labs.Card>,
    generateCode: (props) => wrapSnippet(['Card', 'CardBody', 'CardHeader', 'Text'], [
      'return (',
      `  <Card variant="${props.variant}" padding="${props.padding}">`,
      `    <CardHeader title="${props.title}" description="${props.description}" />`,
      `    <CardBody><Text>${props.content}</Text></CardBody>`,
      '  </Card>',
      ');',
    ]),
  } satisfies PlaygroundConfig<CardPlaygroundProps>,

  'empty-state': {
    imports: ['EmptyState', 'Button', 'GhostIcon'],
    initialProps: { title: 'Sem itens', description: 'Nenhum item encontrado para esse filtro.', actionLabel: 'Criar item' },
    controls: [
      { type: 'text', name: 'title', label: 'Title', placeholder: 'Sem itens' },
      { type: 'textarea', name: 'description', label: 'Description', placeholder: 'Nenhum item encontrado.' },
      { type: 'text', name: 'actionLabel', label: 'Action label', placeholder: 'Criar item' },
    ],
    render: (props: EmptyStatePlaygroundProps) => (
      <Labs.EmptyState
        icon={<Labs.GhostIcon size={20} />}
        title={props.title}
        description={props.description}
        action={<Labs.Button>{props.actionLabel}</Labs.Button>}
      />
    ),
    generateCode: (props) => wrapSnippet(['EmptyState', 'Button', 'GhostIcon'], [
      'return (',
      '  <EmptyState',
      '    icon={<GhostIcon size={20} />}',
      `    title="${props.title}"`,
      `    description="${props.description}"`,
      `    action={<Button>${props.actionLabel}</Button>}`,
      '  />',
      ');',
    ]),
  } satisfies PlaygroundConfig<EmptyStatePlaygroundProps>,

  image: {
    imports: ['Box', 'Image'],
    initialProps: { src: 'https://picsum.photos/400/240', alt: 'Exemplo', objectFit: 'cover', radius: 'md' },
    controls: [
      { type: 'text', name: 'src', label: 'Src', placeholder: 'https://picsum.photos/400/240' },
      { type: 'text', name: 'alt', label: 'Alt', placeholder: 'Exemplo' },
      { type: 'select', name: 'objectFit', label: 'Object fit', options: [{ label: 'Cover', value: 'cover' }, { label: 'Contain', value: 'contain' }, { label: 'Fill', value: 'fill' }] },
      { type: 'select', name: 'radius', label: 'Radius', options: [{ label: 'None', value: 'none' }, { label: 'SM', value: 'sm' }, { label: 'MD', value: 'md' }, { label: 'LG', value: 'lg' }, { label: 'Full', value: 'full' }] },
    ],
    render: (props: ImagePlaygroundProps) => <Labs.Box style={{ width: 320, height: 180 }}><Labs.Image src={props.src} alt={props.alt} objectFit={props.objectFit} radius={props.radius} /></Labs.Box>,
    generateCode: (props) => wrapSnippet(['Box', 'Image'], [
      'return (',
      '  <Box style={{ width: 320, height: 180 }}>',
      `    <Image src="${props.src}" alt="${props.alt}" objectFit="${props.objectFit}" radius="${props.radius}" />`,
      '  </Box>',
      ');',
    ]),
  } satisfies PlaygroundConfig<ImagePlaygroundProps>,

  list: {
    imports: ['List'],
    initialProps: { variant: 'divided', activeItem: 'second' },
    controls: [
      { type: 'select', name: 'variant', label: 'Variant', options: [{ label: 'Default', value: 'default' }, { label: 'Divided', value: 'divided' }, { label: 'Checklist', value: 'checklist' }] },
      { type: 'select', name: 'activeItem', label: 'Active item', options: [{ label: 'None', value: 'none' }, { label: 'First', value: 'first' }, { label: 'Second', value: 'second' }] },
    ],
    render: (props: ListPlaygroundProps) => (
      <Labs.List variant={props.variant}>
        <Labs.List.Item active={props.activeItem === 'first'} description="Descricao do item">Primeiro item</Labs.List.Item>
        <Labs.List.Item active={props.activeItem === 'second'} description="Descricao do item">Segundo item</Labs.List.Item>
        <Labs.List.Item description="Descricao do item">Terceiro item</Labs.List.Item>
      </Labs.List>
    ),
    generateCode: (props) => wrapSnippet(['List'], [
      'return (',
      `  <List variant="${props.variant}">`,
      `    <List.Item${props.activeItem === 'first' ? ' active' : ''} description="Descricao do item">Primeiro item</List.Item>`,
      `    <List.Item${props.activeItem === 'second' ? ' active' : ''} description="Descricao do item">Segundo item</List.Item>`,
      '    <List.Item description="Descricao do item">Terceiro item</List.Item>',
      '  </List>',
      ');',
    ]),
  } satisfies PlaygroundConfig<ListPlaygroundProps>,

  table: {
    imports: ['Table', 'Thead', 'Tbody', 'Tr', 'Th', 'Td'],
    initialProps: { striped: true, hover: true, compact: false, stickyHeader: false },
    controls: [
      { type: 'boolean', name: 'striped', label: 'Striped' },
      { type: 'boolean', name: 'hover', label: 'Hover rows' },
      { type: 'boolean', name: 'compact', label: 'Compact' },
      { type: 'boolean', name: 'stickyHeader', label: 'Sticky header' },
    ],
    render: (props: TablePlaygroundProps) => <Labs.Table striped={props.striped} hover={props.hover} compact={props.compact} stickyHeader={props.stickyHeader}><Labs.Thead><Labs.Tr><Labs.Th>Nome</Labs.Th><Labs.Th>Papel</Labs.Th></Labs.Tr></Labs.Thead><Labs.Tbody><Labs.Tr><Labs.Td>Thiago</Labs.Td><Labs.Td>Owner</Labs.Td></Labs.Tr><Labs.Tr><Labs.Td>Acyon</Labs.Td><Labs.Td>System</Labs.Td></Labs.Tr></Labs.Tbody></Labs.Table>,
    generateCode: (props) => wrapSnippet(['Table', 'Thead', 'Tbody', 'Tr', 'Th', 'Td'], [
      'return (',
      `  <Table${props.striped ? ' striped' : ''}${props.hover ? ' hover' : ''}${props.compact ? ' compact' : ''}${props.stickyHeader ? ' stickyHeader' : ''}>`,
      '    <Thead><Tr><Th>Nome</Th><Th>Papel</Th></Tr></Thead>',
      '    <Tbody>',
      '      <Tr><Td>Thiago</Td><Td>Owner</Td></Tr>',
      '      <Tr><Td>Acyon</Td><Td>System</Td></Tr>',
      '    </Tbody>',
      '  </Table>',
      ');',
    ]),
  } satisfies PlaygroundConfig<TablePlaygroundProps>,

  tag: {
    imports: ['Tag'],
    initialProps: { variant: 'soft', color: 'primary', size: 'medium', children: 'Design System', closable: false },
    controls: [
      { type: 'select', name: 'variant', label: 'Variant', options: [{ label: 'Soft', value: 'soft' }, { label: 'Outline', value: 'outline' }] },
      { type: 'select', name: 'color', label: 'Color', options: [{ label: 'Primary', value: 'primary' }, { label: 'Neutral', value: 'neutral' }, { label: 'Success', value: 'success' }, { label: 'Warning', value: 'warning' }, { label: 'Error', value: 'error' }] },
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'ExtraSmall', value: 'extraSmall' }, { label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }, { label: 'ExtraLarge', value: 'extraLarge' }] },
      { type: 'text', name: 'children', label: 'Text', placeholder: 'Design System' },
      { type: 'boolean', name: 'closable', label: 'Closable' },
    ],
    render: (props: TagPlaygroundProps) => <Labs.Tag variant={props.variant} color={props.color} size={props.size} closable={Boolean(props.closable)}>{String(props.children ?? '')}</Labs.Tag>,
    generateCode: (props) => wrapSnippet(['Tag'], [
      'return (',
      `  ${buildOpeningTag('Tag', { variant: props.variant, color: props.color, size: props.size, closable: props.closable })}>${props.children}</Tag>`,
      ');',
    ]),
  } satisfies PlaygroundConfig<TagPlaygroundProps>,

  timeline: {
    imports: ['Timeline', 'TimelineItem'],
    initialProps: { firstTitle: 'Criado', secondTitle: 'Em revisao', thirdTitle: 'Publicado' },
    controls: [
      { type: 'text', name: 'firstTitle', label: 'First title', placeholder: 'Criado' },
      { type: 'text', name: 'secondTitle', label: 'Second title', placeholder: 'Em revisao' },
      { type: 'text', name: 'thirdTitle', label: 'Third title', placeholder: 'Publicado' },
    ],
    render: (props: TimelinePlaygroundProps) => <Labs.Timeline><Labs.TimelineItem title={props.firstTitle} description="Primeiro evento" /><Labs.TimelineItem title={props.secondTitle} description="Segundo evento" /><Labs.TimelineItem title={props.thirdTitle} description="Terceiro evento" /></Labs.Timeline>,
    generateCode: (props) => wrapSnippet(['Timeline', 'TimelineItem'], [
      'return (',
      '  <Timeline>',
      `    <TimelineItem title="${props.firstTitle}" description="Primeiro evento" />`,
      `    <TimelineItem title="${props.secondTitle}" description="Segundo evento" />`,
      `    <TimelineItem title="${props.thirdTitle}" description="Terceiro evento" />`,
      '  </Timeline>',
      ');',
    ]),
  } satisfies PlaygroundConfig<TimelinePlaygroundProps>,
};
