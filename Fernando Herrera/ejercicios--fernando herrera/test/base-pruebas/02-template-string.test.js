import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en template-string', ()=>{
    test('getSaludo debe de retornar "Hola Fernando"', ()=>{

        const name ='Fernando';
        const message = getSaludo(name);

        Expect(message).toBe(`Hola ${ name }`)
    });
})