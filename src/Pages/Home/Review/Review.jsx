import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import { Navigation } from 'swiper/modules';
import { BiSolidQuoteLeft } from "react-icons/bi";

const Review = () => {
    return (
        <div>
           <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
        <div className="flex flex-col items-center mx-24 my-5">
             <p>
                Lorem ipsum dolor sit amet.
             </p>
              <BiSolidQuoteLeft className="text-5xl text-slate-800" />
              <p className="py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure et, a facere dolorum dignissimos maxime eum blanditiis culpa. Nobis fuga perspiciatis illo laboriosam similique ad illum.</p>
              <h3 className="text-2xl text-orange-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur similique, autem ducimus eos aperiam natus harum aliquid doloribus neque nostrum?</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col items-center mx-24 my-5">
             <p>
                Lorem ipsum dolor sit amet.
             </p>
              <BiSolidQuoteLeft className="text-5xl text-slate-800" />
              <p className="py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure et, a facere dolorum dignissimos maxime eum blanditiis culpa. Nobis fuga perspiciatis illo laboriosam similique ad illum.</p>
              <h3 className="text-2xl text-orange-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur similique, autem ducimus eos aperiam natus harum aliquid doloribus neque nostrum?</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col items-center mx-24 my-5">
             <p>
                Lorem ipsum dolor sit amet.
             </p>
              <BiSolidQuoteLeft className="text-5xl text-slate-800" />
              <p className="py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure et, a facere dolorum dignissimos maxime eum blanditiis culpa. Nobis fuga perspiciatis illo laboriosam similique ad illum.</p>
              <h3 className="text-2xl text-orange-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur similique, autem ducimus eos aperiam natus harum aliquid doloribus neque nostrum?</h3>
            </div>
        </SwiperSlide>
        
      </Swiper>  
        </div>
    );
};

export default Review;