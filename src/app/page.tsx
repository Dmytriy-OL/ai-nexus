"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Grid, MessageCircle, Send } from "lucide-react";

const bloggers = [
  {
    id: 1,
    name: "Alex Sterling",
    niche: "Tech & Business",
    description: "Розповідаю про інвестиції в AI та майбутнє технологій.",
    image: "/images/male1.jpg",
    tags: ["Tech", "Business", "Startup"],
    stats: { followers: "120K", likes: "1.2M", posts: 340 },
    messages: ["Привіт! Я Алекс 💻", "Зараз тестую нові AI-моделі для бізнесу.", "Хочеш дізнатися, як автоматизувати свою роботу?"]
  },
  {
    id: 2,
    name: "Mark O'Connor",
    niche: "Sport & Travel",
    description: "Тренування, харчування та подорожі найкрутішими куточками світу.",
    image: "/images/male2.jpg",
    tags: ["Fitness", "Travel", "Lifestyle"],
    stats: { followers: "250K", likes: "4.5M", posts: 890 },
    messages: ["Йоу! Марк на зв'язку 🏔️", "Щойно підкорив новий маршрут в Альпах.", "Шукаєш мотивацію для тренувань? Тобі сюди!"]
  },
  {
    id: 3,
    name: "Elena Vibe",
    niche: "Fashion & Lifestyle",
    description: "Естетика, тренди моди та щоденне натхнення.",
    image: "/images/female1.jpg",
    tags: ["Fashion", "Beauty", "Style"],
    stats: { followers: "500K", likes: "10M", posts: 1200 },
    messages: ["Привіт, люба! ✨", "Зібрала для тебе весняну капсулу.", "Заходь у мій Telegram, там всі посилання на образи!"]
  },
  {
    id: 4,
    name: "Mya Canvas",
    niche: "Art & Culture",
    description: "Сучасне мистецтво, дизайн та креативний процес.",
    image: "/images/female2.jpg",
    tags: ["Art", "Design", "Creative"],
    stats: { followers: "85K", likes: "600K", posts: 210 },
    messages: ["Привіт! Я Mya 🎨", "Сьогодні працюю над новим полотном.", "Любиш сучасне мистецтво? Давай спілкуватись!"]
  }
];

export default function Showcase() {
  const [selectedBlogger, setSelectedBlogger] = useState<typeof bloggers[0] | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedBlogger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedBlogger]);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-indigo-500/30">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 bg-neutral-950/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-sm shadow-[0_0_15px_rgba(99,102,241,0.5)]">AI</span>
            Nexus
          </div>
          <button className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
            Про нас
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-10 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold tracking-wide uppercase shadow-[0_0_20px_rgba(99,102,241,0.15)]"
          >
            Digital Talents
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-indigo-300/60 leading-tight pb-2"
          >
            Віртуальні блогери. <br />Реальний вплив.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 mb-6 max-w-2xl mx-auto leading-relaxed"
          >
            Відкрийте для себе нову еру інфлюенсерів. Наші AI-персонажі створюють унікальний контент, формують тренди та ідеально підходять для інтеграції з вашим брендом.
          </motion.p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {bloggers.map((blogger, idx) => (
            <motion.div
              key={blogger.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * idx, type: "spring", stiffness: 100 }}
              className="group relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/5 cursor-pointer hover:border-indigo-500/30 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] hover:-translate-y-2"
              onClick={() => setSelectedBlogger(blogger)}
            >
              <div className="aspect-[3/4] w-full relative">
                <Image
                  src={blogger.image}
                  alt={blogger.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority={idx < 2}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {blogger.tags.slice(0,2).map((tag, i) => (
                      <span key={tag} className={`px-3 py-1 rounded-full backdrop-blur-md text-[10px] uppercase font-bold tracking-wider border ${i === 0 ? 'bg-indigo-500/80 text-white border-indigo-400/50 shadow-[0_0_10px_rgba(99,102,241,0.5)]' : 'bg-black/40 text-white/90 border-white/10'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1 leading-tight">{blogger.name}</h3>
                  <p className="text-sm text-neutral-300 font-medium mb-4">{blogger.niche}</p>
                  <button className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-indigo-600 text-white text-sm font-semibold transition-colors backdrop-blur-md border border-white/20 hover:border-indigo-500 flex items-center justify-center gap-2">
                    Дивитись блог
                  </button>
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
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
            />
            
            <motion.div
              initial={{ opacity: 0, y: "100%", scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: "100%", scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 w-full h-[95vh] md:h-[85vh] md:max-h-[750px] md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-5xl bg-neutral-900 border border-white/10 md:rounded-3xl rounded-t-3xl z-50 overflow-hidden flex flex-col md:flex-row shadow-2xl"
            >
              <button 
                onClick={() => setSelectedBlogger(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-colors border border-white/10"
              >
                <X size={20} />
              </button>

              {/* Left Column - Image */}
              <div className="w-full md:w-5/12 h-64 md:h-full relative shrink-0">
                <Image
                  src={selectedBlogger.image}
                  alt={selectedBlogger.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-neutral-900" />
              </div>

              {/* Right Column - Content */}
              <div className="flex-1 p-6 md:p-10 overflow-y-auto custom-scrollbar flex flex-col h-full">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-indigo-400 text-xs font-bold tracking-widest uppercase">{selectedBlogger.niche}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{selectedBlogger.name}</h2>
                
                <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8 shrink-0">
                  <div className="p-3 md:p-4 rounded-2xl bg-white/5 border border-white/5 text-center backdrop-blur-sm">
                    <div className="text-xl md:text-2xl font-bold text-white mb-1">{selectedBlogger.stats.followers}</div>
                    <div className="text-[10px] md:text-xs text-neutral-500 font-medium uppercase tracking-wider">Підписників</div>
                  </div>
                  <div className="p-3 md:p-4 rounded-2xl bg-white/5 border border-white/5 text-center backdrop-blur-sm">
                    <div className="text-xl md:text-2xl font-bold text-white mb-1">{selectedBlogger.stats.likes}</div>
                    <div className="text-[10px] md:text-xs text-neutral-500 font-medium uppercase tracking-wider">Лайків</div>
                  </div>
                  <div className="p-3 md:p-4 rounded-2xl bg-white/5 border border-white/5 text-center backdrop-blur-sm">
                    <div className="text-xl md:text-2xl font-bold text-white mb-1">{selectedBlogger.stats.posts}</div>
                    <div className="text-[10px] md:text-xs text-neutral-500 font-medium uppercase tracking-wider">Постів</div>
                  </div>
                </div>

                {/* Chat Simulation (Interactivity) */}
                <div className="flex-1 bg-black/30 rounded-2xl p-4 pt-12 md:p-6 md:pt-14 border border-white/5 mb-6 flex flex-col overflow-hidden relative min-h-[220px]">
                  <div className="absolute top-0 left-0 w-full p-3 bg-gradient-to-b from-black/90 to-transparent z-10 text-xs font-semibold text-neutral-400 uppercase tracking-widest text-center">
                    Прямий ефір / Чат
                  </div>
                  <div className="flex flex-col gap-3 mt-2 relative z-0">
                    {selectedBlogger.messages.map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.4 + (i * 0.8), type: "spring" }}
                        className="bg-white/10 w-fit max-w-[85%] text-sm md:text-base px-4 py-2.5 rounded-2xl rounded-tl-sm text-neutral-100 border border-white/5 shadow-sm"
                      >
                        {msg}
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3, repeat: Infinity, repeatType: "reverse", duration: 0.8 }}
                      className="bg-white/5 w-fit px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1 items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </motion.div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 shrink-0 mt-auto">
                  <a href="#" className="flex-1 py-4 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]">
                    <Send size={18} />
                    Перейти в Telegram
                  </a>
                  <button className="py-4 px-6 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-semibold flex items-center justify-center gap-2 transition-colors border border-white/10 group">
                    <Grid size={18} className="group-hover:text-indigo-400 transition-colors" />
                    <span className="hidden sm:inline">Стрічка</span>
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
