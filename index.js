const arrayStock = [
  {
    id: 1,
    nombre: "Nueces",
    categoria: "Frutos Secos",
    descripcion:
      "Son una excelente fuente de ácidos grasos omega-3, que ayudan a mejorar la salud cardiovascular y reducen la inflamación. Además, aportan antioxidantes y proteínas vegetales que favorecen la salud cerebral.",
  },
  {
    id: 2,
    nombre: "Porotos",
    categoria: "Legumbres",
    descripcion:
      "Ricos en fibra y proteínas, los porotos ayudan a regular el sistema digestivo, controlar el azúcar en sangre y promover la sensación de saciedad. Son ideales para dietas vegetarianas o veganas.",
  },
  {
    id: 3,
    nombre: "Pimenton",
    categoria: "Especias",
    descripcion:
      "Contiene vitamina C y antioxidantes como el betacaroteno, que favorecen la salud inmunológica y la salud ocular. Su consumo también puede ayudar a mejorar la circulación sanguínea.",
  },
  {
    id: 4,
    nombre: "Tomates",
    categoria: "Frutas Desecadas",
    descripcion:
      "Son ricos en licopeno, un potente antioxidante que apoya la salud del corazón y protege contra ciertos tipos de cáncer. También son una buena fuente de vitaminas A y C.",
  },
  {
    id: 5,
    nombre: "Mani",
    categoria: "Frutos Secos",
    descripcion:
      "Aporta proteínas, grasas saludables y vitamina E, que benefician la salud cardiovascular y la piel. Su alto contenido en magnesio también ayuda a mantener la salud ósea y muscular.",
  },
  {
    id: 6,
    nombre: "Curry",
    categoria: "Especias",
    descripcion:
      "Contiene cúrcuma, que tiene propiedades antiinflamatorias y antioxidantes. Además, puede mejorar la digestión, reducir el riesgo de enfermedades crónicas y promover la salud cerebral.",
  },
  {
    id: 7,
    nombre: "Almendras",
    categoria: "Frutos Secos",
    descripcion:
      "Son ricas en grasas monoinsaturadas, que favorecen la salud del corazón. También proporcionan vitamina E, magnesio y fibra, lo que ayuda a mejorar la digestión y a controlar el azúcar en sangre.",
  },
  {
    id: 8,
    nombre: "Romero",
    categoria: "Especias",
    descripcion:
      "Esta hierba tiene propiedades antioxidantes, antiinflamatorias y digestivas. Además, puede mejorar la circulación sanguínea, aliviar dolores musculares y apoyar la memoria y la concentración.",
  },
];

let verDetalle = document.querySelectorAll(".botonesForm");
verDetalle.forEach((boton) => {
  boton.addEventListener("click", (el) => {
    let id = el.currentTarget.id;
    console.log(id);

    // Buscar el proyecto en el array
    const proyecto = arrayStock.find((el) => el.id == id);

    // Eliminar cualquier tarjeta de detalle existente
    const existingDetail = document.querySelector(".cardDetalle");
    if (existingDetail) {
      existingDetail.remove();
    }

    // Crear el nuevo detalle del producto
    let div = document.createElement("div");
    div.innerHTML = `
      <div class="cardDetalle card mb-3"  >
        <div class="row h-100">
          <div class="col-md-5 ">
            <img src="../img/${proyecto.nombre}.jpg"  alt="imgAlt">
          </div>
          <div class="col-md-7 ">
            <div class="card-body h-100 p-0 d-flex flex-column  justify-content-evenly">
            <h5 class="card-title fw-bold text-center text-uppercase mb-2 text-2xl">${proyecto.nombre}</h5>
            <p class="card-text flex-1 mb-0 ">Categoria:  ${proyecto.categoria}</p>
           
            <p class="card-text flex-1">Descripcion: ${proyecto.descripcion}</p>
              <button class="btncerrar btn btn-success">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    `;
    document.getElementById("productos").appendChild(div);

    // Agregar el evento para cerrar el detalle
    const cerrarBtn = div.querySelector(".btncerrar");
    cerrarBtn.addEventListener("click", () => {
      div.remove(); // Elimina la tarjeta del DOM
    });
  });
});
