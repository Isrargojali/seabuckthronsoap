import { Leaf, Heart, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from "@/assets/sea-buckethorn.jpeg";

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Journey', href: '#journey' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Collection', href: '#collection' },
];

const supportLinks = [
  { label: 'Contact Us', href: '#contact' },
  { label: 'Shipping Info', href: '#' },
  { label: 'Returns & Refunds', href: '#' },
  { label: 'FAQ', href: '#' },
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="font-serif text-xl md:text-2xl font-semibold mb-1">
                Join Our <span className="text-primary">Natural</span> Community
              </h3>
              <p className="text-background/60 text-sm">
                Subscribe for exclusive offers and skincare tips
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2.5 rounded-xl bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 min-w-[250px] text-sm"
              />
              <Button variant="default" size="default" className="gap-2">
                <Mail className="w-4 h-4" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a
              href="#home"
              className="flex items-center gap-3 group transform transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              <img
                src={logo}
                alt="Seabuckthorn Soap Logo"
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="text-background/60 text-sm leading-relaxed mb-5">
              Crafting premium organic soaps with the ancient power of seabuckthorn berries.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/seabuckthorn786"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-4 h-4 fill-background" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.798.143v3.243l-1.922.001c-1.507 0-1.799.717-1.799 1.767v2.318h3.595l-.468 3.622h-3.127V24h6.127C23.403 24 24 23.403 24 22.676V1.325C24 .597 23.403 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/seabuckthornsoap/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-4 h-4 fill-background" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.262 2.242 1.324 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.324 3.608-.975.975-2.242 1.262-3.608 1.324-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.324-.975-.975-1.262-2.242-1.324-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.324-3.608.975-.975 2.242-1.262 3.608-1.324C8.416 2.175 8.796 2.163 12 2.163zm0 1.687c-3.17 0-3.548.012-4.796.07-1.04.048-1.602.218-1.975.363-.497.193-.854.425-1.227.798-.373.373-.605.73-.798 1.227-.145.373-.315.935-.363 1.975-.058 1.248-.07 1.626-.07 4.796s.012 3.548.07 4.796c.048 1.04.218 1.602.363 1.975.193.497.425.854.798 1.227.373.373.73.605 1.227.798.373.145.935.315 1.975.363 1.248.058 1.626.07 4.796.07s3.548-.012 4.796-.07c1.04-.048 1.602-.218 1.975-.363.497-.193.854-.425 1.227-.798.373-.373.605-.73.798-1.227.145-.373.315-.935.363-1.975.058-1.248.07-1.626.07-4.796s-.012-3.548-.07-4.796c-.048-1.04-.218-1.602-.363-1.975-.193-.497-.425-.854-.798-1.227-.373-.373-.73-.605-1.227-.798-.373-.145-.935-.315-1.975-.363-1.248-.058-1.626-.07-4.796-.07zM12 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 1-2.881 0 1.44 1.44 0 0 1 2.881 0z" />
                </svg>
              </a>
              <a
                href="https://wa.me/923432217919"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-4 h-4 fill-background" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-serif font-semibold text-base mb-4">Support</h4>
            <ul className="space-y-2.5">
              {supportLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-base mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-primary mt-0.5" />
                <a href="mailto:info@seabuckthorn.com" className="text-background/60 hover:text-primary transition-colors text-sm">
                  info@seabuckthorn.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-primary mt-0.5" />
                <a href="tel:+923432217919" className="text-background/60 hover:text-primary transition-colors text-sm">
                  +92 343 2217919
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-background/60 text-sm">
                  Gilgit, Pakistan
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-background/60 text-xs text-center md:text-left">
              © {currentYear} Seabuckthorn Soap Co. Made with{' '}
              <Heart className="w-3.5 h-3.5 inline-block " /> for your skin.
            </p>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
            >
              <ArrowUp className="w-4 h-4 text-primary-foreground" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
