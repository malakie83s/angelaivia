import { useState } from 'react';
// Using minimal lucide imports - icons defined inline
const Menu = ({ size = 32, strokeWidth = 1.5, className = '' }: { size?: number; strokeWidth?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const X = ({ size = 32, strokeWidth = 1.5, className = '' }: { size?: number; strokeWidth?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  const menuItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'Technical Expertise', id: 'technical-expertise' },
    { label: 'Case Studies', id: 'case-studies' },
    { label: 'About Us', id: 'about' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Clients', id: 'clients' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground">
      <div className="container mx-auto pl-1 pr-4 lg:pl-2 lg:pr-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
            >
              {/* Logo Icon - Using the uploaded JPG */}
              <img 
                src="https://c.animaapp.com/mj1tk1o0j9U2sS/img/angelaivia-logo-only-%28black-horizontal%29_2.jpg" 
                alt="AngelAivia Logo" 
                className="h-10 w-auto"
              />
              
              {/* Company Name */}
              <span className="text-h3 font-headline font-semibold leading-none">
                <span className="text-gray-200">Angel</span>
                <span style={{ color: '#42BBE9' }}>Aivia</span>
              </span>
            </button>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-8">
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.id}>
                    <NavigationMenuLink asChild>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="text-primary-foreground hover:text-gray-200 transition-colors font-normal text-body cursor-pointer"
                      >
                        {item.label}
                      </button>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-tertiary text-tertiary-foreground hover:bg-[hsl(194,83%,48%)] font-normal"
            >
              Contact Us
            </Button>
          </nav>

          <button
            className="lg:hidden text-primary-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={32} strokeWidth={1.5} /> : <Menu size={32} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-secondary text-secondary-foreground">
          <nav className="container mx-auto px-8 py-8">
            <NavigationMenu orientation="vertical" className="w-full">
              <NavigationMenuList className="flex flex-col gap-6 w-full">
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.id} className="w-full">
                    <NavigationMenuLink asChild>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="text-secondary-foreground hover:text-gray-200 transition-colors font-normal text-body w-full text-left py-3 cursor-pointer"
                      >
                        {item.label}
                      </button>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem className="w-full pt-4">
                  <Button
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-tertiary text-tertiary-foreground hover:bg-[hsl(194,83%,48%)] font-normal"
                  >
                    Contact Us
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
      )}
    </header>
  );
}
