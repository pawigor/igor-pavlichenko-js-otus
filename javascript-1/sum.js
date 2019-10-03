function sum (n) {
  if (n === undefined)
    return 0

  let sum = n
  return function aSum (x) {
    if (x === undefined) {
      return sum
    }
    sum += x
    return aSum
  }
}

// All below should be true
console.log(sum() === 0)
console.log(typeof sum(1) === 'function')
console.log(sum(1)() === 1)
console.log(sum(1)(2)() === 3)
console.log(sum(1)(2)(3)() === 6)
console.log(sum(0)(-1)(+1)() === 0)