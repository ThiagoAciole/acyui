import * as Labs from '@aciole/acyon';
import { DrawerPreview, ModalPreview, wrapSnippet } from '../playgroundShared';
import type { PlaygroundConfig, PlaygroundConfigMap } from '../types';

type TooltipPlaygroundProps = { content: string; placement: 'top' | 'bottom' | 'left' | 'right'; buttonLabel: string };
type ModalPlaygroundProps = { title: string; description: string; body: string; confirmLabel: string; size: 'small' | 'medium' | 'large' | 'extraLarge'; closeOnOverlayClick: boolean };
type DrawerPlaygroundProps = { title: string; body: string; confirmLabel: string; size: 'small' | 'medium' | 'large' | 'full'; placement: 'left' | 'right'; closeOnOverlayClick: boolean };
type DropdownPlaygroundProps = { label: string; placement: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end'; matchTriggerWidth: boolean; disabled: boolean };

export const overlayPlaygrounds: PlaygroundConfigMap = {

  modal: {
    imports: ['Button', 'Modal', 'Text', 'Flex'],
    initialProps: { title: 'Confirmar acao', description: 'Revise os detalhes antes de continuar.', body: 'Este modal usa o componente real da biblioteca.', confirmLabel: 'Confirmar', size: 'medium', closeOnOverlayClick: true },
    controls: [
      { type: 'text', name: 'title', label: 'Title', placeholder: 'Confirmar acao' },
      { type: 'textarea', name: 'description', label: 'Description', placeholder: 'Revise os detalhes antes de continuar.' },
      { type: 'textarea', name: 'body', label: 'Body', placeholder: 'Conteudo do modal' },
      { type: 'text', name: 'confirmLabel', label: 'Confirm label', placeholder: 'Confirmar' },
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }, { label: 'ExtraLarge', value: 'extraLarge' }] },
      { type: 'boolean', name: 'closeOnOverlayClick', label: 'Close on overlay click' },
    ],
    render: (props: ModalPlaygroundProps) => <ModalPreview {...props} />,
    generateCode: (props) => `import { useState } from 'react';\nimport { Button, Flex, Modal, Text } from '@aciole/acyon';\n\nexport function Example() {\n  const [open, setOpen] = useState(false);\n\n  return (\n    <>\n      <Button onClick={() => setOpen(true)}>Abrir modal</Button>\n      <Modal\n        open={open}\n        onClose={() => setOpen(false)}\n        title="${props.title}"\n        description="${props.description}"\n        size="${props.size}"\n        closeOnOverlayClick={${Boolean(props.closeOnOverlayClick)}}\n        footer={(\n          <Flex justify="flex-end" gap="2">\n            <Button variant="ghost" onClick={() => setOpen(false)}>Cancelar</Button>\n            <Button onClick={() => setOpen(false)}>${props.confirmLabel}</Button>\n          </Flex>\n        )}\n      >\n        <Text>${props.body}</Text>\n      </Modal>\n    </>\n  );\n}`,
  } satisfies PlaygroundConfig<ModalPlaygroundProps>,

  drawer: {
    imports: ['Button', 'Drawer', 'Text', 'Flex'],
    initialProps: { title: 'Filtros', body: 'Use este painel para organizar um fluxo secundario sem sair da pagina.', confirmLabel: 'Aplicar', size: 'medium', placement: 'right', closeOnOverlayClick: true },
    controls: [
      { type: 'text', name: 'title', label: 'Title', placeholder: 'Filtros' },
      { type: 'textarea', name: 'body', label: 'Body', placeholder: 'Conteudo do drawer' },
      { type: 'text', name: 'confirmLabel', label: 'Confirm label', placeholder: 'Aplicar' },
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }, { label: 'Full', value: 'full' }] },
      { type: 'select', name: 'placement', label: 'Placement', options: [{ label: 'Left', value: 'left' }, { label: 'Right', value: 'right' }] },
      { type: 'boolean', name: 'closeOnOverlayClick', label: 'Close on overlay click' },
    ],
    render: (props: DrawerPlaygroundProps) => <DrawerPreview {...props} />,
    generateCode: (props) => `import { useState } from 'react';\nimport { Button, Drawer, Flex, Text } from '@aciole/acyon';\n\nexport function Example() {\n  const [open, setOpen] = useState(false);\n\n  return (\n    <>\n      <Button onClick={() => setOpen(true)}>Abrir drawer</Button>\n      <Drawer\n        isOpen={open}\n        onClose={() => setOpen(false)}\n        title="${props.title}"\n        placement="${props.placement}"\n        size="${props.size}"\n        closeOnOverlayClick={${Boolean(props.closeOnOverlayClick)}}\n        footer={(\n          <Flex justify="flex-end" gap="2">\n            <Button variant="ghost" onClick={() => setOpen(false)}>Cancelar</Button>\n            <Button onClick={() => setOpen(false)}>${props.confirmLabel}</Button>\n          </Flex>\n        )}\n      >\n        <Text>${props.body}</Text>\n      </Drawer>\n    </>\n  );\n}`,
  } satisfies PlaygroundConfig<DrawerPlaygroundProps>,

  dropdown: {
    imports: ['Button', 'Dropdown'],
    initialProps: { label: 'Acoes', placement: 'bottom-start', matchTriggerWidth: false, disabled: false },
    controls: [
      { type: 'text', name: 'label', label: 'Trigger label', placeholder: 'Acoes' },
      { type: 'select', name: 'placement', label: 'Placement', options: [{ label: 'Bottom Start', value: 'bottom-start' }, { label: 'Bottom End', value: 'bottom-end' }, { label: 'Top Start', value: 'top-start' }, { label: 'Top End', value: 'top-end' }] },
      { type: 'boolean', name: 'matchTriggerWidth', label: 'Match trigger width' },
      { type: 'boolean', name: 'disabled', label: 'Disabled' },
    ],
    render: (props: DropdownPlaygroundProps) => (
      <Labs.Dropdown
        placement={props.placement}
        matchTriggerWidth={Boolean(props.matchTriggerWidth)}
        disabled={Boolean(props.disabled)}
        content={(
          <>
            <Labs.Dropdown.Item leftContent={<Labs.Icon name="edit" size={14} />}>Editar</Labs.Dropdown.Item>
            <Labs.Dropdown.Item leftContent={<Labs.Icon name="copy" size={14} />}>Duplicar</Labs.Dropdown.Item>
            <Labs.Dropdown.Item destructive leftContent={<Labs.Icon name="trash" size={14} />}>Excluir</Labs.Dropdown.Item>
          </>
        )}
      >
        <Labs.Button variant="outline" disabled={Boolean(props.disabled)}>{props.label}</Labs.Button>
      </Labs.Dropdown>
    ),
    generateCode: (props) => wrapSnippet(['Button', 'Dropdown', 'Icon'], [
      'return (',
      '  <Dropdown',
      `    placement="${props.placement}"`,
      `${props.matchTriggerWidth ? '    matchTriggerWidth' : ''}`,
      `${props.disabled ? '    disabled' : ''}`,
      '    content={(',
      '      <>',
      '        <Dropdown.Item leftContent={<Icon name="edit" size={14} />}>Editar</Dropdown.Item>',
      '        <Dropdown.Item leftContent={<Icon name="copy" size={14} />}>Duplicar</Dropdown.Item>',
      '        <Dropdown.Item destructive leftContent={<Icon name="trash" size={14} />}>Excluir</Dropdown.Item>',
      '      </>',
      '    )}',
      '  >',
      `    <Button variant="outline"${props.disabled ? ' disabled' : ''}>${props.label}</Button>`,
      '  </Dropdown>',
      ');',
    ].filter(Boolean)),
  } satisfies PlaygroundConfig<DropdownPlaygroundProps>,

  tooltip: {
    imports: ['Tooltip', 'Button'],
    initialProps: { content: 'Detalhe adicional', placement: 'top', buttonLabel: 'Passe o mouse' },
    controls: [
      { type: 'text', name: 'content', label: 'Content', placeholder: 'Detalhe adicional' },
      { type: 'select', name: 'placement', label: 'Placement', options: [{ label: 'Top', value: 'top' }, { label: 'Bottom', value: 'bottom' }, { label: 'Left', value: 'left' }, { label: 'Right', value: 'right' }] },
      { type: 'text', name: 'buttonLabel', label: 'Button label', placeholder: 'Passe o mouse' },
    ],
    render: (props: TooltipPlaygroundProps) => <Labs.Tooltip content={props.content} placement={props.placement}><Labs.Button variant="outline">{props.buttonLabel}</Labs.Button></Labs.Tooltip>,
    generateCode: (props) => wrapSnippet(['Tooltip', 'Button'], [
      'return (',
      `  <Tooltip content="${props.content}" placement="${props.placement}">`,
      `    <Button variant="outline">${props.buttonLabel}</Button>`,
      '  </Tooltip>',
      ');',
    ]),
  } satisfies PlaygroundConfig<TooltipPlaygroundProps>,
};
