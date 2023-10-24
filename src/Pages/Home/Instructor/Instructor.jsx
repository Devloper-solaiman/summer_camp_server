import image from "../../../assets/slider/slider1.png"

const email = "eamil@gkd.com";
const name = "maruf";
const approachName = 'hip hopppp';


const cardStyle = {
    backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4euPFF_e4ENUTbyHMnPo9vd6IkRBzW83BMMzK_K0JFcU5MIzQSDR6kUhXwdBQKInmOc&usqp=CAU")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
};
const handleonClick = () => {
    console.log('parfect');
}
const Instructor = () => {
    return (
        <div className=" grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-10 my-5 mx-10 ">
          
            <div className="rounded-lg p-16 shadow-lg " style={cardStyle}>
                <div className="relative">
                    <div className="absolute -top-24 -left-20 w-20 h-20 rounded-full overflow-hidden">
                        <img src={image} alt='name' className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="mt-4">
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <p className="text-gray-600">{email}</p>
                    <p className="text-gray-600">{approachName}</p>
                    <p className="text-gray-600">{approachName}</p>
                    <p className="text-gray-600">{email}</p>
                    <button
                        className=" font-bold mt-5 bg-gradient-to-bl from-black via-white to-black text-black px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                        onClick={handleonClick}
                    >
                        See More
                    </button>
                </div>
            </div>


            <div className="rounded-lg p-16 shadow-lg " style={cardStyle}>
                <div className="relative">
                    <div className="absolute -top-24 -left-20 w-20 h-20 rounded-full overflow-hidden">
                        <img src={image} alt='name' className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="mt-4">
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <p className="text-gray-600">{email}</p>
                    <p className="text-gray-600">{approachName}</p>
                    <p className="text-gray-600">{approachName}</p>
                    <p className="text-gray-600">{email}</p>
                    <button
                        className=" font-bold mt-5 bg-gradient-to-bl from-black via-white to-black text-black px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                        onClick={handleonClick}
                    >
                        See More
                    </button>
                </div>
            </div>
            <div className="rounded-lg p-16 shadow-lg " style={cardStyle}>
                <div className="relative">
                    <div className="absolute -top-24 -left-20 w-20 h-20 rounded-full overflow-hidden">
                        <img src={image} alt='name' className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="mt-4">
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <p className="text-gray-600">{email}</p>
                    <p className="text-gray-600">{approachName}</p>
                    <p className="text-gray-600">{approachName}</p>
                    <p className="text-gray-600">{email}</p>
                    <button
                        className=" font-bold mt-5 bg-gradient-to-bl from-black via-white to-black text-black px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                        onClick={handleonClick}
                    >
                        See More
                    </button>
                </div>
            </div>
            <div className="rounded-lg p-16 shadow-lg " style={cardStyle}>
                <div className="relative">
                    <div className="absolute -top-24 -left-20 w-20 h-20 rounded-full overflow-hidden">
                        <img src={image} alt='name' className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="mt-4">
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <p className="text-gray-600">{email}</p>
                    <p className="text-gray-600">{approachName}</p>
                    <p className="text-gray-600">{approachName}</p>
                    <p className="text-gray-600">{email}</p>
                    <button
                        className=" font-bold mt-5 bg-gradient-to-bl from-black via-white to-black text-black px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                        onClick={handleonClick}
                    >
                        See More
                    </button>
                </div>
            </div>
            <div className="rounded-lg p-16 shadow-lg " style={cardStyle}>
                <div className="relative">
                    <div className="absolute -top-24 -left-20 w-20 h-20 rounded-full overflow-hidden">
                        <img src={image} alt='name' className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="mt-4">
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <p className="text-gray-600">{email}</p>
                    <p className="text-gray-600">{approachName}</p>
                    <p className="text-gray-600">{approachName}</p>
                    <p className="text-gray-600">{email}</p>
                    <button
                        className=" font-bold mt-5 bg-gradient-to-bl from-black via-white to-black text-black px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                        onClick={handleonClick}
                    >
                        See More
                    </button>
                </div>
            </div>
            <div className="rounded-lg p-16 shadow-lg " style={cardStyle}>
                <div className="relative">
                    <div className="absolute -top-24 -left-20 w-20 h-20 rounded-full overflow-hidden">
                        <img src={image} alt='name' className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="mt-4">
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <p className="text-gray-600">{email}</p>
                    <p className="text-gray-600">{approachName}</p>
                    <p className="text-gray-600">{approachName}</p>
                    <p className="text-gray-600">{email}</p>
                    <button
                        className=" font-bold mt-5 bg-gradient-to-bl from-black via-white to-black text-black px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                        onClick={handleonClick}
                    >
                        See More
                    </button>
                </div>
            </div>


           
        </div>
    );
};

export default Instructor;