import * as Labs from '@aciole/acyon';
import { buildOpeningTag, wrapSnippet } from '../playgroundShared';
import type { PlaygroundConfig, PlaygroundConfigMap } from '../types';

type BoxPlaygroundProps = { padding: '0' | '2' | '4' | '6'; rounded: 'none' | 'sm' | 'md' | 'lg' | 'xl'; shadow: 'none' | 'sm' | 'md' | 'lg'; surface: 'default' | 'subtle' | 'inverse'; border: boolean; children: string };
type ContainerPlaygroundProps = { size: 'small' | 'medium' | 'large' | 'extraLarge' | 'full'; children: string };
type DividerPlaygroundProps = { orientation: 'horizontal' | 'vertical'; label: string };
type FlexPlaygroundProps = { direction: 'row' | 'column'; align: 'flex-start' | 'center' | 'flex-end' | 'stretch'; justify: 'flex-start' | 'center' | 'flex-end' | 'space-between'; gap: '0' | '2' | '4' | '6' };
type GridPlaygroundProps = { columns: '1' | '2' | '3' | '4'; gap: '2' | '4' | '6' };
type PageHeaderPlaygroundProps = { title: string; description: string; showBack: boolean };
type SidebarPlaygroundProps = { collapsed: boolean; groupTitle: string };
type SpacerPlaygroundProps = { axis: 'horizontal' | 'vertical'; size: string };

export const layoutPlaygrounds: PlaygroundConfigMap = {

  box: {
    imports: ['Box', 'Text'],
    initialProps: { padding: '4', rounded: 'lg', shadow: 'sm', surface: 'subtle', border: false, children: 'Conteudo dentro do Box.' },
    controls: [
      { type: 'select', name: 'padding', label: 'Padding', options: [{ label: '0', value: '0' }, { label: '2', value: '2' }, { label: '4', value: '4' }, { label: '6', value: '6' }] },
      { type: 'select', name: 'rounded', label: 'Rounded', options: [{ label: 'None', value: 'none' }, { label: 'SM', value: 'sm' }, { label: 'MD', value: 'md' }, { label: 'LG', value: 'lg' }, { label: 'XL', value: 'xl' }] },
      { type: 'select', name: 'shadow', label: 'Shadow', options: [{ label: 'None', value: 'none' }, { label: 'SM', value: 'sm' }, { label: 'MD', value: 'md' }, { label: 'LG', value: 'lg' }] },
      { type: 'select', name: 'surface', label: 'Surface', options: [{ label: 'Default', value: 'default' }, { label: 'Subtle', value: 'subtle' }, { label: 'Inverse', value: 'inverse' }] },
      { type: 'boolean', name: 'border', label: 'Border' },
      { type: 'textarea', name: 'children', label: 'Content', placeholder: 'Conteudo dentro do Box.' },
    ],
    render: (props: BoxPlaygroundProps) => <Labs.Box padding={props.padding} rounded={props.rounded} shadow={props.shadow} surface={props.surface} border={props.border}><Labs.Text>{props.children}</Labs.Text></Labs.Box>,
    generateCode: (props) => wrapSnippet(['Box', 'Text'], [
      'return (',
      `  ${buildOpeningTag('Box', { padding: props.padding, rounded: props.rounded, shadow: props.shadow, surface: props.surface, border: props.border })}>`,
      `    <Text>${props.children}</Text>`,
      '  </Box>',
      ');',
    ]),
  } satisfies PlaygroundConfig<BoxPlaygroundProps>,

  container: {
    imports: ['Container', 'Text'],
    initialProps: { size: 'medium', children: 'Area de container.' },
    controls: [
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }, { label: 'ExtraLarge', value: 'extraLarge' }, { label: 'Full', value: 'full' }] },
      { type: 'textarea', name: 'children', label: 'Content', placeholder: 'Area de container.' },
    ],
    render: (props: ContainerPlaygroundProps) => <Labs.Container size={props.size}><Labs.Text>{props.children}</Labs.Text></Labs.Container>,
    generateCode: (props) => wrapSnippet(['Container', 'Text'], [
      'return (',
      `  <Container size="${props.size}"><Text>${props.children}</Text></Container>`,
      ');',
    ]),
  } satisfies PlaygroundConfig<ContainerPlaygroundProps>,

  divider: {
    imports: ['Divider', 'Flex', 'Text'],
    initialProps: { orientation: 'horizontal', label: '' },
    controls: [
      { type: 'select', name: 'orientation', label: 'Orientation', options: [{ label: 'Horizontal', value: 'horizontal' }, { label: 'Vertical', value: 'vertical' }] },
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Ou' },
    ],
    render: (props: DividerPlaygroundProps) => props.orientation === 'horizontal'
      ? <Labs.Flex direction="column" gap="3"><Labs.Text>Secao A</Labs.Text><Labs.Divider orientation="horizontal" label={props.label || undefined} /><Labs.Text>Secao B</Labs.Text></Labs.Flex>
      : <Labs.Flex align="center" gap="3"><Labs.Text>A</Labs.Text><Labs.Divider orientation="vertical" /><Labs.Text>B</Labs.Text></Labs.Flex>,
    generateCode: (props) => wrapSnippet(['Divider'], [
      'return (',
      `  <Divider orientation="${props.orientation}"${props.label ? ` label="${props.label}"` : ''} />`,
      ');',
    ]),
  } satisfies PlaygroundConfig<DividerPlaygroundProps>,

  flex: {
    imports: ['Badge', 'Flex'],
    initialProps: { direction: 'row', align: 'center', justify: 'flex-start', gap: '4' },
    controls: [
      { type: 'select', name: 'direction', label: 'Direction', options: [{ label: 'Row', value: 'row' }, { label: 'Column', value: 'column' }] },
      { type: 'select', name: 'align', label: 'Align', options: [{ label: 'Start', value: 'flex-start' }, { label: 'Center', value: 'center' }, { label: 'End', value: 'flex-end' }, { label: 'Stretch', value: 'stretch' }] },
      { type: 'select', name: 'justify', label: 'Justify', options: [{ label: 'Start', value: 'flex-start' }, { label: 'Center', value: 'center' }, { label: 'End', value: 'flex-end' }, { label: 'Space Between', value: 'space-between' }] },
      { type: 'select', name: 'gap', label: 'Gap', options: [{ label: '0', value: '0' }, { label: '2', value: '2' }, { label: '4', value: '4' }, { label: '6', value: '6' }] },
    ],
    render: (props: FlexPlaygroundProps) => <Labs.Flex direction={props.direction} align={props.align} justify={props.justify} gap={props.gap}><Labs.Badge>1</Labs.Badge><Labs.Badge>2</Labs.Badge><Labs.Badge>3</Labs.Badge></Labs.Flex>,
    generateCode: (props) => wrapSnippet(['Badge', 'Flex'], [
      'return (',
      `  <Flex direction="${props.direction}" align="${props.align}" justify="${props.justify}" gap="${props.gap}">`,
      '    <Badge>1</Badge><Badge>2</Badge><Badge>3</Badge>',
      '  </Flex>',
      ');',
    ]),
  } satisfies PlaygroundConfig<FlexPlaygroundProps>,

  grid: {
    imports: ['Card', 'CardBody', 'Grid'],
    initialProps: { columns: '3', gap: '4' },
    controls: [
      { type: 'select', name: 'columns', label: 'Columns', options: [{ label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '4', value: '4' }] },
      { type: 'select', name: 'gap', label: 'Gap', options: [{ label: '2', value: '2' }, { label: '4', value: '4' }, { label: '6', value: '6' }] },
    ],
    render: (props: GridPlaygroundProps) => <Labs.Grid columns={Number(props.columns) as 1 | 2 | 3 | 4} gap={props.gap}><Labs.Card><Labs.CardBody>A</Labs.CardBody></Labs.Card><Labs.Card><Labs.CardBody>B</Labs.CardBody></Labs.Card><Labs.Card><Labs.CardBody>C</Labs.CardBody></Labs.Card></Labs.Grid>,
    generateCode: (props) => wrapSnippet(['Card', 'CardBody', 'Grid'], [
      'return (',
      `  <Grid columns={${Number(props.columns)}} gap="${props.gap}">`,
      '    <Card><CardBody>A</CardBody></Card>',
      '    <Card><CardBody>B</CardBody></Card>',
      '    <Card><CardBody>C</CardBody></Card>',
      '  </Grid>',
      ');',
    ]),
  } satisfies PlaygroundConfig<GridPlaygroundProps>,

  'page-header': {
    imports: ['Button', 'PageHeader'],
    initialProps: { title: 'PageHeader', description: 'Descricao da pagina', showBack: false },
    controls: [
      { type: 'text', name: 'title', label: 'Title', placeholder: 'PageHeader' },
      { type: 'textarea', name: 'description', label: 'Description', placeholder: 'Descricao da pagina' },
      { type: 'boolean', name: 'showBack', label: 'Show back button' },
    ],
    render: (props: PageHeaderPlaygroundProps) => <Labs.PageHeader title={props.title} description={props.description} showBack={props.showBack} action={<Labs.Button>Salvar</Labs.Button>} />,
    generateCode: (props) => wrapSnippet(['Button', 'PageHeader'], [
      'return (',
      '  <PageHeader',
      `    title="${props.title}"`,
      `    description="${props.description}"`,
      `${props.showBack ? '    showBack' : ''}`,
      '    action={<Button>Salvar</Button>}',
      '  />',
      ');',
    ].filter(Boolean)),
  } satisfies PlaygroundConfig<PageHeaderPlaygroundProps>,

  sidebar: {
    imports: ['Icon', 'Sidebar'],
    initialProps: { collapsed: false, groupTitle: 'Navigation' },
    controls: [
      { type: 'boolean', name: 'collapsed', label: 'Collapsed' },
      { type: 'text', name: 'groupTitle', label: 'Group title', placeholder: 'Navigation' },
    ],
    render: (props: SidebarPlaygroundProps) => (
      <div style={{ width: props.collapsed ? 80 : 280 }}>
        <Labs.Sidebar collapsed={props.collapsed}>
          <Labs.Sidebar.Item icon={<Labs.Icon name="home" size={16} />} active>Home</Labs.Sidebar.Item>
          <Labs.Sidebar.Group title={props.groupTitle} leftIcon={<Labs.Icon name="external-link" size={16} />} defaultOpen>
            <Labs.Sidebar.Item icon={<Labs.Icon name="folder" size={16} />}>Tabs</Labs.Sidebar.Item>
            <Labs.Sidebar.Item icon={<Labs.Icon name="milestone" size={16} />}>Breadcrumb</Labs.Sidebar.Item>
          </Labs.Sidebar.Group>
        </Labs.Sidebar>
      </div>
    ),
    generateCode: (props) => wrapSnippet(['Icon', 'Sidebar'], [
      'return (',
      `  <Sidebar${props.collapsed ? ' collapsed' : ''}>`,
      '    <Sidebar.Item icon={<Icon name="home" size={16} />} active>Home</Sidebar.Item>',
      `    <Sidebar.Group title="${props.groupTitle}" leftIcon={<Icon name="external-link" size={16} />} defaultOpen>`,
      '      <Sidebar.Item icon={<Icon name="folder" size={16} />}>Tabs</Sidebar.Item>',
      '      <Sidebar.Item icon={<Icon name="milestone" size={16} />}>Breadcrumb</Sidebar.Item>',
      '    </Sidebar.Group>',
      '  </Sidebar>',
      ');',
    ]),
  } satisfies PlaygroundConfig<SidebarPlaygroundProps>,

  spacer: {
    imports: ['Badge', 'Flex', 'Spacer'],
    initialProps: { axis: 'horizontal', size: '24px' },
    controls: [
      { type: 'select', name: 'axis', label: 'Axis', options: [{ label: 'Horizontal', value: 'horizontal' }, { label: 'Vertical', value: 'vertical' }] },
      { type: 'text', name: 'size', label: 'Size', placeholder: '24px' },
    ],
    render: (props: SpacerPlaygroundProps) => props.axis === 'horizontal'
      ? <Labs.Flex align="center"><Labs.Badge>Inicio</Labs.Badge><Labs.Spacer axis="horizontal" size={props.size} /><Labs.Badge>Fim</Labs.Badge></Labs.Flex>
      : <Labs.Flex direction="column"><Labs.Badge>Inicio</Labs.Badge><Labs.Spacer axis="vertical" size={props.size} /><Labs.Badge>Fim</Labs.Badge></Labs.Flex>,
    generateCode: (props) => wrapSnippet(['Spacer'], [
      'return (',
      `  <Spacer axis="${props.axis}" size="${props.size}" />`,
      ');',
    ]),
  } satisfies PlaygroundConfig<SpacerPlaygroundProps>,
};
