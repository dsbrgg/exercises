'use strict'

const assert = require('assert')

function countUniqueValues(arr) {
  let f = 0
  let l = arr.length - 1

  const unique = {}

  while(f < l) {
    const isFUnique = arr[f] in unique
    const isLUnique = arr[l] in unique

    if (!isFUnique) unique[arr[f]] = true
    if (!isLUnique) unique[arr[l]] = true

    ++f
    --l
  }

  return Object.keys(unique).length
}

function validate() {
  const hasToBeTwo = countUniqueValues([ 1, 1, 1, 1, 1, 1, 2 ])
  const hasToBeSeven = countUniqueValues([ 1, 2, 3, 4, 4, 4, 7, 12, 12, 14 ])
  const hasToBeZero = countUniqueValues([])
  const hasToBeFour = countUniqueValues([ -2, -1, -1, 0, 1 ])

  assert(hasToBeTwo === 2)
  assert(hasToBeSeven === 7)
  assert(hasToBeZero === 0)
  assert(hasToBeFour === 4)
}

validate()
