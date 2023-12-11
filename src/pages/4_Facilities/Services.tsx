import { forwardRef } from "react";

interface Props {}

const Services = forwardRef<HTMLDivElement, Props>(({}, ref) => {
  return (
    <div ref={ref} className="full_vh">
      Services
    </div>
  );
});

export default Services
