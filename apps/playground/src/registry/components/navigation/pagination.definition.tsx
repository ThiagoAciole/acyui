import { PaginationPreview } from '../../../shared/playground/playground-helpers';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

type PaginationPlaygroundProps = {
  currentPage: string;
  totalPages: string;
  showControls: boolean;
};

const paginationDefinition: ComponentDefinition<PaginationPlaygroundProps> = defineComponent<PaginationPlaygroundProps>({
  id: 'pagination',
  name: 'Pagination',
  category: 'navigation',
  icon: 'more-horizontal',
  description: 'Navegacao paginada entre colecoes.',
  playground: {
    initialProps: {
      currentPage: '2',
      totalPages: '8',
      showControls: true,
    },
    controls: [
      { type: 'text', name: 'currentPage', label: 'Current page', placeholder: '2' },
      { type: 'text', name: 'totalPages', label: 'Total pages', placeholder: '8' },
      { type: 'boolean', name: 'showControls', label: 'Show controls' },
    ],
    render: (props) => <PaginationPreview {...props} />,
    code: (props) => `import { useState } from 'react';
import { Pagination } from '@aciole/acyon';

export function Example() {
  const [page, setPage] = useState(${Number(props.currentPage)});

  return (
    <Pagination
      currentPage={page}
      totalPages={${Number(props.totalPages)}}
      showControls={${Boolean(props.showControls)}}
      onPageChange={setPage}
    />
  );
}`,
  },
});

export default paginationDefinition;
