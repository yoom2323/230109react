import { useEffect, useRef } from "react";


function Resize2() {
    console.log('리사이즈');
    const width = useRef(null);
    useEffect ( () => {
        window.addEventListener('resize', () => {
        width.current = window.innerWidth;
        console.log(width.current);
        })
    },[])
    return (
        <>
            
        </>
    );
}

export default Resize2;