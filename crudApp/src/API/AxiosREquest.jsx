import axios from "axios";

export async function AxiosRequest(url,method,headers,params)
{
    return params?axios({
        url:url,
        method:method,
        headers:headers,
        data:params
    }):axios({
        url:url,
        method:method,
        headers:headers,
        data:{}
    })
}

//get all data from api
const GetAPIDetails=()=>{
    const headers={
        'Content-Type':'application/json'
    }
    return AxiosRequest('http://localhost:3000/details','GET',headers,{})
}


//delete data
const DelteAPIDetails=(id)=>{
    const headers={
        'Content-Type':'application/json'
    }
    return AxiosRequest('http://localhost:3000/details/'+id,'DELETE',headers,{})
}


//submit data
const PostApiDetails = (data) => {
    return axios.post('http://localhost:3000/details/', data)
}



//get perticular user data by id (edit data)
const EditAPIDetails=(id)=>{
    const headers={
        'Content-Type':'application/json'
    }
    return AxiosRequest('http://localhost:3000/details/'+id,'GET',headers,{})
}

export  {GetAPIDetails,DelteAPIDetails,PostApiDetails,EditAPIDetails};