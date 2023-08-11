import React from 'react';
import { useState } from 'react';

function Cart() {
  const [contents , setcontents] = useState([])  
  const [total , settotal] = useState(0)
  const [name , setname] = useState('')
  const [amount , setamount] = useState(0)
  const [quantity , setquantity] = useState(0)


  const handleClick = () => {
    if(name ==='' || amount<=0 || quantity<=0){
        alert('Invalid Input')
        return
    }
    let cost = amount * quantity
    setcontents([...contents , [name , cost]]);

    console.log(contents)

    settotal(total + cost)
    setamount(0);
    setname('')
    setquantity(0)
  }


  return (
    <div>
        <h2>Shopping Cart</h2>
        <input placeholder='input item name' value={name} onChange={(e) => {setname(e.target.value)}}></input>
        <label>amount</label>
        <input placeholder='amount' value={amount} onChange={(e) => {setamount(e.target.value)}} type='number'>
        </input>
        <label>quantity</label>
        <input placeholder='quantity' value={quantity} onChange={(e) => {setquantity(e.target.value)}} 
        type='number'></input>
        <button className='addItem' onClick={handleClick}>add item</button>
        <div className='box'>
            {contents.map((elem , i) => (
                <p className='cart-item' key={i}>{elem[0]} <span>{elem[1]}</span></p>
            ))}
        </div>
        <h4>Total Amount : {total}</h4>
    </div>
  )
}

export default Cart