export function isMatch(s: string, p: string): boolean {
  // Caso base: si el patrón está vacío
  if (p.length === 0) return s.length === 0;

  // Verificamos si el primer caracter coincide (o es '.')
  const firstMatch = s.length > 0 && (s[0] === p[0] || p[0] === ".");

  // Si el segundo caracter del patrón es '*'
  if (p.length >= 2 && p[1] === "*") {
    return (
      // Opción 1: ignorar el bloque "x*" y avanzar 2 en el patrón
      isMatch(s, p.slice(2)) ||
      // Opción 2: usar el '*' si hay coincidencia, y avanzar en s
      (firstMatch && isMatch(s.slice(1), p))
    );
  } else {
    // Si no hay '*', avanzamos en ambos si hay coincidencia
    return firstMatch && isMatch(s.slice(1), p.slice(1));
  }
}

console.log(isMatch("aab", "c*a*b"));
