import { reverse } from "./solucion"

describe ( "reverse integer test", ()=>{
    it ("Entrada 123 output 321", ()=>{
        expect(reverse(123)).toBe(321)
    })
    it ("Entrada -123 output -321", ()=>{
        expect(reverse(-123)).toBe(-321)
    })
    it ("Entrada 120 output 21", ()=>{
        expect(reverse(120)).toBe(21)
    })
    it ("Entrada 1534236469 output 0", ()=>{
        expect(reverse(1534236469)).toBe(0)
    })

})