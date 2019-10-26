// IMPORTS
let cloud = require('./wrappers');
import { elements } from './base';

// CODE
document.addEventListener('DOMContentLoaded', () => {
  document.exitFullscreen().catch(e => {});

  document.mozCancelFullScreen
    ? document.mozCancelFullScreen().catch(e => {})
    : null;

  // document.addEventListener('click', toggleFullScreen);

  if (
    document.fullscreen ||
    document.mozFullScreen ||
    (window.innerWidth == screen.width && window.innerHeight == screen.height)
  ) {
    window.setTimeout(() => {
      elements.bootScreen2.classList.add('open');
    }, 400);
  } else {
    window.setTimeout(() => {
      elements.bootScreen6.classList.add('open');
    }, 400);
  }
});

// Get started button
elements.nextBtn1.addEventListener('click', () => {
  transitionBootScreen(elements.bootScreen3, elements.bootScreen4);
});

// Sign up button
elements.nextBtn2.addEventListener('click', () => {
  transitionBootScreen(elements.bootScreen4, elements.bootScreen5);
});

// Log in button
elements.nextBtn3.addEventListener('click', () => {
  transitionBootScreen(elements.bootScreen4, elements.bootScreen6);
});

// Sign up confirm button
elements.nextBtn4.addEventListener('click', () => {
  transitionBootScreen(elements.bootScreen5, elements.bootScreen9);
  startSignup();
});

// Log in confirm button
elements.nextBtn5.addEventListener('click', () => {
  startLogin();
});

// Finish setup button
elements.nextBtn6.addEventListener('click', () => {
  transitionBootScreen(elements.bootScreen7, elements.bootScreen8);

  progressBar(elements.progressBarInnerDesktop);
});

elements.backBtn1.addEventListener('click', () => {
  transitionBootScreen(elements.bootScreen4, elements.bootScreen3);
});

elements.backBtn2.addEventListener('click', () => {
  transitionBootScreen(elements.bootScreen5, elements.bootScreen4);
});

elements.backBtn3.addEventListener('click', () => {
  transitionBootScreen(elements.bootScreen6, elements.bootScreen4);
});

function throwToDesktop() {
  elements.progressBarInnerDesktop.style.width = '0%';
  setTimeout(() => {
    var i = progressBar(elements.progressBarInnerDesktop);

    setTimeout(() => {
      // throw onto desktop
    }, (i + 1) * 50);
  }, 2400);
}

window.startSignup = () => {
  transitionBootScreen(elements.bootScreen5, elements.bootScreen9);
  cloud
    .newAccount(elements.signupUsername.value, elements.signupPassword.value)
    .then(e => {
      console.log(e);
      if (e.error === 'USERNAME_EXISTS') {
        // error
        feather.replace();
        elements.signupError.textContent = 'Account Already Exists:';
        elements.signupErrorDesc.textContent =
          'Please enter a different username';

        elements.signupError.parentElement.classList.add('open');
        setTimeout(() => {
          elements.signupError.parentElement.classList.remove('open');
        }, 2400);
      } else {
        cloud
          .getSession(
            elements.signupUsername.value,
            elements.signupPassword.value
          )
          .then(e => {
            if (e.error === 'UNAUTHORIZED') {
              // error
            } else {
              localStorage.setItem('token', e.data);
              transitionBootScreen(elements.bootScreen9, elements.bootScreen7);
            }
          });
      }
    });
};

window.startLogin = () => {
  cloud
    .getSession(elements.loginUsername.value, elements.loginPassword.value)
    .then(e => {
      if (e.error === 'UNAUTHORIZED') {
        feather.replace();
        elements.loginError.textContent = 'Username and Password Invalid:';
        elements.loginErrorDesc.textContent = 'Please try again.';

        elements.loginError.parentElement.classList.add('open');
        setTimeout(() => {
          elements.loginError.parentElement.classList.remove('open');
        }, 2400);
      } else if (e.error === 'USERNAME_NOT_FOUND') {
        feather.replace();
        elements.loginError.textContent = "Username or Password Doesn't Exist:";
        elements.loginErrorDesc.textContent = 'Please try again.';

        elements.loginError.parentElement.classList.add('open');
        setTimeout(() => {
          elements.loginError.parentElement.classList.remove('open');
        }, 2400);
      } else {
        localStorage.setItem('token', e.data);
        transitionBootScreen(elements.bootScreen6, elements.bootScreen7);
      }
    });
};

window.transitionBootScreen = function transitionBootScreen(
  currentElement,
  nextElement,
  delay = 400
) {
  currentElement.classList.remove('open');
  window.setTimeout(() => {
    nextElement.classList.add('open');
  }, delay);
};

const toggleFullScreen = () => {
  if (elements.bootScreen1.classList.contains('open')) {
    document.body.requestFullscreen();
    removeEventListener('click', toggleFullScreen);

    transitionBootScreen(elements.bootScreen1, elements.bootScreen2, 1300);

    window.setTimeout(() => {
      bootLoader();
    }, 2100);
  }
};

function progressBar(progressBarInner) {
  for (var i = 0; i < 100; i++) {
    var c = Math.random() * 10;
    setTimeout(
      ca => {
        progressBarInner.style.width = String(ca + 1) + '%';
      },
      (i + 1) * 50 + c,
      i + c
    );
    i += c;
  }
  return i;
}

const bootLoader = () => {
  var i = progressBar(elements.progressBarInnerBoot);
  setTimeout(() => {
    if (!localStorage.getItem('token')) {
      transitionBootScreen(elements.bootScreen2, elements.bootScreen3);
    } else {
      transitionBootScreen(elements.bootScreen2, elements.bootScreen8);
      throwToDesktop();
    }
  }, (i + 1) * 50);
};
