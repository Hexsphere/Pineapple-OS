var wrappers = {};
wrappers.getSession = function(username, password) {
  return new Promise((resolve, reject) => {
    fetch('https://linen-adapter-251001.appspot.com/session', {
      method: 'POST',
      body: JSON.stringify({ username: username, password: password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(e => {
        return e.json();
      })
      .then(e => {
        resolve(e);
      })
      .catch(e => reject(e));
  });
};

wrappers.newSession = function(username, password) {
  return new Promise((resolve, reject) => {
    fetch('https://linen-adapter-251001.appspot.com/session', {
      method: 'DELETE',
      body: JSON.stringify({ username: username, password: password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(e => {
        return e.json();
      })
      .then(e => {
        resolve(e);
      })
      .catch(e => reject(e));
  });
};

wrappers.newAccount = function(username, password) {
  return new Promise((resolve, reject) => {
    fetch('https://linen-adapter-251001.appspot.com/', {
      method: 'PUT',
      body: JSON.stringify({ username: username, password: password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(e => {
        return e.json();
      })
      .then(e => {
        resolve(e);
      })
      .catch(e => reject(e));
  });
};

wrappers.deleteAccount = function(username, password) {
  return new Promise((resolve, reject) => {
    fetch('https://linen-adapter-251001.appspot.com/', {
      method: 'DELETE',
      body: JSON.stringify({ username: username, password: password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(e => {
        return e.json();
      })
      .then(e => {
        resolve(e);
      })
      .catch(e => reject(e));
  });
};

wrappers.update = function(username, password, data) {
  return new Promise((resolve, reject) => {
    fetch('https://linen-adapter-251001.appspot.com/update', {
      method: 'PUT',
      body: JSON.stringify({
        username: username,
        password: password,
        data: data
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(e => {
        return e.json();
      })
      .then(e => {
        resolve(e);
      })
      .catch(e => reject(e));
  });
};

wrappers.get = function(username, password) {
  return new Promise((resolve, reject) => {
    fetch('https://linen-adapter-251001.appspot.com/', {
      method: 'POST',
      body: JSON.stringify({ username: username, password: password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(e => {
        return e.json();
      })
      .then(e => {
        resolve(e);
      })
      .catch(e => reject(e));
  });
};

wrappers.changePassword = function(username, password, newpw) {
  return new Promise((resolve, reject) => {
    fetch('https://linen-adapter-251001.appspot.com/password', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password,
        newPassword: newpw
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(e => {
        return e.json();
      })
      .then(e => {
        resolve(e);
      })
      .catch(e => reject(e));
  });
};

module.exports = wrappers;
