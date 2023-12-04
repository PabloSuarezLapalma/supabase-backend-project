import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';

const SUPABASE_SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3YXRoZHFwdnh1bXR4d3Jtd2d3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5ODg4OTgyNSwiZXhwIjoyMDE0NDY1ODI1fQ.ywoRnpwVfs4deMNdkQ0I5cWjShsUJexQ0ngaKFgSkrY'
const SUPABASE_URL = 'https://ewathdqpvxumtxwrmwgw.supabase.co'
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY  )


export  async function obtenerCienPrimerosClientes() {
    try {
        let { data: Clientes, error } = await supabase
            .from('Clientes')
            .select('*')
            .range(0, 100)
        if (error) {
            throw new Error(error.message);
        }
        let listaClientes = Clientes.map(item => {return item;});
        return listaClientes;
    } catch (error) {
        console.error(error);
    }
}

export  async function agregarCliente(codigo, nombreCliente, responsable, cuit, telefono, email, username, password){
    let code=0;
    try {
        const { data, error } = await supabase
            .from('Clientes')
            .insert([
                {codigo:codigo, nombreCliente:nombreCliente, responsable:responsable, cuit:cuit, telefono:telefono, email:email, username:username, password:password},
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

export  async function borrarCliente(codigo){
    let code=0;
    try{
        const { error } = await supabase
            .from('Clientes')
            .delete()
            .eq('codigo', codigo)
        if (error) {
            code=1;
            throw new Error(error.message);}
        }
    catch (error){
        code=1;
        console.error(error);
    }
    return code
}

export  async function buscarCliente(nombreCliente){
    try{
        let { data: Movimientos, error } = await supabase
        .from('Clientes')
        .select("*")
        .ilike('nombreCliente', nombreCliente)
        if (error) {
            throw new Error(error.message);}   
        let listaFiltrada = Movimientos.map(item => {return item;});
        return listaFiltrada; 
    }
    catch (error){
       console.log(error)
}
}

export async function obtenerCodigoCliente(nombreCliente){
    try{
        let { data: Clientes, error } = await supabase
        .from('Clientes')
        .select("*")
        .ilike('nombreCliente', nombreCliente)
        if (error) {
            throw new Error(error.message);}   
        let listaFiltrada = Clientes.map(item => {return item;});
        return listaFiltrada[0].codigo; 
    }
    catch (error){
       console.log(error)
}
}

export  async function actualizarCliente(codigo,columnaModificar, nuevoValor) {
    let code=0;
    try {
        const { data, error } = await supabase
            .from('Clientes')
            .update({ [columnaModificar]: nuevoValor })
            .eq("codigo", codigo)
            .select();

        if (error) {
            code=1;
            console.error("Error updating Cliente:", error.message);
        } else {
            code=1;
            console.log("Cliente updated successfully:", data);
        }
    } catch (error) {
        code=1;
        console.error("Unexpected error:", error.message);
    }
    return code
}



//!Esta es la forma de acceder a los datos de la función, como es asíncrono siempre el resultado es una Promise, por lo que se debe acceder de la siguiente manera para poder manipular los datos

/*
filtrarCliente("apacuero10").then(resultado=> {
    if (Array.isArray(resultado)) {
        // Itera sobre cada elemento del array
        resultado.forEach(elemento => {
            console.log("Código:", elemento.codigo);
            console.log("Nombre del Cliente:", elemento.nombreCliente);
            console.log("Responsable:", elemento.responsable);
            console.log("Cuit:", elemento.cuit);
            console.log("Teléfono:", elemento.telefono);
            // ... y así sucesivamente para otros campos
        });
    } else {
        console.error("El resultado no es un array.");
    }
})
.catch(error => {
    console.error("Error en la promesa:", error);
});
*/
// Example usage
//updateCliente("FEP","password","fepasa");
