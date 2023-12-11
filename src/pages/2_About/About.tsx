import { forwardRef } from "react";

interface Props {}

const About = forwardRef<HTMLDivElement, Props>(({}, ref) => {
  return (
    <div ref={ref} className="full_vh">
      About
    </div>
  );
});

export default About;
