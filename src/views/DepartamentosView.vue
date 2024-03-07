<template>
    <div id="DepartamentosView" class="container">
        <h1>Departamentos</h1>
        <div class="container" id="contenedor">
            <table class="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th >Nombre</th>
                        <th >Grupo</th>
                        <th >Detalle</th>                     
                    </tr>
                    <tr v-for="departamento in pruebaDepa" v-bind:key="departamento.id">
                      <td>{{ departamento.DepartmentID }}</td>
                      <td>{{ departamento.Name }}</td>
                      <td>{{ departamento.GroupName }}</td>
                        <td>
                            <button id="editar" class="btn btn-info"><router-link to="/departamentos">ver departamentos</router-link></button>
                            
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
    name:'DepartamentosView',
    data: function(){
        return{

        }
    },
    methods:{
        ...mapActions('departamentos',['consultarDepartamentos'])
    },
    computed:{
         ...mapState('departamentos',['pruebaDepa'])
    },
    watch:{

    },
    created(){
         this.consultarDepartamentos();
    }
}
</script>
<style scoped>
#DepartamentosView{
    background-color:rgb(194, 195, 243);
}
</style>