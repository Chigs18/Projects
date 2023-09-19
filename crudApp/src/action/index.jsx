import { useEffect, useState } from 'react';
import {GetAPIDetails,DelteAPIDetails,PostApiDetails,EditAPIDetails} from '../API/AxiosREquest'

//get all data
export const GetAPIAction=()=>{
    return function(dispatch)
    {
        return GetAPIDetails().then((res)=>{
            console.log(res);
            dispatch({
                type:"GET_DETAILS",
                payload:res.data
            })
        })
    }
}

//delete data
export const DeleteAPIAction=(id)=>{
    return function(dispatch)
    {
        return DelteAPIDetails(id).then((res)=>{
            console.log(res);
            dispatch({
                type:"DELETE_DETAILS",
                payload:true,
            })
        })
    }
}

//add data
export const PostAPIAction=(request)=>{
    return function(dispatch)
    {
        return PostApiDetails(request).then((res)=>{
            console.log('response from post data ',res);
            dispatch({
                type:"POST_DETAILS",
                payload:'',
            })
        })
    }
}

//edit data
export default(props)=>{
    const [detailbyid, setDetailbyid] = useState({});
    const GetDetailsId = (requestid)=>{
        return EditAPIDetails(requestid).then((res=>{
            setDetailbyid(res);
        }))
    }
    useEffect(()=>{
        GetDetailsId(props);
    }, [])
    return [detailbyid]
}