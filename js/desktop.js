import { elements } from './base';

import moment from 'moment';

export function showDesktop() {
  elements.desktop.classList.add('open');
}

const updatePrimaryClock = () => {
  elements.desktopClock.childNodes[1].textContent = moment().format('h:mm A');
};

updatePrimaryClock();

window.setInterval(() => {
  updatePrimaryClock();
}, 1000);
