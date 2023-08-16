// import {useState} from 'react'
export default function Main4() {
   
      
  return (
  
    <>
      <div className="content1">
        {/* <div className="step" >Step-3</div> */}
        <div className="heading">Who can stay in your place?</div>
        <div className="para w-full">
          <p>You'll add more details later, such as bed types..</p>
        </div>
      </div>

      <div className="stay">
        <div className="who">Who can stay there?</div>
        <div className="gender">
          <div className="g male">
            <div className="imagep">
              <img src="/images/male1.png" />
            </div>
            <div className="person m">Male</div>
          </div>
          <div className="g female">
            <div className="imagep">
              <img src="/images/female.png" />
            </div>
            <div className="person f">Female</div>
          </div>

          <div className="g both">
            <div className="imagep">
              <img src="/images/both.png" />
            </div>
            <div className="person b">Both can stay</div>
          </div>
        </div>
      </div>

      <div style={{ width: "85%", margin: "2rem auto" }}>
        <div className="who">Sharable Details</div>
        <div className="main_btn">
          <div>Guests</div>
          <div className="right">
            <div className="btn">
              -
            </div>
            <div style={{ width: "25px", textAlign: "center" }}></div>
            <div className="btn" >
              +
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
