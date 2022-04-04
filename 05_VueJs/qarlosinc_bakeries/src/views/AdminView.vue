<template>
  <MenuComponent :items="items"/>
  <div id="sections">
    <InventoryComponent />
    <OrdersComponent />
  </div>
</template>

<script>
import MenuComponent from "@/components/MenuComponent.vue"
import InventoryComponent from "@/components/InventoryComponent.vue"
import OrdersComponent from "@/components/OrdersComponent.vue"

export default {
  name: "AdminView",
  data() {
    return {
      items: [
        {name: "inventory", desc: "Inventario", url: "#inventory"},
        {name: "order", desc: "Pedidos", url: "#orders"},
      ]
    }
  },
  //components: {
  //  HelloWorld,
  //},
  components: {
    MenuComponent,
    InventoryComponent,
    OrdersComponent,
  }
};
</script>