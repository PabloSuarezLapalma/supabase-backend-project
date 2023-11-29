import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';
import Clientes from './index.js';

const SUPABASE_SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3YXRoZHFwdnh1bXR4d3Jtd2d3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5ODg4OTgyNSwiZXhwIjoyMDE0NDY1ODI1fQ.ywoRnpwVfs4deMNdkQ0I5cWjShsUJexQ0ngaKFgSkrY'
const SUPABASE_URL = 'https://ewathdqpvxumtxwrmwgw.supabase.co'
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY  )

//!Modificar para que permita hacer el insert dentro de la tabla Movimientos con sus campos respectivos
const { data, error } = await supabase
.from('Movimientos')
.insert([
    { codigo: codigo, nombreCliente: nombre,  responsable: responsable, cuit: cuit, telefono: telefono, email: email, username: usuario, password: password},
])
.select();
location.reload();

//TODO: Método para devolver un listado de movimientos en formato JSON. 
//?Librería Jsonify podría servir para esto.