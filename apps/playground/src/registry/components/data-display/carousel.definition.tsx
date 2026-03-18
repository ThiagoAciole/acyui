import * as Labs from 'acioleui';
import img1 from '../../../images/image-1.jpg';
import img2 from '../../../images/image-2.jpg';
import img3 from '../../../images/image-3.jpg';
import img5 from '../../../images/image-4-1.jpg';
import img4 from '../../../images/image-4.jpg';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

type CarouselPlaygroundProps = {
  itemsPerView: string;
  showDots: boolean;
  showArrows: boolean;
  loop: boolean;
};

const SLIDES = [img1, img2, img3, img4, img5];

function Slide({ src }: { src: string }) {
  return (
    <Labs.Image
      src={src}
      alt="Slide"
      style={{ display: 'block' }}
      objectFit="cover"
      radius="large"
    />
  );
}

const initialProps: CarouselPlaygroundProps = {
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
  description: 'Exibe itens em sequÃªncia com suporte a mÃºltiplos por view.',
  playground: {
    initialProps,
    controls: [
      { type: 'number', name: 'itemsPerView', label: 'Items Per View', min: 1, max: 5, step: 1 },
      { type: 'boolean', name: 'showArrows', label: 'Show Arrows' },
      { type: 'boolean', name: 'showDots', label: 'Show Dots' },
      { type: 'boolean', name: 'loop', label: 'Loop' },
    ],
    render: (props) => {
      const perView = Math.max(1, Number(props.itemsPerView) || 1);

      return (
        <div style={{ width: '100%', maxWidth: 560 }}>
          <Labs.Carousel
            items={SLIDES.map((src, i) => <Slide key={i} src={src} />)}
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
        `import { Carousel, Image } from 'acioleui';`,
        ``,
        `export function Example() {`,
        `  return (`,
        `    <Carousel`,
        `      items={items}`,
        ...(perView > 1 ? [`      itemsPerView={${perView}}`] : []),
        ...(props.showArrows === false ? [`      showArrows={false}`] : []),
        ...(props.showDots === false ? [`      showDots={false}`] : []),
        ...(props.loop ? [`      loop`] : []),
        `    />`,
        `  );`,
        `}`,
      ];

      return lines.join('\n');
    },
  },
});

export default carouselDefinition;