const Categorys = () => {
    return (
        <div>
            <div className="lg:flex justify-center gap-14 mx-24 mt-7">

                <div className='relative' >
                    <img className='h-[250px] rounded-md ' src="https://i.ibb.co/D8cx2cw/pexels-andrea-piacquadio-842811.jpg" alt="" />
                    <div className='absolute -mt-[150px] lg:ml-20'>
                        <h1 className=" btn text-2xl text-black bg-[rgb(203,200,200)] font-bold">MENS</h1>
                    </div>
                </div>

                <div>
                    <img className='h-[250px] rounded-md ' src="https://i.ibb.co/d7D5sQ3/pexels-andrea-piacquadio-974911.jpg" alt="" />
                    <div className='absolute -mt-[150px] lg:ml-20'>
                        <h1 className=" btn text-2xl text-black bg-[rgb(203,200,200)] font-bold">WOMENS</h1>
                    </div>
                </div>

                <div className='relative'>
                    <img className='h-[250px] rounded-md w-fit ' src="https://i.ibb.co/1966YzX/pexels-rachel-claire-5490778.jpg" />
                    <div className='absolute -mt-[150px] lg:ml-20'>
                        <h1 className=" btn text-2xl text-black bg-[rgb(203,200,200)] font-bold">ACCESSORIES</h1>
                    </div>



                </div>


            </div>




        </div>
    );
};

export default Categorys;