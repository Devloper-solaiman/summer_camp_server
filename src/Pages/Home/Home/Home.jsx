import About from "../About/About";
import Banner from "../Bannr/Banner";
import Corces from "../Corces/Corces";
import Instructor from "../Instructor/Instructor";
import Review from "../review/Review";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Instructor></Instructor>
            <About></About>
            <Corces></Corces>
            <Review></Review>
        </div>
    );
};

export default Home;