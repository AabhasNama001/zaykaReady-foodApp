import bowlImg from "../assets/bowl2.png";
import saleImg from "../assets/sale.png";
import burger from "../assets/burger.jpg";
import pizza from "../assets/pizza.jpg";
import dish from "../assets/dish.jpg";
import girlImg1 from "../assets/girl1.png";

const Home = () => {
  const team = [
    {
      name: "Alizeh Anderson",
      title: "Senior Chef",
      img: "../public/chef1.jpg"
    },
    {
      name: "Angelina John",
      title: "Master Chef",
      img: "../public/chef2.jpg"
    },
    {
      name: "Andre Smith",
      title: "Professor",
      img: "../public/chef3.jpg"
    },
    {
      name: "Christina Chi",
      title: "Psychologist",
      img: "../public/chef4.jpg"
    }
  ];
  return (
    <div className=" min-h-[100vh] px-5 py-10 md:px-12">
      <div className="hero-section flex flex-col md:flex-row">
        <div className="left-hero  flex flex-col items-start md:w-1/2 ">
          <h1 className=" text-[9vw] text-red-950 leading-[10vw] md:text-[6vw] md:leading-[8vw] xl:text-7xl xl:leading-[12vh] 2xl:text-8xl 2xl:leading-[14vh] ">
            Healthy <span className="text-red-600">Eating is an </span>{" "}
            <span className="text-orange-400">Important</span> Part of Lifestyle
          </h1>
          <h4 className="text-[4vw] mt-[3vw] md:text-[3vw] xl:text-3xl 2xl:text-4xl">
            We prepare delicious Food.
          </h4>
          <h4 className="text-[4vw] mt-[1vw] md:text-[3vw] xl:text-3xl 2xl:text-4xl">
            For you we are always
          </h4>
          <button className="bg-red-700 px-5 text-white py-2 mt-[5vw] rounded-xl text-[4vw] xl:text-4xl xl:py-5 xl:px-8 xl:mt-16">
            Explore New
          </button>
        </div>
        <div className="right flex justify-center items-center mt-[5vw] md:w-1/2 xl:items-start xl:mt-5 2xl:justify-end">
          <img className="h-[80vw] md:h-[40vw] xl:h-[70vh]" src={bowlImg} />
          {/* <img className="h-[10vh] rotate-10 absolute right-22" src={saleImg} /> */}
        </div>
      </div>

      <div className="categories lg:flex mt-[5vw]  md:mt-[10vw] lg:gap-[8vh] xl:mt-[12vh]">
        <div className="left-categ lg:w-4/5 xl:w-1/2">
          <h1 className="text-[8vw] pb-1 lg:text-[4.5vw]">Our Categories</h1>
          <div className="bottom-line w-[40vw] h-[3px] bg-red-500 mx-1 mb-[7vw] lg:w-[20vw] lg:mb-[4.5vw]"></div>
          <div className="categ-div flex flex-col gap-[6vw] mb-[10vw] lg:gap-[4vw] xl:gap-[4vh]  xl:mb-[12vh]">
            <div className="categ-1 flex gap-[5vw] lg:gap-[2vw]">
              <img
                src="https://img.icons8.com/?size=100&id=64686&format=png&color=000000"
                alt=""
                className="rounded-[50%] bg-white h-[20vw] sm:h-[15vw] object-cover lg:h-[7vw]"
              />
              <div className="categ-1-disc text-[3.4vw] sm:text-[3vw] lg:text-[2vw] xl:text-[3.5vh] ">
                <h3 className="font-bold text-[5vw] sm:text-[4.5vw] lg:text-[2.5vw] xl:text-[4.3vh]">
                  Grab Your Delicious Food
                </h3>
                <p>We prepare delicious Food </p>
                <p>For you we are always</p>
              </div>
            </div>
            <div className="categ-2 flex gap-[5vw]  lg:gap-[2vw]">
              <img
                src="https://img.icons8.com/?size=100&id=hsxXyArfknKc&format=png&color=000000"
                alt=""
                className="rounded-[50%] bg-white h-[20vw] sm:h-[15vw] object-cover  lg:h-[7vw] "
              />
              <div className="categ-2-disc text-[3.4vw] sm:text-[3vw]  lg:text-[2vw] xl:text-[3.5vh]  ">
                <h3 className="font-bold text-[5vw] sm:text-[4.5vw] lg:text-[2.5vw] xl:text-[4.3vh]">
                  Grab Your Delicious Food
                </h3>
                <p>We prepare delicious Food </p>
                <p>For you we are always</p>
              </div>
            </div>
            <div className="categ-3 flex gap-[5vw]  lg:gap-[2vw]">
              <img
                src="https://img.icons8.com/?size=100&id=18316&format=png&color=000000"
                alt=""
                className="rounded-[50%] bg-white h-[20vw] sm:h-[15vw] object-cover lg:h-[7vw] "
              />
              <div className="categ-3-disc text-[3.4vw] sm:text-[3vw]  lg:text-[2vw] xl:text-[3.5vh] ">
                <h3 className="font-bold text-[5vw] sm:text-[4.5vw] lg:text-[2.5vw] xl:text-[4.3vh]">
                  Grab Your Delicious Food
                </h3>
                <p>We prepare delicious Food </p>
                <p>For you we are always</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-categ flex gap-2 xl:w-1/2  lg:gap-[2vh] xl:mt-[10vh]">
          <div className="left-recipe-photo w-1/2 rounded-xl overflow-auto">
            <img
              src={burger}
              alt=""
              className="h-[67.3vw] rounded-xl object-cover lg:h-[50vw] xl:h-[72vh] xl:w-[73vh]"
            />
          </div>
          <div className="right-recipe-photo w-1/2 rounded-xl overflow-auto flex flex-col gap-2 lg:gap-[2vh]">
            <img
              src={dish}
              alt=""
              className="object-cover h-[33vw] w-[45vw] rounded-xl lg:h-[25vw] xl:h-[35vh] xl:w-[35vh] "
            />
            <img
              src={pizza}
              alt=""
              className="rounded-xl h-[33vw] object-cover w-[45vw] lg:h-[24vw] xl:h-[35vh] xl:w-[35vh] "
            />
          </div>
        </div>
      </div>

      <div className="get-start lg:flex mt-[5vw]  md:mt-[10vw] lg:gap-[6vh] lg:mt-[4vh] xl:mt-[2vh]">
        <div className="left-get-start lg:w-1/2">
          <h1 className="text-[8vw] pb-1 lg:text-[4.5vw]">
            Get Started Today!
          </h1>
          <div className="bottom-line w-[40vw] h-[3px] bg-red-500 mx-1 mb-[7vw] lg:w-[20vw] lg:mb-[2.5vw]"></div>
          <div className="categ-div flex flex-col gap-[6vw] mb-[10vw] lg:gap-[2vw] xl:gap-[4vh]">
            <div className="categ-1 flex gap-[5vw] lg:gap-[2vw]">
              <div className="categ-1-disc text-[3.4vw] sm:text-[3vw] lg:text-[1.7vw] xl:text-[3vh] ">
                <h3 className="font-bold text-[5vw] sm:text-[4.5vw] lg:text-[2.2vw] xl:text-[4vh]">
                  Everything you need to build an amazing food restaurant.
                </h3>
                <p className=" mt-[2vh]">
                  Lorem Everything you need to build an amazing food restaurant
                  responsive website. Everything you need to build an amazing
                  food restaurant responsive website.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[4vh] mt-[2vh] sm:flex-row">
              <div className="food-order flex flex-col items-center p-[3vh] rounded-xl bg-[#fffeed] gap-[5vw]  lg:gap-[2vw]">
                <img
                  src="https://img.icons8.com/?size=100&id=23095&format=png&color=000000"
                  alt=""
                  className="h-[20vw] sm:h-[10vw] object-cover  lg:h-[7vw] "
                />
                <div className="food-disc text-[3.4vw] sm:text-[2.4vw]  lg:text-[1.4vw] xl:text-[2.5vh] text-center">
                  <h3 className="font-bold text-[5vw] sm:text-[3vw] lg:text-[1.8vw] xl:text-[3vh]">
                    Food Delivery
                  </h3>
                  <p>
                    We prepare delicious Food Grab Your Delicious Food For you
                  </p>
                </div>
              </div>
              <div className="promote-restaurant flex flex-col items-center p-[3vh] rounded-xl bg-[#fffeed] gap-[5vw]  lg:gap-[2vw]">
                <img
                  src="https://img.icons8.com/?size=100&id=XQ5LPoNgHk3H&format=png&color=000000"
                  alt=""
                  className="h-[20vw] sm:h-[10vw] object-cover  lg:h-[7vw] "
                />
                <div className="promote-disc text-[3.4vw] sm:text-[2.4vw]  lg:text-[1.4vw] xl:text-[2.5vh] text-center">
                  <h3 className="font-bold text-[5vw] sm:text-[3vw] lg:text-[1.8vw] xl:text-[3vh]">
                    Promote restaurant
                  </h3>
                  <p>
                    We prepare delicious Food Grab Your Delicious Food For you
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-img-girl flex justify-center lg:w-1/2 lg:justify-end lg:mt-[8vh] xl:mt-[10vh] overflow-auto">
          <img
            src={girlImg1}
            alt=""
            className="h-[45vh] object-cover sm:h-[60vw] lg:h-[38vw] xl:h-[70vh] xl:w-[70vh]"
          />
        </div>
      </div>

      <div className="top-foods flex flex-col  mt-[6vw] xl:mt-1 ">
        <div>
          <h1 className="text-[8vw] pb-1 lg:text-[4.5vw]">Top Foods</h1>
          <div className="bottom-line w-[40vw] h-[3px] bg-red-500 mx-1 mb-[7vw] lg:w-[20vw] lg:mb-[4.5vw] xl:mb-6" ></div>
        </div>
        <div className="food-item-cards gap-10 flex flex-col md:flex-row md:flex-wrap md:justify-evenly xl:gap-3 xl:justify-start xl:flex-nowrap">
          <div className="food-item-card flex flex-col items-center justify-center border-b-2 md:w-[40vw] xl:border-b-0  xl:w-[25vw]  p-5 rounded-4xl ">
            <div className="xl:h-[30vh] xl:flex xl:items-center">
              <img src="../public/pizzaCardImage.png" className="h-[25vh] object-cover sm:h-[40vw] md:h-[25vw] lg:h-[30vw] xl:h-[22vh] " />
            </div>
            <h3 className="text-[7vw] font-semibold md:text-[5vh] lg:text-5xl xl:text-4xl">Pizza</h3>
            <p className="text-[5vw] font-normal text-red-500 md:text-[3vh]  mt-3 lg:text-3xl xl:text-2xl">Pizza <span className="text-gray-600">Love</span> <span className="text-[#0303cc]">Repeat !</span></p>
          </div>
          <div className="food-item-card flex flex-col items-center justify-center border-b-2 md:w-[40vw] xl:border-b-0  xl:w-[25vw]  p-5 xl:px-1 rounded-4xl ">
            <img src="../public/burgerImage.png" className="h-[25vh] object-cover sm:h-[40vw] md:h-[25vw] lg:h-[30vw] xl:h-[30vh] " />
            <h3 className="text-[7vw] font-semibold md:text-[5vh] lg:text-5xl xl:text-4xl ">Burger</h3>
            <p className="text-[5vw] font-normal text-red-500 md:text-[3vh] mt-3 lg:text-3xl xl:text-2xl">Bite <span className="text-gray-600">The</span> <span className="text-[#0303cc]">Beast !</span></p>
          </div>
          <div className="food-item-card flex flex-col items-center justify-center border-b-2 md:w-[40vw] xl:border-b-0  xl:w-[25vw]  p-5 xl:px-1 rounded-4xl ">
            <img src="../public/coldCoffeImage.png" className="h-[25vh] object-cover sm:h-[40vw] md:h-[25vw] lg:h-[30vw] xl:h-[30vh] " />
            <h3 className="text-[7vw] font-semibold md:text-[5vh] lg:text-5xl xl:text-4xl ">Shakes</h3>
            <p className="text-[5vw] font-normal text-red-500 md:text-[3vh] mt-3 lg:text-3xl xl:text-2xl">Whip <span className="text-gray-600">Sip</span> <span className="text-[#0303cc]">Wow !</span></p>
          </div>
          <div className="food-item-card flex flex-col items-center justify-center border-b-2 md:w-[40vw] xl:border-b-0  xl:w-[25vw]  p-5 xl:px-1 rounded-4xl ">
            <img src="../public/noodlesImage.png" className="h-[25vh] object-cover sm:h-[40vw] md:h-[25vw] lg:h-[30vw] xl:h-[30vh] " />
            <h3 className="text-[7vw] font-semibold md:text-[5vh] lg:text-5xl xl:text-4xl ">Chinese</h3>
            <p className="text-[5vw] font-normal text-red-500 md:text-[3vh] mt-3 lg:text-3xl xl:text-2xl">Chopsticks <span className="text-gray-600">Chill</span> <span className="text-[#0303cc]">Chow !</span></p>
          </div>
        </div>
      </div>


      <div className="   mt-[15vh] xl:mt-10">
        {/* Team Section */}
        
        <div className="mb-10">
        <h2 className="text-[5vw]  lg:text-[3vw] text-[#b23a29] xl:text-[1.8vw] xl:-mb-6">Foody</h2>
          <h3 className=" text-[8vw] font-semibold mb-[2vw] md:text-[6vw] md:mb-2 lg:text-[4.5vw] ">Meet Our Best Team</h3>
          <div className="bottom-line w-[40vw] h-[3px] bg-red-500 mx-1 mb-[7vw] lg:w-[20vw] lg:mb-[4.5vw] xl:mb-6" ></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6  mb-12">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-xl p-4 shadow-md  "
            >
              <div className="sm:h-[31vw] sm:flex sm:justify-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-auto object-cover rounded-lg mb-4"
                /></div>
              <h4 className="font-bold text-lg">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.title}</p>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default Home;

