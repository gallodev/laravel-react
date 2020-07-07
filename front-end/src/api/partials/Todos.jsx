import axios from 'axios';
import { URL } from '../../config';

const Products = {
    get: () => {                
        return axios.get(`${URL}api/todo`).then( res => {            
            if(res.status === 200){                
                return res.data;
            }
        }).catch((er)=>{
            console.log(er);
        })    
                
    },
    save: (todo) => {
        return axios.post(`${URL}api/todos`).then( res => {
            if(res.status === 201){
                return res.id;
            }
        }).catch((er) => {
            console.log(er);
        });
    }    
}

export default Products;




