import historyEnhancer from './historyEnhancer';
import { createBrowserHistory, History } from 'history';
import { useHistory } from 'umi';

export default function MyComponent() {
  // const history: History = historyEnhancer(createBrowserHistory());
  const history: History = createBrowserHistory();
  console.log('history: ', history);

  const handleBeforeUnload = () => {
    return `Are you sure you want to leave this page?`;
  };

  const handleGoToNextPage = () => {
    history.block(handleBeforeUnload);
    history.push('/next-page');
  };

  const myHistory = historyEnhancer(window.history);

  console.log('myHistory: ', myHistory);

  return (
    <div>
      <button
        onClick={() => {
          // history.block(() => '1231231');
          history.push('/123');
        }}
      >
        history
      </button>
      <button onClick={handleGoToNextPage}>Go to next page</button>
    </div>
  );
}
