import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipeContext } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateRecipe = () => {
  const navigate = useNavigate();
  const { dish, setdish } = useContext(recipeContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const createRecipeHandler = (data) => {
    console.log(data);
    data.id = nanoid();

    const copyData = [...dish];
    copyData.push(data);
    setdish(copyData);
    // setdish([...dish, data]);
    // console.log(dish)
    localStorage.setItem("dishes", JSON.stringify(copyData));
    toast.success("Recipe Created");
    reset({ categ: data.categ });
    navigate("/recipes");
  };
  // console.log(dish);
  return (
    <div className="min-h-[100vh] px-4 py-8 md:flex md:flex-col md:items-center">
      <h1 className="text-[6vw] mb-[2vw] font-semibold text-center p-4  lg:text-6xl lg:mb-5  ">
        Create Recipe
      </h1>
      <form
        className="flex flex-col bg-[#FFB823] px-3 py-5 rounded text-black gap-[2vh] md:px-10 md:py-10 md:gap-8  "
        onSubmit={handleSubmit(createRecipeHandler)}
      >
        <input
          type="text"
          placeholder="Enter your Dish Name"
          className="outline-0 placeholder-[#464646] bg-[#eeeeee] p-2  md:text-[3vh] md:p-4 md:rounded-sm xl:text-2xl"
          {...register("recipeName", { required: "Dish Name Required" })}
        />
        {errors.text && <p>{errors.text.message}</p>}
        <input
          type="url"
          placeholder="Enter Image URL"
          className="outline-0 placeholder-[#464646] bg-[#eeeeee] p-2  md:text-[3vh] md:p-4 md:rounded-sm xl:text-2xl"
          {...register("image", { required: "URL Required" })}
        />
        <input
          type="text"
          placeholder="Enter Chef Name"
          className="outline-0 placeholder-[#464646] bg-[#eeeeee] p-2  md:text-[3vh]  md:p-4 md:rounded-sm xl:text-2xl"
          {...register("chef", { required: "Chef Name Required" })}
        />
        <textarea
          rows="4"
          cols="50"
          placeholder="Write Ingredients"
          className="outline-0 placeholder-[#464646] bg-[#eeeeee] p-2  md:text-[3vh]  md:p-4 md:rounded-sm xl:text-2xl"
          {...register("ingre")}
        ></textarea>
        <textarea
          rows="4"
          cols="50"
          placeholder="Write Instructions"
          className="outline-0 placeholder-[#464646] bg-[#eeeeee] p-2  md:text-[3vh]  md:p-4 md:rounded-sm xl:text-2xl"
          {...register("instr")}
        ></textarea>
        <select
          className="outline-0 placeholder-[#464646] bg-[#eeeeee] p-2  md:text-[3vh]  md:p-4 md:rounded-sm xl:text-2xl"
          {...register("categ")}
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
        <button className=" bg-[#7965C1] py-3 rounded-sm active:scale-[0.98] text-white  md:text-[3vh]  md:p-4 xl:text-2xl cursor-pointer">
          Create Recipe
        </button>
      </form>
    </div>
  );
};

export default CreateRecipe;

// FFF1CA  FFB823  708A58  2D4F2B   | FCEF91 FB9E3A E6521F EA2F14
