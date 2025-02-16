import { motion } from "framer-motion";


export default function PageTransition({children}: {children: React.ReactNode}) {
  return (
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
          {children}
    </motion.div>
  )
}
