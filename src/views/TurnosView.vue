<template>
<div id="componentePrincipal">
    <h1>Turnos</h1>
    <div class="container" id="contenedor">
            <table class="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th >Nombre</th>
                        <th >Hora</th>
                        <th >Detalle Fecha</th>                     
                    </tr>
                    <tr v-for="turnos in pruebaTu" v-bind:key="turnos.id">
                      <td>{{ turnos.ShiftID }}</td>
                      <td>{{ turnos.Name }}</td>
                      <td>{{ turnos.EndTime }}</td>
                      <td>{{ turnos.ModifiedDate }}</td>
                        <td>
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
    name:'TurnosView',
    props:{},
    components:{},
    data:function(){
        return{

        }
    },
    methods:{
        ...mapActions('turnos',['consultarTurnos'])
    },
    computed:{
        ...mapState('turnos',['pruebaTu'])
    },
    watch:{},
    created(){
        this.consultarTurnos();
    },
    mounted(){

    },


}
</script>

<style scoped>
#componentePrincipal{
    background-color: rgb(247, 244, 242);
    
}

</style>