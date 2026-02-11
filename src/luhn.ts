export function isValidNPI(value: string): boolean {
  // keep digits only
  const digits = value.replace(/\D/g, "");

  // NPI must be exactly 10 digits
  if (digits.length !== 10) return false;

  // Luhn prefix required for NPI validation
  const luhnInput = "80840" + digits;

  let sum = 0;
  let shouldDouble = false;

  for (let i = luhnInput.length - 1; i >= 0; i--) {
    let digit = Number(luhnInput[i]);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}
