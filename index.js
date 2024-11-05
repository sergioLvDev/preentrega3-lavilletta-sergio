const arrayStock = [
  {
    id: 1,
    nombre: "Nueces",
    categoria: "Frutos Secos",
    Descripcion:
      "Son una excelente fuente de ácidos grasos omega-3, que ayudan a mejorar la salud cardiovascular y reducen la inflamación. Además, aportan antioxidantes y proteínas vegetales que favorecen la salud cerebral.",
  },
  {
    id: 2,
    nombre: "Porotos",
    categoria: "Frutos Secos",
    Descripcion:
      " Ricos en fibra y proteínas, los porotos ayudan a regular el sistema digestivo, controlar el azúcar en sangre y promover la sensación de saciedad. Son ideales para dietas vegetarianas o veganas.",
  },
  {
    id: 3,
    nombre: "Pimenton",
    categoria: "Frutos Secos",
    Descripcion:
      "Contiene vitamina C y antioxidantes como el betacaroteno, que favorecen la salud inmunológica y la salud ocular. Su consumo también puede ayudar a mejorar la circulación sanguínea.",
  },
  {
    id: 4,
    nombre: "Tomates",
    categoria: "Frutos Secos",
    Descripcion:
      " Son ricos en licopeno, un potente antioxidante que apoya la salud del corazón y protege contra ciertos tipos de cáncer. También son una buena fuente de vitaminas A y C.",
  },
  {
    id: 5,
    nombre: "Mani",
    categoria: "Frutos Secos",
    Descripcion:
      "Aporta proteínas, grasas saludables y vitamina E, que benefician la salud cardiovascular y la piel. Su alto contenido en magnesio también ayuda a mantener la salud ósea y muscular.",
  },
  {
    id: 6,
    nombre: "Curry",
    categoria: "Frutos Secos",
    Descripcion:
      " Contiene cúrcuma, que tiene propiedades antiinflamatorias y antioxidantes. Además, puede mejorar la digestión, reducir el riesgo de enfermedades crónicas y promover la salud cerebral.",
  },
  {
    id: 7,
    nombre: "Almendras",
    categoria: "Frutos Secos",
    Descripcion:
      "Son ricas en grasas monoinsaturadas, que favorecen la salud del corazón. También proporcionan vitamina E, magnesio y fibra, lo que ayuda a mejorar la digestión y a controlar el azúcar en sangre.",
  },
  {
    id: 8,
    nombre: "Romero",
    categoria: "Frutos Secos",
    Descripcion:
      " Este hierba tiene propiedades antioxidantes, antiinflamatorias y digestivas. Además, puede mejorar la circulación sanguínea, aliviar dolores musculares y apoyar la memoria y la concentración.",
  },
];

let verDetalle = document.querySelectorAll(".botonesForm");
verDetalle.forEach((boton) => {
  boton.addEventListener("click", (el) => {
    let id = el.currentTarget.id;
    console.log(id);
    const producto = arrayStock.find((el) => el.id == id);
    console.log(producto);
    Swal.fire({
      title: producto.nombre,
      text:
        "Categoría: " +
        producto.categoria +
        "\n" +
        "Descripción: " +
        producto.Descripcion,
      width: "800",
      imageUrl: "../img/" + producto.nombre + ".jpg",
      imageWidth: 300,
      imageHeight: 300,
      imageAlt: "Custom image",
      background: "#F3F5D2",
    });
  });
});
