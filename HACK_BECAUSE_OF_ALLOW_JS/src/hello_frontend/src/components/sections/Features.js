function FeatureCard({ icon, title, description }) {
    return (<div className="relative group">
      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#5a3d6b]/5 to-[#8c537a]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Card content */}
      <div className="relative p-6 rounded-lg border border-[#5a3d6b]/20 backdrop-blur-sm transition-all duration-300 group-hover:border-[#8c537a]/30 h-full">
        <div className="text-[#8c537a] mb-4 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#8c537a] transition-colors duration-300">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>);
}
export function Features() {
    return (<section className="py-20 bg-gradient-to-b from-[#160c37]/90 to-[#0c0d1b] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#5a3d6b]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#8c537a]/5 rounded-full blur-3xl"></div>

      {/* Connected nodes background effect */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect width="1" height="1" fill="#8c537a" x="15" y="15"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block py-1 px-3 bg-gradient-to-r from-[#5a3d6b]/20 to-[#8c537a]/20 rounded-full backdrop-blur-sm mb-4">
            <span className="text-sm font-medium text-[#8c537a]">Powerful Features</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
            Powerful Features of the <span className="text-[#8c537a]">Dehix × ICP</span> Integration
          </h2>
          <p className="text-gray-300">
            Discover how our integration with the Internet Computer Protocol brings unprecedented capabilities to our blockchain and AI support ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard icon={<svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.09003 9.00002C9.32513 8.33169 9.78918 7.76813 10.4 7.40915C11.0108 7.05018 11.7289 6.91896 12.4272 7.03873C13.1255 7.15851 13.7588 7.52154 14.2151 8.06355C14.6714 8.60555 14.9211 9.29154 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>} title="Secure Smart Contracts" description="Leverage the security of Internet Computer's canister smart contracts for tamper-proof and verifiable operations."/>
          <FeatureCard icon={<svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12C22 17.5228 17.5228 22 12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12C2 6.47715 6.47715 2 12 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 12C7 14.7614 9.23858 17 12 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 7C9.23858 7 7 9.23858 7 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>} title="Decentralized Infrastructure" description="Run your applications on a truly decentralized network with no reliance on centralized cloud providers."/>
          <FeatureCard icon={<svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>} title="Web-Speed Transactions" description="Experience lightning-fast transaction processing with ICP's revolutionary consensus mechanism."/>
          <FeatureCard icon={<svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>} title="Transparent Data Verification" description="Verify provided data with Dehix's transparent verification process built on ICP's secure infrastructure."/>
          <FeatureCard icon={<svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.2399 7.76001L14.1199 14.12L7.75991 16.24L9.87991 9.88001L16.2399 7.76001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>} title="Enhanced Privacy" description="Benefit from ICP's privacy advantages for secure and private data management in your applications."/>
          <FeatureCard icon={<svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 16V18C16 19.1046 15.1046 20 14 20H6C4.89543 20 4 19.1046 4 18V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 8V6C8 4.89543 8.89543 4 10 4H18C19.1046 4 20 4.89543 20 6V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 14L20 12L18 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 10L4 12L6 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 12H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>} title="Cross-Chain Compatibility" description="Integrate with other blockchains through ICP's Chain Key cryptography for maximum interoperability."/>
          <FeatureCard icon={<svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 12H6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 15L6.5 12L8 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 9L17.5 12L16 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>} title="Token-Enabled Applications" description="Build applications with native token functionality powered by ICP's advanced tokenization features."/>
          <FeatureCard icon={<svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 4H4V11H11V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 4H13V11H20V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 13H13V20H20V13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 13H4V20H11V13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>} title="Scalable Growth" description="Scale your web3 projects seamlessly with the combined power of Dehix's ecosystem and ICP's infrastructure."/>
        </div>
      </div>

      {/* Infinity symbol representing connection */}
      <div className="mt-16 flex justify-center opacity-20">
        <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 20C20 24.4183 16.4183 28 12 28C7.58172 28 4 24.4183 4 20C4 15.5817 7.58172 12 12 12C16.4183 12 20 15.5817 20 20Z" stroke="white" strokeWidth="2"/>
          <path d="M76 20C76 24.4183 72.4183 28 68 28C63.5817 28 60 24.4183 60 20C60 15.5817 63.5817 12 68 12C72.4183 12 76 15.5817 76 20Z" stroke="white" strokeWidth="2"/>
          <path d="M60 12C52 12 36 28 28 28C20 28 4 12 4 12" stroke="white" strokeWidth="2"/>
          <path d="M60 28C52 28 36 12 28 12C20 12 4 28 4 28" stroke="white" strokeWidth="2"/>
        </svg>
      </div>
    </section>);
}
