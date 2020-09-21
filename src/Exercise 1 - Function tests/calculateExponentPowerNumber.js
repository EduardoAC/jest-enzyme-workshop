// Polyfill for Math.pow(base, exponent)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow

export function calculateExponentPowerNumber(x, y) {
  let result = x
  for(;y > 0; y--) {
    result = result * x
  }
  return result
}