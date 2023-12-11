import { forwardRef } from "react";

interface Props {}

const Blog = forwardRef<HTMLDivElement, Props>(({}, ref) => {
  return (
    <div ref={ref} className="full_vh">
      Blog
    </div>
  );
});

export default Blog;
