import bowlImg from "../assets/bowl2.png";
import saleImg from "../assets/sale.png";
import burger from '../assets/burger.jpg';
import pizza from '../assets/pizza.jpg';
import dish from '../assets/dish.jpg';
const Home = () => {
  return (
    <div className=" min-h-[100vh] px-5 py-10 md:px-15">
      <div className="hero-section flex flex-col md:flex-row">
        <div className="left-hero  flex flex-col items-start md:w-1/2 ">
          <h1 className=" text-[9vw] text-red-950 leading-[10vw] md:text-[6vw] md:leading-[8vw] xl:text-7xl xl:leading-[12vh] 2xl:text-8xl 2xl:leading-[14vh] ">
            Healthy <span className="text-red-600">Eating is an </span>{" "}
            <span className="text-orange-400">Important</span> Part of Lifestyle
          </h1>
          <h4 className="text-[4vw] mt-[3vw] md:text-[3vw] xl:text-3xl 2xl:text-4xl">We prepare delicious Food.</h4>
          <h4 className="text-[4vw] mt-[1vw] md:text-[3vw] xl:text-3xl 2xl:text-4xl">For you we are always</h4>
          <button className="bg-red-700 px-5 text-white py-2 mt-[5vw] rounded-xl text-[4vw] xl:text-4xl xl:py-5 xl:px-8 xl:mt-16">
            Explore New
          </button>
        </div>
        <div className="right flex justify-center items-center mt-[5vw] md:w-1/2 xl:items-start xl:mt-5 ">
          <img className="h-[80vw] md:h-[40vw] xl:h-[70vh]" src={bowlImg} />
          {/* <img className="h-[10vh] rotate-10 absolute right-22" src={saleImg} /> */}
        </div>
      </div>

      <div>
          <div className="left-categ">
            <h1 className='text-[8vw] pb-1'>Our Categories</h1>
            <div className="bottom-line w-[40vw] h-[3px] bg-red-500 mx-1 mb-[7vw]"></div>
            <div className='categ-div flex flex-col gap-[6vw] mb-[10vw]'>
              <div className='categ-1 flex gap-[5vw]'>
                <img src='https://img.icons8.com/?size=100&id=64686&format=png&color=000000' alt='' className='rounded-[50%] bg-white h-[20vw] '/>
                <div className='categ-1-disc text-[3.4vw] '>
                    <h3 className='font-bold text-[5vw]'>Grab Your Delicious Food</h3>
                    <p>We prepare delicious Food </p>
                    <p>For you we are always</p>
                </div>
              </div>
               <div className='categ-2 flex gap-[5vw]'>
                <img src='https://img.icons8.com/?size=100&id=hsxXyArfknKc&format=png&color=000000' alt='' className='rounded-[50%] bg-white h-[20vw] '/>
                <div className='categ-2-disc text-[3.4vw] '>
                    <h3 className='font-bold text-[5vw]'>Grab Your Delicious Food</h3>
                    <p>We prepare delicious Food </p>
                    <p>For you we are always</p>
                </div>
              </div>
               <div className='categ-3 flex gap-[5vw]'>
                <img src='https://img.icons8.com/?size=100&id=18316&format=png&color=000000' alt='' className='rounded-[50%] bg-white h-[20vw] '/>
                <div className='categ-3-disc text-[3.4vw] '>
                    <h3 className='font-bold text-[5vw]'>Grab Your Delicious Food</h3>
                    <p>We prepare delicious Food </p>
                    <p>For you we are always</p>
                </div>
              </div>
             
            </div>
          </div>
          <div className="right-categ flex gap-2">
            <div className='left-recipe-photo w-1/2 rounded-xl overflow-auto'>
              <img src={burger} alt='' className='h-[68vw]'/>
            </div>
            <div className='right-recipe-photo w-1/2 rounded-xl overflow-auto flex flex-col gap-2'>
              <img src={dish} alt='' className='object-cover h-[33vw] w-[45vw] rounded-xl'/>
              <img src={pizza} alt='' className='rounded-xl h-[33vw] w-[45vw]'/>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
// https://img.icons8.com/?size=100&id=hsxXyArfknKc&format=png&color=000000
// https://img.icons8.com/?size=100&id=18316&format=png&color=000000