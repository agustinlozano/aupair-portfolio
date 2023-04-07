import { motion } from "framer-motion";

const Subtitle = ({ children, id }) => {

  return (
    <h2
      id={id}
      className="w-fit mx-auto font-walsheim text-cyan-500 text-6xl my-20 text-center drop-shadow-md shadow-blue-600/50 md:text-8xl md:mb-20 hover:text-cyan-700 z-10"
    >
      <span className="relative inline-block">
      <span className="relative">{children}</span>
        <motion.span
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.5 }}
          className={"absolute inset-x-0 bottom-0 h-8 bg-gradient-to-r opacity-30 from-cyan-500 to-cyan-600 rounded-sm z-0"}
          aria-hidden="true"
        />
      </span>
    </h2>
  );
};

export default Subtitle;