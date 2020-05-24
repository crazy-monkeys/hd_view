const expiredKey = '__expires__';

export const setStorage = (key, value, expired) => {
  localStorage.setItem(key, encodeURIComponent(JSON.stringify(value)));
  if (expired) {
    localStorage.setItem(`${key}${expiredKey}`, Date.now() + (1000 * 60 * expired));
  }
};

export const getStorage = key => {
  const now = Date.now();
  const expired = localStorage.getItem(`${key}${expiredKey}`) || now + 1;
  if (now >= expired) {
    localStorage.removeItem(key);
    localStorage.removeItem(`${key}${expiredKey}`);
    return null;
  }
  try {
    return JSON.parse(decodeURIComponent(localStorage.getItem(key)));
  } catch (error) {
    return null;
  }
};

export const setSessionStorage = (key, value, expired) => {
  sessionStorage.setItem(key, encodeURIComponent(JSON.stringify(value)));
  if (expired) {
    sessionStorage.setItem(`${key}${expiredKey}`, Date.now() + (1000 * 60 * expired));
  }
};

export const getSessionStorage = key => {
  const now = Date.now();
  const expired = sessionStorage.getItem(`${key}${expiredKey}`) || now + 1;
  if (now >= expired) {
    sessionStorage.removeItem(key);
    sessionStorage.removeItem(`${key}${expiredKey}`);
    return null;
  }
  try {
    return JSON.parse(decodeURIComponent(sessionStorage.getItem(key)));
  } catch (error) {
    return null;
  }
};
