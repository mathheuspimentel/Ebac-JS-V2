
let products = [
    { id: 1, name: 'Livro 1: ', price: 10.99, image: 'img/product1.jpg'},
    { id: 2, name: 'Livro 2: ', price: 40.99, image: 'img/product1.jpg'},
    { id: 3, name: 'Livro 3 ', price: 150.99, image: 'img/product1.jpg'},
    { id: 4, name: 'Livro 4: ', price: 30.99, image: 'img/product1.jpg'},
    { id: 5, name: 'Livro 5: ', price: 20.99, image: 'img/product1.jpg'},
    { id: 6, name: 'Livro 6: ', price: 102.99, image: 'img/product1.jpg'},
    { id: 7, name: 'Livro 7: ', price: 50.99, image: 'img/product1.jpg'},
    { id: 8, name: 'Livro 8: ', price: 95.99, image: 'img/product1.jpg'},
    { id: 9, name: 'Livro 9: ', price: 10.99, image: 'img/product1.jpg'},
    
]

let cart= [];

function renderProducts()
{
    let productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';
    products.forEach((products) => 
        {
        let productDiv = document.createElement('div')
        productDiv.className ='product';
        productDiv.innerHTML=`
            <img src="${products.image}" alt="${products.name}">
            <h3>${products.name}</h3>
            <p>R$ ${products.price.toFixed(2)}</p>
            <button>Adicionar ao carrinho</button>
        
        `;
        productDiv.querySelector('button').addEventListener('click', () =>
            addToCart(products.id));
            productGrid.appendChild(productDiv);
            });
}

function addToCart(productId)
{
    let product = products.find((product) => product.id === productId);
    cart.push(product);
    renderCart();

}

function renderCart(){

    let cartTable = document.querySelector('.cart table tbody');
    cartTable.innerHTML = '';
    cart.forEach((product) =>
    {
        let cartRow = document.createElement('tr')
    
        cartRow.innerHTML = `
            <td>${product.name}</td>
            <td>1</td>
            <td>R$ ${product.price.toFixed(2)}</td>
            <td>R$ ${product.price.toFixed(2)}</td>   
        `;
        cartTable.appendChild(cartRow)
    });
    updateTotal(); 



}

function updateTotal(){
    let total = cart.reduce((acc, product) => acc + product.price, 0);
    document.getElementById('total').textContent = `R$ ${total.toFixed(2)}`;

}

let currentProduct = 0;
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

document.getElementById('checkout').addEventListener('click', ()=>{
    if (cart.length ===0)
    {
        alert('Seu carrinho está vazio');
    }
    else{
        alert('Pedido realizado com sucesso. Obrigado por comprar conosco!');
        cart = []
        renderCart();
    }
});

renderProducts();