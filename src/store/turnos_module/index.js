import axios from "axios"

const turnos={
    namespaced:true,
    state:{
        pruebaTu:[],
    },
    getters:{},
    mutations:{
        CONSULTAR_TURNOS:(state, tuPrueba)=>{
            state.pruebaTu=tuPrueba;
        }
    },
    actions:{
        consultarTurnos:(context)=>{
            let urlTu ='shift.json';
            
            axios.get(urlTu)
                .then(respuesta=>{  
                    
                    context.commit('CONSULTAR_TURNOS', respuesta.data);
                })
                .catch(err=>{
                    console.log(err);
                });
        },
    },
    modules:{

    },
   
}
export default turnos;