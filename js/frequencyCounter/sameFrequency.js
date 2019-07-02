'use strict'

// Given two positive integers, find out if
// the two numbers have the same frequency of digits.

const assert = require('assert')

function sameFrequency(fi, si) {
  const fis = fi.toString().split('')
  const sis = si.toString().split('')

  if (fis.length !== sis.length) return false

  const f1 = {}
  const f2 = {}

  fis.forEach((i, p) => {
    const s = sis[p]

    f1[i] = (f1[i] || 0) + 1
    f2[s] = (f2[s] || 0) + 1
  })

  return Object
    .keys(f1)
    .every(k => f2[k] && f1[k] === f2[k])
}

function validate() {
  const s1 = sameFrequency(182, 281)
  const s2 = sameFrequency(34, 14)
  const s3 = sameFrequency(3589578, 5879385)
  const s4 = sameFrequency(22, 222)

  assert(s1)
  assert(!s2)
  assert(s3)
  assert(!s4)
}

validate()
