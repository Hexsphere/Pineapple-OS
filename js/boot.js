// IMPORTS
let cloud = require('./wrappers');
import { elements } from './base';
import { showDesktop } from './desktop';

// CODE
document.addEventListener('DOMContentLoaded', () => {

    document.addEventListener('click', toggleFullScreen);

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
            elements.bootScreen1.classList.add('open');
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
    preparingDesktopProgressBar(elements.bootScreen5);
});

elements.colorThemeBtns.forEach(e => {
    e.onclick = () => {
        // save preference to database
        var dataObject = { dark: false, files: {}, appdata: {}, apps: [] };
        if (e.id.startsWith('dark')) {
            dataObject.dark = true;
        } else {
            dataObject.dark = false;
        }
        cloud.update(
            localStorage.getItem('username'),
            localStorage.getItem('token'),
            dataObject
        );
    };
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
                setTimeout(() => {
                    transitionBootScreen(elements.bootScreen9, elements.bootScreen5);
                }, 500);
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
                            localStorage.setItem('username', elements.signupUsername.value);

                            transitionBootScreen(elements.bootScreen9, elements.bootScreen7);
                        }
                    });
            }
        });
};

function preparingDesktopProgressBar(prev) {
    transitionBootScreen(prev, elements.bootScreen8);
    progressBar(elements.progressBarInnerDesktop, () => {
        showDesktop();
    });
}
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
                elements.loginError.textContent = "Account Doesn't Exist:";
                elements.loginErrorDesc.textContent = 'Please try again.';

                elements.loginError.parentElement.classList.add('open');
                setTimeout(() => {
                    elements.loginError.parentElement.classList.remove('open');
                }, 2400);
            } else {
                localStorage.setItem('token', e.data);
                localStorage.setItem('username', elements.loginUsername.value);

                // transitionBootScreen(elements.bootScreen6, elements.bootScreen7);
                preparingDesktopProgressBar(elements.bootScreen6);
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
    removeEventListener('click', toggleFullScreen);
    if (elements.bootScreen1.classList.contains('open')) {
        document.body.requestFullscreen ? document.body.requestFullscreen() : document.body.webkitRequestFullscreen()

        transitionBootScreen(elements.bootScreen1, elements.bootScreen2, 1300);

        window.setTimeout(() => {
            bootLoader();
        }, 2100);
    }
};

function progressBar(progressBarInner, cb = () => {}) {
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
    setTimeout(() => {
        cb();
    }, (i + 1) * 50);
    return i;
}

const bootLoader = () => {
    var i = progressBar(elements.progressBarInnerBoot);
    setTimeout(() => {
        if (!localStorage.getItem('token')) {
            transitionBootScreen(elements.bootScreen2, elements.bootScreen3);
        } else {
            elements.bootScreen2.classList.remove('open');
            showDesktop();
        }
    }, (i + 1) * 50);
};