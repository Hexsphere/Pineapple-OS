window.feather = require('feather-icons');

import './boot';
import './feedback_assistant';
import './tooltips';
import { showDesktop } from './desktop.js';

showDesktop();

feather.replace();
