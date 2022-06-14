//Variables<>
const marca =  document.querySelector('#marca');
const year =  document.querySelector('#year');
const minimo =  document.querySelector('#minimo');
const maximo =  document.querySelector('#maximo');
const puertas =  document.querySelector('#puertas');
const transmision =  document.querySelector('#transmision');
const color =  document.querySelector('#color');
const resultado = document.querySelector('#resultado');


//Contenedor para los resultados
const max = new Date().getFullYear();
const min = max - 10


//Generar un objeto con la buscqueda
const datosBusqueda = {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : '',

}

// eventos
document.addEventListener('DOMContentLoaded',()=>{
    mostrarAutos(autos); //Mustra los automoviles al cargar

    //Llena las opciones de los años
    llenarSelect();

})
// Event listaner para los select de busqueda
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});
year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;
    filtrarAuto();
});
minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
});
maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
});
puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
    filtrarAuto();
});
transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});
color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
    console.log(datosBusqueda);
});




// Funciones
function mostrarAutos(autos){
    limpiarHTLM();//Elimina el HTML previo
    autos.forEach(auto => {

        const { marca, modelo, year, transmision, precio, puertas, color} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}

        `;

        // insertar en el html
        resultado.appendChild(autoHTML)
    })
}
//Limpiar HTML
function limpiarHTLM(){
     while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);

     }
}




// Genera los años del select
function llenarSelect(){

    for(let i = max; i > min; i-- ){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent =  i;
        year.appendChild(opcion);

    }


}


//Funcion que filtra en base a la busquda<>
function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(firtrarMinimo).filter(firtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)
    //console.log(resultado);
    if (resultado.length){
    mostrarAutos(resultado);
    } else {
        noResultado();
    }
}

function noResultado(){
    limpiarHTLM()

    const noResultado = document.createElement('div')
    noResultado.classList.add('alerta','error');
    noResultado.textContent = 'No Hay Resultados, intenta con otros terminos de busqueda';
    resultado.appendChild(noResultado)
}


function filtrarMarca(auto){
    const { marca }= datosBusqueda;
    if (marca){
        return auto.marca === marca;
    }
    return auto;

}
function filtrarYear(auto){
    const { year }= datosBusqueda;
    if (year){
        return auto.year === parseInt(year);
    }
    return auto;

}
function firtrarMinimo(auto){
    const { minimo }= datosBusqueda;
    if (minimo){
        return auto.precio >= parseInt(minimo);
    }
    return auto;

}
function firtrarMaximo(auto){
    const { maximo }= datosBusqueda;
    if (maximo){
        return auto.precio <= parseInt(maximo);
    }
    return auto;

}
function filtrarPuertas(auto){
    const { puertas }= datosBusqueda;
    if (puertas){
        return auto.puertas === parseInt(puertas);
    }
    return auto;
}
function filtrarTransmision(auto){
    const { transmision }= datosBusqueda;
    if (transmision){
        return auto.transmision === transmision;
    }
    return auto;
}
function filtrarColor(auto){
    const { color }= datosBusqueda;
    if (color){
        return auto.color === color;
    }
    return auto;
}


