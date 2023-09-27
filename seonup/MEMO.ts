/**
 * TODO: 컴포넌트를 호출하는 걸 다른 함수에 위임하고... return으로만 다룰 수 있게 해보기!!!!!
 */

/**
 * react의 경우 모든 node가 fiber 객체로 돼있기 때문에 동일로직이 가능함. 넓게 봤을 때 component 인스턴스를 fiber 객체로 바라보면 쉬워질 듯.
 *
 * [[[ react => 내가 만들거]]]]
 * createRoot($root) => new Root({ container: $root })
 * root.render(Component) => root.render();
 *
 * [[[ state ]]]
 * states를 객체로 만드는 건 어떨까? key값을 꼭 넣어야 하는걸로.
 * states = { [key: string]: state };
 * const [value, setValue] = useState(key, initialValue);
 * state = {
 *  componentName: this.name, // string. 어디에서 호출됐는지 확인해서 한번에 렌더링
 *  value: any, // state 값
 *  didUpdate: false, // boolean. 이번 렌더링에서 업데이트 호출이 있었는지?
 *  set value() {
 *    throw new Error('state의 값을 직접 변경할 수 없습니다.');
 *  }
 * }
 *
 * dispatch(newState: (S => S) | S) {
 *  if (newState === function) {
 *    states[key] = {
 *      ...states[key],
 *      value: newState === function ? newSate() newState;
 *    }
 *  }
 *  states[key].didUpdate = true;
 *  this.render(); // 사실 렌더링 대신에 state scheduler부터 호출 -> scheduler가 render 호출
 * }
 *
 * [[[ router ]]]
 * - react router dom이랑 routes 동일하게 짜기
 * - routes에 작성된 path를 정규표현식으로 바꾸는 함수 getPathRegExp? 만들기 -> 아니면 getter로 path에 접근하면 정규표현식으로 검색?
 * - Link 컴포넌트 만들어서 to에 들어오는 값으로 path 검색해서 Routing: History API 사용
 * - 주소창에 입력했을 때는? 처음 렌더링될 때 pathname을 읽어올 순 없나?
 */
