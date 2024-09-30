import React, {useState} from 'react';
import '../css/LoginPage.css';
import '../css/background.css';

import { addCustomer } from '../utils/customerCrud'
import { useNavigate } from 'react-router-dom';
export default function AddNewClient() {

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const navigate = useNavigate()
    const [name,setName] = useState('')
    const [number,setNumber] = useState('')
    const [amount,setAmount] = useState('')
    const user = localStorage.getItem('user')

    const handleAdd = async ()=>{
        try {
            console.log('props : ' , name, ' ' ,number,' ' , amount, ' ', user)
            const response = await addCustomer(name,number,amount,user)
            if(response){
                console.log('new client created , name:',name)
                navigate('/list')
            }
        } catch (error){
            console.log('error', error)
        }
    }
  return (
    <div className='background'>
        <div className='form-container'>
                <h2> Add Client </h2>
        <div className=''>
        <form onSubmit={handleSubmit}>
            <br></br>
                <div>
                    <label className='lable'>Client Name</label><br></br><br></br>
                    <input type="text" placeholder='Enter Client Name ' className='form-control' 
                    onChange={ e => setName(e.target.value)}/>
                </div>
                <br></br>
                <div>
                    <label >Number</label><br></br><br></br>
                    <input type="text" placeholder='Enter Number ' className='form-control' 
                    onChange={ e => setNumber(e.target.value)}/>
                </div>
                <br></br>
                <div>
                    <label >Amount</label><br></br><br></br>
                    <input type="text" placeholder='Enter Amount ' className='form-control' 
                    onChange={ e => setAmount(e.target.value)}/>
                </div>
                <br></br>
                <br></br><br></br>
                <button type="button" className="button" onClick={handleAdd} ><b>Add</b></button>
            </form>
        </div>
    </div></div>
  )
}