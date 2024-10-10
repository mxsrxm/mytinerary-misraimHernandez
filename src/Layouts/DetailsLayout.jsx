import React from 'react'
import { Outlet } from 'react-router-dom'

export default function DetailsLayout() {
  return (
    <>
    <div className='bg-green-200'>DetailsLayout</div>
    <Outlet></Outlet>
    <footer></footer>
    </>
  )
}