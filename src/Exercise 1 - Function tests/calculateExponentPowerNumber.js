// Polyfill for Math.pow(base, exponent)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow

export function calculateExponentPowerNumber(x, y) {
  if(typeof x !== 'number' || typeof y !== 'number'){
    throw new Error('Expected a number')
  }
  return Math.pow(x, y)
}