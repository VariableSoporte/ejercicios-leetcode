export function myAtoi(s: string): number {
  let palabra: string = s.trim();
  let signo: number = 1;
  let validacion: boolean = true;
  let retorno: string = "0";

  const validar = (data: string): number => {
    let devolver = Number(data) * signo;
    if (devolver < -2147483648) return -2147483648;
    if (devolver > 2147483647) return 2147483647;
    return devolver;
  };

  for (let i = 0; i < palabra.length; i++) {
    if ((palabra[i] == "-" || palabra[i] == "+") && validacion) {
      signo = palabra[i] == "-" ? -1 : 1;
      validacion = false;
      continue;
    }

    let value = Number(palabra[i] == " " ? "l" : palabra[i]);
    if (Number.isNaN(value)) {
      return validar(retorno);
    }
    retorno += value;
    validacion = false;
  }
  return validar(retorno);
}

console.log(myAtoi("   +0 123"));
