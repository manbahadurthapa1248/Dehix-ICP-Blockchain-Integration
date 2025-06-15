import { Button } from '../ui/Button';
export function Hero() {
    return (<section className="relative pt-32 pb-28 md:pt-40 md:pb-36 overflow-hidden">
      {/* Background gradient with more advanced effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#160c37] via-[#211848] to-[#0c0d1b] z-0">
        {/* Animated circuit patterns */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M10 10 H90 V90 H10 Z" fill="none" stroke="rgba(136, 61, 179, 0.5)" strokeWidth="0.5"/>
                <circle cx="10" cy="10" r="2" fill="rgba(136, 61, 179, 0.5)"/>
                <circle cx="90" cy="10" r="2" fill="rgba(136, 61, 179, 0.5)"/>
                <circle cx="90" cy="90" r="2" fill="rgba(136, 61, 179, 0.5)"/>
                <circle cx="10" cy="90" r="2" fill="rgba(136, 61, 179, 0.5)"/>
                <path d="M10 50 H40 V30 H70 V70 H40 V50" fill="none" stroke="rgba(136, 61, 179, 0.5)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-pattern)"/>
          </svg>
        </div>

        {/* Floating 3D cubes - blockchain nodes representation */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 opacity-10">
          <div className="w-16 h-16 absolute top-0 right-0 bg-[#8c537a]/40 rounded-lg animate-float blur-sm" style={{ animationDuration: '8s' }}></div>
          <div className="w-12 h-12 absolute top-20 right-20 bg-[#5a3d6b]/40 rounded-lg animate-float blur-sm" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
          <div className="w-8 h-8 absolute top-40 right-10 bg-[#7d7597]/40 rounded-lg animate-float blur-sm" style={{ animationDuration: '6s', animationDelay: '0.5s' }}></div>
        </div>

        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 opacity-10">
          <div className="w-16 h-16 absolute bottom-0 left-0 bg-[#8c537a]/40 rounded-lg animate-float blur-sm" style={{ animationDuration: '9s' }}></div>
          <div className="w-12 h-12 absolute bottom-20 left-20 bg-[#5a3d6b]/40 rounded-lg animate-float blur-sm" style={{ animationDuration: '7s', animationDelay: '0.7s' }}></div>
          <div className="w-8 h-8 absolute bottom-40 left-10 bg-[#7d7597]/40 rounded-lg animate-float blur-sm" style={{ animationDuration: '11s', animationDelay: '1.5s' }}></div>
        </div>

        {/* Digital data stream effect */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            {Array.from({ length: 10 }).map((_, i) => (<div key={i} className="absolute bg-[#8c537a]/30 h-0.5 w-20" style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animation: `pulse ${3 + Math.random() * 4}s infinite`,
                animationDelay: `${Math.random() * 5}s`
            }}></div>))}
          </div>
        </div>

        {/* Mesh gradient overlay - more subtle and technical looking */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(140,83,122,0.6),_rgba(90,61,107,0.4),_transparent_70%)]"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_rgba(85,52,83,0.5),_transparent_70%)]"></div>
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#8c537a]/70 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-[#7d7597]/70 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-2/3 left-1/2 w-2 h-2 bg-[#5a3d6b]/70 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-[#553453]/70 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-[#8c537a]/70 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/5 right-1/5 w-1 h-1 bg-[#5a3d6b]/70 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        </div>

        {/* Binary code effect - subtle */}
        <div className="absolute inset-0 opacity-5 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (<div key={i} className="absolute text-xs text-[#8c537a]/30 whitespace-nowrap" style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.2 + Math.random() * 0.3,
            }}>
              {Array.from({ length: 20 }).map(() => Math.round(Math.random())).join('')}
            </div>))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block py-1 px-3 bg-gradient-to-r from-[#5a3d6b]/20 to-[#8c537a]/20 rounded-full backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-[#8c537a]">Announcing ICP Integration</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-heading text-white leading-tight mb-6">
            Dehix <span className="text-[#8c537a]">×</span> ICP<br />
            Blockchain Integration
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Dehix is now joining forces with the Internet Computer Protocol to provide a transparent and trustworthy platform for the web3 ecosystem.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href="/get-started" className="rounded-full bg-white text-[#211848] hover:bg-gray-100 transition-colors px-7 py-3 text-sm font-medium" customStyle={true}>
              Get Started
            </Button>
            <Button href="/icp-integration" className="rounded-full bg-transparent border border-white/30 text-white hover:bg-white/10 transition-colors px-7 py-3 text-sm font-medium" customStyle={true}>
              Learn More
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 mt-12">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#8c537a] rounded-full mr-2"></div>
              <span className="text-gray-300">Trustless</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#5a3d6b] rounded-full mr-2"></div>
              <span className="text-gray-300">Decentralized</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#7d7597] rounded-full mr-2"></div>
              <span className="text-gray-300">Secure</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#553453] rounded-full mr-2"></div>
              <span className="text-gray-300">Scalable</span>
            </div>
          </div>
        </div>
      </div>

      {/* High-quality blockchain cube image in the foreground */}
      <div className="absolute right-0 top-1/3 transform translate-x-1/3 -translate-y-1/4 w-80 h-80 opacity-70 z-10">
          <img src="/images/bg-gradient.png" alt="Blockchain Technology" className="w-full h-full object-contain opacity-75 animate-float" style={{ animationDuration: '8s', filter: 'drop-shadow(0 0 10px rgba(90, 61, 107, 0.5))' }}/>

      </div>

      {/* Rocket image from Dehix.org */}
      <div className="absolute -bottom-10 right-10 md:right-20 transform md:translate-y-0 w-40 h-40 md:w-64 md:h-64 opacity-90 z-20">
          <img src="/images/rocket.png" alt="Dehix Rocket" className="w-full h-full object-contain animate-float" style={{ animationDuration: '6s' }}/>

      </div>

      {/* ICP Logo */}
      <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 opacity-40 animate-pulse z-0">
          <img src="/images/icp-logo.png" alt="ICP Logo" className="w-full h-full animate-pulse" style={{ animationDuration: '4s' }}/>

      </div>

      {/* 3D Blockchain cubes */}
      <div className="absolute top-1/4 left-10 w-16 h-16 opacity-30 animate-float" style={{ animationDuration: '7s' }}>
          <img src="/images/blockchain.png" alt="Blockchain Cube" className="w-full h-full object-contain"/>

      </div>
    </section>);
}
