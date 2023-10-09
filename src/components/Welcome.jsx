import Carousel from "./Carousel"
import { offers } from "../assets"
import ItemListContainer from "./ItemListContainer"

const Welcome = () => {
    return (
        <>
            <Carousel />
            <div className="flex justify-center mb-4 ">
                <div className="relative" >
                    <img src={offers} alt="ofertas " className="max-w-full" />
                    <div className="absolute bottom-20 right-1  " >

                        <button className="px-7 w-40 h-16 bg-gray-500 rounded-xl text-2xl text-white font-bold m-4">Men</button>
                        <button className="px-7 w-40 h-16 bg-gray-500 rounded-xl text-2xl text-white font-bold m-4">Women</button>
                        <button className="px-7 w-40 h-16 bg-gray-500 rounded-xl text-2xl text-white font-bold m-4">Child</button>
                    </div>

                </div>
            </div>
            <ItemListContainer />
        </>
    )
}

export default Welcome