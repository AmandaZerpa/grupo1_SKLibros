const { validationResult } = require("express-validator");
const path = require("path");
const db = require("../data/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productController = {
  //Listado
  products: function (req, res) {
    db.Productos.findAll()
      .then(function (products) {
        res.render("products", { products: products, toThousand, user: req.session.userLogged});
      })
      .catch((err) => {
        res.send(err);
      });
  },
  productsTerror: function (req, res) {
    db.Productos.findAll({
      where: {
        generos_id: 2,
      },
    })
      .then(function (products) {
        res.render("productsTerror", { products: products, toThousand, user: req.session.userLogged});
      })
      .catch((err) => {
        res.send(err);
      });
  },
  productsSuspenso: function (req, res) {
    db.Productos.findAll({
      where: {
        generos_id: 3,
      },
    })
      .then(function (products) {
        res.render("productsSuspenso", { products: products, toThousand, user: req.session.userLogged });
      })
      .catch((err) => {
        res.send(err);
      });
  },
  productsFantasia: function (req, res) {
    db.Productos.findAll({
      where: {
        generos_id: 1,
      },
    })
      .then(function (products) {
        res.render("productsFantasia", { products: products, toThousand, user: req.session.userLogged});
      })
      .catch((err) => {
        res.send(err);
      });
  },
  // Todos los productos
  // products: function (req, res) {
  //     const newProduct =  this.update
  //     res.render("products", {products : products, newProduct});
  // },

  // Detail - Detail from one product
  // detail: (req, res) => {
  // 	const id = req.params.id
  // 	const product = products.find(product=>{
  // 		return product.id == id
  // 	})
  // 	res.render('productDetail', {product : product, products})
  // },

  detail: function (req, res) {
    let product = db.Productos.findByPk(req.params.id)
    let products = db.Productos.findAll({
        limit: 6
    });
    let productsTablet = db.Productos.findAll({
      limit: 3
  });
  let productsCelular = db.Productos.findAll({
    limit: 2
});
    Promise
    .all([product,products,productsCelular,productsTablet])
    .then(([product,products,productsCelular,productsTablet])=>{
        res.render("productDetail", {product,products,productsCelular,productsTablet, toThousand, user: req.session.userLogged})
    })
    .catch(err=>{console.log(err)})
  },
  search: (req, res) => {
    db.Productos.findAll({
      where: {
        nombre: {
          [Op.like]: "%" + req.body.search + "%",
        },
      },
    })
      .then((products) => {
        if (products.length) {
          return res.render("products", { products: products , toThousand, user: req.session.userLogged});
        } else {
          res.render("products", { products: products, toThousand,user: req.session.userLogged, errors:{
            busqueda:{
              msg:'No hay resultados para su búsqueda'
            }
          }});
        }
      })
      .catch((err) => {
        res.send(err);
      });
  },
  productCart: function (req, res) {
    let productos = db.Productos.findAll();
    // let productosCarrito = db.ProductosCarrito.findAll();
    // let carrito = db.CarritoCompras.findAll();
    Promise.all([productos])
      .then(([productos]) => {
        res.render("productCart", { productos, toThousand, user: req.session.userLogged });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  createProduct: function (req, res) {
    db.Productos.findAll()
      .then((products) => {
        res.render("createProduct", { products , user: req.session.userLogged});
      })
      .catch((err) => {
        res.send(err);
      });
    // res.render("createProduct", {products: products});
  },

  // Create -  Method to store
  store: (req, res) => {
    let resultadoValidacionProduct = validationResult(req);
    if (!resultadoValidacionProduct.errors.length) {
      db.Productos.create({
        nombre: req.body.name,
        precio: req.body.price,
        descuento: req.body.discount,
        imagen: req.file.filename,
        descripcion: req.body.description,
        generos_id: req.body.genre,
      })
        .then((user) => {
          res.redirect("/products");
        })
        .catch((err) => {
          res.send(err);
        });
    } else {
      return res.render("createProduct", {
        errors: resultadoValidacionProduct.mapped(),
        oldData: req.body,
        user: req.session.userLogged
      });
    }

    // const newProduct = {
    //     id: products.length + 1,
    //     name: req.body.name,
    //     price: req.body.price,
    //     image: req.files[0].filename,
    //     description: req.body.description,
    //     discount: req.body.discount,
    //     gender: req.body.gender,
    // };
    // products.push(newProduct)
    // fs.writeFileSync(productsFilePath,JSON.stringify(products,null,' '))
    // res.redirect('/products')
  },

  editProduct: function (req, res) {
    const id = req.params.id;
    db.Productos.findByPk(id)
      .then((productToEdit) => {
        res.render("editProduct", { productToEdit: productToEdit, user: req.session.userLogged });
      })
      .catch((err) => {
        res.send(err);
      });
    // const id = req.params.id
    // const productToEdit = products.find(product => product.id == id)
    // res.render('editProduct', {productToEdit:productToEdit})
  },
  update: async function (req, res) {
    let productoId = req.params.id;
    let resultadoValidacionProduct = validationResult(req);
    if (!resultadoValidacionProduct.errors.length) {
      await db.Productos.update(
        {
          nombre: req.body.name,
          descripcion: req.body.description,
          imagen: req.file.filename,
          generos_id: req.body.categoria,
          precio: req.body.price,
          descuento: req.body.discount,
        },
        {
          where: { id: productoId },
        }
      )
        .then((productToEdit) => {
          res.redirect("/products");
        })
        .catch((err) => {
          res.send(err);
        });
    } else {
      const id = req.params.id;
      await db.Productos.findByPk(id)
        .then((productToEdit) => {
          return res.render("editProduct", {
            productToEdit: productToEdit,
            user: req.session.userLogged,
            errors: resultadoValidacionProduct.mapped(),
            oldData: req.body,
          });
        })
        .catch((err) => {
          res.send(err);
        });
    }
    // let id = req.params.id;
    // let productToEdit = products.find(product => product.id == id)

    // if(req.files[0] != undefined){
    // image = req.files[0].filename
    // } else {
    // image = productToEdit.image
    // }

    // productToEdit = {
    //     id: productToEdit.id,
    //     ...req.body,
    //     image: image,
    // };

    // const newProducts = products.map(product => {
    //     if (product.id == productToEdit.id) {
    //         return product = {...productToEdit};
    //     }
    //     return product;
    // })

    // fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
    // res.redirect('/products');
  },

  //Eliminar producto
  destroy: (req, res) => {
    // window.confirm("Desea eliminar el producto?");
    db.Productos.destroy({
      where: { id: req.params.id },
    });
    res.redirect("/products");
  },

  // Delete - Delete one product from DB
  // destroy : (req, res) => {
  // 	let id = req.params.id;
  // 	let finalProducts = products.filter(product => product.id != id);
  // 	fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
  // 	res.redirect('/products');
  // },
};

module.exports = productController;
