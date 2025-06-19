import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { id, recipeName, image, chef } = props.recipeData;

  return (
    <Link to={`/recipes/recipe-details/${id}`} className="mt-5 block">
      <div className="single-recipe-card bg-[#ed8e00]  rounded-[5px] w-[320px] h-[360px] border-2 min-[520px]:w-[240px] min-[520px]:h-[380px] sm:w-[280px] md:w-[350px] md:h-[380px] lg:w-[320px]">
        <img
          src={image}
          className="rounded-[5px] object-cover h-[220px] w-[100%]"
        />
        <div className="text-3xl text-white font-semibold pt-4 px-2 pb-5 min-[520px]:text-2xl md:text-3xl">
          <h1 className="text-center">{recipeName}</h1>
          <div className="flex items-center justify-between mt-4">
            <h2 className="text-2xl italic text-[#384125]  2xl:text-3xl min-[520px]:text-xl min-[520px]:w-2/3 md:w-fit md:text-left md:text-2xl">
              <span className="">~ </span>
              {chef}
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
