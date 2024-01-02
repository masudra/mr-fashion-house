const Categorys = () => {
    return (
        <div>
            <div className="lg:flex md:flex justify-center gap-14 lg:mx-24 mx-10 mt-7">

                <div className='relative w-fit mt-5'>
                    <img className='lg:h-[250px] md:[200px] h-[160px] rounded-md ' src="https://i.ibb.co/D8cx2cw/pexels-andrea-piacquadio-842811.jpg" alt="" />
                    <div className='absolute lg:-mt-[150px] md:-mt-[120px] -mt-[100px] lg:ml-20 md:ml-14 ml-14'>
                        <h1 className=" btn text-2xl text-black bg-[rgb(203,200,200)] font-bold">MENS</h1>
                    </div>
                </div>

                <div className='relative w-fit mt-5'>
                    <img className='lg:h-[250px] md:[200px] h-[160px] rounded-md ' src="https://i.ibb.co/d7D5sQ3/pexels-andrea-piacquadio-974911.jpg" alt="" />
                    <div className='absolute lg:-mt-[150px] md:-mt-[120px] -mt-[100px] lg:ml-20 md:ml-10 ml-10'>
                        <h1 className=" btn text-2xl text-black bg-[rgb(203,200,200)] font-bold">WOMENS</h1>
                    </div>
                </div>

                <div className='relative w-fit mt-5'>
                    <img className='lg:h-[250px] md:[200px] h-[160px] rounded-md w-fit ' src="https://i.ibb.co/1966YzX/pexels-rachel-claire-5490778.jpg" />
                    <div className='absolute lg:-mt-[150px] md:-mt-[120px] -mt-[100px] lg:ml-20 md:ml-5 ml-5'>
                        <h1 className=" w-fit btn text-2xl text-black bg-[rgb(203,200,200)] font-bold">ACCESSORIES</h1>
                    </div>



                </div>


            </div>




        </div>
    );
};

export default Categorys;