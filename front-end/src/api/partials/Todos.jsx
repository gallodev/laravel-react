import axios from 'axios';
import { URL } from '../../config';

const Products = {
    get: () => {                
        return axios.get(`${URL}api/todo`).then((res)=> {            
            if(res.status === 200){                
                return res.data;
            }
        }).catch((er)=>{
            console.log(er);
        })    
                
    },
    save: () => {
        return "save";
    }    
}

export default Products;




