import { Button } from '../ui/Button';
export function CTA() {
    return (<section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#160c37] to-[#0c0d1b] z-0"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#8c537a"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)"/>
        </svg>
      </div>

      {/* Background glowing elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#5a3d6b]/10 rounded-full blur-3xl transform -translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#8c537a]/10 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block py-1 px-3 bg-gradient-to-r from-[#5a3d6b]/20 to-[#8c537a]/20 rounded-full backdrop-blur-sm mb-4">
            <span className="text-sm font-medium text-[#8c537a]">Join Web3 Revolution</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
            Ready to Transform Your<br />Web3 Journey?
          </h2>

          <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            With our ICP integration, you'll have access to a complete set of tools to build, deploy, and scale your web3 applications. Our transparent platform ensures your data is verified and your transactions are secure.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/get-started" className="rounded-full bg-white text-[#211848] hover:bg-gray-100 transition-colors px-7 py-3 text-sm font-medium" customStyle={true}>
              Start Building
            </Button>
            <Button href="/docs" className="rounded-full bg-transparent border border-white/30 text-white hover:bg-white/10 transition-colors px-7 py-3 text-sm font-medium" customStyle={true}>
              View Documentation
            </Button>
          </div>

          {/* Animated rocket image from Dehix.org */}
          <div className="mt-16 flex justify-center relative">
            <div className="absolute inset-0 bg-[#5a3d6b]/10 rounded-full blur-3xl"></div>
            <img src="https://ext.same-assets.com/3133404351/6714049.png" alt="Dehix Rocket" className="w-32 h-32 object-contain relative z-10 animate-bounce" style={{ animationDuration: '6s' }}/>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-white text-3xl font-bold mb-2">1000+</div>
              <div className="text-gray-400 text-sm">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-white text-3xl font-bold mb-2">50+</div>
              <div className="text-gray-400 text-sm">Partner Projects</div>
            </div>
            <div className="text-center">
              <div className="text-white text-3xl font-bold mb-2">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-white text-3xl font-bold mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Support</div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5">
            <h3 className="text-white text-xl font-semibold mb-4">Stay Updated</h3>
            <div className="max-w-md mx-auto">
              <form className="flex gap-3">
                <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-3 rounded-full bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#8c537a]/50 focus:border-transparent transition-all duration-200"/>
                <button type="submit" className="px-6 py-3 rounded-full bg-white text-[#211848] hover:bg-gray-100 transition-colors font-medium">
                  Subscribe
                </button>
              </form>
              <p className="text-gray-400 text-xs mt-3">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);
}
