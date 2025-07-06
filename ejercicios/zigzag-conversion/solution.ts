export function convert(s: string, numRows: number): string {
  if (s.length <= 2) return s;
  if(numRows <= 1) return s;
  let texto_array = s.split("");
  let puntero: number = 0;
  let punteros: number = 0;
  let lista_punteros: number[] = [];
  while (punteros < s.length) {
    lista_punteros.push(punteros);
    punteros += numRows + (numRows - 2);
  }
  let recorrer = lista_punteros.map((l) => l);

  puntero = numRows + (numRows - 4);
  for (let i = 1; i < numRows; i++) {
    recorrer.forEach((l) => {
      if (l + i <= s.length - 1) {
        lista_punteros.push(l + i);
        if ( puntero > 0 && (l+i+puntero) <= s.length-1) {
          lista_punteros.push(l + i + puntero);
        }
      }
    });
    puntero = puntero - 2;
  }
  let result = "";
  lista_punteros.forEach((p) => {
    result += texto_array[p];
  });
  console.log(result);
  return result;
}

convert("ABCD", 3);
