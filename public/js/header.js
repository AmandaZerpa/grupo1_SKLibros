window.addEventListener("load", function () {
  let topbar = document.querySelector(".header-top-bar");
  let main = document.querySelector("main");
  let buscador = document.querySelector(".header-buscador");
  let dropdownInfo = document.querySelector("#dropdown-info");

  let aCat = document.querySelector("#header-categoria");
  let dropdownCat = document.querySelector("#dropdown-cat");

  aCat.addEventListener("mouseover", function () {
    dropdownCat.classList.toggle("header-dropdown-display");
    dropdownCat.classList.add("header-dropdown-categoria");
    dropdownInfo.classList.add("header-dropdown-display");
  });
  main.addEventListener("mouseover", function () {
    dropdownCat.classList.add("header-dropdown-display");
  });
  topbar.addEventListener("mouseover", function () {
    dropdownCat.classList.add("header-dropdown-display");
  });
  let li = document.querySelector('#li-admin')
  if (li) {
  let admin = document.querySelector("#header-admin");
  let dropdownAdmin = document.querySelector('#dropdown-admin')
  admin.addEventListener("mouseover", function () {
    dropdownAdmin.classList.toggle("header-dropdown-display");
    dropdownAdmin.classList.add("header-dropdown-info");
  });
  topbar.addEventListener("mouseover", function () {
    dropdownAdmin.classList.add("header-dropdown-display");
  });
  main.addEventListener("mouseover", function () {
    dropdownAdmin.classList.add("header-dropdown-display");
  });
  buscador.addEventListener("mouseover", function () {
    dropdownInfo.classList.add("header-dropdown-display");
  });
}
  let info = document.querySelector("#header-info");
  if(info){
    info.addEventListener("mouseover", function () {
      dropdownInfo.classList.toggle("header-dropdown-display");
      dropdownInfo.classList.add("header-dropdown-info");
      dropdownCat.classList.add("header-dropdown-display");
    });
    topbar.addEventListener("mouseover", function () {
      dropdownInfo.classList.add("header-dropdown-display");
    });
    main.addEventListener("mouseover", function () {
      dropdownInfo.classList.add("header-dropdown-display");
    });
    buscador.addEventListener("mouseover", function () {
      dropdownInfo.classList.add("header-dropdown-display");
    });
  }

  let hamburguesa = document.querySelector(".fa-bars");
  let dropdownCelu = document.querySelector("#dropdown-celu");
  hamburguesa.addEventListener("click", function () {
    dropdownCelu.classList.toggle("header-dropdown-display");
    if (hamburguesa.classList.contains("header-dropdown-display")) {
    } else {
      dropdownCelu.classList.add("header-dropdown-celu");
    }
  });

  let catCelu = document.querySelector("#cat-celu");
  let ulOcultoCat = document.querySelector("#ulOcultoCat");
  catCelu.addEventListener("click", function () {
    catCelu.classList.toggle("clicked");
    if (catCelu.classList.contains("clicked")) {
      ulOcultoCat.classList.remove("header-dropdown-display");
    } else {
      ulOcultoCat.classList.add("header-dropdown-display");
    }
  });
  let infoCelu = document.querySelector("#info-celu");
  let ulOcultoInfo = document.querySelector("#ulOcultoInfo");
  infoCelu.addEventListener("click", function () {
    infoCelu.classList.toggle("clicked");
    if (infoCelu.classList.contains("clicked")) {
      ulOcultoInfo.classList.remove("header-dropdown-display");
    } else {
      ulOcultoInfo.classList.add("header-dropdown-display");
    }
  });

  //   icon.addEventListener("click", () => {
  //     icon.classList.toggle("clicked")
  //     list.classList.toggle("opened")

  //     if(icon.classList.contains("clicked")) {
  //         icon.setAttribute('src', "./public/images/icon-close.svg");
  //         headerImg.style.display = "none"
  //         main.style.display = "none"
  //         footer.style.display = "none"

  //     } else {
  //         icon.setAttribute('src', "./public/images/icon-hamburger.svg")
  //         headerImg.style.display = "block"
  //         main.style.display = "block"
  //         footer.style.display = "block"
  //     }
  // })
  // }
});
