import { useState } from "react";



const Employees = ()=>{

    const[username,setUserName] = useState();
    const[email,setemail] = useState();
    const[mobile,setmobile] = useState();
    const[designation,setDesignation] = useState();
    const[gender,setGender] = useState("M");
    const[course,setCourse] = useState("MCA");


    const head = new Headers();
    head.append('content-type','application/json')
    const submitData = async()=>{
        try{
            fetch('http://localhost:3000/create',{
                method:"POST",
                credentials:"include",
                headers:head,
                body:JSON.stringify({
                    f_Name : username,
                    f_Email: email,
                    f_Mobile:mobile,
                    f_Designation:designation,
                    f_gender:gender,
                    f_Course:course   
        })
            })
        }
        catch(err){
            console.log(err);
        }
    }
    return(
        <>
            <div style={{display:"flex"}}>
                <img src="https://i0.wp.com/www.dealsdray.com/wp-content/uploads/2023/11/logo_B2R.png?w=469&ssl=1" style={{width:"100px",height:"80px"}}></img>
                <div style={{margin:"auto",marginRight:"0px"}}>
                    <ul style={{listStyleType: "none",display:"flex"}}>
                        <a style={{textDecoration:"None",cursor:"pointer",marginLeft:"4rem"}}><li >Home</li></a>
                        <a style={{textDecoration:"None",cursor:"pointer",marginLeft:"4rem"}}><li >Employee List</li></a>
                        <a style={{textDecoration:"None",cursor:"pointer",marginLeft:"4rem"}}><li >admin</li></a>
                        <a style={{textDecoration:"None",cursor:"pointer",marginLeft:"4rem"}}><li >Logout</li></a>
                    </ul>
                </div>
            </div>
                <h1>
                    Create Employee
                </h1>
           
                <div style={{marginTop:"2rem"}}>
                    <label for="name">Name</label>
                    <input type="text" id="name" placeholder=" " style={{width:"40%",height:"1.5rem",display:"inline-block",marginLeft:"4rem"}} onChange={(e)=>{setUserName(e.target.value)}}  />
                </div>

                <div style={{marginTop:"2rem"}}>
                    <label for="email">Email</label>
                    <input type="text" id="email" placeholder=" " style={{width:"40%",height:"1.5rem",display:"inline-block",marginLeft:"4rem"}} onChange={(e)=>{setemail(e.target.value)}} />
                </div>

                <div style={{marginTop:"2rem"}}>
                    <label for="mobile">Mobile No</label>
                    <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="mobile" placeholder=" " style={{width:"40%",height:"1.5rem",display:"inline-block",marginLeft:"2.2rem"}} onChange={(e)=>{setmobile(e.target.value)}} />
                </div>

                <div style={{marginTop:"2rem"}}>
                    <label for="designation">Designation</label>
                    <input type="text" id="designation" placeholder=" " style={{width:"40%",height:"1.5rem",display:"inline-block",marginLeft:"1.8rem"}} onChange={(e)=>{setDesignation(e.target.value)}} />
                </div>

                <div style={{marginTop:"2rem"}}>
                    <label for="gender">Gender</label>
                    <label for="m" style={{marginLeft:"4rem"}}>Male</label>
                    <input type="radio" id="m" placeholder=" " value="M" style={{display:"inline-block"}} name="genderDeclare" onChange={(e)=>{setGender("F");console.log(gender)}}/>
                    <label for="f">Female</label>
                    <input type="radio" id="f" placeholder=" " value="F" style={{display:"inline-block"}} name="genderDeclare" onChange={(e)=>{setGender("M");console.log(gender)}}/>
                </div>

                <div style={{marginTop:"2rem"}}>
                    <label for="course" style={{width:"10%",height:"1.5rem",display:"inline-block"}}>Course</label>
                    
                    <label for="c1" style={{marginLeft:"3rem"}}> MCA</label>
                    <input type="checkbox" id="vehicle2" name="c1" value="MCA" onChange={(e)=>{setCourse(e.target.value);console.log(course)}}/>

                    <label for="c1"> BCA</label>
                    <input type="checkbox" id="vehicle2" name="c2" value="BCA" onChange={(e)=>{setCourse(e.target.value);console.log(course)}}/>

                    <label for="c1"> BSC</label>
                    <input type="checkbox" id="vehicle2" name="c3" value="BSC" onChange={(e)=>{setCourse(e.target.value);console.log(course)}}/>

                </div>

               <div>
               <button style={{display:"block",margin:"auto",position:"relative",top:"4rem",border:"1px solid #070EF9",background:"green",width:"70%",padding:"0.5rem",borderRadius:"0.5rem",textDecoration:"none",color:"white",cursor:"pointer",textDecoration:"none",marginLeft:"6.7rem"}} onClick={submitData}>Submit</button>
               </div>
               
        </>
    )
}

export default Employees;