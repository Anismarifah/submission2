
import 'regenerator-runtime/runtime'; // for async/await transpile
import '../styles/main.css';
import './components/restaurant-footer';
import './components/restaurant-navbar';
import App from './views/apps';

const app = new App({
  content: document.querySelector('#mainContent'),
});
 
window.addEventListener('hashchange', () => {
  app.renderPage();
});

document.addEventListener('DOMContentLoaded', async () => {
  app.renderPage();
});
