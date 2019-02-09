import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './styles/base.css';
import './styles/layout.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
