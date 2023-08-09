"use client"

import React from 'react'
import Image from 'next/image'
import { Buttonprops } from '@/types'
export default function Button({title,containerStyles,handleClick }:Buttonprops) {
  return (

    <button
    type={'button'}
    disabled={false}
    className={`custom-btn ${containerStyles}`}
    onClick={()=>{handleClick}}
    >

<span className={`flex-1`}>
{title}   {/* Title should be sent as a prop in Hero Component*/}
</span>
    </button>
  )
}
