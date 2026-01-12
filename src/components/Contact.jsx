import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Clock, MessageCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactInfo = [
  { 
    icon: Mail, 
    label: 'Email Us', 
    value: 'info@seabuckthorn.com',
    link: 'mailto:info@seabuckthorn.com'
  },
  { 
    icon: Phone, 
    label: 'Call Us', 
    value: '+92 343 2217919',
    link: 'tel:+923432217919'
  },
  { 
    icon: MapPin, 
    label: 'Visit Us', 
    value: 'Lahore, Pakistan',
    link: null
  },
  { 
    icon: Clock, 
    label: 'Working Hours', 
    value: 'Mon - Sat: 9AM - 6PM',
    link: null
  },
];

function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-muted/30 relative overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <MessageCircle className="w-4 h-4" />
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            We'd Love to <span className="text-primary">Hear</span> From You
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our products? We're here to help!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/30">
              <h3 className="font-serif font-semibold text-xl text-foreground mb-6">
                Send us a Message
              </h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">Message Sent!</h4>
                  <p className="text-sm text-muted-foreground">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none text-sm"
                      rows={4}
                      placeholder="Tell us what you're looking for..."
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="default" 
                    size="lg" 
                    className="w-full gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-primary/5 to-golden-light/10 rounded-2xl p-6 md:p-8 border border-primary/10">
              <h3 className="font-serif font-semibold text-xl text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  const Wrapper = info.link ? 'a' : 'div';
                  return (
                    <Wrapper
                      key={index}
                      href={info.link || undefined}
                      className={`flex items-center gap-4 p-3.5 rounded-xl bg-card/80 border border-border/30 ${info.link ? 'hover:border-primary/20 hover:shadow-soft transition-all cursor-pointer' : ''}`}
                    >
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{info.label}</p>
                        <p className="text-sm font-medium text-foreground">{info.value}</p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-card rounded-2xl p-6 border border-border/30">
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex items-center gap-3">
                <a 
                  href="https://www.facebook.com/seabuckthorn786" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted/50 hover:bg-primary rounded-xl flex items-center justify-center group transition-all duration-200"
                >
                  <svg className="w-5 h-5 fill-muted-foreground group-hover:fill-primary-foreground transition-colors" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.798.143v3.243l-1.922.001c-1.507 0-1.799.717-1.799 1.767v2.318h3.595l-.468 3.622h-3.127V24h6.127C23.403 24 24 23.403 24 22.676V1.325C24 .597 23.403 0 22.675 0z" />
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/seabuckthornsoap/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted/50 hover:bg-primary rounded-xl flex items-center justify-center group transition-all duration-200"
                >
                  <svg className="w-5 h-5 fill-muted-foreground group-hover:fill-primary-foreground transition-colors" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.262 2.242 1.324 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.324 3.608-.975.975-2.242 1.262-3.608 1.324-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.324-.975-.975-1.262-2.242-1.324-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.324-3.608.975-.975 2.242-1.262 3.608-1.324C8.416 2.175 8.796 2.163 12 2.163zm0 1.687c-3.17 0-3.548.012-4.796.07-1.04.048-1.602.218-1.975.363-.497.193-.854.425-1.227.798-.373.373-.605.73-.798 1.227-.145.373-.315.935-.363 1.975-.058 1.248-.07 1.626-.07 4.796s.012 3.548.07 4.796c.048 1.04.218 1.602.363 1.975.193.497.425.854.798 1.227.373.373.73.605 1.227.798.373.145.935.315 1.975.363 1.248.058 1.626.07 4.796.07s3.548-.012 4.796-.07c1.04-.048 1.602-.218 1.975-.363.497-.193.854-.425 1.227-.798.373-.373.605-.73.798-1.227.145-.373.315-.935.363-1.975.058-1.248.07-1.626.07-4.796s-.012-3.548-.07-4.796c-.048-1.04-.218-1.602-.363-1.975-.193-.497-.425-.854-.798-1.227-.373-.373-.73-.605-1.227-.798-.373-.145-.935-.315-1.975-.363-1.248-.058-1.626-.07-4.796-.07zM12 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 1-2.881 0 1.44 1.44 0 0 1 2.881 0z"/>
                  </svg>
                </a>
                <a 
                  href="https://wa.me/923432217919" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted/50 hover:bg-primary rounded-xl flex items-center justify-center group transition-all duration-200"
                >
                  <svg className="w-5 h-5 fill-muted-foreground group-hover:fill-primary-foreground transition-colors" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
