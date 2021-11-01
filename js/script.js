
let cart = document.querySelector(".cart");
let cartfield = document.querySelector(".cart-field");
let add = document.getElementsByClassName("add");

for(let but of add){
    but.onclick = e =>{
        let item = Number(cart.getAttribute("data-count"  || 0));
        cart.setAttribute("data-count", item +1);
        cart.classList.add("on");
        
       
        //image animated to cart
        let parent = e.target.parentNode.parentNode.parentNode
        let image = parent.querySelector("img");
        let span = document.createElement("span");
        span.className = "image-carior";
        parent.insertBefore(span,parent.lastElementChild);

       

        let s_image = image.cloneNode(false);
        span.appendChild(s_image);
        span.classList.add("active");
        setTimeout(()=>{
            span.classList.remove("active");
            span.removeChild(s_image); 
        }, 500)

        // copy and paste
        let clone = parent.cloneNode(true);
        clone.querySelector(".add").style.display = "none";
        clone.querySelector(".add").removeAttribute("class");
        cartfield.appendChild(clone);

        if (clone) {
            cart.onclick = ()=>{
                cartfield.classList.toggle("display");
            }
        }
    }
}


// let card = document.getElementsByClassName("card");
// let btnAdd = document.getElementsByClassName("btn-info");
// // console.log(btnAdd);

// let btnCart = document.querySelector(".btn-cart");
// let cartList = document.querySelector(".shopping-cart-list");


// class Shopping {
//     constructor(title, price, image) {
//         this.Title = title;
//         this.Price = price;
//         this.Image = image;
//     }

// }

// class UI {
//     addToCart(shopping) {
//         let listItem = document.createElement("div");
//         listItem.classList = "list-item";
        
        
          






//     }
// }

// for (let i = 0; i < card.length; i++) {

//     btnAdd[i].addEventListener("click", function (e) {
//         // console.log(btnAdd[i]);
//         let title = card[i].getElementsByClassName("card-title")[0].textContent;

//         let price = card[i].getElementsByClassName("preice")[0].textContent;

//         let image = card[i].getElementsByClassName("card-img")[0].src;

//         let shopping = new Shopping(title, price, image);
//         let ui = new UI()

//         ui.addToCart(shopping);


//         e.preventDefault();
//     })

// }

// function cardToggle() {
//     btnCart.addEventListener("click", function () {
//         cartList.classList.toggle("d-none")
//     })
// }
// cardToggle();