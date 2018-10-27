import './index.pcss';
import myApp from './components/my-app/index';

if (PRODUCTION) {
  require('offline-plugin/runtime').install();
}

customElements.define('my-app', myApp);
