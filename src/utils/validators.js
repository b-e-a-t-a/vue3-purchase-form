export const validateEmail = (email) => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
};

export const validatePostalCode = (code) => {
  return /(^\d{5}$)/.test(code);
};

export const validatePhoneNumber = (number) => {
  return /^\((\d{3})\)[- ](\d{3})[- ](\d{2})[- ](\d{2})$/.test(number);
};


export const formatCardNumber = (event) => {
  let code = (event.which) ? event.which : event.keyCode;
  if ((code > 31 && (code < 48 || code > 57)) && code !== 46) {
    event.preventDefault();
  } else {
    event.target.value = event.target.value.split("-").join(""); //remove hyphens
    event.target.value ?
      event.target.value = event.target.value.match(/.{1,4}/g).join("-") : '';
  }
}

export const validateSecurityCode = (code) => {
  return /^[0-9]{3}$/.test(code);
};

export const validateExpirationDate = (month, year) => {
  const fullYear = new Date().getFullYear();
  const currentYear = Number(fullYear.toString().slice(-2));
  const currentMonth = new Date().getMonth() + 1;

  if (year > currentYear) {
      return true;
  } else if (year === currentYear && month >= currentMonth) {
      return true;
  } else return false;
};

export const formatExpiredDate = (event) => {
  let code = event.keyCode;
  let allowedKeys = [8, 37, 38, 39, 40]; //delete key & arrow keys
  if (allowedKeys.indexOf(code) !== -1) return;

  event.target.value = event.target.value.replace(
    /^([1-9]\/|[2-9])$/g, '0$1/' //single month with dash
  ).replace(
    /^(0[1-9]|1[0-2])$/g, '$1/' //adding dash
  ).replace(
    /^([0-1])([3-9])$/g, '0$1/$2' //if more than 12 => 01/3
  ).replace(
    /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' //if big number 160 => 01/60
  ).replace(
    /^([0]+)\/|[0]+$/g, '0' //handle 0 and 00
  ).replace(
    /[^\d\/]|^[\/]*$/g, '' //only digits and dash
  ).replace(
    /\/\//g, '/' //only one dash
  );
};