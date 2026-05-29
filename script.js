let cartCount=0;
let productQuantity=0;
let currentImageIndex=0;

const product={
name:"Fall Limited Edition Sneakers",
price:125,
images:[
"https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200&auto=format&fit=crop",
"https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1200&auto=format&fit=crop",
"https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop"
]
};

const quantityElement=document.getElementById("quantity");
const cartCountElement=document.getElementById("cart-count");
const cartItems=document.getElementById("cart-items");
const cartModal=document.getElementById("cart-modal");
const overlay=document.getElementById("overlay");
const mainImage=document.getElementById("main-image");
const increaseBtn=document.getElementById("increase");
const decreaseBtn=document.getElementById("decrease");
const addToCartBtn=document.getElementById("add-to-cart");
const cartToggleBtn=document.getElementById("cart-toggle");
const closeModalBtn=document.getElementById("close-modal");
const burgerBtn=document.getElementById("burger-menu");
const mobileMenu=document.getElementById("mobile-menu");
const nextBtn=document.getElementById("next");
const prevBtn=document.getElementById("prev");
const thumbs=document.querySelectorAll(".thumb");

increaseBtn.addEventListener("click",()=>{
productQuantity++;
updateQuantityUI();
});

decreaseBtn.addEventListener("click",()=>{
if(productQuantity>0){
productQuantity--;
updateQuantityUI();
}
});

function updateQuantityUI(){
quantityElement.textContent=productQuantity;
}

addToCartBtn.addEventListener("click",()=>{

if(productQuantity===0){
shakeButton();
return;
}

cartCount+=productQuantity;
cartCountElement.textContent=cartCount;

updateCart();

productQuantity=0;
updateQuantityUI();

openCart();
});

function updateCart(){

if(cartCount<=0){

cartItems.innerHTML=`
<p>Your cart is empty.</p>
`;

cartCount=0;
cartCountElement.textContent=0;

return;
}

const total=cartCount*product.price;

cartItems.innerHTML=`

<div class="cart-product">

<img
src="${product.images[0]}"
alt="Sneaker"
style="
width:70px;
height:70px;
object-fit:cover;
border-radius:12px;
"
>

<div style="flex:1;">

<h4>${product.name}</h4>

<p>$${product.price} x ${cartCount}</p>

<strong>$${total}</strong>

</div>

<button
id="delete-item"
style="
border:none;
background:#fff0eb;
color:#ff7a00;
width:38px;
height:38px;
border-radius:10px;
cursor:pointer;
font-size:18px;
transition:.3s;
"
>
🗑
</button>

</div>

<button class="checkout-btn">
Checkout
</button>
`;

const deleteBtn=document.getElementById("delete-item");

deleteBtn.addEventListener("click",()=>{

cartCount--;

if(cartCount<0){
cartCount=0;
}

cartCountElement.textContent=cartCount;

updateCart();
});
}

cartToggleBtn.addEventListener("click",()=>{

if(cartModal.classList.contains("active")){
closeCart();
}else{
openCart();
}
});

closeModalBtn.addEventListener("click",closeCart);

if(overlay){
overlay.addEventListener("click",closeCart);
}

function openCart(){

cartModal.classList.add("active");

if(overlay){
overlay.classList.add("active");
}
}

function closeCart(){

cartModal.classList.remove("active");

if(overlay){
overlay.classList.remove("active");
}
}

burgerBtn.addEventListener("click",()=>{
mobileMenu.classList.toggle("active");
});

function updateImage(){

mainImage.style.opacity="0";

setTimeout(()=>{

mainImage.src=product.images[currentImageIndex];

mainImage.style.opacity="1";

},150);

thumbs.forEach((thumb,index)=>{

thumb.classList.toggle(
"active-thumb",
index===currentImageIndex
);
});
}

nextBtn.addEventListener("click",()=>{

currentImageIndex++;

if(currentImageIndex>=product.images.length){
currentImageIndex=0;
}

updateImage();
});

prevBtn.addEventListener("click",()=>{

currentImageIndex--;

if(currentImageIndex<0){
currentImageIndex=product.images.length-1;
}

updateImage();
});

thumbs.forEach((thumb,index)=>{

thumb.addEventListener("click",()=>{

currentImageIndex=index;

updateImage();
});
});

function shakeButton(){

addToCartBtn.animate(
[
{transform:"translateX(0px)"},
{transform:"translateX(-5px)"},
{transform:"translateX(5px)"},
{transform:"translateX(-5px)"},
{transform:"translateX(0px)"}
],
{
duration:350
}
);
}

updateQuantityUI();
updateCart();
updateImage();