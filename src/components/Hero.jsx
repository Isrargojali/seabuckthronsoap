import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Star, Shield, Leaf, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import soapHero from "@/assets/soap-hero.png";

const Hero = () => {
  const floatingIcons = [
    { icon: Shield, label: "Safe", delay: 0.8 },
    { icon: Leaf, label: "Natural", delay: 1.0 },
    { icon: Award, label: "Premium", delay: 1.2 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-background via-cream-warm/40 to-golden-light/20 pt-20 overflow-hidden"
    >
      {/* Subtle background shapes */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50 shadow-soft"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                99.99% Natural & Organic
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground"
            >
              Nature's{" "}
              <span className="text-primary">Golden Touch</span>
              <br />
              for Your Skin
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Experience the ancient power of Seabuckthorn berries in our
              handcrafted, organic soap bars. Transform your daily routine into
              a <span className="text-foreground font-medium">luxurious spa experience</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <Button
                variant="default"
                size="lg"
                className="gap-2"
                asChild
              >
                <a href="#collection">
                  Discover Collection
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start pt-2"
            >
              {/* Customer avatars */}
              <div className="flex items-center">
                <div className="flex -space-x-2.5">
                  {["SA", "MK", "AR", "JB"].map((initials, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/80 to-amber-glow border-2 border-background flex items-center justify-center text-xs font-semibold text-primary-foreground shadow-sm"
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div className="ml-3 text-left">
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-primary text-primary"
                      />
                    ))}
                    <span className="ml-1.5 text-sm font-semibold text-foreground">4.5</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">5000+</span> Happy Customers
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center justify-center order-1 lg:order-2"
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-amber-glow/15 to-transparent rounded-full blur-3xl scale-75" />
            
            {/* Floating badges */}
            {floatingIcons.map((item, index) => {
              const IconComponent = item.icon;
              const positions = [
                { top: "10%", left: "5%" },
                { top: "50%", right: "0%" },
                { bottom: "15%", left: "10%" },
              ];
              return (
                <motion.div
                  key={index}
                  className="absolute hidden md:flex items-center gap-2 bg-card/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-soft border border-border/30"
                  style={positions[index]}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: item.delay, duration: 0.4 }}
                >
                  <IconComponent className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium text-foreground">{item.label}</span>
                </motion.div>
              );
            })}
            
            {/* Main product image */}
            <motion.div 
              className="relative"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px]">
                <img
                  src={soapHero}
                  alt="Seabuckthorn Soap - Premium Organic Skincare"
                  className="w-full h-full object-contain drop-shadow-xl"
                />
              </div>
              
              {/* Bestseller badge */}
              {/* <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -top-2 -right-2 md:top-0 md:right-0"
              >
                <div className="bg-primary px-3 py-1.5 rounded-full shadow-soft">
                  <span className="text-xs font-semibold text-primary-foreground">⭐ Bestseller</span>
                </div>
              </motion.div> */}

              {/* Price tag */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -bottom-2 -left-2 md:bottom-4 md:-left-4 bg-card rounded-xl p-3 shadow-soft border border-border/30"
              >
                <p className="text-[10px] text-muted-foreground">Starting from</p>
                <p className="text-xl font-bold text-primary">PKR 350</p>
                <p className="text-[10px] text-accent font-medium">Free Shipping</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 80L60 70C120 60 240 40 360 35C480 30 600 40 720 45C840 50 960 50 1080 45C1200 40 1320 30 1380 25L1440 20V80H0Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
