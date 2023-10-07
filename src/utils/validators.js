export const validateEmail = (email) => {
  //return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
};

export const validatePostalCode = (code) => {
  return /(^\d{5}$)/.test(code);
};

export const validatePhoneNumber = (number) => {
  return /^\((\d{3})\)[- ](\d{3})[- ](\d{2})[- ](\d{2})$/.test(number);
};
