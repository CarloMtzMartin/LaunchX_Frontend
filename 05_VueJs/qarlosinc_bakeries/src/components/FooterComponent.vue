<template>
    <footer id="contacto" class="full">
        <address>
            <div>
                <p>Nuestra direccion</p>
                Vasco de Quiroga 3200, Santa Fe, Zedec Sta Fé,<br /> 
                Álvaro Obregón, 01219 <br /> 
                Ciudad de México, CDMX<br />
            </div>
             <div>
                <p>Nuestro telefono</p>
                Cel: 722 78 62 485<br />
                Local: 722 78 62 486
             </div>
            <div>
                <p>Horarios</p>
                Lunes a Viernes (08:00 - 19:00)<br /> 
                Sábado (08:00 - 17:00)<br /> 
                Domingo (10:00 - 17:00)
            </div> 
            
        </address>
        <div id="map_container">
            <iframe id= "map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d559.5324365266737!2d-99.26438379201845!3d19.366097183495746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201196dca8199%3A0xffe7560012c3a23b!2sMicrosoft%20Corporate%20Building!5e0!3m2!1sen!2smx!4v1646423519524!5m2!1sen!2smx" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
        
    </footer>
</template>

<style scoped>
    footer {
    background-color: #326273;
    padding: 0 20px;
  }

  address {
    padding: 20px 0;
    display: flex;
    flex-direction: row;
    column-gap: 16px;
    row-gap: 32px;
    justify-content: center;
  }

  address > div {
    border-radius: 24px;
    background-color: #eeeeee;
    padding: 12px ;
    flex-basis: 100%;
  }
  
  #map_container {
    width: 100%;
  }

  #map {
    width: 100%;
    height: 77vh;
    border-radius: 25px;
  }
</style>