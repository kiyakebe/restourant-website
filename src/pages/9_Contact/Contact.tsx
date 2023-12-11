import { forwardRef } from "react";

interface Props {}

const Contact = forwardRef<HTMLDivElement, Props>(({}, ref) => {
  return (
    <div ref={ref} className="full_vh">
      Contact
    </div>
  );
});


export default Contact