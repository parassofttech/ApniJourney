import { useInView } from "react-intersection-observer";

const LazySection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "300px",
  });

  return (
    <div ref={ref}>
      {inView ? children : <div className="h-32" />}
    </div>
  );
};

export default LazySection;