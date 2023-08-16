import React from 'react'
import { IconType } from 'react-icons'

interface Feature{
    Icon: IconType,
    text:string

}

function Feature({Icon, text}: Feature) {
  return (
    <div className="rounded-full cursor-pointer hover:bg-purple hover:text-white transition ring-card flex items-center gap-2 ring-1 px-3 py-2">
   <Icon/>
    <p className="font-semibold">{text}</p>
  </div>
  )
}

export default Feature

