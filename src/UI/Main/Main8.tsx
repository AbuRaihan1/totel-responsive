import MyForm from '../Box/Input';
import MyFormtwo from '../Box/input2';
export default function Main7() {
    return (

<>
  <div className='page1'>
    <div className='content1'>
    
      <div className="heading">Lets give your house a title & description!</div>
      <div className="para"><p>Short titles work best. Have fun with it – you can always change it later..</p></div>
     
    <div className="hd">
     <div className='head9'>
      <div className='title'>Heading</div>

      <div>
        <MyForm/>
      </div> 

      <div className='title'>Enter Description</div>

      <div>
        <MyFormtwo/>
      </div> 
      </div>
      </div>
     


      </div>
    </div>
  </>
    )}
