const comprarCasco = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve({
            compra1: true
        })
    }, 1000)
});

const comprarGuantes = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve({
            compra2: true
        })
    }, 2000)
});

const paseoEnBici = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve({
            paseo: true
        })
    }, 8000)
});

const iniciarPaseo = () => {
    comprarCasco
        .then(infoCompra1 =>{
        console.log(infoCompra1);
        return comprarGuantes;
    })
        .then(infoCompra2 =>{
        console.log(infoCompra2);
        return paseoEnBici;
    })
        .then(infoPaseo =>{
        console.log(infoPaseo);
    })
    .catch(error =>{
        console.log(error)
    })
    .finally(() =>{
        console.log("Paseo Iniciado");
    })
}

iniciarPaseo();