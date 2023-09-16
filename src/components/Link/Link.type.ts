import { ComponentProps } from '../../types/core/component';

export interface LinkComponentProps extends ComponentProps {
  to: string;
  content: string;
}
