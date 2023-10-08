export const validateEmail = (email) => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
};

export const validatePostalCode = (code) => {
  return /(^\d{5}$)/.test(code);
};

export const validatePhoneNumber = (number) => {
  return /^\((\d{3})\)[- ](\d{3})[- ](\d{2})[- ](\d{2})$/.test(number);
};

export const isNumericInput = (event) => {
  const code = event.keyCode;
  return ((code >= 48 && code <= 57) || (code >= 96 && code <= 105)); //allow number
};

export const allowedKey = (event) => {
  const code = event.keyCode;
  return (event.shiftKey === true || code === 35 || code === 36) || //allow Shift, Home, End
    (code === 8 || code === 9 || code === 13 || code === 46) || //allow Backspace, Tab, Enter, Delete
    (code > 36 && code < 41) || //allow left, up, right, down
    (// Allow Ctrl/Command + A,C,V,X,Z
      (event.ctrlKey === true || event.metaKey === true) &&
      (code === 65 || code === 67 || code === 86 || code === 88 || code === 90)
    )
};

export const enforceFormat = (event) => {
  if (!isNumericInput(event) && !allowedKey(event)) {
    event.preventDefault();
  }
};

export const formatPhoneNumber = (event) => {
  if (allowedKey(event)) {return;}
  const input = event.target.value.replace(/\D/g,'').substring(0,10); //first ten digits of input
  const zip = input.substring(0,3);
  const first = input.substring(3,6);
  const middle = input.substring(6,8);
  const last = input.substring(8,9);

  if(input.length > 8){event.target.value = `(${zip}) ${first}-${middle}-${last}`;}
  else if(input.length > 6){event.target.value = `(${zip}) ${first}-${middle}`;}
  else if(input.length > 3){event.target.value = `(${zip}) ${first}`;}
  else if(input.length > 0){event.target.value = `(${zip}`;}
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