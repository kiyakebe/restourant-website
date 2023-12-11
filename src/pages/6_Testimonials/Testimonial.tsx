import { forwardRef } from "react";

interface Props {}

const Testimonial = forwardRef<HTMLDivElement, Props>(({}, ref) => {
  return (
    <div ref={ref} className="full_vh">
      Testimonial
    </div>
  );
});

export default Testimonial