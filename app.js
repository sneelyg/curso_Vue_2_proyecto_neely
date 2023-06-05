import { characters } from "./characters.js";
import { locations } from "./locations.js";

const { createApp } = Vue;

const Header = {
  props: {
    titulo: String,
    subtitulo: String,
  },
  template: `
  <h1 class="odd">{{titulo}}</h1>
  <div class="row justify-content-around my-5">
  <div class="col-3 ">
  <h3>{{subtitulo}}</h3>

  </div>
  </div>
  `,


};
const Tabla = {
  props: {
    titulo_tabla: String,
    header_uno: String,
    header_dos: String,
    header_tres: String,
    datos: Array,
    background_color: String,
    font_color: String,
  },
  template: `
<div :class="background_color">

<h2>{{titulo_tabla}}</h2>
<table :class="font_color">

    <tr>
      <th class="px-2">
        <h3>{{header_uno}}</h3>
      </th>

    </tr>
    <tr v-for="elements of datos">
    <td>{{elements.name}}</td>
  
    </tr>

  </table>

</div>
`,
};

createApp({
  components: {
    "header-component": Header,
    "table-component": Tabla,
  },
  data() {
    return {
      tituloIndex: "Hola desde Index",
      info: [],
      lugares: [],
    };
  },
  created() {
    this.getElements();
  },
  methods: {
    getElements() {
      this.info = characters;
      this.lugares = locations;
      console.log(this.info);
      console.log(this.lugares);
    },
  },
  computed: {},
}).mount("#app");
