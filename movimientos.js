import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';

const SUPABASE_SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3YXRoZHFwdnh1bXR4d3Jtd2d3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5ODg4OTgyNSwiZXhwIjoyMDE0NDY1ODI1fQ.ywoRnpwVfs4deMNdkQ0I5cWjShsUJexQ0ngaKFgSkrY'
const SUPABASE_URL = 'https://ewathdqpvxumtxwrmwgw.supabase.co'
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY  )

async function getMovimientos() {
    try {
        let { data: Movimientos, error } = await supabase
            .from('Movimientos')
            .select('*');

        if (error) {
            throw new Error(error.message);
        }

        let listaDeMovimientos = Movimientos.map(item => {
            return item;});
        return listaDeMovimientos;
    } catch (error) {
        console.error(error);
    }
}
//?Descomentar para ver por consola el listado de movimientos
//const listaDeMovimientos = getMovimientos();
//console.log(listaDeMovimientos);

async function insertMovimiento(codigo, fechaHora, nroRemito, estado, responsable, transporte, chasis, chofer, acoplado, costo, idMercaderia){
    let code=0;
    try {
        const { data, error } = await supabase
            .from('Movimientos')
            .insert([
                { codBWS: codigo, fechaHora: fechaHora, nroRemito: nroRemito, estado: estado, nombreResponsable: responsable, descripTransporte: transporte, chasis: chasis, chofer: chofer, acoplado: acoplado, costo: costo, idMercaderia: idMercaderia},
            ])
            .select()
        if (error) {
            code=1;
            throw new Error(error.message);
        }
    } catch (error) {
        code=1
        console.error(error);
    }
    return code
}

async function deleteMovimiento(codigoBWS){
    let code=0;
    try{
        const { error } = await supabase
            .from('Movimientos')
            .delete()
            .eq('codBWS', codigoBWS)
        if (error) {
            code=1;
            throw new Error(error.message);}
        }
    catch (error){
        code=1;
        console.error(error);
    }
}

async function filtrarMovimiento(codBWS){
    let code=0;
    try{
        let { data: Movimientos, error } = await supabase
        .from('Movimientos')
        .select("*")
        // Filters
        .ilike('codBWS', codBWS)
    }
    catch (error){
       code=1;
       console.log(error)
}
}

//deleteMovimiento("PBC-BJ1-3212");

//?Si se descomenta esto para probar por consola, cambiar el valor del codBWS, porque sino no deja hacer el insert porque existen claves primarias duplicadas
console.log(insertMovimiento("PBC-BJ1-3212","2023-11-04T01:48" ,"123456789","EGRESO","Juan Perez","Transporte 1","Chasis 1","Chofer 1","Acoplado 1",3,"1001"));

