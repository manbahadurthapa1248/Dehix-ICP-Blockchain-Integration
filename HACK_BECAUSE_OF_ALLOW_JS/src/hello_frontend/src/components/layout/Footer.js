import { Link } from 'react-router-dom';
const FooterLink = ({ href, children }) => (<Link to={href} className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
    {children}
  </Link>);
const SocialIcon = ({ href, icon }) => (<a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200 bg-white/5 p-2 rounded-full hover:bg-white/10">
    {icon}
  </a>);
export function Footer() {
    return (<footer className="bg-[#0c0d1b] border-t border-white/5 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(136, 61, 179, 0.3)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)"/>
        </svg>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="block mb-6">
              <img src="https://ext.same-assets.com/3133404351/3058280021.png" alt="Dehix" className="h-8 w-auto"/>
            </Link>
            <p className="mt-4 text-gray-400 text-sm mb-6 leading-relaxed">
              Dehix is a transparent platform where we verify the provided data and provide all the necessary help needed to either transition to or grow in the web3 space.
            </p>
            <div className="flex space-x-3 mt-6">
              <SocialIcon href="https://linkedin.com/company/dehix-web3/" icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>}/>
              <SocialIcon href="https://twitter.com/dehix_web3" icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                  </svg>}/>
              <SocialIcon href="https://discord.gg/dehix" icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                  </svg>}/>
              <SocialIcon href="https://t.me/dehix_web3" icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm5.568 8.16c-.18 1.896-.96 6.504-1.356 8.628-.168.9-.504 1.2-.816 1.236-.696.06-1.224-.456-1.896-.9-1.056-.696-1.656-1.128-2.676-1.8-1.188-.78-.42-1.212.264-1.908.18-.18 3.252-2.976 3.312-3.228a.24.24 0 00-.06-.216c-.072-.06-.168-.036-.252-.024-.108.024-1.788 1.14-5.064 3.348-.48.324-.912.492-1.296.48-.432-.012-1.248-.24-1.86-.444-.756-.24-1.344-.372-1.296-.792.024-.216.324-.432.888-.66 3.504-1.524 5.832-2.532 6.996-3.012 3.336-1.392 4.02-1.632 4.476-1.632.096 0 .324.024.468.144.12.096.156.228.168.324-.012.072.012.288 0 .36z"/>
                  </svg>}/>
            </div>
          </div>

          <div className="mt-8 md:mt-0">
            <h3 className="text-white font-semibold text-lg mb-4 relative">
              Company
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-gradient-to-r from-[#8c537a] to-[#5a3d6b] rounded-full"></span>
            </h3>
            <ul className="space-y-3 mt-6">
              <li><FooterLink href="/about">About</FooterLink></li>
              <li><FooterLink href="/team">Team</FooterLink></li>
              <li><FooterLink href="/careers">Careers</FooterLink></li>
              <li><FooterLink href="/contact">Contact</FooterLink></li>
            </ul>
          </div>

          <div className="mt-8 md:mt-0">
            <h3 className="text-white font-semibold text-lg mb-4 relative">
              Services
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-gradient-to-r from-[#8c537a] to-[#5a3d6b] rounded-full"></span>
            </h3>
            <ul className="space-y-3 mt-6">
              <li><FooterLink href="/services">Web3 Development</FooterLink></li>
              <li><FooterLink href="/services/blockchain">Blockchain Integration</FooterLink></li>
              <li><FooterLink href="/services/smart-contracts">Smart Contracts</FooterLink></li>
              <li><FooterLink href="/services/dapps">dApp Development</FooterLink></li>
            </ul>
          </div>

          <div className="mt-8 md:mt-0">
            <h3 className="text-white font-semibold text-lg mb-4 relative">
              Resources
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-gradient-to-r from-[#8c537a] to-[#5a3d6b] rounded-full"></span>
            </h3>
            <ul className="space-y-3 mt-6">
              <li><FooterLink href="/blog">Blog</FooterLink></li>
              <li><FooterLink href="/docs">Documentation</FooterLink></li>
              <li><FooterLink href="/roadmap">Roadmap</FooterLink></li>
              <li><FooterLink href="/faqs">FAQs</FooterLink></li>
            </ul>

            {/* Newsletter subscription */}
            <div className="mt-8">
              <h4 className="text-white text-sm font-medium mb-3">Subscribe to newsletter</h4>
              <div className="flex">
                <input type="email" placeholder="Your email" className="bg-white/5 border border-white/10 rounded-l-full px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#8c537a]/50 flex-grow"/>
                <button className="bg-white text-[#211848] rounded-r-full px-3 py-2 text-sm font-medium hover:bg-gray-100 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} dehix.org. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-5">
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/cookies">Cookie Policy</FooterLink>
          </div>
        </div>
      </div>
    </footer>);
}
