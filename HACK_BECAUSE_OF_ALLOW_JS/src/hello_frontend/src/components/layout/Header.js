import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Logo = () => (<Link to="/" className="flex items-center space-x-3">
    <img src="https://ext.same-assets.com/3133404351/3058280021.png" alt="Dehix" className="h-8 w-auto"/>
    <span className="text-xl font-bold tracking-wide text-white hidden md:block">DEHIX</span>
  </Link>);
const NavLink = ({ href, children, currentPath }) => {
    const isActive = currentPath === href;
    return (<Link to={href} className={`transition-colors px-3 py-2 text-sm font-medium relative group ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`}>
      {children}
      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#8c537a] to-[#5a3d6b] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : ''}`}></span>
    </Link>);
};
export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [currentPath, setCurrentPath] = useState('/');
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        const updatePath = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('scroll', handleScroll);
        // Initialize current path
        updatePath();
        // Listen for path changes
        const intervalId = setInterval(updatePath, 300);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(intervalId);
        };
    }, []);
    return (<header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0c0d1b]/95 backdrop-blur-md border-b border-white/5 shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <Logo />
          </div>

          <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400" onClick={() => setMobileMenuOpen(true)}>
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
              </svg>
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-8">
            <NavLink href="/" currentPath={currentPath}>Home</NavLink>
            <NavLink href="/about" currentPath={currentPath}>About</NavLink>
            <NavLink href="/services" currentPath={currentPath}>Services</NavLink>
            <NavLink href="/icp-integration" currentPath={currentPath}>ICP Integration</NavLink>
            <NavLink href="/blog" currentPath={currentPath}>Blog</NavLink>
            <NavLink href="/contact" currentPath={currentPath}>Contact</NavLink>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to="/get-started" className="rounded-full bg-white text-[#211848] hover:bg-gray-100 transition-colors px-5 py-2 text-sm font-medium">
              Get Started
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (<div className="fixed inset-0 z-50">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#0c0d1b] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <Logo />
              <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-400" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/15">
                <div className="space-y-2 py-6">
                  <Link to="/" className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-[#8c537a]/10 transition-colors ${currentPath === '/' ? 'text-white' : 'text-gray-300'}`} onClick={() => setMobileMenuOpen(false)}>
                    Home
                  </Link>
                  <Link to="/about" className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-[#8c537a]/10 transition-colors ${currentPath === '/about' ? 'text-white' : 'text-gray-300'}`} onClick={() => setMobileMenuOpen(false)}>
                    About
                  </Link>
                  <Link to="/services" className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-[#8c537a]/10 transition-colors ${currentPath === '/services' ? 'text-white' : 'text-gray-300'}`} onClick={() => setMobileMenuOpen(false)}>
                    Services
                  </Link>
                  <Link to="/icp-integration" className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-[#8c537a]/10 transition-colors ${currentPath === '/icp-integration' ? 'text-white' : 'text-gray-300'}`} onClick={() => setMobileMenuOpen(false)}>
                    ICP Integration
                  </Link>
                  <Link to="/blog" className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-[#8c537a]/10 transition-colors ${currentPath === '/blog' ? 'text-white' : 'text-gray-300'}`} onClick={() => setMobileMenuOpen(false)}>
                    Blog
                  </Link>
                  <Link to="/contact" className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-[#8c537a]/10 transition-colors ${currentPath === '/contact' ? 'text-white' : 'text-gray-300'}`} onClick={() => setMobileMenuOpen(false)}>
                    Contact
                  </Link>
                </div>
                <div className="py-6">
                  <Link to="/get-started" className="block w-full rounded-full bg-white text-[#211848] hover:bg-gray-100 px-4 py-3 text-center font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>)}
    </header>);
}
