import { Link } from 'react-router-dom';
import useCorce from '../../../hooks/useCorce';
import CorceCard from './CorceCard';
const Corces = () => {
    const [corce] = useCorce()

    return (
        <div>
            <h1 className="text-6xl my-10 font-bold text-center">your fevaret dance corce</h1>
                <h1 className='text-3xl text-center mb-10'>total corces {corce.length}</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 mx-10'>
                {corce.splice(0, 6).map(item =><CorceCard
                 key={item._id}
                 item={item}
                 ></CorceCard>
                    )}
            </div>
            
<div className='grid me-10'>
<Link to='/allcorce' className='btn btn-outline btn-xs justify-self-end'>more...</Link>
    </div>            
        </div>
    );
};

export default Corces;