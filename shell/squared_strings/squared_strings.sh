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
  s=$1
  p=${s//,/}
  a=()
  r=""

  for (( i = ${#p}; i >= 0; i -= 4 ))
  do
    if [[ $i -gt 0 ]]; then
      a+=(${p:i-4:4})
    fi
  done

  l=${#a[@]}

  for e in "${a[@]}";
  do
    if [[ $e != ${a[@]:l-1} ]]; then
      r="${r}${e}\n"
    else
      r="${r}${e}"
    fi
  done

  echo $r
}

oper() {
  $1 $2
}

oper $1 $2
