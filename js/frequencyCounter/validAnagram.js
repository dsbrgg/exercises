'use strict'

const assert = require('assert')

function validAnagram(str, ang) {
  if (str === ang) return true

  const freq1 = {}
  const freq2 = {}

  const a1 = str.split('')
  const a2 = ang.split('')

  a1.forEach(i => {
    freq1[i] = (freq1[i] || 0) + 1
  })

  a2.forEach(i => {
    freq2[i] = (freq2[i] || 0) + 1
  })

  return Object.entries(freq1)
    .every(([ char, freq ]) =>
      freq2[char] && freq2[char] === freq
    )
}

function validate() {
  assert(validAnagram('', ''))
  assert(!validAnagram('aaz', 'zza'))
  assert(validAnagram('anagram', 'nagaram'))
  assert(!validAnagram('rat', 'car'))
  assert(!validAnagram('awesome', 'awesom'))
  assert(validAnagram('qwerty', 'qeywrt'))
  assert(validAnagram('texttwisttime', 'timetwisttext'))
}

validate()
