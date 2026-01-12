import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Leaf, Droplets, Zap, Globe, Shield, Heart, Sun, Recycle, Award, Star } from 'lucide-react';

const primaryBenefits = [
  { 
    icon: Leaf, 
    title: '100% Organic', 
    desc: 'Certified organic ingredients with no harmful chemicals or artificial fragrances.',
    stat: '100%',
    statLabel: 'Natural'
  },
  { 
    icon: Droplets, 
    title: 'Deep Hydration', 
    desc: 'Natural oils penetrate deeply to moisturize and repair your skin barrier.',
    stat: '48hr',
    statLabel: 'Moisture'
  },
  { 
    icon: Zap, 
    title: 'Anti-Aging Power', 
    desc: 'Packed with antioxidants that fight free radicals and promote collagen.',
    stat: '10x',
    statLabel: 'Vitamin C'
  },
  { 
    icon: Globe, 
    title: 'Eco-Friendly', 
    desc: 'Sustainable sourcing and biodegradable packaging that protects our planet.',
    stat: 'Zero',
    statLabel: 'Plastic'
  },
];

const trustBadges = [
  { icon: Shield, label: 'Dermatologist Tested' },
  { icon: Heart, label: 'Cruelty Free' },
  { icon: Sun, label: 'Vitamin Rich' },
  { icon: Recycle, label: 'Zero Waste' },
];

const scientificStats = [
  { value: '200+', label: 'Omega Fatty Acids', icon: '🧬' },
  { value: '10x', label: 'More Vitamin C than Oranges', icon: '🍊' },
  { value: '190+', label: 'Bioactive Compounds', icon: '🔬' },
  { value: '100%', label: 'Natural Ingredients', icon: '🌿' },
];

function Benefits() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section 
      id="benefits" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-background relative overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            The Power of <span className="text-primary">Seabuckthorn</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover why thousands trust seabuckthorn for their daily skincare
          </p>
        </motion.div>

        {/* Primary Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {primaryBenefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
              >
                <div className="relative h-full bg-card rounded-2xl p-6 border border-border/30 hover:border-primary/20 hover:shadow-soft transition-all duration-200">
                  {/* Stat badge */}
                  <div className="absolute top-4 right-4 bg-primary/5 px-2.5 py-1 rounded-full border border-primary/10">
                    <span className="text-xs font-semibold text-primary">{benefit.stat}</span>
                    <span className="text-[10px] text-muted-foreground ml-1">{benefit.statLabel}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Badges Bar */}
        <motion.div 
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/30">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                  <span className="ml-2 font-semibold text-foreground">5.0</span>
                </div>
                <h3 className="font-serif font-semibold text-xl text-foreground mb-1">
                  Trusted by 50,000+ Customers
                </h3>
                <p className="text-sm text-muted-foreground">
                  Join the seabuckthorn skincare revolution
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
                {trustBadges.map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <div 
                      key={idx} 
                      className="flex items-center gap-2 px-4 py-2.5 bg-muted/50 rounded-full hover:bg-primary/5 transition-colors duration-200"
                    >
                      <IconComponent className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-foreground whitespace-nowrap">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scientific Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground">
              Backed by <span className="text-primary">Science</span>
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {scientificStats.map((stat, idx) => (
              <div 
                key={idx} 
                className="text-center p-5 rounded-xl bg-card border border-border/30 hover:border-primary/20 transition-all duration-200"
              >
                <span className="text-2xl mb-2 block">{stat.icon}</span>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Benefits;
