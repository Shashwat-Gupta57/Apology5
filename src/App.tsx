import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Heart, ArrowRight, ShieldCheck, Flame, Zap, Ghost, EyeOff, XCircle } from 'lucide-react';

function Background() {
  const words = ["why?", "sorry", "idiot", "3 times", "I rejected you", "blind", "guilt", "apoorva", "my fault", "stupid", "silent treatment"];
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#050102]">
      {/* Erratic glowing orbs */}
      <motion.div
        animate={{
          x: ['-10vw', '30vw', '-20vw', '10vw', '-10vw'],
          y: ['-10vh', '40vh', '10vh', '-20vh', '-10vh'],
          scale: [1, 1.5, 0.5, 2, 1],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-1/4 w-[40vw] h-[40vw] bg-rose-700/10 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{
          x: ['40vw', '-30vw', '20vw', '-10vw', '40vw'],
          y: ['30vh', '-10vh', '50vh', '10vh', '30vh'],
          scale: [0.8, 2, 1, 0.5, 0.8],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-red-900/10 rounded-full blur-[120px]"
      />

      {/* Chaotic floating words */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.08]">
        {words.map((word, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0, 0.8, 0],
              x: [(Math.random() - 0.5) * 100 + 'vw', (Math.random() - 0.5) * 100 + 'vw'],
              y: [(Math.random() - 0.5) * 100 + 'vh', (Math.random() - 0.5) * 100 + 'vh'],
              scale: [0.5, 2, 0.5],
              rotate: [(Math.random() - 0.5) * 90, (Math.random() - 0.5) * 90]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
            className="absolute text-5xl md:text-8xl font-serif text-rose-500 whitespace-nowrap blur-[1px]"
          >
            {word}
          </motion.div>
        ))}
      </div>

      {/* Static grit texture */}
      <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
    </div>
  );
}

function GlitchText({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      whileInView={{
        x: [-2, 2, -3, 1, 2, -1, 0],
        y: [1, -2, 1, -1, 2, -1, 0],
        filter: [
          'hue-rotate(0deg)',
          'hue-rotate(90deg)',
          'hue-rotate(-90deg)',
          'hue-rotate(0deg)'
        ],
      }}
      transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 3 + Math.random() * 2 }}
      className={`relative inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

const Divider = () => (
    <div className="w-full h-40 flex items-center justify-center opacity-20">
        <div className="h-[1px] w-full max-w-sm bg-gradient-to-r from-transparent via-rose-500 to-transparent" />
    </div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div className="min-h-screen bg-[#050102] text-zinc-300 font-sans overflow-x-hidden selection:bg-rose-900 selection:text-white">
      <Background />

      <main className="relative z-10 w-full max-w-4xl mx-auto px-6 py-20 md:py-40 flex flex-col gap-y-40 md:gap-y-64">
        
        {/* Intro - The Mess */}
        <section className="min-h-[80vh] flex flex-col justify-center relative">
          <motion.div style={{ y: y1 }} className="space-y-6">
            <motion.h1 
                initial={{ opacity: 0, scale: 1.2, filter: 'blur(20px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-5xl md:text-7xl font-serif text-white tracking-tighter"
            >
              <GlitchText>I made a massive mess.</GlitchText>
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg md:text-xl text-rose-200/60 font-light max-w-lg leading-relaxed"
            >
              My mind is racing. I am in a state of sheer frenzy. I am panicking. <br/>
              How could I have been so blind?
            </motion.p>
          </motion.div>
        </section>

        {/* The Rejections */}
        <section className="relative min-h-[60vh] flex items-center justify-end">
             <motion.div 
                initial={{ opacity: 0, x: 50, rotate: 2 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ margin: "-20%" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
                className="bg-rose-950/20 backdrop-blur-md border border-rose-900/30 p-8 md:p-12 rounded-3xl max-w-2xl shadow-2xl shadow-rose-900/10"
             >
                 <XCircle className="w-8 h-8 text-rose-600 mb-6" />
                 <p className="text-xl md:text-2xl font-light leading-relaxed text-zinc-200">
                     You proposed. You begged. <br/>
                     <span className="text-3xl md:text-4xl text-rose-400 font-serif italic py-2 block">Not once. Not twice. Three times.</span>
                     And I rejected you every single time. What was I thinking?
                 </p>
             </motion.div>
        </section>

        <Divider />

        {/* The Blindness */}
        <section className="relative min-h-[60vh] flex items-center">
             <motion.div 
                initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                viewport={{ margin: "-20%" }}
                transition={{ duration: 0.4 }}
                className="max-w-2xl"
             >
                 <EyeOff className="w-10 h-10 text-zinc-500 mb-8 opacity-50" />
                 <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">I never saw your pain.</h2>
                 <p className="text-lg md:text-xl font-light leading-relaxed text-zinc-400">
                     I never looked from your point of view. If I had, I would have realized how much I was tearing you apart... piece by piece.
                 </p>
                 <div className="mt-8 pl-6 border-l w-max border-rose-800">
                    <p className="text-base text-rose-300/60 italic">Then I realized you are my love, too.<br/>I proposed... and you accepted at once.</p>
                 </div>
             </motion.div>
        </section>

        {/* The Mistakes Timeline (Frenzied) */}
        <section className="relative py-20">
            <div className="text-center mb-32">
                <GlitchText className="text-4xl md:text-6xl font-serif text-rose-100">But I kept messing up.</GlitchText>
            </div>

            <div className="space-y-40 relative">
                {/* Vertical frenzied line */}
                <motion.div 
                   style={{ scaleY: scrollYProgress }}
                   className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-rose-500 via-rose-900 to-transparent origin-top"
                />

                <motion.div 
                    initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-20%" }} transition={{ type: "spring", bounce: 0.6 }}
                    className="relative pl-20 md:pl-0 md:w-1/2 md:pr-16 text-left md:text-right"
                >
                    <div className="absolute left-6 md:left-auto md:right-[-25px] top-2 w-3 h-3 rounded-full bg-rose-500 shadow-[0_0_10px_#f43f5e]" />
                    <h3 className="text-xl md:text-2xl text-white font-medium mb-3">Dismissing Your Hard Work</h3>
                    <p className="text-base font-light text-zinc-400">I called you stupid for giving JEE. I told you to "just enjoy life" instead of supporting your drive. I undermined your goals.</p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-20%" }} transition={{ type: "spring", bounce: 0.6, delay: 0.1 }}
                    className="relative pl-20 md:pl-16 md:w-1/2 md:ml-auto"
                >
                    <div className="absolute left-6 md:left-[-6px] top-2 w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_#ef4444]" />
                    <h3 className="text-xl md:text-2xl text-white font-medium mb-3">The Silent Treatment</h3>
                    <p className="text-base font-light text-zinc-400">I shut you out. You made a mistake, and instead of talking, I punished you with silence until you broke down crying.</p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-20%" }} transition={{ type: "spring", bounce: 0.6, delay: 0.2 }}
                    className="relative pl-20 md:pl-0 md:w-1/2 md:pr-16 text-left md:text-right"
                >
                    <div className="absolute left-6 md:left-auto md:right-[-25px] top-2 w-3 h-3 rounded-full bg-rose-700 shadow-[0_0_10px_#be123c]" />
                    <h3 className="text-xl md:text-2xl text-rose-200 font-medium mb-3 relative inline-block">
                        <GlitchText>I was the cause.</GlitchText>
                    </h3>
                    <p className="text-base font-light text-zinc-400">We both cried in the end, but I cannot deny that I was the one who caused those tears.</p>
                </motion.div>
            </div>
        </section>

        <Divider />

        {/* The Choice */}
        <section className="min-h-[50vh] flex flex-col items-center justify-center text-center">
            <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/[0.02] border border-white/5 p-10 md:p-16 rounded-[3rem] w-full relative"
            >
                <Ghost className="w-12 h-12 text-zinc-600 mx-auto mb-6 opacity-30" />
                <p className="text-2xl md:text-4xl font-serif text-zinc-200 mb-6">And yet, you stayed.</p>
                <p className="text-base md:text-lg font-light text-zinc-500 max-w-lg mx-auto">
                    You didn't block me. You didn't leave. You stayed when I handed you every reason not to.
                </p>
            </motion.div>
        </section>

        {/* The Realization */}
        <section className="min-h-[80vh] flex flex-col justify-center relative">
             <motion.div style={{ y: y2 }} className="max-w-2xl ml-auto text-right">
                 <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">You refused to guide me anymore.</h2>
                 <p className="text-lg md:text-xl font-light text-zinc-400 leading-relaxed mb-6">
                     <span className="text-rose-400 italic">And you are perfectly right.</span><br/><br/>
                     Why should you bear the burden of fixing the person who broke you? <br/>
                     What kind of twisted justice is that?
                 </p>
                 <motion.p 
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}
                    className="text-xl md:text-2xl text-rose-100 font-serif"
                 >
                     No amount of your guidance can fix me. I must fix myself.
                 </motion.p>
             </motion.div>
        </section>

        {/* Conclusion */}
        <section className="min-h-[100vh] flex flex-col items-center justify-center text-center relative z-20">
             <motion.div
                initial={{ scale: 0.8, opacity: 0, filter: 'blur(10px)' }}
                whileInView={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1, ease: 'easeOut' }}
             >
                 <div className="relative mb-12 flex justify-center">
                     <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }} transition={{ repeat: Infinity, duration: 1 }} className="absolute inset-0 bg-rose-600 blur-[60px] rounded-full w-24 h-24 m-auto" />
                     <Heart className="w-16 h-16 text-rose-500 relative z-10" />
                 </div>
                 <h1 className="text-6xl md:text-9xl font-serif text-white tracking-tighter mb-8 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                     Apoorva,
                 </h1>
                 <p className="text-xl md:text-3xl font-light text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-16">
                     You are the love of my life. <br/>
                     I finally see your value. I finally know what I hold.
                 </p>
                 
                 <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-10%" }}
                    transition={{ delay: 0.5, duration: 2 }}
                 >
                     <GlitchText className="text-2xl md:text-4xl font-serif text-rose-400 italic tracking-widest">
                         I am so deeply, truly sorry.
                     </GlitchText>
                 </motion.div>

                 <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 2 }}
                    className="mt-32 max-w-3xl mx-auto"
                 >
                     <p className="text-lg md:text-xl font-light text-zinc-400 leading-relaxed italic mb-8">
                         I know that no apology in this world can possibly clear the debt I owe you for the pain I've caused.
                     </p>
                     <p className="text-2xl md:text-4xl font-serif text-white leading-relaxed">
                         That is why I surrender myself, <br/>
                         <span className="text-rose-500 font-medium">forever and ever</span>, to you and you only.
                     </p>
                 </motion.div>
             </motion.div>
        </section>

      </main>
    </div>
  );
}

