import React, {useState, useEffect} from 'react';
import { getCustomersByName } from '../utils/customerCrud';

import '../css/background.css'
import { useNavigate } from 'react-router-dom';

export default function List() {

  const navigate = useNavigate()
  const user = localStorage.getItem('user')
  const [customers, setCustomers] = useState([]);

  const handleAdding = ()=>{
    navigate('/add-client')
  }
  useEffect(()=>{
    const getCustomers = async ()=>{
      try{
        console.log(user)
        const res = await getCustomersByName(user, 'createdBy')
        setCustomers(res.response)
        console.log('list:   ' ,res.response)
      } catch (error){
        console.error('Error fetching customers:', error);
      }
    }
    getCustomers()
  }, [user])


    return(
      
        <div className='background'>
          <div className='table'>
          <h2>Customer List</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Number</th>
                <th>Amount</th>
                <th>Modify</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={index}>
                  <td>{customer.name}</td>
                  <td>{customer.number}</td>
                  <td>{customer.amount}</td>
                  <td>modify</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="button" className="button" onClick={handleAdding}><b>Add-Client</b></button>
          </div>
        </div>
      );
    };
    