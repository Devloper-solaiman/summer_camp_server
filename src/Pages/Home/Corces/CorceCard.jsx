import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const CorceCard = ({item}) => {
    const { courseName, instructor, description, schedule, fee, photoUrl, quantity } = item;

    return (
        <div>
            <div className="card w-auto h-[550px] mb-10 bg-base-100 shadow-2xl">
                <div className=" font-bold text-white ">
                    <figure><img className="relative rounded-lg" src={photoUrl} alt="Shoes" /></figure>
                    <h3 className="absolute top-32 right-16" >{fee}</h3>
                </div>
                <div className="card-body">
                    <h3 className=" font-bold underline"><span className="text-yellow-400 text-xl">Instructor:</span> {instructor} </h3>
                    <h2 className="card-title">
                        {courseName}
                        <div className="badge badge-secondary">{quantity}</div>
                    </h2>
                    <p>{description}</p>
                    <h1 className="font-bold text-orange-400">{schedule}</h1>
                    <div className="card-actions justify-end"
                    >
                        <Link to='/' className='hover:badge-info hover:text-base badge badge-outline'> Enrol now</Link>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

CorceCard.propTypes = {
    item: PropTypes.object.isRequired,
  };

export default CorceCard;