<template>
    <section id="catalogo" class="full">
        <h2>Nuestro Catálogo</h2>
        <div id="sabores_adornos">
            <div id="sabores" class="catalogo_section">
                <h3>Nuestros Sabores</h3>
                <hr />
                <table>
                    <tr>
                        <td>Vainilla</td>
                        <td>300.00 MXN</td>
                    </tr>
                    <tr>
                        <td>Chocolate</td>
                        <td>300.00 MXN</td>
                    </tr>
                    <tr>
                        <td>Fresa</td>
                        <td>300.00 MXN</td>
                    </tr>
                    <tr>
                        <td>Café</td>
                        <td>400.00 MXN</td>
                    </tr>
                    <tr>
                        <td>Mil Hojas</td>
                        <td>450.00 MXN</td>
                    </tr>
                    <tr>
                        <td>Piñon</td>
                        <td>500.00 MXN</td>
                    </tr>
                </table>
            </div>
            <div id="adornos" class="catalogo_section">
                <h3>Nuestros Adornos</h3>
                <hr />
                <table>
                    <tr>
                        <td>Foundant</td>
                        <td>60.00 MXN</td>
                    </tr>
                    <tr>
                        <td>Betún (Chocolate/Vainilla/Fresa)</td>
                        <td>30.00 MXN</td>
                    </tr>
                    <tr>
                        <td>Chispas (Chocolate/Chocolate Blanco/Arcoiris)</td>
                        <td>30.00 MXN</td>
                    </tr>
                    <tr>
                        <td>Panditas</td>
                        <td>30.00 MXN</td>
                    </tr>
                    <tr>
                        <td>M&Ms</td>
                        <td>30.00 MXN</td>
                    </tr>
                </table>
            </div>
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
}
</script>

<style>
    

  .full {
      height: 100vh;
  }

  #sabores_adornos {
      display: flex;
      flex-flow: row wrap;
      column-gap: 6%;
      row-gap: 10%;
      padding: 0 25px;
  }

  #catalogo {
    
  }

  .catalogo_section {
    
  }

  #sabores_adornos > div {
      flex: 47%
  }

  table {
      width: 100%;
  }

  tr {
    height: 2em;
  }

  tbody > tr:hover {background-color: coral;}

  td > th {
      width: 100%;
  }

  td {
    border-bottom: 1px solid #ddd;
  }

  td:nth-child(2) {
    text-align: end;
  }

  #cake_pics {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    width: 100%;
  }

  img {
    flex: 1 1 25%;
    width: 200px;
  }
</style>