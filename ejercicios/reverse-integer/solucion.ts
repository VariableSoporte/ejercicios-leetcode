export function reverse(x: number): number {
  let signo = 1;
  let numero = x;
  if (x < 0) {
    numero *= -1;
    signo = -1;
  }
  let numeros = numero.toString().split("");
  let nuevo_numero = "";
  for (let i = numeros.length - 1; i >= 0; i--) {
    nuevo_numero += numeros[i];
  }
  let retorno = Number(nuevo_numero) * signo;
  if (retorno >= (-2) ** 31 && retorno <= 2 ** 31 - 1) {
    return retorno;
  }
  return 0;
}

//console.log(reverse(123));
