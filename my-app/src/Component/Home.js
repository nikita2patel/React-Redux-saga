import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data,delet } from "../Redux/Action/Action";

const Home = () => {
  const [obj, setobj] = useState({
    name: "",
    last: "",
  });
  const dispatch = useDispatch();
  const output = useSelector((state) => state.reducer.user);
  console.log("33", output);

  const handeldata = (e) => {
    e.preventDefault();
    dispatch(data(obj));
  };

  const handeldelt = (id) =>{
    dispatch(delet(id))
    console.log('id',id)

  }

  return (
    <div>
      <h1>home</h1>
      <form onSubmit={handeldata}>
        <input
          type="text"
          placeholder="enter your name"
          onChange={(e) => setobj({ ...obj, name: e.target.value })}
        /><br></br>
        <input
          type="text"
          placeholder="enter your last"
          onChange={(e) => setobj({ ...obj, last: e.target.value })}
        /><br></br>
        <button type="submit">submit</button>
      </form>

       <table>
  <tr>
    <th>name</th>
    <th>last</th>
   
  </tr>
  {
    output.map((x,id)=>{
      return(
        <tr  key={id}>
          <td>{x.name}</td>
          <td>{x.last}</td>
          <td><button onClick={()=> handeldelt(id)}>Delete</button></td>  
        </tr> 
      )
    })
  
}
  
</table> 
    </div>
  );
};

export default Home;
