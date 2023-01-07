import { useState } from "react";
const Ref = ({title,link}) => {
    const[s,setS]=useState('hello')
    const[s1,setS1]=useState(false)
    console.log(s.length);
    const sd=()=>{
        setS('welcome')
    }
    const sd1=()=>{
        setS('')
    }
    return (
        <>
        <div>
        value 
        {s}
        </div>
        
        
        {s.length>0 ?title.map((t,i)=><div key={i}> {t}</div>):'notilte'}
        <button onClick={sd} className=''>
            button
        </button>
        <button onClick={sd1} className=''>
            buttonS1
        </button>
         {/*<button onClick={()=>console.log(link)}>facebook</button> */}

 
    
    {/*<a href={link} target={"_blank"} className='no-underline bg-gray-300 rounded-full text-sm hover:bg-gray-500 text-red-700 p-2 m-10  text-center border border-yellow-500'>{title}</a> */}

        </>
        
    );
}

export default Ref;