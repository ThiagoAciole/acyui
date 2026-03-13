import * as Labs from '@aciole/acyon';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';
import { buildOpeningTag, wrapSnippet } from '../../../shared/playground/playground-helpers';

type FileUploadPlaygroundProps = { title: string; description: string; multiple: boolean; disabled: boolean };

const initialProps: FileUploadPlaygroundProps = {
  title: 'Enviar arquivo',
  description: 'PDF, PNG ou JPG de ate 5MB.',
  multiple: false,
  disabled: false,
};

const fileuploadDefinition: ComponentDefinition<FileUploadPlaygroundProps> = defineComponent({
  id: 'file-upload',
  name: 'FileUpload',
  category: 'forms',
  icon: 'upload-cloud',
  description: 'Entrada de arquivos com dropzone e validacao.',
  playground: {
    initialProps,
    controls: [
      { type: 'text', name: 'title', label: 'Title', placeholder: 'Enviar arquivo' },
      { type: 'textarea', name: 'description', label: 'Description', placeholder: 'PDF, PNG ou JPG de ate 5MB.' },
      { type: 'boolean', name: 'multiple', label: 'Multiple' },
      { type: 'boolean', name: 'disabled', label: 'Disabled' },
    ],
    render: (props) => <Labs.FileUpload title={props.title} description={props.description} multiple={Boolean(props.multiple)} disabled={Boolean(props.disabled)} />,
    code: (props) => wrapSnippet(['FileUpload'], [
      'return (',
      `  ${buildOpeningTag('FileUpload', props as Record<string, unknown>)} />`,
      ');',
    ]),
  },
});

export default fileuploadDefinition;
