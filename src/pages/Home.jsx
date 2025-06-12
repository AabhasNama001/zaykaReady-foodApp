import bowlImg from "../assets/bowl2.png";
import saleImg from "../assets/sale.png";

const Home = () => {
  return (
    <div className="w-screen flex items-center gap-x-24 min-h-[100vh] p-20 bg-[#f4e7cf]">
      <div className="left-hero w-1/2 flex flex-col items-start">
        <h1 className=" text-8xl text-red-950">
          Healthy <span className="text-red-600">Eating is an </span>{" "}
          <span className="text-orange-400">Important</span> Part of Lifestyle
        </h1>
        <h4 className="text-2xl mt-8">We prepare delicious Food.</h4>
        <h4 className="text-2xl mt-2">For you we are always</h4>
        <button className="bg-red-700 px-5 text-white py-3 mt-8 rounded-2xl text-3xl">
          Explore New
        </button>
      </div>
      <div className="right flex relative">
        <img className="h-[70vh]" src={bowlImg} />
        <img className="h-[20vh] rotate-10 absolute right-0" src={saleImg} />
      </div>
    </div>
  );
};

export default Home;
