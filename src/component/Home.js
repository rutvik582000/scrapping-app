import React from "react";
import HomeItem from "./HomeItem";
import sample from "./sample.json"

export default function Home(props) {
  let bool = false
  const handleClick=()=>{
    let url = urlValiadtor();
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
    <div className="container">
      {sample.all_links.map((sampleItem,index)=>{
        return (<HomeItem key = {index} sampleItem={sampleItem}/>)
      })
        }
    </div>
    </>
  );
}
