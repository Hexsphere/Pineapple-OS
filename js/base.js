export const elements = {
  // ## Boot elements
  boot: document.querySelector('boot'),

  // Boot screens
  bootScreen1: document.querySelector('.boot--screen__1'),
  bootScreen2: document.querySelector('.boot--screen__2'),
  bootScreen3: document.querySelector('.boot--screen__3'),
  bootScreen4: document.querySelector('.boot--screen__4'),
  bootScreen5: document.querySelector('.boot--screen__5'),
  bootScreen6: document.querySelector('.boot--screen__6'),
  bootScreen7: document.querySelector('.boot--screen__7'),
  bootScreen8: document.querySelector('.boot--screen__8'),
  bootScreen9: document.querySelector('.boot--screen__9'),

  // Account management sectors
  signupPassword: document.querySelector('#signup--password'),
  signupUsername: document.querySelector('#signup--username'),
  loginPassword: document.querySelector('#login--password'),
  loginUsername: document.querySelector('#login--username'),
  signupError: document.querySelector('.boot--signup-error h3'),
  signupErrorDesc: document.querySelector('.boot--signup-error p'),
  loginError: document.querySelector('.boot--login-error h3'),
  loginErrorDesc: document.querySelector('.boot--login-error p'),

  // Progress bars
  progressBarInnerBoot: document.querySelector('#progressBar1'),
  progressBarInnerDesktop: document.querySelector('#progressBar2'),
  progressBarInnerAccountCreation: document.querySelector('#progressBar3'),

  // Onboarding Screen Next Buttons
  nextBtn1: document.querySelector('#nextBtn1'),
  nextBtn2: document.querySelector('#nextBtn2'),
  nextBtn3: document.querySelector('#nextBtn3'),
  nextBtn4: document.querySelector('#nextBtn4'),
  nextBtn5: document.querySelector('#nextBtn5'),
  nextBtn6: document.querySelector('#nextBtn6'),

  // Onboarding Screen Back Buttons
  backBtn1: document.querySelector('#backBtn1'),
  backBtn2: document.querySelector('#backBtn2'),
  backBtn3: document.querySelector('#backBtn3'),

  colorThemeBtns: document.querySelectorAll('.boot--btn__icon'),

  // ## Desktop elements
  desktop: document.querySelector('.desktop'),

  // Clock
  desktopClock: document.querySelector('.menu-bar--clock'),

  // ## Alerts & Popups
  alerts: document.querySelector('.alerts'),

  // Cloud Error
  cloudError: document.querySelector('.alerts--alert__cloud-error'),
  cloudErrorButton: document.querySelector(
    '.alerts--alert__cloud-error .alerts--btn'
  ),

  // Full Screen Alert
  fullScreenAlert: document.querySelector('.alerts--alert__fullscreen-prompt'),

  // ## Apps

  // Feedback Assistant
  feedbackAssistant: document.querySelector('.feedback-assistant'),
  feedbackAssistantCancelButton: document.querySelector(
    '.feedback-assistant--btn__cancel'
  ),
  feedbackAssistantSubmitButton: document.querySelector(
    '.feedback-assistant--btn__open'
  ),
  feedbackAssistantTextarea: document.querySelector(
    '.feedback-assistant--textarea'
  ),
  feedbackAssistantTopbarButton: document.querySelector(
    '.menu-bar--icon__feedback'
  ),

  // ## Tooltips
  tooltips: document.querySelector('.tooltips'),
  tooltipElements: document.querySelectorAll('[data-tooltip]')
};
