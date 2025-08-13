'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const openContact = () => {
    window.open('mailto:your.email@example.com', '_blank');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <motion.div 
          className="absolute inset-0 opacity-60"
          style={{
            background: `
              radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
                rgba(29, 78, 216, 0.15), 
                transparent 40%),
              linear-gradient(135deg, 
                #667eea 0%, 
                #764ba2 25%, 
                #f093fb 50%, 
                #f5576c 75%, 
                #4facfe 100%)
            `,
            backgroundSize: '400% 400%',
            animation: 'aurora 20s ease infinite'
          }}
        />
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* Glassmorphism Navigation */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-4xl"
      >
        <nav className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-6 py-4 shadow-2xl">
          <div className="flex justify-between items-center">
            <motion.h1 
              className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              UKNMD
            </motion.h1>
            <div className="flex space-x-8">
              {['About', 'Projects', 'Contact'].map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="relative text-white/90 hover:text-white transition-colors font-medium"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <main className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, -60, -20],
                  x: [-10, 10, -10],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
              />
            ))}
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              duration: 1
            }}
            className="relative mx-auto mb-8 w-40 h-40"
          >
            <div className="w-full h-full rounded-full backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl flex items-center justify-center relative overflow-hidden">
              <motion.span 
                className="text-5xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(255,255,255,0.5)",
                    "0 0 40px rgba(139,69,19,0.8)",
                    "0 0 20px rgba(255,255,255,0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                UK
              </motion.span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-pulse" />
            </div>
          </motion.div>
          
          {/* Main Title with Kinetic Typography */}
          <motion.div className="mb-6">
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                className="inline-block bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                안녕하세요,
              </motion.span>
            </motion.h1>
            <motion.h2
              className="text-5xl md:text-7xl font-bold"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.span
                className="inline-block bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 30px rgba(139,69,19,0.8)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                UKNMD
              </motion.span>
              <motion.span
                className="inline-block ml-4 text-white/90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                입니다
              </motion.span>
            </motion.h2>
          </motion.div>
          
          {/* Subtitle */}
          <motion.p
            className="text-2xl md:text-3xl text-white/80 mb-12 max-w-4xl mx-auto font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            웹 개발자이자 크리에이터로, 
            <motion.span
              className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent font-medium"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {" "}혁신적인 디지털 경험
            </motion.span>
            을 만들어갑니다.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button 
              onClick={() => scrollToSection('projects')}
              className="group relative px-10 py-4 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 text-white font-semibold text-lg overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <span className="relative z-10">프로젝트 보기</span>
              <motion.div
                className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-100"
                style={{ mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", maskComposite: "xor" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            
            <motion.button 
              onClick={() => scrollToSection('contact')}
              className="group px-10 py-4 rounded-2xl border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              연락하기
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 16, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* About Section - Bento Grid */}
      <section id="about" className="relative py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
        <div className="absolute inset-0 backdrop-blur-3xl" />
        
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                About Me
              </span>
            </motion.h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            />
          </motion.div>
          
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
            
            {/* Main Profile Card - Large */}
            <motion.div
              className="md:col-span-2 lg:col-span-3 row-span-2 glass rounded-3xl p-8 relative overflow-hidden group"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
              <div className="relative z-10">
                <motion.h3 
                  className="text-3xl font-bold text-white mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  열정적인 개발자
                </motion.h3>
                <motion.p 
                  className="text-white/80 text-lg leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  5년 이상의 웹 개발 경험을 바탕으로 React, Next.js, TypeScript 등 
                  현대적인 기술 스택을 활용하여 사용자 중심의 웹 애플리케이션을 개발합니다.
                </motion.p>
                <motion.p 
                  className="text-white/70 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  끊임없이 학습하고 새로운 기술에 도전하며, 코드의 품질과 
                  사용자 경험을 최우선으로 생각합니다.
                </motion.p>
              </div>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              className="glass rounded-3xl p-6 text-center group hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                50+
              </motion.div>
              <div className="text-white/80 text-sm">완료 프로젝트</div>
            </motion.div>

            <motion.div
              className="glass rounded-3xl p-6 text-center group hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div 
                className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                5+
              </motion.div>
              <div className="text-white/80 text-sm">년 경험</div>
            </motion.div>

            <motion.div
              className="glass rounded-3xl p-6 text-center group hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div 
                className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              >
                20+
              </motion.div>
              <div className="text-white/80 text-sm">만족한 클라이언트</div>
            </motion.div>

            <motion.div
              className="glass rounded-3xl p-6 text-center group hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div 
                className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 2 }}
              >
                100%
              </motion.div>
              <div className="text-white/80 text-sm">고객 만족도</div>
            </motion.div>

            {/* Skills Card */}
            <motion.div
              className="md:col-span-2 lg:col-span-3 glass rounded-3xl p-8 relative overflow-hidden group"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
              <div className="relative z-10">
                <motion.h3 
                  className="text-2xl font-bold text-white mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  핵심 기술
                </motion.h3>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'GraphQL'].map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 rounded-full glass text-white/90 text-sm font-medium hover:scale-110 transition-transform cursor-pointer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      whileHover={{ 
                        scale: 1.1
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Philosophy Card */}
            <motion.div
              className="md:col-span-2 glass rounded-3xl p-8 relative overflow-hidden group"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
              <div className="relative z-10">
                <motion.div 
                  className="text-4xl mb-4"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  💡
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold text-white mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  개발 철학
                </motion.h3>
                <motion.p 
                  className="text-white/80 text-sm leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                >
                  "클린 코드와 사용자 경험을 최우선으로 하며, 
                  지속적인 학습과 혁신을 통해 더 나은 개발자가 되고자 합니다."
                </motion.p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* Projects Section - 3D Cards & Horizontal Scroll */}
      <section id="projects" className="relative py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-900/20 to-slate-900" />
        
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </motion.h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            />
            <motion.p
              className="text-xl text-white/80 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              혁신적인 아이디어를 현실로 만든 프로젝트들을 소개합니다
            </motion.p>
          </motion.div>
          
          {/* Horizontal Scroll Container */}
          <div className="relative">
            <motion.div 
              className="flex gap-8 pb-8 overflow-x-auto scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {[
                {
                  title: 'E-commerce Platform',
                  description: 'React와 Node.js를 활용한 완전한 전자상거래 솔루션',
                  gradient: 'from-blue-400 to-purple-500',
                  tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
                  status: 'Live',
                  year: '2024'
                },
                {
                  title: 'Portfolio Website',
                  description: 'Next.js와 Tailwind CSS로 구축한 반응형 포트폴리오',
                  gradient: 'from-green-400 to-blue-500',
                  tech: ['Next.js', 'Tailwind', 'Framer Motion'],
                  status: 'Development',
                  year: '2024'
                },
                {
                  title: 'Mobile App',
                  description: 'React Native를 사용한 크로스플랫폼 모바일 앱',
                  gradient: 'from-purple-400 to-pink-500',
                  tech: ['React Native', 'Firebase', 'Redux'],
                  status: 'Planning',
                  year: '2024'
                },
                {
                  title: 'AI Dashboard',
                  description: '머신러닝 기반 데이터 분석 대시보드',
                  gradient: 'from-orange-400 to-red-500',
                  tech: ['Python', 'TensorFlow', 'FastAPI'],
                  status: 'Live',
                  year: '2023'
                },
                {
                  title: 'Blockchain DApp',
                  description: '탈중앙화 금융 애플리케이션',
                  gradient: 'from-cyan-400 to-blue-500',
                  tech: ['Solidity', 'Web3.js', 'React'],
                  status: 'Beta',
                  year: '2023'
                }
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  className="min-w-[400px] max-w-[400px] group perspective-1000"
                  initial={{ opacity: 0, rotateY: -15 }}
                  whileInView={{ opacity: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    z: 50,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="glass rounded-3xl p-8 h-full relative overflow-hidden transform-gpu transition-all duration-500 group-hover:shadow-2xl">
                    {/* Status Badge */}
                    <motion.div
                      className={`absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'Live' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                        project.status === 'Development' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                        project.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
                        'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                      }`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {project.status}
                    </motion.div>

                    {/* Project Mockup */}
                    <motion.div 
                      className={`w-full h-56 bg-gradient-to-r ${project.gradient} rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                      />
                      <motion.span 
                        className="text-white text-2xl font-bold relative z-10"
                        animate={{ 
                          textShadow: [
                            "0 0 20px rgba(255,255,255,0.5)",
                            "0 0 40px rgba(255,255,255,0.8)",
                            "0 0 20px rgba(255,255,255,0.5)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      >
                        {project.year}
                      </motion.span>
                      
                      {/* Floating Elements */}
                      <motion.div
                        className="absolute top-4 left-4 w-3 h-3 bg-white/40 rounded-full"
                        animate={{ y: [-5, 5, -5], opacity: [0.4, 0.8, 0.4] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                      />
                      <motion.div
                        className="absolute bottom-4 right-4 w-2 h-2 bg-white/60 rounded-full"
                        animate={{ y: [5, -5, 5], opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.4 }}
                      />
                    </motion.div>

                    {/* Project Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 rounded-full glass text-white/90 text-xs font-medium"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.1 + techIndex * 0.05 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <motion.button
                          className="flex-1 py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-medium text-sm hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                          whileHover={{ scale: 1.02, y: -1 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          View Project
                        </motion.button>
                        <motion.button
                          className="py-2 px-4 border border-white/30 rounded-xl text-white/90 font-medium text-sm hover:bg-white/10 transition-all duration-300"
                          whileHover={{ scale: 1.02, y: -1 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          GitHub
                        </motion.button>
                      </div>
                    </motion.div>

                    {/* Hover Glow Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                      initial={false}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Scroll Indicator */}
            <motion.div
              className="flex justify-center mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <span>좌우로 스크롤하여 더 많은 프로젝트를 확인하세요</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section - Interactive */}
      <section id="contact" className="relative py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900/30 to-slate-900" />
        
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Contact Me
              </span>
            </motion.h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            />
            <motion.p
              className="text-xl text-white/80 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              새로운 프로젝트나 협업 기회에 대해 언제든지 연락주세요
            </motion.p>
          </motion.div>
          
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-white mb-8">연락하기</h3>
              
              <div className="space-y-6">
                {[
                  { icon: '📧', title: 'Email', detail: 'your.email@example.com', color: 'from-blue-400 to-cyan-400' },
                  { icon: '📱', title: 'Phone', detail: '+82 10-1234-5678', color: 'from-green-400 to-emerald-400' },
                  { icon: '📍', title: 'Location', detail: 'Seoul, South Korea', color: 'from-purple-400 to-pink-400' },
                  { icon: '💼', title: 'LinkedIn', detail: 'linkedin.com/in/uknmd', color: 'from-orange-400 to-red-400' }
                ].map((contact, index) => (
                  <motion.div
                    key={contact.title}
                    className="group flex items-center p-6 glass rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center mr-6 group-hover:rotate-12 transition-transform duration-300`}
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-2xl">{contact.icon}</span>
                    </motion.div>
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {contact.title}
                      </h4>
                      <p className="text-white/80">{contact.detail}</p>
                    </div>
                    <motion.div
                      className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <span className="text-white/60">→</span>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                className="mt-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <h4 className="text-xl font-bold text-white mb-6">소셜 미디어</h4>
                <div className="flex gap-4">
                  {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((social, index) => (
                    <motion.button
                      key={social}
                      className="w-12 h-12 glass rounded-xl flex items-center justify-center text-white/80 hover:text-white hover:scale-110 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.charAt(0)}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass rounded-3xl p-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-white mb-8">메시지 보내기</h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <label className="block text-sm font-medium text-white/90 mb-2">이름</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 glass border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50 transition-all duration-300"
                        placeholder="홍길동"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <label className="block text-sm font-medium text-white/90 mb-2">이메일</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 glass border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <label className="block text-sm font-medium text-white/90 mb-2">제목</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 glass border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50 transition-all duration-300"
                      placeholder="프로젝트 문의"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                  >
                    <label className="block text-sm font-medium text-white/90 mb-2">메시지</label>
                    <textarea 
                      rows={5}
                      className="w-full px-4 py-3 glass border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50 resize-none transition-all duration-300"
                      placeholder="안녕하세요! 새로운 프로젝트에 대해 논의하고 싶습니다..."
                    />
                  </motion.div>
                  
                  <motion.button 
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      메시지 보내기
                      <motion.span
                        className="inline-block"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        ✈️
                      </motion.span>
                    </span>
                  </motion.button>
                </form>
              </motion.div>

              {/* Quick Response */}
              <motion.div
                className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-white/10"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 }}
              >
                <h4 className="text-lg font-bold text-white mb-2">빠른 응답 보장</h4>
                <p className="text-white/80 text-sm">
                  보통 24시간 이내에 답변드리며, 긴급한 경우 전화나 LinkedIn으로 연락주세요.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-900 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                함께 프로젝트를 시작해보세요!
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-white/80 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              혁신적인 아이디어를 현실로 만들어드립니다.
            </motion.p>
            
            <motion.button 
              onClick={() => scrollToSection('contact')}
              className="group relative px-12 py-4 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 text-white font-semibold text-lg overflow-hidden mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <span className="relative z-10 flex items-center gap-2">
                연락하기
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>

            <motion.div 
              className="border-t border-white/20 pt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                >
                  <p className="text-white/60 text-sm">
                    &copy; 2024 UKNMD. Made with ❤️ and lots of ☕
                  </p>
                </motion.div>
                
                <motion.div
                  className="flex gap-6"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  {['Privacy', 'Terms', 'Sitemap'].map((link, index) => (
                    <motion.a
                      key={link}
                      href="#"
                      className="text-white/60 hover:text-white text-sm transition-colors"
                      whileHover={{ y: -1 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.4 + index * 0.1 }}
                    >
                      {link}
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30"
              style={{
                left: `${20 + i * 30}%`,
                top: `${20 + i * 20}%`,
              }}
              animate={{
                y: [-10, -30, -10],
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.8,
              }}
            />
          ))}
        </div>
      </footer>

      {/* Custom Cursor */}
      <motion.div
        className="fixed w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full pointer-events-none z-50 mix-blend-difference opacity-50"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      />
    </div>
  );
}
