 // Get the Clientes array from index.js
 import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';
 import Clientes from './index.js';

 const SUPABASE_SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3YXRoZHFwdnh1bXR4d3Jtd2d3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5ODg4OTgyNSwiZXhwIjoyMDE0NDY1ODI1fQ.ywoRnpwVfs4deMNdkQ0I5cWjShsUJexQ0ngaKFgSkrY'
 const SUPABASE_URL = 'https://ewathdqpvxumtxwrmwgw.supabase.co'
 const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY  )

 // Get the <ul> element from the HTML
 const clientesList = document.getElementById('clientes-list');

 // Iterate through the Clientes array and create <li> elements for each item
 Clientes.forEach(cliente => {
     const li = document.createElement('li');
     li.textContent = `CODIGO: ${cliente.codigo} NOMBRE: ${cliente.nombreCliente}`;
     clientesList.appendChild(li);
 });

 
const submitButton2 = document.getElementById('submit-button');

submitButton2.addEventListener('click', function(event) {
    event.preventDefault();
    // Your code here
});

const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', async function(event) {
    event.preventDefault();

    const codigo = document.getElementById('codigo').value;
    const nombre = document.getElementById('nombreCliente').value;
    const responsable = document.getElementById('responsable').value;
    const cuit = document.getElementById('cuit').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const usuario = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log("CODIGO: ",codigo);
    console.log("NOMBRE: ",nombre);
    console.log("RESPONSABLE: ",responsable);
    console.log("CUIT: ",cuit);
    console.log("TELEFONO: ",telefono);
    console.log("EMAIL: ",email);
    console.log("Usuario: ",usuario);
    console.log("Password: ",password);

    const { data, error } = await supabase
        .from('Clientes')
        .insert([
            { codigo: codigo, nombreCliente: nombre,  responsable: responsable, cuit: cuit, telefono: telefono, email: email, username: usuario, password: password},
        ])
        .select();
     location.reload();
    // Handle the response or error here
});
