export function isPalindrome(x: number): boolean {
    if (x < 0) return false;
    let numero = x.toString();
    if ( numero.length == 1) return true;
    let inicio = 0;
    let fin = numero.length -1;
    while( fin > inicio ){
        if (numero[inicio] != numero[fin]) return false;
        inicio ++;
        fin --;
    }
    return true;
};
