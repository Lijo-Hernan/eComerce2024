const productos = [
    {
        id: "1",
        nombre:"Contraste oral",
        marca:"Temistac",
        descripcion:"Contraste oral hidrosoluble en frasco de 125 ml ",
        precio:47658.80,
        imagen:"../public/data/temistac.png",
        categoria:"contrastes",
        stock:80
    },
    {
        id: "2",
        nombre:"Contraste Endovenoso ",
        marca:"Xenetix",
        descripcion:"Contraste endovenoso en frascos de 500ml ",
        precio:769017.50,
        imagen:"../public/data/xenetix.png",
        categoria:"contrastes",
        stock:0
    },
    {
        id: "3",
        nombre:"Jeringa prellenada",
        marca:"Optiray",
        descripcion:"Jeringas prellenadas de 125ml listas para ser colocadas en bomba inyectora",
        precio:154099.80,
        imagen:"../public/data/Optiray-320.jpg",
        categoria:"contrastes",
        stock:50
    },
    {
        id: "4",
        nombre:"Llave de 3 vias",
        marca:"c",
        descripcion:"Llave de 3 vias descartable en caja de 100 unidades",
        precio:72354.50,
        imagen:"../public/data/tresVias.png",
        categoria:"descartables",
        stock:75
    },
    {
        id: "5",
        nombre:"Coil para bomba",
        marca:"Euroswiss",
        descripcion:"Prolongador doble roscado para alta presion en caja por 100 unidades",
        precio:85425.25,
        imagen:"../public/data/Coil.png",
        categoria:"descartables",
        stock:60
    },
    {
        id: "6",
        nombre:"Jeringas 60ml",
        marca:"neojet",
        descripcion:"Jeringas descartables de 60ml en caja por 100 unidades",
        precio:49000.00,
        imagen:"../public/data/jer60.png",
        categoria:"descartables",
        stock:10
    },
    {
        id: "7",
        nombre:"Jeringas 20ml",
        marca:"ELIT",
        descripcion:"Jeringas descartables de 20ml en caja por 100 unidades",
        precio:17850.20,
        imagen:"../public/data/jer20.png",
        categoria:"descartables",
        stock:95
    },
    {
        id: "8",
        nombre:"Alcohol",
        marca:"Biosystem",
        descripcion:"Alcohol etilico 90% en bidon de 5 lts.",
        precio:3900.00,
        imagen:"../public/data/alcohol.png",
        categoria:"consumibles",
        stock:25
    },
    {
        id: "9",
        nombre:"Agua oxigenada",
        marca:"Drogal",
        descripcion:"Agua oxigenada 10 volumenes en bidon de 5 lts.",
        precio:4900.00,
        imagen:"../public/data/H2O2.png",
        categoria:"consumibles",
        stock:30
    },
    {
        id: "10",
        nombre:"Algodon",
        marca:"Doncella",
        descripcion:"Algondon Doncella de 500grs. x 10 paquetes",
        precio:21690.00,
        imagen:"../public/data/algodon.png",
        categoria:"consumibles",
        stock:55
    },
    {
        id: "11",
        nombre:"Jeringa de contraste",
        marca:"Medtron",
        descripcion:"Jeringa de bomba inyectora para rellenar",
        precio:34580.00,
        imagen:"../public/data/medtron.png",
        categoria:"contrastes",
        stock:55
    }
]

export const getProductos = () => {

        return new Promise ((resolve) => {
            setTimeout (() =>{
                resolve(productos)
            },1000)}
            
)} 
