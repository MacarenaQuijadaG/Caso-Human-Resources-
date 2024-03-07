<template>
  <div id="app">
    <nav>
      <RouterLink to="/">Inicio</RouterLink>  |
      <router-link to="/departamentos">Departamentos</router-link>  |
      <RouterLink to="/empleados">Empleados</RouterLink>   |
      <RouterLink to="/turnos">Turnos</RouterLink>   |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: black;
  
}

nav a {
  font-weight: bold;
  color: azure;
}

nav a.router-link-exact-active {
  color: azure;
}
</style>
