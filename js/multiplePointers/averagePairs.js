'use strict'

// Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array
// where the average of the pair equals the target average

const assert = require('assert')

function averagePairs(arr, avg) {
  let f = 0
  let s = arr.length - 1

  while(f < s) {
    const p1 = arr[f]
    const p2 = arr[s]
    const calc = (p1 + p2) / 2

    if (calc === avg) return true

    f += (calc < avg) ? 1 : 0
    s -= (calc > avg) ? 1 : 0
  }

  return false
}

function validate() {
  const v1 = averagePairs([ 1, 2, 3 ], 2.5)
  const v2 = averagePairs([ 1, 3, 3, 5, 6, 7, 10, 12, 19 ], 8)
  const v3 = averagePairs([ -1, 0, 3, 4, 5, 6 ], 4.1)
  const v4 = averagePairs([], 4)

  assert(v1)
  assert(v2)
  assert(!v3)
  assert(!v4)
}

validate()
