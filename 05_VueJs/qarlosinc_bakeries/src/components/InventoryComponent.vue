<template>
    <section id="inventory" class="full">
        <h2>Inventario Disponibles</h2>
        <div id="sabores_adornos">
            <form v-on:submit.prevent="getAllData" id="frm">
            <!-- <form id="frm"> -->
                <div id="sabores"> 
                    <h3>Nuestros Sabores</h3>
                    <hr />
                    <div v-for="flavor in $store.getters.getFlavors" :key="flavor.id">
                        <label :for="'flavor_' + flavor.id">{{ flavor.desc }}</label>
                        <input type="number" :id="'flavor_' + flavor.id" :name="'flavor_' + flavor.id" :value="flavor.inventory">
                    </div>
                </div>
                <div id="adornos">
                    <h3>Nuestros Adornos</h3>
                    <hr />
                    <div v-for="ornament in $store.getters.getOrnaments" :key="ornament.id">
                        <label :for="'decor_' + ornament.id">{{ ornament.desc }}</label>
                        <input type="number" :id="'decor_' + ornament.id" :name="'decor_' + ornament.id" :value="ornament.inventory">
                    </div>
                </div>
                <button @click="$store.dispatch('saveInventory', getAllData())">Test</button>
            </form>
            
        </div>
        <div id="cake_pics">
            <img src="http://assets.stickpng.com/images/5b432721c051e602a568cccb.png">
            <img src="http://assets.stickpng.com/images/5b5064cfc051e602a568ce3f.png">
            <img src="http://assets.stickpng.com/images/5c308ad2a97bc40295eb8406.png">
            <img src="http://assets.stickpng.com/images/58c57b2609e8bc1b42c7792a.png">
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        getAllData(){
      
         let myForm = document.getElementById('frm'); 
         let formData = new FormData(myForm);
         const data = {}; 
         // need to convert it before using not with XMLHttpRequest
         console.log("test", formData.entries())
         for (let [key, val] of formData.entries()) {
               Object.assign(data, {[key]: val})
         }
         return data;
       },
    }
}
</script>

<style scoped>
    .no-inventory {
        background-color: red;
        color: white;
    }
</style>