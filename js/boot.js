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
      elements.bootScreen5.classList.add('open');
    }, 400);
  }
});

//  <div class="boot--login-error">
//      <i data-feather="x-octagon"></i>
//      <h3>Error title</h3>
//      <p>Reason for error and things to fix</p>
//  </div>

window.loginAndSignup = function loginAndSignup() {
  transitionBootScreen(elements.bootScreen3, elements.bootScreen4);
};

window.signup = function() {
  transitionBootScreen(elements.bootScreen4, elements.bootScreen5);
};

window.login = function() {
  transitionBootScreen(elements.bootScreen4, elements.bootScreen6);
};

window.startSignup = () => {
  transitionBootScreen(elements.bootScreen5, elements.bootScreen9);
  cloud
    .newAccount(elements.signupUname.value, elements.signupPw.value)
    .then(e => {
      console.log(e);
      if (e.error === 'USERNAME_EXISTS') {
        // error
        elements.signupErrorDesc.innerHTML =
          'Already an account with the same name exists.';
        elements.signupError.innerHTML =
          '<i data-feather="x-octagon"></i>  Conflict';
        transitionBootScreen(elements.bootScreen9, elements.bootScreen5);
        elements.signupError.parentElement.style.display = '';
        feather.replace();
      } else {
        cloud
          .getSession(elements.signupUname.value, elements.signupPw.value)
          .then(e => {
            if (e.error === 'UNAUTHORIZED') {
              // error
            } else {
              // throw onto desktop
              localStorage.setItem('token', e.data);
            }
          });
      }
    });
};

window.startLogin = () => {
  transitionBootScreen(elements.bootScreen6, elements.bootScreen9);
  // cloud
  //   .getSession(elements.loginUname.value, elements.loginPw.value)
  //   .then(e => {
  //     if (e.error === 'UNAUTHORIZED') {
  //       // error
  //     } else {
  //       // throw onto desktop
  //       localStorage.setItem('token', e.data);
  //     }
  //   });
};

function transitionBootScreen(currentElement, nextElement, delay = 400) {
  currentElement.classList.remove('open');
  window.setTimeout(() => {
    nextElement.classList.add('open');
  }, delay);
}

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

const bootLoader = () => {
  for (var i = 0; i < 100; i++) {
    var c = Math.random() * 10;
    setTimeout(
      ca => {
        elements.progressBarInner.style.width = String(ca + 1) + '%';
      },
      (i + 1) * 50 + c,
      i + c
    );
    i += c;
  }
  setTimeout(() => {
    transitionBootScreen(elements.bootScreen2, elements.bootScreen3);
  }, (i + 1) * 65);
};
