import Feed from '../components/Feed/Feed';
import render from '../core/render';
import useCoreComponent from '../core/useCoreComponent';
import { ComponentProps } from '../types/core/component';

export default function HomePage(props?: ComponentProps) {
  const componentObject = useCoreComponent({ component: HomePage });

  componentObject.render = () => {
    return `
        <section class="home section">
          <header class="section-header">
            <h2 class="section-title">Home</h2>
          </header>
        
          <div class="section-content">
            ${render(Feed)}
          </div>
        </section>
      `;
  };

  return () => componentObject;
}
