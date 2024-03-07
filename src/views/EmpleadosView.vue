<template>
<div id="componentePrincipal">
    <h1>Empleados</h1>
    <hr>
    
    <div id="componente_filtrar">
    <label for="">Identificador</label>
    <input type="text" >
   
    <label for="">Fecha de Contratacion (rango inicio)</label>  
    <input type="date">
   
    <label for="">Fecha de Contratacion (rango fin)</label>
    <input type="date">
    <br>
    <button class="btn btn-info">Filtrar</button>
  </div>
<hr>
    <div class="container" id="contenedor">
            <table class="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th >Cedula Identidad</th>
                        <th >Fecha de Contratacion</th>
                        <th>Detalle</th>
                                      
                    </tr>
                    <tr v-for="empleados in pruebaEm" v-bind:key="empleados.id">
                      <td>{{ empleados.businessentityid }}</td>
                      <td>{{ empleados.nationalidnumber }}</td>
                      <td>{{ empleados.hiredate }}</td>
                        <td>
                            <button id="ver" class="btn btn-info"><router-link to="/empleados">ver empleados</router-link></button>
                            
                        </td>
                    </tr>
                </thead>
            </table>           
        </div>

</div>
</template>


<script>
import { mapActions, mapState } from 'vuex'
export default{
    name:'EmpleadosView',
    props:{},
    components:{},
    data:function(){
        return{

        }
    },
    methods:{
        ...mapActions('empleados',['consultarEmpleados'])
    },
    computed:{
        ...mapState('empleados',['pruebaEm'])
    },
    watch:{},
    created(){
        this.consultarEmpleados();
    },
    mounted(){

    },

}
</script>

<style scoped>
#componentePrincipal{
    background-color: rgb(247, 244, 242);
    
}
#componente_filtrar{
    text-align: justify;
}

</style>