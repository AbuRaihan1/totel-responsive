
import {useState} from 'react'


import Main1 from './Main1';
import Main2 from './Main2';
import Main3 from './Main3';
import Main5 from './Main5';
import Main6 from './Main6';
import Main7 from './Main7';
import Main8 from './Main8';
import Main9 from './Main9';
import Main11 from './Main11';



interface Props {
  step: number;
}

const main: React.FC<Props> = ({ step }) => {
  const [guest, setGuest] = useState<number>(0);
  const [Mon, setMon] = useState<number>(24);

  const decreaseHandler = (type: string) => {
    if (type === 'guest') {
      if (guest === 0) return;
      setGuest(guest - 1);
    }
  };

  const decrease = (type: string) => {
    if (type === 'Mon') {
      if (Mon === 24) return;
      setMon(Mon - 1);
    }
  };
 


    


    


  const main4 = (
  <>

<div className='content1'>

      <div className="heading">Who can stay in your place?</div>
      <div className="para w-full"><p >You'll add more details later, such as bed types..</p></div>
      </div>

  <div className="stay">
     <div className="who">Who can stay there?</div>    
       <div className='gender'>
         <div className="g male">
          <div className='imagep'>
            <img src="/images/male1.png" alt="male"/>
          </div>     
         <div className='person m'>Male</div>
       </div>
         <div className="g female">
          <div className='imagep'>
            <img src="/images/female.png" alt="female"/>
          </div>
          <div className='person f'>Female</div>
         </div>

         <div className="g both">
          <div className='imagep'><img src="/images/both.png"/></div>
          <div className='person b'>Both can stay</div>
         </div>
    </div>      
    </div>



    <div style={{width:'85%',margin:'2rem auto'}}>
        <div className="who">Sharable Details</div>
      <div className='main_btn'>
         <div>Guests</div>
          <div className='right'>
            <div className='btn' onClick={() => decreaseHandler('guest')}>-</div>
            <div style={{width: '25px',textAlign:'center'}}>{guest}</div>
            <div className='btn' onClick={() => setGuest(guest +1)}>+</div>
          </div>
      </div>
      </div>
    
 </>
)  


const main10=(
  <>
  
  <div className='content1'>
     
      <div className="heading">Set your price limit</div>
      <div className="role w-full"><p>Short titles work best. Have fun with it – you can always change it later..</p></div>
      <div>
      <div style={{margin:'1rem auto', }}>
        
        <div className='main_btn'>
           <div>Set price</div>
            <div className='right'>
              <div className='btn' onClick={() => decrease('Mon')}>-</div>
              <div style={{width: '25px',textAlign:'center'}}>{Mon}</div>
              <div className='btn' onClick={() => setMon(Mon +1)}>+</div>
            </div>
        </div>
        </div>
  
      </div>
    </div>
  </>
)



const main12=(
  <>
 hello
  </>
  )
  
return (
     <div>
      {step === 1 ? <Main1/> : step === 2 ? <Main2/> : step ===3 ? <Main3/> : step === 4 ? main4 : step === 5 ? <Main5/> :step === 6 ? <Main6/> : step=== 7 ? <Main7/>: step===8? <Main8/>: step===9? <Main9/>: step===10? main10 : step==11? <Main11/> : main12 }    
    </div>
    )
}

    export default main;





