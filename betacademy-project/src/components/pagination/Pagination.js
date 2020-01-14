import React from 'react';

const Pagination = (props) => {
    const arr =[];
    for(let i=1;i<=props.count;i++){
        // if(props.count>6){    ???
        //     arr.push(1,"...",props.count)
        //     break;
        // }
        arr.push(i);
    }

    return (
        <div>
              {arr.map(item=>{

                  return <span style={{backgroundColor:"#ccc",padding:"10px",cursor:"pointer", marginLeft: "10px", color: "black"}} onClick={props.onPageChange}>{item}</span>
              })}
        </div>
    );
};

export default Pagination;