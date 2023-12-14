import PromotionBanner from "./PromotionBanner"
import PromotionOne from "./PromotionOne"
import PromotionThree from "./PromotionThree"
import PromotionTwo from "./PromotionTwo"

const Promotion = () => {
  return (
    <div className="">
      <PromotionBanner />
      <div className="devider"></div>
      <PromotionOne />
      <div className="devider"></div>
      <PromotionTwo />
      <div className="devider"></div>
      <PromotionThree />

    </div>
  )
}

export default Promotion