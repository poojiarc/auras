import { motion } from "framer-motion";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919542119649"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", damping: 20 }}
      className="fixed bottom-6 right-6 z-50 flex items-center group"
    >
      <div className="relative flex items-center">
        {/* Label with Black Radiant Green Gradient */}
        <div className="mr-4 px-6 py-3 rounded-full bg-gradient-to-r from-black via-[#0F0F0F] to-[#1A330E] border border-primary/30 text-white text-[11px] font-black tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 whitespace-nowrap shadow-[0_0_30px_rgba(141,198,63,0.2)] backdrop-blur-xl">
          Free Consultation
        </div>
        
        {/* Button */}
        <div className="relative">
           <div className="absolute inset-0 bg-[#25D366] blur-2xl opacity-30 group-hover:opacity-60 transition-opacity animate-pulse" />
           <div className="h-14 w-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-[0_0_30px_rgba(37,211,102,0.4)] group-hover:scale-110 group-hover:rotate-[10deg] transition-all duration-500 relative overflow-hidden border-2 border-white/20">
             <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
             <WhatsAppIcon className="h-7 w-7 relative z-10 drop-shadow-md" />
           </div>
        </div>
      </div>
    </motion.a>
  );
}





