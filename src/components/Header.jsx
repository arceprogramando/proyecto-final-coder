import { Link } from "react-router-dom";
import { whatsapp } from "../assets";

const Header = () => {
    const wspUrl = "https://api.whatsapp.com/send/?phone=5491150990913&text=Holaa%21+me+gustaria+un+presupuesto+de+tu+trabajo+desarrollando+paginas+web+%21%21%21%21&type=phone_number&app_absent=0";


    return (
        <>
            <header className='w-full  '>
                <div className='w-full lg:w-full  bg-rose-900 text-white flex justify-center p-1'>

                    <div className='lg:w-[1024px] w-[320px] flex justify-between items-center '>

                        <a href={wspUrl} target='_blank' rel="noreferrer noopener" className='text-xs flex'>
                            <img src={whatsapp} alt="whatsapp icon" className="w-4 h-4 " />
                            <p>+54 9 1150990913</p>

                        </a>
                        <div className="pr-4">Sign In</div>
                    </div>


                </div>
                <div className='text-center font-kaisei mt-10 mb-10'>

                    <Link to="/">
                        <h1 className=' font-normal text-5xl tracking-widest inline text-gray-700 '>Zaragoza
                            <span className='block text-purple-400 '>Shoes</span></h1>
                    </Link>
                    <h2 className="text-gray-700 mt-4 tracking-widest" >shoes and accessories</h2>
                </div >
            </header >
        </>
    )
}

export default Header