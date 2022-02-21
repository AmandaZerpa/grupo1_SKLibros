
  const btnEliminar = document.getElementById("deleteProduct");

  btnEliminar.addEventListener(
    "click",
    function (event) {
      // si es false entonces que no haga el submit
      if (!confirm("Realmente desea eliminar?")) {
        event.preventDefault();
      }
    },
    false
  );

