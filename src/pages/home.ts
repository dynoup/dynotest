import Feed from '../components/Feed/Feed';
import { CountContext } from '../context/Context';
import { ComponentProps } from '../packages/core/component.type';
import render from '../packages/core/render';
import useCoreComponent from '../packages/core/useCoreComponent';

export default function HomePage(props?: ComponentProps) {
  const componentObject = useCoreComponent({ component: HomePage });

  CountContext(() => componentObject);

  // TODO: parent 이렇게 전달 안하는 방법... 알아보기
  const FeedInstance = Feed({ parentComponent: componentObject });

  componentObject.render = () => {
    return `
        <section class="home section">
          <header class="section-header">
            <h2 class="section-title">Home</h2>
          </header>
        
          <div class="section-content">
            ${render(FeedInstance)}
          </div>
        </section>
      `;
  };

  return () => componentObject;
}
