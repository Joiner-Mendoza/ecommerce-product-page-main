let btnMinus = document.querySelector('.input__minus');
let userInput = document.querySelector('.input__number');
let btnPlus = document.querySelector('.input__plus');
let userInputNumber = 0;
// cantidad de articulos igresados por el usuario
btnPlus.addEventListener('click',()=>{
    userInputNumber++;
    userInput.value= userInputNumber;
    console.log(userInputNumber);
});

btnMinus.addEventListener('click',()=>{
    userInputNumber--;
 
    if (userInputNumber <= 0 ){
        userInputNumber = 0;
    }
    userInput.value= userInputNumber;
    console.log(userInputNumber);
});
// agregar los productos carrito con el boton ADD TO CARD
const addToCardBtn = document.querySelector('.details__button');
let cartNitification = document.querySelector('.header__card--notification');
let lastValue = parseInt(cartNitification.innerText)
addToCardBtn.addEventListener('click',()=>{
    

    lastValue = lastValue + userInputNumber;

    cartNitification.innerText = lastValue;
    cartNitification.style.display = 'block';
    modalProducImg();
    priceModal.innerHTML = `$125.000 x${lastValue} <span>$${lastValue*125}.00...</span>`

});
// mostrar el modal con los detalles del carrito
const cartIconBtn = document.querySelector('.header__card');
const cartModal = document.querySelector('.card-modal');
let priceModal = document.querySelector('.card-modal__price');
const productContainer = document.querySelector('.cart__modal__checkout-container');



cartIconBtn.addEventListener('click',() => {
    cartModal.classList.toggle('inactive');

    if (lastValue === 0 ){
    productContainer.innerHTML = '<p class="vacio">Your Card is Empy</p>'

    }else{
        modalProducImg();
    }

  
});

// borrar los itens agregados al carrito 
function deleteProduc(){
    const deleteProducBtn = document.querySelector('.card-modal__delete');

deleteProducBtn.addEventListener('click',()=>{
    productContainer.innerHTML = '<p class="vacio">Your Card is Empy</p>'
    lastValue = 0;
    cartNitification.innerText = lastValue;
})
}



// cambiar imagenes al momento de presionar los botones flecha
const imageContainer = document.querySelector('.gallery__image-container ')
const nextGalleryBtn = document.querySelector('.gallery__next');
const previusGalleryBtn = document.querySelector('.gallery__previus');

let imgIndex = 1;

nextGalleryBtn.addEventListener('click',()=>{

    changeNextImage(imageContainer);
});
 
previusGalleryBtn.addEventListener('click',()=>{

    changePreviusImage(imageContainer);
});


// cambiar imagenes desd elas imagenes pequeñas en el modal

const modalImageContainer  =document.querySelector('.modal-galery__image-container')
let imagenesGalleyProdutModal = document.querySelectorAll('.modal-galery__product');
// spret operator
imagenesGalleyProdutModal = [...imagenesGalleyProdutModal]
// spret operator
imagenesGalleyProdutModal.forEach(imagenesGalleyProdutModal =>{
    imagenesGalleyProdutModal.addEventListener('click',events=>{
        console.log(events.target.id.slice(-1))
        modalImageContainer.style.backgroundImage = `url('./images/image-product-${events.target.id.slice(-1)}.jpg')`
    
    });
    
});
// cambiar imagenes desd elas imagenes pequeñas

let imagenesGalleyProdut = document.querySelectorAll('.gallery__product')
// spret operator
imagenesGalleyProdut = [...imagenesGalleyProdut]
// spret operator
imagenesGalleyProdut.forEach(imagenesGalleyProdut => {
    imagenesGalleyProdut.addEventListener('click',event=>{
        console.log(event.target.id);
    imageContainer.style.backgroundImage = `url('./images/image-product-${event.target.id}.jpg')`

    });
});


// cambiar imagenes al momento de presionar los botones flecha destok
const btnModalPrevius = document.querySelector('.modal__previus')
const btnModalNext = document.querySelector('.modal__next');


btnModalNext.addEventListener('click',()=>{

    changeNextImage(modalImageContainer);
});
 
btnModalPrevius.addEventListener('click',()=>{

    changePreviusImage(modalImageContainer);
});


// funciones
function modalProducImg(){
     productContainer.innerHTML = `
        <div class="cart__modal__checkout-container">
        <div class="cart__modal__detail-container">
          <img src="./images/image-product-1.jpg" class="card-modal__image-produc" alt="">
          <div>
            <p class="card-modal__product"> Autumun Limited Edition Sneakers</p>
            <p class="card-modal__price"> $125.000 x${lastValue} <span>$${lastValue*125}.00...</span></p>
          </div>
          <img src="./images/icon-delete.svg" class="card-modal__delete" alt="delete">
      
        </div>
        <button class="card-modal__checkout">Checkout</button>`
    deleteProduc()
}

function changeNextImage(imageContainer){
    if (imgIndex == 4){
        imgIndex = 1;
    }else{
        imgIndex++;
    }
    imageContainer.style.backgroundImage = `url('./images/image-product-${imgIndex}.jpg')`
};

function changePreviusImage(imageContainer){
    if (imgIndex == 1){
        imgIndex = 4;
    }else{
        imgIndex--;
    }
    imageContainer.style.backgroundImage = `url('./images/image-product-${imgIndex}.jpg')`
    
};



// menu responsivo
const menuResponsive = document.querySelector('.modal-navbar__background ');
const menuHaburguesa = document.querySelector('.header__menu-icon');
const closeMenuResponsive = document.querySelector('.navbar-responsive__close-icon');

menuHaburguesa.addEventListener('click',toogleMenuHaburguesa);
closeMenuResponsive.addEventListener('click',toogleCloseMenuResponsive);

function toogleCloseMenuResponsive(){
    menuResponsive.classList.add('inactive')
}

function toogleMenuHaburguesa(){
    menuResponsive.classList.toggle('inactive')
    
    
}


// imagen del producto principal 

const imgModaLBackground = document.querySelector('.modal-galery__background');
const imgCloseIcon = document.querySelector('.modal-galery__close');



imgCloseIcon.addEventListener('click', toogleImgCloseIcon)
imageContainer.addEventListener('click',()=>{
imgModaLBackground.classList.toggle('inactive')
})
function toogleImgCloseIcon(){
        imgModaLBackground.classList.toggle('inactive');
    
    }
function toogleImgProduc(){
    imgModaLBackground.classList.toggle('inactive');

}
