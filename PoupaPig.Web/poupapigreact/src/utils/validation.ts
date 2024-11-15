export function isValidName(value: string): boolean {
  if (!value) {
    return false;
  }

  const trimmedValue = value.trim();
  const hasTwoOrMoreWords = !!trimmedValue.match(
    /[a-zA-ZéúíóáèùìòàõãñêûîôâëyüïöäA-ZÉÚÍÓÁÈÙÌÒÀÕÃÑÊÛÎÔÂËYÜÏÖÄ]+ [a-zA-ZéúíóáèùìòàõãñêûîôâëyüïöäA-ZÉÚÍÓÁÈÙÌÒÀÕÃÑÊÛÎÔÂËYÜÏÖÄ](.*)/
  );

  return hasTwoOrMoreWords && trimmedValue.length > 0;
}

export function isValidPassword(password: string): boolean {
  const reg = /^(((?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*])))(?=.{8,})/g;
  if (reg.test(password)) {
    return true;
  }

  return false;
}

export function isValidEmail(email: string): boolean {
  const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

  const x = email.trim();

  if (reg.test(x)) {
    return true;
  }

  return false;
}

export function somenteNumeros(str: string | undefined) {
  let result = str;

  // if (result) result = result.replace(/[^0-9]+/g, '');
  if (result) result = result.replace(/\D+/g, "");
  return result;
}
