window.onload = function (){
    const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    let div = document.getElementById("vacio");
  if (typeof localStorage.carrito == "undefined" || typeof localStorage.carrito == "[]"
    ) {
     
      div.innerHTML += "<h2>No hay productos agregados </h2>";
    } else {
      let carrito = JSON.parse(localStorage.carrito);
      for (let i = 0; i < carrito.length; i++) {
        let producto = carrito[i];
       
        let contenido = `  
        <div class="pcart-conteinerDesc">
            <a href="/products/detail/${producto.id}" class="pcart-imagenes"><img src=${producto.imagen} alt=""
                class="pcart-foto"></a>
            <div class="pcart-descripcion">
                <h2 class="pcart-nombre-libro">${producto.tituloProd}</h2>
                   <div class="pcart-estrellas">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                   </div> 
                <p class="pcart-texto">Formato papel, Español - Stephen King</p>
                <p class="pcart-texto"> Disponible en Argentina en 5 días habiles</p>
            </div>
            
    
            <div class="pcart-parte-derecha-descripcion">
              <form action="#" method="GET">
                <label for="cantidad"></label>
                <input class="pcart-cantidad" id="cantidad" value=${producto.inputCantidad} type="text">
              </form>
              <h3 class="pcart-precio">${toThousand(producto.precio)} </h3>
              <button  type="button" class="pcart-boton-eliminar">
                <i onclick="borrarItem(${i})" class="fas fa-times"></i>
              </button>
            </div>
          </div>`;
  
        div.innerHTML += contenido;
      }
    }
  
    let h3 = document.querySelector("#precioTotal")
    let totalCarrito = localStorage.totalCarrito
    if(typeof localStorage.totalCarrito == 'undefined'){
      let contenido2 = '0'
      h3.innerHTML += contenido2
    } else {
      let contenido2 = `${toThousand(totalCarrito)}`
      h3.innerHTML += contenido2
    }
  
    
  };
  
  function borrarItem(id) {
    let carrito = JSON.parse(localStorage.carrito);
    carrito = carrito.filter((producto, i) => {
      localStorage.clear(producto);
      return i !== id;
    });
    let totalCarrito = 0
            for (let i = 0; i < carrito.length; i++) {
               let carro = carrito[i].precio * carrito[i].inputCantidad
               totalCarrito += carro 
            }
            localStorage.setItem("totalCarrito", totalCarrito)
            console.log(totalCarrito)
    localStorage.setItem("carrito", JSON.stringify(carrito));
    location.reload();
  }
  
  

  let botonBorrar = document.getElementById("cart-botonBorrar");
  botonBorrar.addEventListener('click', function(e) {
    e.preventDefault();
    localStorage.clear();
    alert('has vaciado el carrito');
    location.reload();
  })
    
