import React, { useState } from "react"


function Form(){

        const [name,setName]=useState({firstName:"",lastName:""})
        const [email,setEmail]=useState({email:""})
        const [phone,setphoneno]=useState({phone:""})
        const [DOB,setDOB] = useState({})
    return(


        <div className="container">
        <form>
        <div>
        <h1>Hello World</h1>
        </div>
        <div className="container1">
            <label for="first_name">First Name</label>
       <input type="text" id="first_name"  value={name.firstName}  onChange={ e=>setName({...name,firstName:e.target.value})} placeholder="Enter your First Name"/>
       
        </div>
       
       <div className="container1">
        <label for="last_name">Last Name:</label>
        <input type="text" id="last_name" name="last_name" value={name.lastName} onChange={e=>setName({...name,lastName: e.target.value})} placeholder="Enter your Last Name"/>
        
       </div>
       

       <div className="container1">
        <label for="email">Email:</label>
        <input type="text" id="email" name="last_name" value={email.email} onChange={e=>setEmail({email: e.target.value})} placeholder="Enter your Email"/>
        
       </div>

       <div className="container1">
        <label for="phone">Phone No:</label>
        <input type="text" id="Phone" name="Phone" value={phone.phone} onChange={e=>setphoneno({phone: e.target.value})} placeholder="Enter your Number"/>
        
       </div>

       <div className="container1">
        <label for="age">Age:</label>
        <input type="number" id="age" name="age" />
       </div>

       <div className="container1">
        <label for="gender">Gender:</label>
        <select name="gender" id="gender">
            <option>Male</option>
            <option >Female</option>
        </select>
       </div>

         <div className="container1">
        <label for="DOB">Date of Birth :</label>
        <input type="date" id="DOB" value={DOB.DOB} name="DOB" onChange={e=>setDOB({DOB: e.target.value})}/>
       
       </div>
       <div className="container1">
        <label for="interest">Interest: </label>
        Coding
        <input type="radio"  name="interest" />
        Pubg
        <input type="radio"  name="interest" />
       </div>
       <div>
        <button type="submit">Submit</button>
       </div>
       </form>
        <div>
            
        <h4>Your First Name :{name.firstName}</h4>
       <h4>Your Last Name :{name.lastName}</h4>
       <h4>Your email address :{email.email}</h4>
       <h4>Your Phone no:{phone.phone}</h4>
       <h4>You DOB :{DOB.DOB}</h4>
        </div>

        </div>



    );

}



export default Form