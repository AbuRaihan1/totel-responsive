import React from 'react'
import { InputText } from 'primereact/inputtext'

interface EditForm{
onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
value?:string;
}

function EditForm({}: EditForm) {
  return (
    <>
         <div className="flex flex-col gap-2 w-[26.5rem]">
            <label htmlFor="firstName" className="font-bold">First Name</label>
            <InputText id="firstName" placeholder='First Name' type="text"/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lastName" className="font-bold">Last Name</label>
            <InputText id="lastName" placeholder='Last Name' type="text"/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="gender" className="font-bold">Gender</label>
            <InputText id="gender" placeholder='Gender'/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="age" className="font-bold">Age</label>
            <InputText id="age" type="digit"  placeholder='Age' />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="occupation" className="font-bold">Occupation</label>
            <InputText id="occupation" type="text" placeholder='Occupation'/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="interests" className="font-bold">Intrests</label>
            <InputText id="interests" type="text" placeholder='Intrests'/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="emailAddress" className="font-bold">Email Address</label>
            <InputText id="emailAddress"  type="email" placeholder='Email Address'/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="country" className="font-bold">Country</label>
            <InputText id="country" type="text" placeholder='Country'/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="city" className="font-bold">City</label>
            <InputText id="city" type="text" placeholder="City"/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="postalCode" className="font-bold">Postal Code</label>
            <InputText id="postalCode" type="digit" placeholder="Postal Code" />
          </div>
    </>
  )
}

export default EditForm