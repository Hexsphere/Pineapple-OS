import { elements } from './base';
import * as cloud from "./wrappers";
import moment from 'moment';
var internalData = {}
export function showDesktop() {
    elements.desktop.classList.add('open');
    elements.bootScreen8.classList.remove('open');
    cloud.get(localStorage.getItem("username"),localStorage.getItem("token")).then(e=>{
        if (e.data){
            internalData = e.data
        } else {
            // invalid token, prompt user to login again
        }
    })
}

const updatePrimaryClock = () => {
  elements.desktopClock.childNodes[1].textContent = moment().format('h:mm A');
};

updatePrimaryClock();

window.setInterval(() => {
  updatePrimaryClock();
}, 1000);
