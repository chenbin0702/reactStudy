import { Provider } from 'react-redux';
import store from './Redux/store';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// import Fn from './test/Fn';
// import LifeCycle from './test/lifeCycle.jsx';

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<div>
  <Provider store={store}>
    <App></App>
  </Provider>

  {/* <Fn></Fn>
  <LifeCycle></LifeCycle> */}
</div>)
