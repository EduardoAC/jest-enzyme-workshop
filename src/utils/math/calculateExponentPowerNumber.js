export function calculateExponentPowerNumber(x, y) {
  let result = x
  for(;y > 0; y--) {
    result = result * x
  }
  return result
}