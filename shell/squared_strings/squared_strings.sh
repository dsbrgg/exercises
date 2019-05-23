#!/bin/bash

vertMirror() {
  s=$1
  p=${s//\\n/}
  r=""

  for (( i = 0; i <= ${#p} - 4; i += 4 ))
  do
    if [[ $i -eq 0 ]]; then
      r="$(echo ${p:i:4} | rev)"
    else
      r="${r}\n$(echo ${p:i:4} | rev)"
    fi
  done

  echo $r
}

horMirror() {
  p="$(echo $1 | rev)"
  r=${p//n\/\n}

  echo $p
}

oper() {
  $1 $2
}

oper $1 $2
