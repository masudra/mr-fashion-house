import { Link } from "react-router-dom";
import { FaFacebook, FaYoutube, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Contact = () => {
    return (
        <div className="grid lg:grid-cols-2 mt-10 mx-5">
            <div className="p-10">
                <h1 className="text-4xl  font-bold ">Contact Us</h1>
                <h1 className="text-xl  mt-1">There are many ways to contact us. You may drop us a line, give us a call or send an email, choose what suits you the most.</h1>

                <div className="mt-8 text-xl">
                    <h1>(+88)01800000000</h1>
                    <h1>info.mrfashion@gmail.com</h1>
                </div>

                <div className="mt-8 text-xl">
                    <h1>Open hours: 8.00-18.00 Mon-Fri</h1>
                    <h1>Sunday: Closed</h1>
                </div>

                <div className="mt-9">
                    <h1 className="text-4xl font-bold">Follow Us</h1>
                    <div className="flex gap-4 mt-4 ">
                        <Link to='https://www.facebook.com/'><FaFacebook className="w-[38px] h-[38px] hover:translate-y-2  text-blue-700 rounded-full "></FaFacebook></Link>
                        <Link to='https://www.instagram.com/'><FaInstagramSquare className="w-[38px] h-[38px] hover:translate-y-2  text-[rgb(245,93,93)] rounded-full "></FaInstagramSquare></Link>
                        <Link to='https://twitter.com'><FaSquareXTwitter className="w-[38px] h-[38px] hover:translate-y-2 text-black rounded-full "></FaSquareXTwitter></Link>
                        <Link to='https://youtube.com'><FaYoutube className="w-[38px] h-[38px] hover:translate-y-2  text-red-600 rounded-full "></FaYoutube></Link>
                    </div>
                </div>
            </div>

            <div className="p-10">
                <h1 className=" text-4xl  font-bold">Get In Touch With Us!</h1>
                <h1 className=" text-xl  mt-1">Fill out the form below to recieve a free and confidential.</h1>
                <input type="text" placeholder="Enter Your Name" className="input input-bordered  lg:w-[420px] md:w-[350px] w-fit mt-5 " /><br />
                <input type="email" placeholder="Enter Your Email" className="input input-bordered  lg:w-[420px] md:w-[350px] w-fit mt-5" /><br />
                <input type="text" placeholder="Enter Your Message" className="input input-bordered  lg:w-[420px] md:w-[350px] w-fit h-[150px] mt-5" /><br />
                <input className=" btn input input-bordered  lg:w-[420px] md:w-[350px] w-fit bg-black text-white mt-5" type="submit" value='Send' />

            </div>

        </div>
    );
};

export default Contact;