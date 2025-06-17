import { Link } from "react-router-dom";

const RecipeCard = () => {
  const id = 1;

  const Recipe1 = {
    id: 1,
    name: "Classic Margherita Pizza",
    ingre: [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella cheese",
      "Fresh basil leaves",
      "Olive oil",
      "Salt and pepper to taste",
    ],
    instr: [
      "Preheat the oven to 475°F (245°C).",
      "Roll out the pizza dough and spread tomato sauce evenly.",
      "Top with slices of fresh mozzarella and fresh basil leaves.",
      "Drizzle with olive oil and season with salt and pepper.",
      "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
      "Slice and serve hot.",
    ],
    desc: "Drizzle with olive oil and season with salt and pepper.Slice and serve hot",
    image:
      "https://images.unsplash.com/photo-1684815495679-f6e6bc0634ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGZyZW5jaCUyMGZyaWVzfGVufDB8MHwwfHx8MA%3D%3D",
    chef: "Chakcsy",
    category: "dinner",
    title: "Margreta pizza",
  };
  return (
    <Link to={`/recipes/recipe-details/${Recipe1.id}`} className="mt-18 block">
      <div className="single-recipe-card bg-[#ed8e00]  rounded-[5px] w-[320] h-[360px] border-2 min-[520px]:w-[240px] sm:w-[280px] md:w-[350px] md:h-[380px] lg:w-[320px]">
        <img
          src={Recipe1.image}
          className="rounded-[5px] object-cover h-[220px] w-[100%]"
        />
        <div className="text-3xl text-white font-semibold pt-4 px-2 pb-5">
          <h1 className="text-center">{Recipe1.title}</h1>
          <div className="flex items-center justify-between mt-4">
            <h2 className="text-2xl italic text-[#384125] 2xl:text-3xl">
              ~ {Recipe1.chef}
            </h2>
            <div className="fav-icons flex items-center justify-center bg-white h-[50px] w-[50px] relative rounded-[5px]">
              {/* <i className="text-red-600 ri-heart-fill text-[32px] 2xl:text-4xl absolute"></i> */}
              <i className="text-red-600 ri-heart-line text-[32px] 2xl:text-4xl absolute"></i>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;

// min-[520px]:flex min-[520px]:flex-wrap min-[520px]:justify-center min-[520px]:gap-3 sm:gap-6
