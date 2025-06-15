import { Button } from '../ui/Button';
export function AboutICP() {
    return (<section className="py-20 bg-[#0c0d1b] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#5a3d6b]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#8c537a]/5 rounded-full blur-3xl"></div>

        {/* Circuit board pattern background */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit-board" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M10 10 h40 v40 h-40 z" fill="none" stroke="#8c537a" strokeWidth="0.5"/>
                <circle cx="10" cy="10" r="1" fill="#8c537a"/>
                <circle cx="50" cy="10" r="1" fill="#8c537a"/>
                <circle cx="10" cy="50" r="1" fill="#8c537a"/>
                <circle cx="50" cy="50" r="1" fill="#8c537a"/>
                <path d="M30 10 v20 h20" fill="none" stroke="#8c537a" strokeWidth="0.5"/>
                <path d="M10 30 h20 v20" fill="none" stroke="#8c537a" strokeWidth="0.5"/>
                <circle cx="30" cy="30" r="1" fill="#8c537a"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-board)"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            {/* Glowing background for the card */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#5a3d6b]/20 to-[#8c537a]/10 rounded-xl blur-3xl transform scale-110"></div>

            <div className="relative bg-[#160c37]/80 backdrop-blur-md rounded-xl overflow-hidden p-8 border border-[#5a3d6b]/20 hover:border-[#8c537a]/30 transition-colors duration-300 shadow-xl group">
              {/* Top glowing accent */}
              <div className="absolute -top-10 right-1/2 w-40 h-40 bg-[#5a3d6b]/30 rounded-full blur-3xl transform translate-x-1/2"></div>

              {/* Animated circuitry lines overlay */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#8c537a" strokeWidth="0.5" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" from="0" to="10" dur="5s" repeatCount="indefinite"/>
                  </line>
                  <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#5a3d6b" strokeWidth="0.5" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="7s" repeatCount="indefinite"/>
                  </line>
                </svg>
              </div>

              <div className="flex justify-center mb-8 relative">
                {/* ICP infinity logo with high-quality image */}
                <div className="relative">
                  <div className="absolute inset-0 bg-[#5a3d6b]/30 rounded-full blur-md transform scale-110 group-hover:scale-125 transition-transform duration-700"></div>
                  <img src="https://cryptologos.cc/logos/internet-computer-icp-logo.png" alt="Internet Computer Protocol Logo" className="w-28 h-28 relative z-10 group-hover:scale-110 transition-transform duration-300"/>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white text-center mb-6 relative z-10">
                Understanding the Internet Computer Protocol
              </h3>

              <p className="text-gray-300 mb-5 leading-relaxed relative z-10">
                The Internet Computer Protocol (ICP) is a revolutionary blockchain that extends the internet's functionality, allowing developers to build and deploy secure, autonomous applications directly on the blockchain without relying on traditional IT infrastructure.
              </p>

              <p className="text-gray-300 leading-relaxed relative z-10">
                What makes ICP unique is its ability to serve web content directly to users, run smart contracts at web speed, scale infinitely, and reduce costs dramatically compared to traditional blockchain platforms.
              </p>

              {/* Animated connections visualization */}
              <div className="absolute bottom-2 right-2 w-16 h-16 opacity-20">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#5a3d6b" strokeWidth="0.5"/>
                  <circle cx="12" cy="12" r="6" stroke="#8c537a" strokeWidth="0.5">
                    <animate attributeName="r" values="6;8;6" dur="4s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="12" cy="12" r="2" stroke="#8c537a" strokeWidth="0.5">
                    <animate attributeName="r" values="2;4;2" dur="4s" repeatCount="indefinite"/>
                  </circle>
                </svg>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-block py-1 px-4 bg-gradient-to-r from-[#5a3d6b]/20 to-[#8c537a]/20 rounded-full backdrop-blur-sm mb-4">
              <span className="text-sm font-medium text-[#8c537a]">Integration Details</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
              Dehix + ICP Integration
            </h2>

            <p className="text-gray-300 mb-8 leading-relaxed">
              Dehix is integrating with the Internet Computer Protocol to provide a more robust, secure, and scalable platform for our blockchain and AI support ecosystem. This integration brings unprecedented capabilities to our users and partners.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-[#160c37]/30 backdrop-blur-sm p-5 rounded-lg border border-[#5a3d6b]/20 hover:border-[#8c537a]/30 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-[#8c537a]/5">
                <div className="text-[#8c537a] mb-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Enhanced Security</h4>
                <p className="text-gray-400 text-sm">Our integration with ICP provides enhanced security through cryptographically secured canister smart contracts.</p>
              </div>

              <div className="bg-[#160c37]/30 backdrop-blur-sm p-5 rounded-lg border border-[#5a3d6b]/20 hover:border-[#8c537a]/30 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-[#8c537a]/5">
                <div className="text-[#8c537a] mb-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Decentralized Verification</h4>
                <p className="text-gray-400 text-sm">Data verification becomes fully decentralized and transparent, ensuring integrity of all operations.</p>
              </div>

              <div className="bg-[#160c37]/30 backdrop-blur-sm p-5 rounded-lg border border-[#5a3d6b]/20 hover:border-[#8c537a]/30 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-[#8c537a]/5">
                <div className="text-[#8c537a] mb-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.27002 6.96002L12 12L20.73 6.96002" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Scaling Capabilities</h4>
                <p className="text-gray-400 text-sm">Leverage ICP's scaling capabilities to handle millions of transactions without performance degradation.</p>
              </div>

              <div className="bg-[#160c37]/30 backdrop-blur-sm p-5 rounded-lg border border-[#5a3d6b]/20 hover:border-[#8c537a]/30 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-[#8c537a]/5">
                <div className="text-[#8c537a] mb-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Web-Speed Performance</h4>
                <p className="text-gray-400 text-sm">Experience web-speed transactions and interactions with sub-second finality on all operations.</p>
              </div>

              <div className="bg-[#160c37]/30 backdrop-blur-sm p-5 rounded-lg border border-[#5a3d6b]/20 hover:border-[#8c537a]/30 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-[#8c537a]/5">
                <div className="text-[#8c537a] mb-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.92993 19.0701L7.75993 16.2401" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.24 7.76001L19.07 4.93001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.92993 4.93001L7.75993 7.76001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.24 16.2401L19.07 19.0701" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Interoperability</h4>
                <p className="text-gray-400 text-sm">Connect seamlessly with other blockchain networks through ICP's Chain Key cryptography.</p>
              </div>

              <div className="bg-[#160c37]/30 backdrop-blur-sm p-5 rounded-lg border border-[#5a3d6b]/20 hover:border-[#8c537a]/30 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-[#8c537a]/5">
                <div className="text-[#8c537a] mb-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6C14 7.10457 13.1046 8 12 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18C14 19.1046 13.1046 20 12 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12C20 13.1046 19.1046 14 18 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12C8 13.1046 7.10457 14 6 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 6.5L17 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 13.5L15 17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 13.5L15 17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 6.5L7 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Reduced Costs</h4>
                <p className="text-gray-400 text-sm">Significantly lower operational costs compared to traditional blockchain deployments.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="/view-integration" className="rounded-full bg-white text-[#211848] hover:bg-gray-100 transition-colors px-7 py-3 text-sm font-medium" customStyle={true}>
                View ICP Integration
              </Button>
              <Button href="https://internetcomputer.org" className="rounded-full bg-transparent border border-white/30 text-white hover:bg-white/10 transition-colors px-7 py-3 text-sm font-medium" customStyle={true}>
                Learn about ICP
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating blockchain elements */}
      <div className="absolute top-1/4 right-10 w-16 h-16 opacity-20 animate-float z-10" style={{ animationDuration: '8s' }}>
        <img src="https://www.shutterstock.com/image-vector/internet-computer-protocol-icp-crypto-260nw-2241950397.jpg" alt="ICP Coin" className="w-full h-full object-contain rounded-full"/>
      </div>

      <div className="absolute bottom-1/4 left-10 w-24 h-24 opacity-10 animate-float z-10" style={{ animationDuration: '10s', animationDelay: '1s' }}>
        <img src="https://chainwire.org/wp-content/uploads/2024/06/internet-computer-price-prediction_1718718063Nlvej_17187892866raN5rl2T6.jpg" alt="ICP Logo" className="w-full h-full object-contain rounded-full"/>
      </div>
    </section>);
}
