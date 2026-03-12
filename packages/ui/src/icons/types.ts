import type { IconProps } from './IconBase';
import type { IconName } from './generated';

export interface NamedIconProps extends IconProps {
  name: IconName;
}

export type { IconName };
