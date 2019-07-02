'use strict'

// function accepts a variavle number of arguments
// and checks whether there are any duplicates among
// the arguments passed in

const assert = require('assert')

function areThereDuplicates(...args) {
  let f = 0
  let l = args.length - 1

  const unique = {}

  while(f < l) {
    if (!unique[args[f]]) unique[args[f]] = true
    if (!unique[args[l]]) unique[args[l]] = true

    ++f
    --l

    if (unique[args[f]] || unique[args[f]]) return true
  }

  return false
}

function validate() {
  const v1 = areThereDuplicates(1, 2, 3)
  const v2 = areThereDuplicates(1, 2, 2)
  const v3 = areThereDuplicates('a', 'b', 'c', 'a')

  assert(!v1)
  assert(v2)
  assert(v3)
}

validate()
