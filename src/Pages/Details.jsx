import React from 'react'
import { useNavigate, useLocation,useParams } from 'react-router-dom'

export default function Details() {
  const navigate = useNavigate()
  const location = useLocation();
  const objeto = location.state
  console.log(objeto);
  const {id,name} = useParams()
  console.log(id,name);

  function navigateBack(){
    navigate(-1)
  }

  return (
    <>
    <div>Details</div>
    <p>This is Details</p>
    <button
      onClick={()=> navigateBack()} 
      className='p-2 bg-slate-200 hover:bg-slate-500'>Back</button>
    </>
    
  )
}