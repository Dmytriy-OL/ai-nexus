"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Grid, MessageCircle } from "lucide-react";

const bloggers = [
  {
    id: 1,
    name: "Alex Sterling",
    niche: "Tech & Business",
    description: "Розповідаю про інвестиції в AI та майбутнє технологій.",
    image: "/images/male1.jpg",
    tags: ["Tech", "Business", "Startup"],
    stats: { followers: "120K", likes: "1.2M", posts: 340 }
  },
  {
    id: 2,
    name: "Mark O'Connor",
    niche: "Sport & Travel",
    description: "Тренування, харчування та подорожі найкрутішими куточками світу.",
    image: "/images/male2.jpg",
    tags: ["Fitness", "Travel", "Lifestyle"],
    stats: { followers: "250K", likes: "4.5M", posts: 890 }
  },
  {
    id: 3,
    name: "Elena Vibe",
    niche: "Fashion & Lifestyle",
    description: "Естетика, тренди моди та щоденне натхнення.",
    image: "/images/female1.jpg",
    tags: ["Fashion", "Beauty", "Style"],
    stats: { followers: "500K", likes: "10M", posts: 1200 }
  },
  {
    id: 4,
    name: "Mya Canvas",
    niche: "Art & Culture",
    description: "Сучасне мистецтво, дизайн та креативний процес.",
    image: "/images/female2.jpg",
    tags: ["Art", "Design", "Creative"],
    stats: { followers: "85K", likes: "600K", posts: 210 }
  }
];

export default function Showcase() {
  const [selectedBlogger, setSelectedBlogger] = useState<typeof bloggers[0] | null>(null);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-indigo-500/30">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 bg-neutral-950/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-sm">AI</span>
            Nexus
          </div>
          <button className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
            Про нас
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold tracking-wide uppercase"
          >
            Digital Talents
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white to-neutral-400"
          >
            Віртуальні блогери. <br />Реальний вплив.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Відкрийте для себе нову еру інфлюенсерів. Наші AI-персонажі створюють унікальний контент, формують тренди та ідеально підходять для інтеграції з вашим брендом.
          </motion.p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bloggers.map((blogger, idx) => (
            <motion.div
              key={blogger.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="group relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/5 cursor-pointer hover:border-white/20 transition-colors shadow-xl"
              onClick={() => setSelectedBlogger(blogger)}
            >
              <div className="aspect-[3/4] w-full relative">
                <Image
                  src={blogger.image}
                  alt={blogger.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {blogger.tags.slice(0,2).map(tag => (
                      <span key={tag} className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-medium text-white/90">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1 leading-tight">{blogger.name}</h3>
                  <p className="text-sm text-neutral-300 font-medium">{blogger.niche}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedBlogger && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBlogger(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 w-full h-[90vh] md:h-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-4xl bg-neutral-900 border border-white/10 md:rounded-3xl rounded-t-3xl z-50 overflow-hidden flex flex-col md:flex-row shadow-2xl"
            >
              <button 
                onClick={() => setSelectedBlogger(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-2/5 h-64 md:h-[500px] relative shrink-0">
                <Image
                  src={selectedBlogger.image}
                  alt={selectedBlogger.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent md:bg-gradient-to-r" />
              </div>

              <div className="flex-1 p-6 md:p-10 overflow-y-auto custom-scrollbar">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-indigo-400 text-sm font-semibold tracking-wide uppercase">{selectedBlogger.niche}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{selectedBlogger.name}</h2>
                <p className="text-neutral-400 mb-8 text-lg leading-relaxed">
                  {selectedBlogger.description}
                </p>

                <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8">
                  <div className="p-3 md:p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
                    <div className="text-xl md:text-2xl font-bold text-white mb-1">{selectedBlogger.stats.followers}</div>
                    <div className="text-[10px] md:text-xs text-neutral-500 font-medium uppercase tracking-wider">Підписників</div>
                  </div>
                  <div className="p-3 md:p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
                    <div className="text-xl md:text-2xl font-bold text-white mb-1">{selectedBlogger.stats.likes}</div>
                    <div className="text-[10px] md:text-xs text-neutral-500 font-medium uppercase tracking-wider">Лайків</div>
                  </div>
                  <div className="p-3 md:p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
                    <div className="text-xl md:text-2xl font-bold text-white mb-1">{selectedBlogger.stats.posts}</div>
                    <div className="text-[10px] md:text-xs text-neutral-500 font-medium uppercase tracking-wider">Постів</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <a href="#" className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]">
                    <MessageCircle size={20} />
                    Перейти в Telegram
                  </a>
                  <button className="w-full py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-semibold flex items-center justify-center gap-2 transition-colors border border-white/10">
                    <Grid size={20} />
                    Переглянути контент
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
