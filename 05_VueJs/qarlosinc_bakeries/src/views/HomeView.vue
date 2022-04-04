<template>
  <MenuComponent :items="items"/>
  <div id="sections">
    <CatalogComponent />
    <NewOrderComponent />
  </div>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>This is clients page</h1>
  </div> -->
  <FooterComponent />
</template>

<!-- <li><a class="active" href="#catalogo">Catálogo</a></li>
    <li><a href="#nuevo_pedido">Arma tu pedido</a></li>
    <li><a href="#contacto">Contacto</a></li> -->

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import FooterComponent from "@/components/FooterComponent.vue"
import MenuComponent from "@/components/MenuComponent.vue"
import CatalogComponent from "@/components/CatalogComponent.vue"
import NewOrderComponent from "@/components/NewOrderComponent.vue"

export default {
  name: "HomeView",
  data() {
    return {
      items: [
        {name: "catalogo", desc: "Catálogo", url: "#catalogo"},
        {name: "nuevo-pedido", desc: "Arma tu pedido", url: "#nuevo_pedido"},
        {name: "contacto", desc: "Contacto", url: "#contacto"},
      ]
    }
  },
  //components: {
  //  HelloWorld,
  //},
  components: {
    MenuComponent,
    CatalogComponent,
    NewOrderComponent,
    FooterComponent
  }
};
</script>

<style>
  section {
  margin: 20px 20px;
  border-radius: 24px;
  background-color: #eeeeee;
  padding: 12px ;
}

  section > h2 {
    margin-top: 0;
    text-align: center;
  }
</style>