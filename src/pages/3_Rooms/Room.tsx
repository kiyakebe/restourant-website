import { forwardRef } from "react";

interface Props {}

const Room = forwardRef<HTMLDivElement, Props>(({}, ref) => {
  return (
    <div ref={ref} className="full_vh">
      Room
    </div>
  );
});

export default Room