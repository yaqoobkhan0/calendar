import React, { useContext, useState } from "react";
import details from "../Context";
import ContestDetails from "./ContestDetails";
import ContestPage from "./ContestPage";

const Contest = () => {
  //use context is used to read the values in context
  const data = useContext(details);
  console.log(data);
  const [singlePage, setSinglePage] = useState([]);

  const [click, setClick] = useState(true);

  const handleChange = (e) => {
    setClick(false);
    setSinglePage(e);
    console.log(e)
  };

  // if(click === true){
  //   console.log("true normal if else methoid")

  // }else{
  //   console.log("false normal if else method")
  // }

  // (click === true?console.log(" true terinary operatortrue"): console.log("false trinary"))
  return click === true ? (
    <div className="contest">
      <div>
        <h2 className="h2">CODING PLATFORM</h2>
        <hr/>
      </div>
      <div>
       
         {data.map((e, i) => {
          //Element is one element which is present inside array(or)object
          //i is index of that array (or)index to the elements
          console.log(e);
          return (
            <div onClick={() => handleChange(e)} className="card" key={i}>
              <ContestDetails idx={i} data={e} />
            </div>
          );
        })} 
      </div>
    </div>
  ) : (

    <ContestPage yaqoobb={singlePage} />
  );
};

export default Contest;
