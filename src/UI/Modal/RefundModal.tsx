import RefundConfirmation from '@/components/order/RefundConfirmation'
import { Dialog } from 'primereact/dialog'
import React from 'react'

interface RefundModal{
    visible: boolean
    setVisible:React.Dispatch<React.SetStateAction<boolean>>
}
function RefundModal({visible, setVisible}: RefundModal) {
  return (
<Dialog visible={visible} style={{ width: '50vw' }} onHide={()=>setVisible(false)}>

    <RefundConfirmation setVisible={setVisible}/>

</Dialog>
  )
}

export default RefundModal