import Image from "next/image";
import gi from '../images/jslogo.gif'
const Load=()=>{
    return(<div className='loa'>
            <h2 className="animate">
            <div> <Image src={gi} width='500' height='500' alt="gif"/></div>
               <div>Next Js . . .</div></h2>
    </div>
    )
};export default Load