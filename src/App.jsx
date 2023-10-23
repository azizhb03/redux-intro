// App.js
import { Provider } from 'react-redux';
import store from './store';
import Counter from './components/Counter';
import User from './components/User';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
        <User />
      </div>
    </Provider>
  );
}

export default App;
