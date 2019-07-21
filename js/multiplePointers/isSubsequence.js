'use strict'

const assert = require('assert')

function isSubsequence(sub, origin) {
  let p1 = 0
  let p2 = 1

  while (p2 <= sub.length - 1) {
    const firstChar = origin.indexOf(sub[p1])
    const secondChar = origin.indexOf(sub[p2])

    if (firstChar > secondChar) { return false }
    if (firstChar < 0 || secondChar < 0) { return false }

    p1 += 1
    p2 += 1
  }

  return true
}

function validate() {
  const v1 = isSubsequence('hello', 'hello world')
  const v2 = isSubsequence('sing', 'sting')
  const v3 = isSubsequence('abc', 'abracadabra')
  const v4 = isSubsequence('abc', 'acb')

  assert(v1)
  assert(v2)
  assert(v3)
  assert(!v4) // order matters
}

validate()
