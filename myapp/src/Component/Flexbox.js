const Flexbox = () => {
    const arr=['test','test2','test3','test4','test5','test6','test','test2','test3','test','test2','test3','test','test2','test3','test','test2','test3','test','test2','test3','test','test2','test3',]
    return (
        <>
        <div className="flex flex-wrap gap-6 justify-center items-center m-3">
            flexbox
            {/* {arr.map((d,i)=>(<div>
                {d}
            </div>))} */}
            {arr.map((d,i)=>(
                <div key={i} className= 'bg-indigo-500 text-white px-6 py-1 rounded-full'>{d}
                </div>
            ))}
        </div>
        </>
    );
}

export default Flexbox;