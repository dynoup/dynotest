import Owo from '../../core/Component';

type Trend = {
  trendId: string;
  keyword: string;
  country: string;
  count: number;
};

export default function TrendCard(
  $id: string,
  $parent: HTMLDivElement,
  content: Trend
) {
  const controller = Owo($id, $parent);
  controller.template(
    `<div id="${content.trendId}"><div style="display: flex;"><h4 ">${content.country} ${content.keyword}</h4></div>${content.count} posts</div>`
  );
  controller.onStyle({
    width: '80%',
    margin: ' 2px',
    border: '1px solid white',
    overflow: 'hidden',
  });
}
