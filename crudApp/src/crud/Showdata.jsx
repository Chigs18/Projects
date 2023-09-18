import React, { useEffect } from 'react';
import {GetAPIAction,DeleteAPIAction} from '../action/index'
import {useDispatch,useSelector} from 'react-redux'
import { Link } from 'react-router-dom';


function Showdata(props) {
const dispatch = useDispatch();
const responseData = useSelector((state)=>state.reducer.deatils)
const isDeleteResponse = useSelector((state)=>state.reducer.isDeleteResponse)
console.log(isDeleteResponse);

useEffect(()=>{
    dispatch(GetAPIAction())
},[dispatch])

if(isDeleteResponse)
{
    window.location.reload(false);
}

const result =responseData?responseData.map((res)=>{
    console.log(res);
    return <>
        <tr>
            <td>{res.id}</td>
            <td>{res.name}</td>
            <td>{res.email}</td>
            <td>{res.phone}</td>
            <td>{res.country}</td>
            <td><button className='btn btn-success' onClick={()=>dispatch(DeleteAPIAction(res.id))}>Delete</button></td>
            <td><Link to={`/Update/${res.id}`}><button className='btn btn-primary'>Edit</button></Link></td>
            
        </tr>
    </>

}):null;
    return (
        <>
        <div className="container">
            <div className="row mt-5">
                <center><h1 className='text-danger'>Welcome to Redux CRUD Application</h1></center>
                <div className="col">
                    <table className='table'>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Country</th>
                        <th>Action</th>
                        <tbody>
                            {result}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    );
}

export default Showdata;