import { Header } from './components';
import Component from './core/component';
import { ComponentProps } from './types/core/component.type';

export default class App extends Component {
  constructor(props?: ComponentProps) {
    super(props);
  }

  template() {
    return `
      ${new Header({ name: 'Header' }).render()}
    `;
  }
}
