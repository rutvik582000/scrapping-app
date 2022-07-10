import React, { useState } from "react";
import HomeItem from "./HomeItem";

export default function Home(props) {
  const [data,setData] = useState({});
  const [loading,setLoading] = useState(true);
  let bool = false
  const hostname = "http://localhost:8000/";

  const handleClick= async (e)=>{
    let url = urlValiadtor();
    localStorage.setItem('url',url)
    const uri = hostname;
    setLoading(true);
    const response = await fetch(uri, {
      method: "GET",
      mode: "cors",
      headers: {
      },});
      let json = await response.json();
      setData(json)
      setLoading(false);
      console.log(data.Data);
  }


  const urlValiadtor = ()=>{
    let ele = document.querySelector('input');
    let url = ele.value;
    // eslint-disable-next-line
    let reg = /^(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
    bool = reg.test(url);
    if (bool) {
      ele.style.border='1px solid black'
      return url
    }
    else{
      ele.style.border='1px solid red'
      console.log('wrong url');
      return null
    }
  }

  return (
    <><div className="container text-center">

    <div className="container my-3 " >
      <input className="mt-3" id="fetch" type="text" style={{'width':'50rem',borderRadius:'5px'}} />
      </div>
    <div>
      <button className="btn btn-primary btn-sm" onClick={handleClick}>Fetch</button>
    </div>
    </div>
    <div className="container mt-3">

    <div className="row">
      {/* {!loading && data.Data.map((dataItem,index)=>{
        return (<div className="col-md-4" key = {index}><HomeItem dataItem={dataItem}/></div>)
      })} */}
    </div>
      </div>
    </>
  );
}
