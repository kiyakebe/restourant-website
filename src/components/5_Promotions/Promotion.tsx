import PromotionBanner from "./PromotionBanner"
import PromotionOne from "./PromotionOne"
import PromotionThree from "./PromotionThree"
import PromotionTwo from "./PromotionTwo"

const Promotion = () => {
  return (
    <div className="">
      <PromotionBanner />
      <div className="devider-md"></div>
      <PromotionOne />
      <div className="devider-md"></div>
      <PromotionTwo />
      <div className="devider-md"></div>
      <PromotionThree />

    </div>
  )
}

export default Promotion