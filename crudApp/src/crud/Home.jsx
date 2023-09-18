import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { PostAPIAction } from '../action/index';

function Home(props) {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')
    const[country,setCountry]=useState('')

    const dispatch = useDispatch();
    
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

    const ClickHandler=(e)=>{
        const resultData={
            name:name,
            email:email,
            phone:phone,
            country:country,
        }
        dispatch(PostAPIAction(resultData))
    }
    return (
        <div>
            <div className="container">
            <table className='table'>
                <tr>
                    <td>Name:</td>
                    <td><input type="text" className='form-control' id='name' onChange={(e)=>NameHndle(e)}/></td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td><input type="email" className='form-control' id='email' onChange={(e)=>EmailHndle(e)}/></td>
                </tr>
                <tr>
                    <td>Phone:</td>
                    <td><input type="text" className='form-control' id='phone' onChange={(e)=>PhoneHndle(e)}/></td>
                </tr>
                <tr>
                    <td>Country:</td>
                    <td><input type="text" className='form-control' id='country' onChange={(e)=>CountryHndle(e)}/></td>
                </tr>
                <tr>
                    <td><button type="button" onClick={(e)=>ClickHandler(e)} className='btn btn-primary' >Submit</button></td>
                </tr>
            </table>
            </div>
        </div>
    );
}

export default Home;