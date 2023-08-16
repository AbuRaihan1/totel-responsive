// import React,{useState} from 'react';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css"
export default function date() {
  return (
    <div>
        <Datetime value={new Date() } input={true} className="z-10 px-2 py-3 shadow appearance-none w-50 text-grey-darker" />
    </div>
  )
}
