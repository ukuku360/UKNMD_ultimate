export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">UKNMD</h1>
          <div className="space-x-6">
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">About</a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Projects</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-white text-4xl font-bold">UK</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            안녕하세요, <span className="text-blue-600">UKNMD</span>입니다
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            웹 개발자이자 크리에이터로, 혁신적인 디지털 경험을 만들어갑니다.
          </p>
          
          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              프로젝트 보기
            </button>
            <button className="border border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              연락하기
            </button>
          </div>
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                열정적인 개발자
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                5년 이상의 웹 개발 경험을 바탕으로 React, Next.js, TypeScript 등 
                현대적인 기술 스택을 활용하여 사용자 중심의 웹 애플리케이션을 개발합니다.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                끊임없이 학습하고 새로운 기술에 도전하며, 코드의 품질과 
                사용자 경험을 최우선으로 생각합니다.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-400">완료 프로젝트</div>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-400">년 경험</div>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                <div className="text-gray-600 dark:text-gray-400">만족한 클라이언트</div>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600 dark:text-gray-400">고객 만족도</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Frontend</h3>
              <p className="text-gray-600 dark:text-gray-400">React, Next.js, TypeScript, Tailwind CSS</p>
            </div>
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Backend</h3>
              <p className="text-gray-600 dark:text-gray-400">Node.js, Python, PostgreSQL, MongoDB</p>
            </div>
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Design</h3>
              <p className="text-gray-600 dark:text-gray-400">Figma, UI/UX Design, Adobe Creative Suite</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">함께 프로젝트를 시작해보세요!</h2>
          <p className="text-gray-400 mb-8">혁신적인 아이디어를 현실로 만들어드립니다.</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            연락하기
          </button>
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400">
            <p>&copy; 2024 UKNMD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
