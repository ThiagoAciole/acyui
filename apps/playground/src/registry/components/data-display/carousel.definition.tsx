import * as Labs from '@aciole/acyon';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

type CarouselPlaygroundProps = {
  orientation: 'horizontal' | 'vertical';
  itemsPerView: string;
  showDots: boolean;
  showArrows: boolean;
  loop: boolean;
};

const SLIDES = [
  { label: '1', color: 'var(--color-primary)' },
  { label: '2', color: 'var(--color-success)' },
  { label: '3', color: 'var(--color-warning)' },
  { label: '4', color: 'var(--color-danger)' },
  { label: '5', color: 'var(--text-subtle)' },
];

function Slide({ label, color }: { label: string; color: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        background: `color-mix(in srgb, ${color}, transparent 88%)`,
        fontSize: '2rem',
        fontWeight: 700,
        color,
        userSelect: 'none',
      }}
    >
      {label}
    </div>
  );
}

const initialProps: CarouselPlaygroundProps = {
  orientation: 'horizontal',
  itemsPerView: '1',
  showArrows: true,
  showDots: true,
  loop: false,
};

const carouselDefinition: ComponentDefinition<CarouselPlaygroundProps> = defineComponent({
  id: 'carousel',
  name: 'Carousel',
  category: 'data-display',
  icon: 'rectangle-horizontal',
  description: 'Exibe itens em sequência com suporte a múltiplos por view e orientação vertical.',
  playground: {
    initialProps,
    controls: [
      {
        type: 'select',
        name: 'orientation',
        label: 'Orientation',
        options: [
          { label: 'Horizontal', value: 'horizontal' },
          { label: 'Vertical', value: 'vertical' },
        ],
      },
      { type: 'number', name: 'itemsPerView', label: 'Items Per View', min: 1, max: 5, step: 1 },
      { type: 'boolean', name: 'showArrows', label: 'Show Arrows' },
      { type: 'boolean', name: 'showDots', label: 'Show Dots' },
      { type: 'boolean', name: 'loop', label: 'Loop' },
    ],
    render: (props) => {
      const perView = Math.max(1, Number(props.itemsPerView) || 1);
      const isVertical = props.orientation === 'vertical';
      return (
        <div style={{ width: isVertical ? 320 : '100%', maxWidth: 560 }}>
          <Labs.Carousel
            items={SLIDES.map((s) => <Slide key={s.label} label={s.label} color={s.color} />)}
            orientation={props.orientation}
            itemsPerView={perView}
            showDots={Boolean(props.showDots)}
            showArrows={Boolean(props.showArrows)}
            loop={Boolean(props.loop)}
          />
        </div>
      );
    },
    code: (props) => {
      const perView = Math.max(1, Number(props.itemsPerView) || 1);
      const lines = [
        `import { Carousel } from '@aciole/acyon';`,
        ``,
        `const items = [`,
        `  <div>Slide 1</div>,`,
        `  <div>Slide 2</div>,`,
        `  <div>Slide 3</div>,`,
        `];`,
        ``,
        `return (`,
        `  <Carousel`,
        `    items={items}`,
        ...(props.orientation !== 'horizontal' ? [`    orientation="${props.orientation}"`] : []),
        ...(perView > 1 ? [`    itemsPerView={${perView}}`] : []),
        ...(props.showArrows === false ? [`    showArrows={false}`] : []),
        ...(props.showDots === false ? [`    showDots={false}`] : []),
        ...(props.loop ? [`    loop`] : []),
        `  />`,
        `);`,
      ];
      return lines.join('\n');
    },
  },
});

export default carouselDefinition;
