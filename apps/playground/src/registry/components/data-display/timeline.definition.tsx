import * as Labs from '@aciole/acyon';
import { wrapSnippet } from '../../../shared/playground/playground-helpers';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

type TimelinePlaygroundProps = {
  firstTitle: string;
  secondTitle: string;
  thirdTitle: string;
};

const timelineDefinition: ComponentDefinition<TimelinePlaygroundProps> = defineComponent<TimelinePlaygroundProps>({
  id: 'timeline',
  name: 'Timeline',
  category: 'data-display',
  icon: 'git-commit',
  description: 'Sequencia temporal de eventos ou etapas.',
  playground: {
    initialProps: {
      firstTitle: 'Criado',
      secondTitle: 'Em revisao',
      thirdTitle: 'Publicado',
    },
    controls: [
      { type: 'text', name: 'firstTitle', label: 'First title', placeholder: 'Criado' },
      { type: 'text', name: 'secondTitle', label: 'Second title', placeholder: 'Em revisao' },
      { type: 'text', name: 'thirdTitle', label: 'Third title', placeholder: 'Publicado' },
    ],
    render: (props) => (
      <Labs.Timeline>
        <Labs.TimelineItem title={props.firstTitle} description="Primeiro evento" />
        <Labs.TimelineItem title={props.secondTitle} description="Segundo evento" />
        <Labs.TimelineItem title={props.thirdTitle} description="Terceiro evento" />
      </Labs.Timeline>
    ),
    code: (props) => wrapSnippet(['Timeline', 'TimelineItem'], [
      'return (',
      '  <Timeline>',
      `    <TimelineItem title="${props.firstTitle}" description="Primeiro evento" />`,
      `    <TimelineItem title="${props.secondTitle}" description="Segundo evento" />`,
      `    <TimelineItem title="${props.thirdTitle}" description="Terceiro evento" />`,
      '  </Timeline>',
      ');',
    ]),
  },
});

export default timelineDefinition;
