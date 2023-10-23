import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/slider/slider1.png'
import img2 from '../../../assets/slider/slider2.png'
import img3 from '../../../assets/slider/slider3.png'
import img4 from '../../../assets/slider/slider4.png'
import img5 from '../../../assets/slider/slider5.png'
import img6 from '../../../assets/slider/slider6.png'
import img7 from '../../../assets/slider/slider7.jpg'
import img8 from '../../../assets/slider/slider8.png'
import imgbg from '../../../assets/slider/man-woman-removebg-preview.png'
const Banner = () => {
    return (
        <div className="mb-16">
            <Carousel showArrows={true}>
                <div className="carousel-item max-h-screen">
                    <img src={img1} alt="Image 2" className="w-full h-auto" />
                    <div className="absolute bottom-32 left-[470px]">
                        <img className=" h-96 " src={imgbg} alt="" />
                    </div>
                    <div className="absolute top-1/4 text-xl left-32">
                    <h1><span className="text-8xl font-bold text-yellow-400">20% </span><span  className="text-4xl font-bold text-pink-400">off</span></h1>
                    </div>
                    <div className="absolute bottom-44 text-xl w-80 text-white left-32">
                    <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque error optio quaerat rerum animi, harum placeat voluptatum aliquid pariatur veritatis.
                    </p>
                    </div>
                        <button className="absolute text-black border-none bottom-20 left-32 btn bg-gradient-to-bl from-black via-pink-500 to-black font-bold">
                            BYE NOW
                        </button>
                </div>
                <div className="carousel-item max-h-screen">
                    <img src={img2} alt="Image 2" className="w-full h-auto" />
                    
                    <div className="absolute top-1/4 text-xl left-32">
                    <h1><span className="text-8xl font-bold text-yellow-400">HURREY.... </span><span  className="text-4xl font-bold text-pink-400">offer.....</span></h1>
                    </div>
                    <div className="absolute bottom-40 text-xl w-[550px] text-gray-400 text-left left-52">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore vitae tempora necessitatibus pariatur officiis voluptatem quisquam, eius dolorem in, doloribus vel ad atque iusto asperiores, saepe excepturi? Voluptas consequatur harum atque fugiat nesciunt! Veniam possimus animi eum, provident iste et fugiat quos consectetur asperiores sit ab exercitationem maiores quae adipisci!
                    </p>
                    </div>
                        <button className="absolute text-white border-none bottom-20 left-96 btn bg-gradient-to-bl from-blue-600 via-black to-lime-600 font-bold">
                            subscribe theare
                        </button>
                </div>
                <div className="carousel-item max-h-screen">
                    <img src={img3} alt="Image 2" className="w-full h-auto" />
                    
                    <div className="absolute top-1/4 text-xl left-32">
                    <h1><span className="text-8xl font-bold text-yellow-400">HURREY.... </span><span  className="text-4xl font-bold text-pink-400">offer.....</span></h1>
                    </div>
                    <div className="absolute bottom-40 text-xl w-[550px] text-gray-400 text-left left-52">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore vitae tempora necessitatibus pariatur officiis voluptatem quisquam, eius dolorem in, doloribus vel ad atque iusto asperiores, saepe excepturi? Voluptas consequatur harum atque fugiat nesciunt! Veniam possimus animi eum, provident iste et fugiat quos consectetur asperiores sit ab exercitationem maiores quae adipisci!
                    </p>
                    </div>
                        <button className="absolute text-white border-none bottom-20 left-96 btn bg-gradient-to-bl from-blue-600 via-black to-lime-600 font-bold">
                            subscribe theare
                        </button>
                </div>
                <div className="carousel-item max-h-screen">
                    <img src={img4} alt="Image 2" className="w-full h-auto" />
                    
                    <div className="absolute top-1/4 text-xl left-32">
                    <h1><span className="text-8xl font-bold text-yellow-400">HURREY.... </span><span  className="text-4xl font-bold text-pink-400">offer.....</span></h1>
                    </div>
                    <div className="absolute bottom-40 text-xl w-[550px] text-gray-400 text-left left-52">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore vitae tempora necessitatibus pariatur officiis voluptatem quisquam, eius dolorem in, doloribus vel ad atque iusto asperiores, saepe excepturi? Voluptas consequatur harum atque fugiat nesciunt! Veniam possimus animi eum, provident iste et fugiat quos consectetur asperiores sit ab exercitationem maiores quae adipisci!
                    </p>
                    </div>
                        <button className="absolute text-white border-none bottom-20 left-96 btn bg-gradient-to-bl from-blue-600 via-black to-lime-600 font-bold">
                            subscribe theare
                        </button>
                </div>
                <div className="carousel-item max-h-screen">
                    <img src={img5} alt="Image 2" className="w-full h-auto" />
                    
                    <div className="absolute top-1/4 text-xl left-32">
                    <h1><span className="text-8xl font-bold text-yellow-400">HURREY.... </span><span  className="text-4xl font-bold text-pink-400">offer.....</span></h1>
                    </div>
                    <div className="absolute bottom-40 text-xl w-[550px] text-gray-400 text-left left-52">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore vitae tempora necessitatibus pariatur officiis voluptatem quisquam, eius dolorem in, doloribus vel ad atque iusto asperiores, saepe excepturi? Voluptas consequatur harum atque fugiat nesciunt! Veniam possimus animi eum, provident iste et fugiat quos consectetur asperiores sit ab exercitationem maiores quae adipisci!
                    </p>
                    </div>
                        <button className="absolute text-white border-none bottom-20 left-96 btn bg-gradient-to-bl from-blue-600 via-black to-lime-600 font-bold">
                            subscribe theare
                        </button>
                </div>
                <div className="carousel-item max-h-screen">
                    <img src={img6} alt="Image 2" className="w-full h-auto" />
                    
                    <div className="absolute top-1/4 text-xl left-32">
                    <h1><span className="text-8xl font-bold text-yellow-400">HURREY.... </span><span  className="text-4xl font-bold text-pink-400">offer.....</span></h1>
                    </div>
                    <div className="absolute bottom-40 text-xl w-[550px] text-gray-400 text-left left-52">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore vitae tempora necessitatibus pariatur officiis voluptatem quisquam, eius dolorem in, doloribus vel ad atque iusto asperiores, saepe excepturi? Voluptas consequatur harum atque fugiat nesciunt! Veniam possimus animi eum, provident iste et fugiat quos consectetur asperiores sit ab exercitationem maiores quae adipisci!
                    </p>
                    </div>
                        <button className="absolute text-white border-none bottom-20 left-96 btn bg-gradient-to-bl from-blue-600 via-black to-lime-600 font-bold">
                        Enrole Now
                        </button>
                </div>
                <div className="carousel-item max-h-screen">
                    <img src={img7} alt="Image 2" className="w-full h-auto" />
                    
                    <div className="absolute top-1/4 text-xl left-32">
                    <h1><span className="text-8xl font-bold text-yellow-400">HURREY.... </span><span  className="text-4xl font-bold text-pink-400">offer.....</span></h1>
                    </div>
                    <div className="absolute bottom-40 text-xl w-[550px] text-gray-400 text-left left-52">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore vitae tempora necessitatibus pariatur officiis voluptatem quisquam, eius dolorem in, doloribus vel ad atque iusto asperiores, saepe excepturi? Voluptas consequatur harum atque fugiat nesciunt! Veniam possimus animi eum, provident iste et fugiat quos consectetur asperiores sit ab exercitationem maiores quae adipisci!
                    </p>
                    </div>
                        <button className="absolute text-white border-none bottom-20 left-96 btn bg-gradient-to-bl from-blue-600 via-black to-lime-600 font-bold">
                            subscribe theare
                        </button>
                </div>
                <div className="carousel-item max-h-screen">
                    <img src={img8} alt="Image 2" className="w-full h-auto" />
                    
                    <div className="absolute top-1/4 text-xl left-32">
                    <h1><span className="text-8xl font-bold text-yellow-400">HURREY.... </span><span  className="text-4xl font-bold text-pink-400">offer.....</span></h1>
                    </div>
                    <div className="absolute bottom-40 text-xl w-[550px] text-gray-400 text-left left-52">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore vitae tempora necessitatibus pariatur officiis voluptatem quisquam, eius dolorem in, doloribus vel ad atque iusto asperiores, saepe excepturi? Voluptas consequatur harum atque fugiat nesciunt! Veniam possimus animi eum, provident iste et fugiat quos consectetur asperiores sit ab exercitationem maiores quae adipisci!
                    </p>
                    </div>
                        <button className="absolute text-white border-none bottom-20 left-96 btn bg-gradient-to-bl from-blue-600 via-black to-lime-600 font-bold">
                            subscribe theare
                        </button>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;