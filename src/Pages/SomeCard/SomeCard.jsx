import { TbTruckDelivery } from "react-icons/tb";
import { BsCashCoin } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { TbCertificate } from "react-icons/tb";

const SomeCard = () => {
    return (
        <div className="mt-10 text-black">
            <h1 className="text-center lg:text-4xl md:text-2xl text-xl font-bold ">Why Shop With Us</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-8 px-10">
                <div className="flex gap-3  bg-[rgb(243,243,243)] p-4 rounded-xl ">
                    <div className="my-auto">
                        <TbTruckDelivery className='w-12 h-12 text-[rgb(254,76,80)]'></TbTruckDelivery>
                    </div>
                    <div>
                        <h1 className="font-bold">FREE SHIPPING</h1>
                        <h1>Suffered Alteration in Some Form</h1>
                    </div>
                </div>

                <div className="flex gap-3  bg-[rgb(243,243,243)] p-4 rounded-xl ">
                    <div className="my-auto">
                        <BsCashCoin className='w-12 h-12 text-[rgb(254,76,80)]'></BsCashCoin>
                    </div>
                    <div>
                        <h1 className="font-bold">CACH ON DELIVERY</h1>
                        <h1>The Internet Tend To Repeat</h1>
                    </div>
                </div>

                <div className="flex gap-3  bg-[rgb(243,243,243)] p-4 rounded-xl ">
                    <div className="my-auto">
                        <GiReturnArrow className='w-12 h-12 text-[rgb(254,76,80)]'></GiReturnArrow>
                    </div>
                    <div>
                        <h1 className="font-bold">45 DAYS RETURN</h1>
                        <h1>Making it Look Like Readable</h1>
                    </div>
                </div>

                <div className="flex gap-3  bg-[rgb(243,243,243)] p-4 rounded-xl ">
                    <div className="my-auto">
                        <TbCertificate className='w-12 h-12 text-[rgb(254,76,80)]'></TbCertificate>
                    </div>
                    <div>
                        <h1 className="font-bold">Best Quality</h1>
                        <h1>variations of passages of Lorem Ipsum available</h1>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SomeCard;