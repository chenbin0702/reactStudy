
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Fn from './Fn.jsx';

const root=ReactDOM.createRoot(document.querySelector('#root'))
root.render(<div>
  <App></App>
  <Fn></Fn>
</div>)