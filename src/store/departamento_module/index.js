import axios from "axios"

const departamentos={
    namespaced:true,
    state:{
        pruebaDepa:[],
    },
    getters:{},
    mutations:{
        CONSULTAR_DEPARTAMENTOS:(state, depaPrueba)=>{
            state.pruebaDepa=depaPrueba;
        }
    },
    actions:{
        consultarDepartamentos:(context)=>{
            let urlDepa ='department.json';
            
            axios.get(urlDepa)
                .then(respuesta=>{  
                    
                    context.commit('CONSULTAR_DEPARTAMENTOS', respuesta.data);
                })
                .catch(err=>{
                    console.log(err);
                });
        },
    },
    modules:{

    },
   
}
export default departamentos;