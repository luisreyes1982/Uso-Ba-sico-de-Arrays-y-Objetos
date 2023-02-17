// // 1. Crear la estructura de datos mediante arreglos y objetos. Debe crear 1 arreglo por
// cada listado (Radiología, Traumatología y Dental) y 1 objeto por cada fila de
// información que contengan los listados, considerando las propiedades establecidas
// en la descripción.

// Arreglo de radiologia con los datos
let radiologia = [{
    consulta1: {
        hora: "11:00",
        especialista: "IGNACIO SCHULZ",
        paciente: "FRANCIAS ROJAS",
        rut: "9878782-1",
        prevision: "FONASA"
    },
    consulta2: {
        hora: "11:30",
        especialista: "FEDERICO SUBERCASEAUX",
        paciente: "PAMELA ESTRADA",
        rut: "15345241-3",
        prevision: "ISAPRE"
    },
    consulta3: {
        hora: "15:00",
        especialista: "FERNANDO WURTHZ",
        paciente: "ARMANDO LUNA",
        rut: "16445345-9",
        prevision: "ISAPRE"
    },
    consulta4: {
        hora: "15:30",
        especialista: "ANA MARIA GODOY",
        paciente: "MANUEL GODOY",
        rut: "17666419-0",
        prevision: "FONASA"
    },
    consulta5: {
        hora: "16:00",
        especialista: "PATRICIA SUAZO",
        paciente: "RAMON ULLOA",
        rut: "14989389-K",
        prevision: "FONASA"
    }
}
];
// Arreglo de traumatologia con los datos
let traumatologia = [{
    consulta1: {
        hora: "8:00",
        especialista: "MARIA PAZ ALTUZARRA",
        paciente: "PAULA SANCHEZ",
        rut: "15554774-5",
        prevision: "FONASA"
    },
    consulta2: {
        hora: "10:00",
        especialista: "RAUL ARAYA",
        paciente: "ANGÉLICA NAVAS",
        rut: "15444147-9",
        prevision: "ISAPRE"
    },
    consulta3: {
        hora: "10:30",
        especialista: "MARIA ARRIAGADA",
        paciente: "ANA KLAPP",
        rut: "17879423-9",
        prevision: "ISAPRE"
    },
    consulta4: {
        hora: "11:00",
        especialista: "ALEJANDRO BADILLA",
        paciente: "FELIPE MARDONES",
        rut: "1547423-6",
        prevision: "ISAPRE"
    },
    consulta5: {
        hora: "11:30",
        especialista: "CECILIA BUDNIK",
        paciente: "DIEGO MARRE",
        rut: "16554741-K",
        prevision: "FONASA"
    },
    consulta6: {
        hora: "12:00",
        especialista: "ARTURO CAVAGNARO",
        paciente: "CECILIA MENDEZ",
        rut: "9747535-8",
        prevision: "ISAPRE"
    },
    consulta7: {
        hora: "12:30",
        especialista: "ANDRES KANACRI",
        paciente: "MARCIAL SUAZO",
        rut: "11254785-5",
        prevision: "ISAPRE"
    },
}
];

// Arreglo de dental con los datos
let dental = [{
    consulta1: {
        hora: "8:30",
        especialista: "ANDREA ZUÑIGA",
        paciente: "MARCELA RETAMAL",
        rut: "11123425-6",
        prevision: "ISAPRE"
    },
    consulta2: {
        hora: "11:00",
        especialista: "MARIA PIA ZAÑARTU",
        paciente: "ANGEL MUÑOZ",
        rut: "9878789-2",
        prevision: "ISAPRE"
    },
    consulta3: {
        hora: "11:30",
        especialista: "SCARLETT WITTING ",
        paciente: "MARIO KAST",
        rut: "7998789-5",
        prevision: "FONASA"
    },
    consulta4: {
        hora: "13:00",
        especialista: "FRANCISCO VON TEUBER",
        paciente: "KARIN FERNANDEZ",
        rut: "18887662-K",
        prevision: "FONASA"
    },
    consulta5: {
        hora: "13:30",
        especialista: "EDUARDO VIÑUELA",
        paciente: "HUGO SANCHEZ",
        rut: "17665461-4",
        prevision: "FONASA"
    },
    consulta6: {
        hora: "14:00",
        especialista: "RAQUEL VILLASECA",
        paciente: "ANA SEPULVEDA",
        rut: "14441281-0",
        prevision: "ISAPRE"
    }
}
];

// PRIMERA Y ULTIMA ATENCIÓN

// // 2. Mostrar por pantalla la primera y última atención de cada listado, desplegando el
// nombre del paciente junto con la previsión, separados por un guión (utilizar índices
//     de arreglos para esto).
let primRadio = " "
for (let i = 0; i < radiologia.length; i++) {
    primRadio += `
    Primera atención: ${radiologia[i].consulta1.paciente}-${radiologia[i].consulta1.prevision} |
    Ultima atención: ${radiologia[i].consulta5.paciente}-${radiologia[i].consulta5.prevision}
    `
    document.getElementById("primeraRadio").innerHTML = primRadio;
}

let primTrauma = " "
for (let i = 0; i < traumatologia.length; i++) {
    primTrauma += `
    Primera atención: ${traumatologia[i].consulta1.paciente}-${traumatologia[i].consulta1.prevision} |
    Ultima atención: ${traumatologia[i].consulta5.paciente}-${traumatologia[i].consulta5.prevision}
    `
    document.getElementById("primeraTrauma").innerHTML = primTrauma;
}

let primDent = " "
for (let i = 0; i < dental.length; i++) {
    primDent += `
    Primera atención: ${dental[i].consulta1.paciente}-${dental[i].consulta1.prevision} |
    Ultima atención: ${dental[i].consulta5.paciente}-${dental[i].consulta5.prevision}
    `
    document.getElementById("primeraDental").innerHTML = primDent;
}

// Primera tabla
let texto1 =
    "<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></tr>";

for (let i = 0; i < radiologia.length; i++) {
    texto1 += `<tr>
<td>${radiologia[i].consulta1.hora}</td>
<td>${radiologia[i].consulta1.especialista}</td>
<td>${radiologia[i].consulta1.paciente}</td>
<td>${radiologia[i].consulta1.rut}</td>
<td>${radiologia[i].consulta1.prevision}</td>

</tr>

<tr>
<td>${radiologia[i].consulta2.hora}</td>
<td>${radiologia[i].consulta2.especialista}</td>
<td>${radiologia[i].consulta2.paciente}</td>
<td>${radiologia[i].consulta2.rut}</td>
<td>${radiologia[i].consulta2.prevision}</td>

</tr>

<tr>
<td>${radiologia[i].consulta3.hora}</td>
<td>${radiologia[i].consulta3.especialista}</td>
<td>${radiologia[i].consulta3.paciente}</td>
<td>${radiologia[i].consulta3.rut}</td>
<td>${radiologia[i].consulta3.prevision}</td>

</tr>

<tr>
<td>${radiologia[i].consulta4.hora}</td>
<td>${radiologia[i].consulta4.especialista}</td>
<td>${radiologia[i].consulta4.paciente}</td>
<td>${radiologia[i].consulta4.rut}</td>
<td>${radiologia[i].consulta4.prevision}</td>

</tr>

<tr>
<td>${radiologia[i].consulta5.hora}</td>
<td>${radiologia[i].consulta5.especialista}</td>
<td>${radiologia[i].consulta5.paciente}</td>
<td>${radiologia[i].consulta5.rut}</td>
<td>${radiologia[i].consulta5.prevision}</td>

</tr>`;
}

// Segunda tabla
let texto2 =
    "<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></tr>";

for (let i = 0; i < traumatologia.length; i++) {
    texto2 += `<tr>
<td>${traumatologia[i].consulta1.hora}</td>
<td>${traumatologia[i].consulta1.especialista}</td>
<td>${traumatologia[i].consulta1.paciente}</td>
<td>${traumatologia[i].consulta1.rut}</td>
<td>${traumatologia[i].consulta1.prevision}</td>

</tr>

<tr>
<td>${traumatologia[i].consulta2.hora}</td>
<td>${traumatologia[i].consulta2.especialista}</td>
<td>${traumatologia[i].consulta2.paciente}</td>
<td>${traumatologia[i].consulta2.rut}</td>
<td>${traumatologia[i].consulta2.prevision}</td>

</tr>

<tr>
<td>${traumatologia[i].consulta3.hora}</td>
<td>${traumatologia[i].consulta3.especialista}</td>
<td>${traumatologia[i].consulta3.paciente}</td>
<td>${traumatologia[i].consulta3.rut}</td>
<td>${traumatologia[i].consulta3.prevision}</td>

</tr>

<tr>
<td>${traumatologia[i].consulta4.hora}</td>
<td>${traumatologia[i].consulta4.especialista}</td>
<td>${traumatologia[i].consulta4.paciente}</td>
<td>${traumatologia[i].consulta4.rut}</td>
<td>${traumatologia[i].consulta4.prevision}</td>

</tr>

<tr>
<td>${traumatologia[i].consulta5.hora}</td>
<td>${traumatologia[i].consulta5.especialista}</td>
<td>${traumatologia[i].consulta5.paciente}</td>
<td>${traumatologia[i].consulta5.rut}</td>
<td>${traumatologia[i].consulta5.prevision}</td>

</tr>

<tr>
<td>${traumatologia[i].consulta6.hora}</td>
<td>${traumatologia[i].consulta6.especialista}</td>
<td>${traumatologia[i].consulta6.paciente}</td>
<td>${traumatologia[i].consulta6.rut}</td>
<td>${traumatologia[i].consulta6.prevision}</td>

</tr>
 
<tr>
<td>${traumatologia[i].consulta7.hora}</td>
<td>${traumatologia[i].consulta7.especialista}</td>
<td>${traumatologia[i].consulta7.paciente}</td>
<td>${traumatologia[i].consulta7.rut}</td>
<td>${traumatologia[i].consulta7.prevision}</td>

</tr>`;
};

// Tercera tabla
let texto3 =
    "<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></tr>";

for (let i = 0; i < dental.length; i++) {
    texto3 += `<tr>
<td>${dental[i].consulta1.hora}</td>
<td>${dental[i].consulta1.especialista}</td>
<td>${dental[i].consulta1.paciente}</td>
<td>${dental[i].consulta1.rut}</td>
<td>${dental[i].consulta1.prevision}</td>

</tr>

<tr>
<td>${dental[i].consulta2.hora}</td>
<td>${dental[i].consulta2.especialista}</td>
<td>${dental[i].consulta2.paciente}</td>
<td>${dental[i].consulta2.rut}</td>
<td>${dental[i].consulta2.prevision}</td>

</tr>

<tr>
<td>${dental[i].consulta3.hora}</td>
<td>${dental[i].consulta3.especialista}</td>
<td>${dental[i].consulta3.paciente}</td>
<td>${dental[i].consulta3.rut}</td>
<td>${dental[i].consulta3.prevision}</td>

</tr>

<tr>
<td>${dental[i].consulta4.hora}</td>
<td>${dental[i].consulta4.especialista}</td>
<td>${dental[i].consulta4.paciente}</td>
<td>${dental[i].consulta4.rut}</td>
<td>${dental[i].consulta4.prevision}</td>

</tr>

<tr>
<td>${dental[i].consulta5.hora}</td>
<td>${dental[i].consulta5.especialista}</td>
<td>${dental[i].consulta5.paciente}</td>
<td>${dental[i].consulta5.rut}</td>
<td>${dental[i].consulta5.prevision}</td>

<tr>
<td>${dental[i].consulta6.hora}</td>
<td>${dental[i].consulta6.especialista}</td>
<td>${dental[i].consulta6.paciente}</td>
<td>${dental[i].consulta6.rut}</td>
<td>${dental[i].consulta6.prevision}</td>

</tr>`;
}

document.getElementById("cuerpo-tabla1").innerHTML = texto1;
document.getElementById("cuerpo-tabla2").innerHTML = texto2;
document.getElementById("cuerpo-tabla3").innerHTML = texto3;