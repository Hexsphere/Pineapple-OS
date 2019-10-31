// IMPORTS
import { elements } from './base';

// CODE
document.addEventListener('DOMContentLoaded', () => {
  elements.tooltipElements.forEach(e => {
    e.addEventListener('mouseenter', event => {
      elements.tooltips.classList.add('open');
      console.log(event.target.getAttribute());
    });

    e.addEventListener('mouseleave', () => {
      elements.tooltips.classList.remove('open');
    });
  });
});
