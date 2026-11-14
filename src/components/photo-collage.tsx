"use client";

import { motion } from "framer-motion";

const tiles = [
  {
    label: "Cairo mornings",
    className: "left-[6%] top-[10%] h-[42%] w-[34%] -rotate-2",
    gradient: "from-[#D4A574] via-[#C17F59] to-[#8B5A3C]",
  },
  {
    label: "Desk & Figma",
    className: "right-[8%] top-[6%] h-[38%] w-[40%] rotate-3",
    gradient: "from-[#2C3E50] via-[#34495E] to-[#1A252F]",
  },
  {
    label: "Nilescapes",
    className: "bottom-[10%] left-[18%] h-[36%] w-[36%] rotate-1",
    gradient: "from-[#1B6B6B] via-[#2A9D8F] to-[#0E4D4D]",
  },
  {
    label: "Details",
    className: "bottom-[14%] right-[12%] h-[30%] w-[28%] -rotate-3",
    gradient: "from-[#F4E8D8] via-[#E8D5C4] to-[#C9A88A]",
  },
] as const;

export function PhotoCollage() {
  return (
    <motion.div
      className="relative mx-auto mt-16 aspect-[16/10] w-full max-w-3xl overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#F7F7F7,transparent_55%),radial-gradient(circle_at_80%_70%,#EEEEEE,transparent_45%)]" />
      {tiles.map((tile, index) => (
        <motion.div
          key={tile.label}
          className={`absolute overflow-hidden rounded-xl border border-white/70 shadow-[0_12px_30px_rgba(0,0,0,0.12)] bg-gradient-to-br ${tile.gradient} ${tile.className}`}
          initial={{ opacity: 0, scale: 0.92, y: 12 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.12 + index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_45%)]" />
          <span className="absolute bottom-3 left-3 rounded-full bg-black/35 px-2.5 py-1 text-[11px] font-medium tracking-wide text-white backdrop-blur-sm">
            {tile.label}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
