import { forwardRef } from "react";

interface Props {}

const Home = forwardRef<HTMLDivElement, Props>(({}, ref) => {
  return (
    <div ref={ref} className="full_vh">
      Home
    </div>
  );
});

export default Home;
