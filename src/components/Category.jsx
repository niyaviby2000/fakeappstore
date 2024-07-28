import React, { useEffect, useState } from 'react'

function Category({setCategory}) {

  const [categories,setCategories]=useState()

  async function getCategories() {


    let res = await fetch("https://fakestoreapi.com/products/categories")

    let data = await res.json()

    setCategories(data)

  }

  useEffect(()=>{

    getCategories()

  },[])

  function handleClick(){

    let c=event.target.value

    console.log(c);
  }
  return (
    <div className='d-flex justify-content-evenly mt-3'>

      {categories && categories.map((c,i)=><div><button value={c} onClick={(e)=>setCategory(e.target.value)} className='btn btn-outline-success'>{c}</button></div>)}
      
    </div>
  )
}

export default Category

