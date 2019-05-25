#!/bin/bash

vertMirror() {
  s=$1
  l=$(echo $1 | egrep -o '(\w*)' | tr -d '\n')
  p=${s//,/}
  r=""

  for (( i = 0; i <= ${#p} - ${#l}; i += ${#l} ))
  do
    if [[ $i -eq 0 ]]; then
      r="$(echo ${p:i:${#l}} | rev)"
    else
      r="${r}\r$(echo ${p:i:${#l}} | rev)"
    fi
  done

  echo $r
}

horMirror() {
  s=$1
  p=${s//,/}
  l=$(echo $1 | egrep -o '(\w*)' | tr -d '\n')
  a=()
  r=""

  for (( i = ${#p}; i >= 0; i -= ${#l} ))
  do
    if [[ $i -gt 0 ]]; then
      a+=(${p:i-${#l}:${#l}})
    fi
  done

  al=${#a[@]}

  for e in "${a[@]}";
  do
    if [[ $e != ${a[@]:al-1} ]]; then
      r="${r}${e}\r"
    else
      r="${r}${e}"
    fi
  done

  echo $r
}

oper() {
  $1 $2
}
# Solution found, way better
# vertMirror()
# {
#   out=""
#   for a in $(echo $1 | tr ',' ' '); do
#     out=$out'\r'$(echo $a | rev)
#   done
#   echo -e $out
# }
# horMirror(){ vertMirror $1 $2 | rev; }
# oper(){ eval $1 $2; }
# oper $1 $2

oper $1 $2
