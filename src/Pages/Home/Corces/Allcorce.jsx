import useCorce from "../../../hooks/useCorce";
import CorceCard from "./CorceCard";

const Allcorce = () => {
    const [corce] = useCorce()
    return (
        <div className="max-w-full mt-0 pt-0">
                <h1 className='text-3xl text-center pt-20 mb-10'>total corces {corce.length}</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 mx-10'>
                {corce.map(item =><CorceCard
                 key={item._id}
                 item={item}
                 ></CorceCard>
                    )}
            </div>
        </div>
    );
};

export default Allcorce;