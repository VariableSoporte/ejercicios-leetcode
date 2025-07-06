/* hay dos formas de hacerlo, esta es la intuitiva pero tiene un orden de complejidad O(n^3)
export function longestPalindrome(s: string): string {
  let list = s.split("");
  let posI = 0;
  let posF = 0;
  let tamanio = list.length;

  for (let i = tamanio; i > 0; i--) {
    //se define posiciones iniciales que van a ir recorriendo puesto a puesto
    posI = 0;
    posF = posI + i;
    for (let j = tamanio - i; j >= 0; j--) {
      let sublista = list.slice(posI, posF); //sacamos una sublistado
      let lr = sublista.join("");
      let rl = sublista.reverse().join("");

      if (lr == rl) {
        return lr;
      }
      // recorremos un espacio hasta llegar al final del arreglo
      posI++;
      posF++;
    }
  }
  return s;
}
*/

//esta funcion busca los palindromos desde su centro y van creciendo
export function longestPalindrome(s: string): string {
  if (s.length < 2) return s;

  let start = 0;
  let maxLen = 1;

  const expandFromCenter = (left: number, right: number): void => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currentLen = right - left + 1;
      if (currentLen > maxLen) {
        maxLen = currentLen;
        start = left;
      }
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    expandFromCenter(i, i);
    expandFromCenter(i, i + 1);
  }

  return s.substring(start, start + maxLen);
}

/*
console.log(
  longestPalindrome(
    "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"
  )
);
*/