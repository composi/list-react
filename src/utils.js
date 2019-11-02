import ReactDOM from 'react-dom';

/**
 * @param {JSX.Element} component
 * @param {HTMLElement | string} selector
 */
export function render(component, selector) {
  if (typeof selector === 'string') {
    selector = /** @type {HTMLElement} */(document.querySelector(selector))
  }
  ReactDOM.render(component, selector)
}
