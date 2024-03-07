import axios from "axios"

const empleados={
    namespaced:true,
    state:{
        pruebaEm:[],
    },
    getters:{},
    mutations:{
        CONSULTAR_EMPLEADOS:(state, emPrueba)=>{
            state.pruebaEm=emPrueba;
        }
    },
    actions:{
        consultarEmpleados:(context)=>{
            let urlEm ='employee.json';
            
            axios.get(urlEm)
                .then(respuesta=>{  
                    
                    context.commit('CONSULTAR_EMPLEADOS', respuesta.data);
                })
                .catch(err=>{
                    console.log(err);
                });
        },
    },
    modules:{

    },
   
}
export default empleados;