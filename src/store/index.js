import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    arreglo: [
      {
        imagenes: [
          "manta-1-1.jpg",
          "manta-1-2.jpg",
          "manta-1-3.jpg",
        ],
        descrCorta: "Manta pura lana\nMELANGE VISON",
        descrLarga:
          "Tejidas a mano en pura lana merino fina, muy suave. Son mantas gruesas como una frazada, mantienen tu calor sin agobiar y dejando respirar al cuerpo.\nMide 90 x 180cm",
        precio: 29500,
      },
      {
        imagenes: [
          "manta-2-1.jpg",
          "manta-2-2.jpg",
          "manta-2-3.jpg",
        ],
        descrCorta: "Manta pura lana\nMELANGE CHOCOLATE",
        descrLarga:
          "Manta tejida a mano en pura lana merino, suave y abrigada, son mantas gruesas como una frazada.\nLas hacemos en pares iguales para usar en cama doble\nMide 90 x 180cm",
        precio: 29500,
      },
      {
        imagenes: [
          "manta-3-1.jpg", 
          "manta-3-2.jpg", 
        ],
        descrCorta: "Manta pura lana\nGRIS",
        descrLarga:
          "Manta tejida a mano en pura lana Merino, súper suave, esponjosa y abrigada.\nSon mantas gruesas como una frazada y miden 90 x 180cm",
        precio: 29500,
      },
      // {
      //   imagenes: ["tote-1.jpeg", "tote-2.jpeg", "tote-3.jpeg", "tote-4.jpeg"],
      //   descrCorta: "Tote-Bag en hilo de algodón",
      //   descrLarga:
      //     "Bolso tejido a mano en algodón color gris.\nEntran muchísmas cosas y casi no ocupa espacio vacío. \nViene en varios colores",
      //   precio: 700,
      // },
      // {
      //   imagenes: [
      //     "bolso-pera-1.png",
      //     "bolso-pera-2.png",
      //     "bolso-pera-4.png",
      //     "bolso-pera-5.png",
      //   ],
      //   descrCorta: "Bolso bandolera",
      //   descrLarga:
      //     "Bolso tejido a mano súper práctico y canchero. \nViene en varias combinaciones de colores y también se puede hacer con la correa más corta.",
      //   precio: 750,
      // },

      // {
      //   imagenes: ["almohadon-1.png", "almohadon-2.png", "almohadon-3.png"],
      //   descrCorta: "Almohadón en vellón de lana",
      //   descrLarga:
      //     "Almohadón en pura lana, cómodo y calentito es ideal para agregar a las sillas de plástico.",
      //   precio: 2500,
      // },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
