
import { Variants } from "framer-motion";

export const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export const hoverEffect = {
  // scale: 1.05,
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  transition: { type: "spring", stiffness: 300, damping: 25 },
};
