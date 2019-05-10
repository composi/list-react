import ReactDOM from 'react-dom';

export function render(component, selector) {
  if (typeof selector === 'string') selector = document.querySelector(selector)
  ReactDOM.render(component, selector)
}
