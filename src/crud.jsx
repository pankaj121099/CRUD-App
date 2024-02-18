import React, {  useEffect, useState} from "react";

import { empdata } from "./array";
function Crud() {
   const [data, setData]= useState([]);
   const [firstname, setFirstname]= useState();
  const [lastname,setLastname]= useState();
  const [age,setAge]= useState(0);
  const [id,setId]= useState(0);
  const [update,setUpdate]= useState(false);
  
useEffect(()=>{
  setData(empdata)
},[]);

const handleEdit = (id)=>{
 const dt= data.filter(item=>item.id===id); 
 if(dt!==undefined)
 console.log("dfdgfn",dt);
 {  setUpdate(true);
     setId(id);
     setFirstname(dt[0].name);
     setLastname(dt[0].lname);
     setAge(dt[0].age);
 }
}

const handledelete= (id)=>{
  if(id>0)
  {
    if(window.confirm('are you sure to delete this item ')){
      const dt=data.filter(item=> item.id!==id);
      setData(dt);
  }
}
}

const handleclear= ()=>{
  setId(0)
   setFirstname('')
   setLastname('')
   setAge('');
   setUpdate(false)
}
const handlesave= (e)=>{
  let error='';
  if(firstname==='')
    error+='firstname is required,';
    if(lastname==='')
    error+='lastname is required,';
    // if(age<=0);
    // error+='age  is required.';

    if(error ===''){
    error+='firstname is required,';
    
  e.preventDefault();
  const dt=[...data];
  const newobject= {
    id: dt.length+ 1,
    name: firstname ,
    lname: lastname,
    age:age,
  }
  console.log("dfugvvgv",empdata,empdata?.length)
  dt.push(newobject);
  setData(dt);
}
  else{
    alert(error)
  }
 


}

const handleUpdate= ()=>{
   const index= data.map((item)=>{
    return item.id
   }).indexOf(id);
   const dt=[...data];
   dt[index].firstname= firstname;
   dt[index].lastname= lastname;
   dt[index].age= age;
   setData(dt);
   handleclear()
}

  return (
    <> 

   <h1 className="text-center mt-2 p-1"> Crud <span style={{color:'red'}}>App</span></h1> <br/> 
   <hr style={{ height:'8px', backgroundColor:'black'}}/>
   <div style={{display:'flex', justifyContent:'center', marginTop:'10px', padding:"15px"}} >
       
    <div>
            <label> first Name:
            <input type="text" placeholder="enter the name " onChange={(e)=>setFirstname(e.target.value)} value={firstname} />
             </label>
             </div>&nbsp; &nbsp;
             <div>
             <label> Last Name:
            <input type="text" placeholder="enter the last name " onChange={(e)=>setLastname(e.target.value)} value= {lastname} />
             </label>
             </div>&nbsp;&nbsp;
             <div>
             <label> Age:
            <input type="text" placeholder="enter the age "  onChange={(e)=>setAge(e.target.value)}  value={age} />
             </label> 
             </div> &nbsp;&nbsp;
           

             {
              !update?
              <button className=" btn btn-success" onClick={(e)=> handlesave(e) }> save </button>
                :
                <button className=" btn btn-danger" onClick={handleUpdate}> update </button>
             }
             &nbsp;  
            
             <button    className=" btn btn-danger" onClick={ handleclear }> clear </button>
            
        </div>
        </div>
      
   
    <table className="table table-hover p-1 mt-2 text-center"> 
      <thead className="bg-warning"> 
        <tr> 
          <td>Sr.No </td>
          <td>Id </td>
          <td> FirstName </td>
          <td>LastName </td>
          <td> Age </td>
          <td> Actions</td>
        </tr>
      </thead>
      <tbody>
        {
          data.map((item,index) =>{
            return (
              <tr key={index}>
                <td> {index }</td>  
                <td>{item.id} </td>
                <td> {item.name}</td>
                <td> {item.lname}</td>
                <td> {item.age}</td>
                <td><button className='btn btn-primary' onClick={()=>handleEdit(item.id)}> Edit </button> &nbsp;
                <button className='btn btn-danger'  onClick={()=>handledelete(item.id)}> Delete </button> 
               </td>

              </tr>
            )
          })
        }
      </tbody>
    </table>
   
    </>
  );
}

export default Crud;


