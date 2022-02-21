   const btnAgregarTablet = document.getElementById("btn-agregar-tablet")


    btnAgregarTablet.addEventListener('click', function(e){
        e.preventDefault();
        let url = window.location.href.split("/");
        let id = url [url.length -1]
        
        let imagen = document.querySelector('#imagen').getAttribute("src")
        let tituloProd = document.querySelector('#titulo').innerText
        let precio = document.querySelector('#precio').getAttribute("data-precio")
        let inputCantidad = document.querySelector('#cantidad').value

        let producto = {
            idProducto: id, 
            imagen,
            tituloProd, 
            precio: precio,
            // descuento: parseFloat(descuento),
            inputCantidad: inputCantidad
        }
        // console.log(producto)

        if(localStorage.length == 0) {
            let carrito = []
            carrito.push(producto)
            localStorage.setItem("carrito", JSON.stringify(carrito))
            localStorage.setItem("totalCarrito", producto.precio * producto.inputCantidad)
            
        } else {
            let carrito = JSON.parse(localStorage.carrito)
            let arrayProductos = carrito.filter(function(producto){
                return producto.idProducto == id
            })

       
            if(arrayProductos.length == 0){
                carrito.push(producto)
                localStorage.setItem("carrito", JSON.stringify(carrito))
            } else {
                arrayProductos[0].inputCantidad == parseInt(arrayProductos[0].inputCantidad)+1;
                localStorage.setItem("carrito", JSON.stringify(carrito))
                // console.log(arrayProductos)
            }
        

            let totalCarrito = 0
            for (let i=0; i<carrito.length; i++) {
               let carro = carrito[i].precio * carrito[i].inputCantidad;
               totalCarrito += carro 
            }
            localStorage.setItem("totalCarrito", totalCarrito)
        }
        alert('Agregaste' + " " + tituloProd + " al carrito")
         
    })
