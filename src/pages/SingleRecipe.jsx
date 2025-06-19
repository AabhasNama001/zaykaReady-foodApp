import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { recipeContext } from "../context/RecipeContext";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { dish, setdish } = useContext(recipeContext);

  const params = useParams();

  const navigate = useNavigate();

  const Recipe1 = dish.find((r) => r.id == params.id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      recipeName: Recipe1?.recipeName,
      chef: Recipe1?.chef,
      image: Recipe1?.image,
      ingre: Recipe1?.ingre,
      instr: Recipe1?.instr,
      categ: Recipe1?.categ,
    },
  });

  const updateRecipeHandler = (data) => {
    const index = dish.findIndex((d) => d.id == params.id);
    const copyDish = [...dish];
    copyDish[index] = { ...copyDish[index], ...data };
    setdish(copyDish);
    localStorage.setItem("dishes", JSON.stringify(copyDish));
    toast.success("Dish Updated");
  };

  const DeleteHandler = () => {
    const filterDish = dish.filter((d) => params.id != d.id);
    setdish(filterDish);
    localStorage.setItem("dishes", JSON.stringify(filterDish));
    toast.success("Dish Deleted Successfully");
    navigate("/recipes");
  };

  useEffect(() => {
    console.log("Use effect mounted");
    return () => {
      console.log("Unmounted");
    };
  }, []);

  return Recipe1 ? (
    <div className="parent-container p-[3vw] ">
      <h1 className="text-[6vw] py-4.5 px-2.2 mb-6 lg:text-5xl lg:p-6 rounded-[10px] lg:mb-10 text-center text-white bg-[#4a3434] font-mono">
        Spice It Up: Edit or Delete
      </h1>
      <div className=" 2xl:flex 2xl:justify-center  ">
        <div className="flex flex-col items-center gap-[4vw] lg:flex-row lg:items-start ">
          {/* mobile ke liye show hoga yh view 1024 ke liye nahi hoga show  */}
          <div className="lg:hidden">
            <div className="title-fav-container flex w-full items-center justify-between p-2">
              <h1 className="title text-[8vw]">{Recipe1.recipeName}</h1>
              <div className="fav-icons">
                <i className="  text-red-400 ri-heart-fill text-[8vw]"></i>
                <i className="  text-red-400 ri-heart-line text-[8vw]"></i>
                {/* absolute right-[52%] */}
              </div>
            </div>

            <div className="img-container  ">
              <img
                src={Recipe1.image}
                className="h-[63vw] w-[93vw] object-cover rounded-xl md:h-[56vw]"
              />
            </div>

            <div className="details-container flex flex-col gap-[3vw] p-2 text-xl text-left">
              <h2 className="text-[6vw] italic ">~ {Recipe1.chef}</h2>
              <p>
                <span className="font-bold text-[#393E46]">Ingredients :-</span>
                {Recipe1.ingre}
              </p>
              <p>
                <span className="font-bold text-[#393E46]">
                  Instruction/Description :-
                </span>
                {Recipe1.instr}
              </p>
            </div>
          </div>
          <div className="hidden lg:h-[900px] xl:h-[1000px] 2xl:h-[950px]  w-1/2 lg:flex flex-col  lg:bg-[#CA7842] rounded px-10 py-3 lg:gap-[1.2vw] xl:pb-8  2xl:w-[600px]  2xl:gap-6">
            <div className="title-fav-container p-2">
              <h1 className="title text-[4vw] 2xl:text-6xl">
                {Recipe1.recipeName}
              </h1>
            </div>

            <div className="img-container flex items-start gap-4 ">
              <img
                src={Recipe1.image}
                className="h-[25vw] w-[100%] object-cover rounded-xl 2xl:h-[360px] "
              />
            </div>

            <div className="details-container flex flex-col gap-[1.2vw] p-2 text-xl text-left 2xl:gap-4">
              <div className="flex justify-between items-center ">
                <h2 className="text-[2vw] italic text-[#222831] 2xl:text-3xl">
                  ~ {Recipe1.chef}
                </h2>
                <div className="fav-icons relative  flex items-center gap-2 bg-amber-50 py-2 px-2 lg:pr-12 xl:pr-15 xl:px-4 rounded-[8px]">
                  <span className="text-[1.8vw] xl:text-[1.4vw] 2xl:text-2xl ">
                    Add to favorite
                  </span>
                  <span className="hidden text-[1.8vw] xl:text-[1.2vw] 2xl:text-2xl">
                    Added
                  </span>

                  <i className=" absolute right-[10px] text-red-600 ri-heart-fill text-[2vw] 2xl:text-4xl"></i>
                  <i className=" absolute right-[10px] text-red-600 ri-heart-line text-[2vw] 2xl:text-4xl"></i>
                  {/* absolute right-[52%] */}
                </div>
              </div>
              <p>
                <span className="font-bold text-[#393E46]">Ingredients:-</span>
                <br />
                {Recipe1.ingre}
              </p>
              <p>
                <span className="font-bold text-[#393E46]">
                  Instruction/Description:-
                </span>
                <br />
                {Recipe1.instr}
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 2xl:w-[600px] lg:h-[900px] xl:h-[1000px] 2xl:h-[950px]">
            <form
              className="lg:h-[100%] flex flex-col bg-[#FFB823]  px-3 py-5 rounded text-black gap-[2vh] md:px-10 md:py-10 md:gap-8  "
              onSubmit={handleSubmit(updateRecipeHandler)}
            >
              <input
                type="text"
                placeholder="Enter your Dish Name"
                className="outline-0 placeholder-[#464646] bg-[#eeeeee] p-2  md:text-[3vh] md:p-4 md:rounded-sm lg:text-xl xl:text-2xl"
                {...register("recipeName", { required: "Dish Name Required" })}
              />
              {errors.text && <p>{errors.text.message}</p>}
              <input
                type="url"
                placeholder="Enter Image URL"
                className="outline-0 placeholder-[#464646] bg-[#eeeeee] p-2  md:text-[3vh]  md:p-4 md:rounded-sm lg:text-xl xl:text-2xl"
                {...register("image", { required: "URL Required" })}
              />
              <input
                type="text"
                placeholder="Enter Chef Name"
                className="outline-0 placeholder-[#464646] bg-[#eeeeee] p-2  md:text-[3vh]  md:p-4 md:rounded-sm lg:text-xl xl:text-2xl"
                {...register("chef", { required: "Chef Name Required" })}
              />
              <textarea
                rows="4"
                cols="50"
                placeholder="Write Ingredients"
                className="outline-0 placeholder-[#464646] bg-[#eeeeee] p-2  md:text-[3vh]  md:p-4 md:rounded-sm lg:text-xl xl:text-2xl"
                {...register("ingre")}
              ></textarea>
              <textarea
                rows="4"
                cols="50"
                placeholder="Write Instructions"
                className="outline-0 placeholder-[#464646] bg-[#eeeeee] p-2  md:text-[3vh]  md:p-4 md:rounded-sm lg:text-xl xl:text-2xl"
                {...register("instr")}
              ></textarea>
              <select
                className="outline-0 placeholder-[#464646] bg-[#eeeeee] p-2  md:text-[3vh]  md:p-4 md:rounded-sm lg:text-xl xl:text-2xl"
                {...register("categ")}
              >
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
              </select>
              <div className="flex justify-evenly">
                <button className=" bg-[#7965C1] py-3 px-4 text-[3vw]  rounded-sm active:scale-[0.98] text-white  md:text-[2.8vh]  md:p-4 lg:text-[2vw] lg:py-[1vw] xl:text-2xl xl:py-5 xl:px-8">
                  Update Recipe
                </button>
                <button
                  onClick={DeleteHandler}
                  className=" bg-[#cf1e1e] py-3 px-4 text-[3vw] rounded-sm active:scale-[0.98] text-white  md:text-[2.8vh]  md:p-4 lg:text-[2vw] lg:py-3  xl:text-2xl xl:py-5 xl:px-8"
                >
                  Delete Recipe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : (
    "Loading..."
  );
};

export default SingleRecipe;
