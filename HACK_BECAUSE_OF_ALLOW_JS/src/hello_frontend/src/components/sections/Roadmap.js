function RoadmapPhase({ phase, title, period, items, active = false }) {
    return (<div className="relative">
      {/* Phase indicator */}
      <div className={`absolute -left-5 md:-left-6 w-10 h-10 rounded-full flex items-center justify-center z-10 ${active
            ? 'bg-[#8c537a]'
            : 'bg-[#160c37] border border-[#5a3d6b]/50'}`}>
        <div className={`w-3 h-3 rounded-full ${active ? 'bg-white' : 'bg-[#5a3d6b]'}`}></div>
      </div>

      {/* Content box */}
      <div className={`ml-10 md:ml-12 p-6 rounded-lg ${active
            ? 'bg-[#160c37] border-2 border-[#8c537a]/40'
            : 'bg-[#0c0d1b]/80 border border-[#5a3d6b]/20'}`}>
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          <p className={`text-sm font-medium ${active ? 'text-[#8c537a]' : 'text-[#5a3d6b]'}`}>{period}</p>
        </div>

        <ul className="space-y-3">
          {items.map((item, index) => (<li key={index} className="flex items-start">
              <div className={`mr-3 mt-1 w-1.5 h-1.5 rounded-full ${active ? 'bg-[#8c537a]' : 'bg-[#5a3d6b]/70'}`}></div>
              <span className="text-gray-300 text-sm">{item}</span>
            </li>))}
        </ul>
      </div>
    </div>);
}
export function Roadmap() {
    return (<section className="py-20 bg-gradient-to-b from-[#0c0d1b] to-[#160c37] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="roadmap-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 0 20 L 40 20 M 20 0 L 20 40" stroke="#8c537a" strokeWidth="0.5" fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#roadmap-grid)"/>
          </svg>
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-[#5a3d6b]/5 rounded-full blur-3xl transform translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8c537a]/5 rounded-full blur-3xl transform -translate-x-1/3"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block py-1 px-3 bg-gradient-to-r from-[#5a3d6b]/20 to-[#8c537a]/20 rounded-full backdrop-blur-sm mb-4">
            <span className="text-sm font-medium text-[#8c537a]">Integration Timeline</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
            Integration Roadmap
          </h2>

          <p className="text-gray-300">
            Our strategic plan for integrating Dehix with the Internet Computer Protocol to build a robust and scalable Web3 ecosystem
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#5a3d6b] via-[#8c537a]/60 to-[#5a3d6b]/20"></div>

          <div className="space-y-16">
            <RoadmapPhase phase="1" title="Integration Planning" period="Q1 2025" items={[
            "Technical architecture design",
            "ICP ecosystem exploration",
            "Partnership formalization",
            "Requirements gathering",
            "Resource allocation"
        ]}/>

            <RoadmapPhase phase="2" title="Core Integration" period="Q2 2025" items={[
            "ICP canister development",
            "Smart contract implementation",
            "Identity integration",
            "Initial testing and validation",
            "Developer documentation"
        ]}/>

            <RoadmapPhase phase="3" title="Beta Launch" period="Q3 2025 (Current)" items={[
            "Platform beta release",
            "Community testing program",
            "Bug fixes and optimizations",
            "Performance benchmarking",
            "User experience refinement"
        ]} active={true}/>

            <RoadmapPhase phase="4" title="DAO Integration" period="Q4 2025" items={[
            "DAO governance implementation",
            "Fundraising mechanism launch",
            "Multi-signature security",
            "Voting system deployment",
            "Proposal management system"
        ]}/>

            <RoadmapPhase phase="5" title="Full Launch" period="Q1 2026" items={[
            "Complete Dehix Wallet integration",
            "Cross-chain operability",
            "Enterprise SDK release",
            "Global marketing campaign",
            "Strategic partnerships expansion"
        ]}/>
          </div>
        </div>
      </div>
    </section>);
}
