"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Grid, Send, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";

const bloggers = [
  {
    id: 1,
    name: "Alex Sterling",
    niche: "Tech & Business",
    description: "Розповідаю про інвестиції в AI та майбутнє технологій.",
    image: "/images/male1.jpg",
    tags: ["Tech", "Business"],
    stats: { followers: "120K", likes: "1.2M", posts: 340 },
    messages: ["Привіт! Я Алекс 💻", "Зараз тестую нові AI-моделі для бізнесу.", "Хочеш дізнатися, як автоматизувати свою роботу?"]
  },
  {
    id: 2,
    name: "Mark O'Connor",
    niche: "Sport & Travel",
    description: "Тренування, харчування та подорожі найкрутішими куточками світу.",
    image: "/images/male2.jpg",
    tags: ["Fitness", "Travel"],
    stats: { followers: "250K", likes: "4.5M", posts: 890 },
    messages: ["Йоу! Марк на зв'язку 🏔️", "Щойно підкорив новий маршрут в Альпах.", "Шукаєш мотивацію для тренувань? Тобі сюди!"]
  },
  {
    id: 3,
    name: "Elena Vibe",
    niche: "Fashion & Lifestyle",
    description: "Естетика, тренди моди та щоденне натхнення.",
    image: "/images/female1.jpg",
    tags: ["Fashion", "Beauty"],
    stats: { followers: "500K", likes: "10M", posts: 1200 },
    messages: ["Привіт, люба! ✨", "Зібрала для тебе весняну капсулу.", "Заходь у мій Telegram, там всі посилання на образи!"]
  },
  {
    id: 4,
    name: "Mya Canvas",
    niche: "Art & Culture",
    description: "Сучасне мистецтво, дизайн та креативний процес.",
    image: "/images/female2.jpg",
    tags: ["Art", "Design"],
    stats: { followers: "85K", likes: "600K", posts: 210 },
    messages: ["Привіт! Я Mya 🎨", "Сьогодні працюю над новим полотном.", "Любиш сучасне мистецтво? Давай спілкуватись!"]
  }
];

export default function Showcase() {
  const [selectedBlogger, setSelectedBlogger] = useState<typeof bloggers[0] | null>(null);

  useEffect(() => {
    if (selectedBlogger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedBlogger]);

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-50 selection:bg-indigo-500/30 relative">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 bg-[#050505]/70 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          <div className="font-extrabold text-xl md:text-2xl tracking-tighter flex items-center gap-2">
            <div className="relative flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-500 shadow-[0_0_20px_rgba(99,102,241,0.4)]">
              <Sparkles size={14} className="text-white md:w-4 md:h-4 w-3.5 h-3.5" />
            </div>
            AI Nexus
          </div>
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden md:flex gap-6">
              <a href="#" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Персонажі</a>
              <a href="#" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Технологія</a>
              <a href="#" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Кейси</a>
            </div>
            <button className="text-xs md:text-sm font-bold text-white px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Створити AI
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-16 px-6 overflow-hidden">
        {/* Glow behind hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/20 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-bold tracking-widest uppercase shadow-[0_0_30px_rgba(99,102,241,0.15)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Next-Gen Digital Talents
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter mb-4 md:mb-6 leading-[1.1] pb-2"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">Віртуальні блогери.</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400">Реальний вплив.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl text-neutral-400/90 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed font-medium px-2"
          >
            Відкрийте для себе нову еру інфлюенсерів. Наші AI-персонажі створюють унікальний контент, формують тренди та ідеально підходять для інтеграції з вашим брендом.
          </motion.p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="px-6 pb-32 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {bloggers.map((blogger, idx) => (
            <motion.div
              key={blogger.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * idx, type: "spring", stiffness: 100 }}
              className="group relative rounded-[2rem] overflow-hidden bg-neutral-900/50 border border-white/10 cursor-pointer hover:border-indigo-500/50 transition-all duration-500 shadow-2xl hover:shadow-[0_0_40px_rgba(99,102,241,0.25)] hover:-translate-y-2 backdrop-blur-sm"
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
                {/* Enhanced Gradient for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-90" />
                
                <div className="absolute bottom-0 left-0 w-full p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blogger.tags.slice(0,2).map((tag, i) => (
                      <span key={tag} className={`px-3 py-1.5 rounded-full backdrop-blur-md text-[10px] uppercase font-extrabold tracking-widest border ${i === 0 ? 'bg-indigo-500/80 text-white border-indigo-400/50 shadow-[0_0_15px_rgba(99,102,241,0.5)]' : 'bg-black/50 text-white/90 border-white/10'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Name & Verified Badge */}
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-2xl font-extrabold text-white leading-tight tracking-tight">{blogger.name}</h3>
                    <CheckCircle2 size={18} className="text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]" fill="currentColor" stroke="black" />
                  </div>
                  
                  {/* Niche & Online Indicator */}
                  <div className="flex items-center gap-2 mb-6">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <p className="text-sm text-neutral-300 font-medium">{blogger.niche} <span className="opacity-50 mx-1">•</span> AI Online</p>
                  </div>
                  
                  {/* Elevated CTA Button */}
                  <button className="group/btn w-full py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-sm font-bold transition-all backdrop-blur-lg border border-white/10 hover:border-white/30 flex items-center justify-center gap-2">
                    Відкрити профіль
                    <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
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
              className="fixed inset-0 bg-[#050505]/80 backdrop-blur-xl z-50"
            />
            
            <motion.div
              initial={{ opacity: 0, y: "100%", scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: "100%", scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 w-full h-[95vh] md:h-[85vh] md:max-h-[750px] md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-5xl bg-[#0a0a0a] border border-white/10 md:rounded-[2rem] rounded-t-[2rem] z-50 overflow-hidden flex flex-col md:flex-row shadow-[0_0_50px_rgba(0,0,0,0.5)]"
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0a0a0a]" />
              </div>

              {/* Right Column - Content */}
              <div className="flex-1 p-5 sm:p-6 md:p-10 overflow-y-auto custom-scrollbar flex flex-col h-full">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-indigo-400 text-[10px] md:text-xs font-extrabold tracking-widest uppercase">{selectedBlogger.niche}</span>
                  <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9px] md:text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Online
                  </span>
                </div>
                
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">{selectedBlogger.name}</h2>
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)] mt-1" fill="currentColor" stroke="black" />
                </div>
                
                <div className="grid grid-cols-3 gap-2 md:gap-4 mb-6 md:mb-8 shrink-0">
                  <div className="p-3 md:p-4 rounded-2xl bg-white/5 border border-white/5 text-center backdrop-blur-sm">
                    <div className="text-xl md:text-2xl font-extrabold text-white mb-0.5 md:mb-1">{selectedBlogger.stats.followers}</div>
                    <div className="text-[8px] md:text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Підписників</div>
                  </div>
                  <div className="p-3 md:p-4 rounded-2xl bg-white/5 border border-white/5 text-center backdrop-blur-sm">
                    <div className="text-xl md:text-2xl font-extrabold text-white mb-0.5 md:mb-1">{selectedBlogger.stats.likes}</div>
                    <div className="text-[8px] md:text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Лайків</div>
                  </div>
                  <div className="p-3 md:p-4 rounded-2xl bg-white/5 border border-white/5 text-center backdrop-blur-sm">
                    <div className="text-xl md:text-2xl font-extrabold text-white mb-0.5 md:mb-1">{selectedBlogger.stats.posts}</div>
                    <div className="text-[8px] md:text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Постів</div>
                  </div>
                </div>

                {/* Chat Simulation (Interactivity) */}
                <div className="flex-1 bg-black/40 rounded-3xl p-4 pt-12 md:p-6 md:pt-14 border border-white/5 mb-6 flex flex-col overflow-hidden relative min-h-[220px] shadow-inner">
                  <div className="absolute top-0 left-0 w-full p-3 bg-gradient-to-b from-[#050505] to-transparent z-10 text-[10px] font-bold text-neutral-500 uppercase tracking-widest text-center flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    Прямий ефір / Чат
                  </div>
                  <div className="flex flex-col gap-3 mt-2 relative z-0">
                    {selectedBlogger.messages.map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.4 + (i * 0.8), type: "spring" }}
                        className="bg-white/10 w-fit max-w-[85%] text-sm md:text-base px-4 py-3 rounded-2xl rounded-tl-sm text-neutral-100 border border-white/5 shadow-sm font-medium"
                      >
                        {msg}
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3, repeat: Infinity, repeatType: "reverse", duration: 0.8 }}
                      className="bg-white/5 w-fit px-4 py-3.5 rounded-2xl rounded-tl-sm flex gap-1 items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </motion.div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 shrink-0 mt-auto">
                  <a href="#" className="flex-1 py-4 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-base flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]">
                    <Send size={18} />
                    Перейти в Telegram
                  </a>
                  <button className="py-4 px-6 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-bold flex items-center justify-center gap-2 transition-colors border border-white/10 group">
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
