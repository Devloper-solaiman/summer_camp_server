import abImg from '../../../assets/slider/inner_hero_girl.png';
import { GiLightSabers } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { BiArch } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";

const About = () => {
    return (
        <div className='my-20'>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content relative flex-col lg:flex-row">
                    <div className='absolute h-20 w-20 bg-amber-300 rounded-full animate-bounce sm:right-20 sm:top-20 md:right-16 md:top-28 lg:left-0 lg:top-40'></div>
                    <img src={abImg} className="lg:max-w-xl md:max-w-xs sm:max-w-xs " />
                    <div className='ms-16'>
                        <h1 className="text-5xl font-bold">About us!</h1>
                        <h2 className="py-6 text-xl w-[450px]">Normal that has evolved from generation X is
                            on the runway heading towards a streamlined immersion along the
                            information. Elevate your vector art.</h2>
                        <p className='w-[450px]'>Bring to the table win-win survival strategies to ensure
                            proactive domination. At the end of the day, going forward, a new.</p>
                        <button className="btn bg-gradient-to-bl from-white via-black to-pink-400 mt-4 ms-10 rounded-3xl hover:bg-none text-white uppercase">view more</button>
                    </div>
                </div>
            </div>

            <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-10 lg:grid-cols-3'>
                <div className="rounded-lg p-5 w-72 ms-20 mt-24  hover:text-black text-amber-500 bg-white " >
                    <div className="relative">
                        <div className="absolute -top-8 -left-28 overflow-hidden">
                            <BiArch className='text-8xl'></BiArch>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold">METHODOLOGY</h2>
                        <p className=" text-black mt-4">Twee echo park celiac
                            YOLO dreamcatcher bushwick.
                            Pitchfork fam tousled sustainable.</p>
                        <Link to='/' className='flex mt-6'>VIEW MORE  <FaArrowRight className='ms-2 mt-1'></FaArrowRight> </Link>
                    </div>
                </div>
                
                <div className="rounded-lg p-5 w-72 ms-20 mt-24  hover:text-black text-amber-500 bg-white " >
                    <div className="relative">
                        <div className="absolute -top-8 -left-28 overflow-hidden">
                            
                            <GiLightSabers className='text-8xl hover:animate-spin'></GiLightSabers>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold">FACILITY</h2>
                        <p className=" text-black mt-4">Tote bag trust fund tacos
                         organic four dollar toast kickstarter
                          pork belly meggings fingerstache.</p>
                        <Link to='/' className='flex mt-6'>VIEW MORE <FaArrowRight className='ms-2 mt-1'></FaArrowRight> </Link>
                    </div>
                </div>
                
                <div className="rounded-lg p-5 w-72 ms-20 mt-24  hover:text-black text-amber-500 bg-white " >
                    <div className="relative">
                        <div className="absolute -top-8 -left-24 overflow-hidden">
                            <ImLocation2 className='text-8xl'></ImLocation2>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold">LOCATIONS</h2>
                        <p className=" text-black mt-4">Authentic vexillologist
                         incididunt adipisicing blog occupy 
                         williamsburg four dollar carry chillwave.</p>
                        <Link to='/' className='flex mt-6'>VIEW MORE <FaArrowRight className='ms-2 mt-1'></FaArrowRight> </Link>
                    </div>
                </div>
                
            </div>

        </div>
    );
};

export default About;