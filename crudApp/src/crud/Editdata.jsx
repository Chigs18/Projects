import React, { useEffect } from 'react';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { PostAPIAction } from '../action/index';
import { useParams } from 'react-router-dom';
import GetDetailsId from '../action/index'

function Update(props) {
  const {id} = useParams();
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')
    const[country,setCountry]=useState('')

    // const dispatch = useDispatch();
    const NameHndle=(e)=>{
        setName(e.target.value)
    }
    const EmailHndle=(e)=>{
        setEmail(e.target.value)
    }
    const PhoneHndle=(e)=>{
        setPhone(e.target.value)
    }
    const CountryHndle=(e)=>{
        setCountry(e.target.value)
    }

    const [getDetails] = GetDetailsId(id)

    useEffect(()=>{
      const data = ()=>{
        if(getDetails.data)
        {
          setName(getDetails.data.name)
          setEmail(getDetails.data.email)
          setPhone(getDetails.data.phone)
          setCountry(getDetails.data.country)
        }
      }
      data();
    }, [getDetails.data])

    // const ClickHandler=(e)=>{
    //     const resultData={
    //         name:name,
    //         email:email,
    //         phone:phone,
    //         country:country,
    //     }
    //     dispatch(PostAPIAction(resultData))
    // }
    return (
        <div>
            <div className="container">
            <table className='table'>
                <tr>
                    <td>Name:</td>
                    <td><input type="text" className='form-control' id='name' defaultValue={name} onChange={(e)=>NameHndle(e)}/></td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td><input type="email" className='form-control' id='email' defaultValue={email} onChange={(e)=>EmailHndle(e)}/></td>
                </tr>
                <tr>
                    <td>Phone:</td>
                    <td><input type="text" className='form-control' defaultValue={phone} id='phone' onChange={(e)=>PhoneHndle(e)}/></td>
                </tr>
                <tr>
                    <td>Country:</td>
                    <td><input type="text" className='form-control' defaultValue={country} id='country' onChange={(e)=>CountryHndle(e)}/></td>
                </tr>
                <tr>
                    <td><button type="button"className='btn btn-primary' >Update</button></td>
                </tr>
            </table>
            </div>
        </div>
    );
}

export default Update;