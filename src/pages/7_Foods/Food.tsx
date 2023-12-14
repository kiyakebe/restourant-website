import "./style.css";

import food_img_1 from "../../assets/image/pricing food/pricing1-1.png";
import food_img_2 from "../../assets/image/pricing food/pricing1-2.png";
import food_img_3 from "../../assets/image/pricing food/pricing1-3.png";
import food_img_4 from "../../assets/image/pricing food/pricing1-4.png";
import food_img_5 from "../../assets/image/pricing food/pricing1-5.png";
import food_img_6 from "../../assets/image/pricing food/pricing1-6.png";
import food_img_7 from "../../assets/image/pricing food/pricing1-7.png";
import food_img_8 from "../../assets/image/pricing food/pricing1-8.png";

interface FoodProps{
  url: string,
  name: string,
  description: string,
  price: string,
  tag: string
}

const FoodItem = ({url, name, description, price, tag}: FoodProps) => {
  return (
    <div className="food-item d-flex">
      <div className="food-img img-hover">
        <img src={ url } alt="Food" className="food-profile"/>
      </div>
      <div className="about-food mx-2">
        <p className="food-txt-color">{ description }</p>
        <h4 className="larg-font-sm food-title-color">{ name }</h4>
      </div>

      <div className="food-price flex-grow-1 flex-shrink-1 w-50 ">
          <p className="text-end"> <span className="txt-tag px-3 py-1"> { tag }</span></p>
          <p className="proce text-end ">${price}</p>
      </div>
    </div>
  );
};

const Food = () => {
  return (
    <div className="food-container py-5">
      <div className="container-md">
        <h6 className="text-center mb-3">HOEXR BEST MENUSS</h6>
        <h1 className="larg-font text-center">Specialities Foods</h1>
        <div className="devider-md"></div>
        <div className="food-list">
          <FoodItem url={food_img_1} name="Pasta With Fish" description="Lorem Ipsum is that it smt" price="39" tag="STARTER"/>
          <FoodItem url={food_img_2} name="Pasta With Fish" description="Lorem Ipsum is that it smt" price="39" tag="NEW"/>
          <FoodItem url={food_img_3} name="Pasta With Fish" description="Lorem Ipsum is that it smt" price="39" tag="NEW"/>
          <FoodItem url={food_img_4} name="Pasta With Fish" description="Lorem Ipsum is that it smt" price="39" tag="NEW"/>
          <FoodItem url={food_img_6} name="Pasta With Fish" description="Lorem Ipsum is that it smt" price="39" tag="NEW"/>
          <FoodItem url={food_img_7} name="Pasta With Fish" description="Lorem Ipsum is that it smt" price="39" tag="NEW"/>
          <FoodItem url={food_img_5} name="Pasta With Fish" description="Lorem Ipsum is that it smt" price="39" tag="GLUTAN FREE"/>
          <FoodItem url={food_img_8} name="Pasta With Fish" description="Lorem Ipsum is that it smt" price="39" tag="NEW"/>
        </div>
      </div>
    </div>
  );
};

export default Food;
