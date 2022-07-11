
const shop = document.getElementById(`shop`);
const menuShop = document.getElementById(`menuShop`);
const reMenuShop = document.getElementById(`removeShop`);

shop.addEventListener("click", () =>{
    menuShop.style.transform = "translate(0)";
    menuShop.style.transition = "0.8s";
    shop.style.opacity = 0;
})

removeShop.addEventListener("click", () => {
    menuShop.style.transform = "translate(100%)";
    menuShop.style.transition = "0.8s";
    shop.style.opacity = 1;
})

let productos = [
    {
        img: "../img/pinza-presión.jpg",
        id: 0,
        name: 'Pinzas de presion',
        price: 100,
        description: 'Pinzas de presion para el trabajo de la mano'
    },
    {
        img: "../img/clavos.jpg",
        id: 1,
        name: 'Clavos para madera',
        price: 1,
        description: 'Clavos para madera al mayor y detal'
    },
    {
        img: "../img/cinta-adhesiva.jpg",
        id: 2,
        name: 'Cinta Adhesiva',
        price: 30,
        description: 'Cinta Adhesiva para el trabajo de la mano'
    },
    {
        img: "../img/tanque-gas.jpg",
        id: 3,
        name: 'Tanque de gas',
        price: 500,
        description: 'Tanque de gas para el trabajo de la mano'
    },
    {
        img: "../img/manguera-regar.jpeg",
        id: 4,
        name: 'Manguera para regar',
        price: 15,
        description: 'Manguera para regar para el trabajo de la mano'
    },
    {
        img: "../img/pintura-lata.jpg",
        id: 5,
        name: 'Pintura de 1L',
        price: 160,
        description: 'Pintura de 1L para el trabajo de la mano'
    },
    {
        img: "../img/aerosol.jpg",
        id: 6,
        name: 'Aerosol',
        price: 48,
        description: 'Aerosol para el trabajo de la mano'
    },
    {
        img: "../img/key-copy.jpg",
        id: 7,
        name: 'Copia de llaves',
        price: 25,
        description: 'Copia de llaves para el trabajo de la mano'
    },
    {
        img: '',
        name: 'La pera',
        id: 8,
        price: 15,
        description: 'La pera de la mano',
    }
];

//seleccionar id productosInf
let productosInf = document.getElementById('productosInf');

//insertar productos en el html con un for
for (let i = 0; i < productos.length; i++) {

    productosInf.innerHTML += `
            <div id="efectScrollJs" class="comprar">
            <img src=${productos[i].img}></img>
                <p class="NameProduct">${productos[i].name}</p>
                <p class="Price">Precio: ${productos[i].price}</p>
                <button class="btn btn-danger" onclick="agregar(${productos[i].id})" ">Agregar</button>
            </div>
    `;
}

let popo = document.getElementById(`menuShop`)
let pepeProductos = document.getElementById(`pepeProductos`)

function agregar(id){
    pepeProductos.innerHTML +=`
    <div class="containerProductosCompradosPepe">
    <img class="ProductoCompradoXd" src=${productos[id].img}></img>
    <div class="ProductoCompradoXdInformacion">
        <p class="NameProduct">${productos[id].name}</p>
        <p class="Price">Precio: ${productos[id].price}</p>
        </div></div>
`;


}









