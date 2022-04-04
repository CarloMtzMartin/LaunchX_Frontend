<template>
    <section id="nuevo_pedido" class="full">
        <h2>Arma tu Pedido</h2>
        
        <form id="nuevo_pedido_form" onsubmit="console.log(nuevo_pedido_form.value())">
            <p>Elige el/los sabor(es) base del pastel:</p>
            <div class="decor">
                <input type="checkbox" id="sabor_vainilla" name="sabor_vainilla" />
                <label for="sabor_vainilla">Vainilla</label>
            </div>
            <div class="decor">
                <input type="checkbox" id="sabor_chocolate" name="sabor_chocolate" />
                <label for="sabor_chocolate">Chocolate</label>
            </div>
            <div class="decor">
                <input type="checkbox" id="sabor_fresa" name="sabor_fresa" />
                <label for="sabor_fresa">Fresa</label>
            </div>
            <div class="decor">
                <input type="checkbox" id="sabor_cafe" name="sabor_cafe" />
                <label for="sabor_cafe">Café</label>
            </div>
            <div class="decor">
                <input type="checkbox" id="sabor_milhojas" name="sabor_milhojas" />
                <label for="sabor_milhojas">Mil Hojas</label>
            </div>
            <div class="decor">
                <input type="checkbox" id="sabor_pinon" name="sabor_pinon" />
                <label for="sabor_pinon">Piñon</label>
            </div>
            <hr />
            <p>Elige la(s) decoracion(es) del pastel:</p>
            <div class="sabor">
                <input type="checkbox" id="decor_fondant" name="decor_fondant" />
                <label for="decor_fondant">Fondant</label>
            </div>
            <div class="sabor">
                <input type="checkbox" id="decor_betun" name="decor_betun" />
                <label for="decor_betun">Betún (Chocolate/Vainilla/Fresa)</label>
            </div>
            <div class="sabor">
                <input type="checkbox" id="decor_chispas" name="decor_chispas" />
                <label for="decor_chispas">Chispas (Chocolate/Chocolate Blanco/Arcoiris)</label>
            </div>
            <div class="sabor">
                <input type="checkbox" id="decor_panditas" name="decor_panditas" />
                <label for="decor_panditas">Panditas</label>
            </div>
            <div class="sabor">
                <input type="checkbox" id="decor_mm" name="decor_mm" />
                <label for="decor_mm">M&Ms</label>
            </div>
            <hr />
            <p>Por favor proporciona los siguientes datos personales:</p>
            <div>
                <label for="name">Nombre Completo:</label>
                <input type="text" id="name" name="name">
            </div>
            <div>
                <label for="tel">Teléfono:</label>
                <input type="tel" id="tel" name="tel">
            </div>
            <div>
                <label for="email">Correo Electrónico:</label>
                <input type="email" id="email" name="email">
            </div>
            <div>
                <label for="desc">Descripción General del Pastel / Otros Detalles</label>
                <textarea id="desc" name="desc"></textarea>
            </div>

            <button type="reset">Borrar Todo</button>
            <button type="submit">Crear Pedido</button>
        </form>
    </section>
</template>