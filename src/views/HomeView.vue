<template>
  <div class="home">
    <h1>Inicio</h1>

    
      <div id="tamano_imagen">
        <div id="componente_departamento">
          <img src="../assets/departamentos.jpg" alt=""> <br>
          <router-link to="/departamentos">ir a departamentos</router-link>
        </div>
        <div id="componente_empleados" >
          <img src="../assets/empleados.jpg" alt=""><br>
          <router-link to="/empleados">ir a empleados</router-link>
        </div>
        <div id="componente_turnos">
          <img src="../assets/turnos.jpg" alt=""><br>
          <router-link to="/turnos">ir a turnos</router-link>
        </div>
        </div>
  

  </div>
</template>

<script>


export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>

<style scoped>
.home{
  background-color: rgb(235, 229, 198);
}

img{
 width: 25%;
 align-items: center;
 justify-items: center;
}

</style>
