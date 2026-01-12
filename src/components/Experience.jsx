import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Leaf, Droplets, Palette, Sparkles, Check, X, Timer } from 'lucide-react';

const steps = [
  { 
    icon: Leaf, 
    title: 'Wild Harvest', 
    desc: 'Hand-picked from pristine mountain regions where seabuckthorn thrives.',
    number: '01'
  },
  { 
    icon: Droplets, 
    title: 'Cold-Press Extraction', 
    desc: 'Gentle extraction preserves all vital nutrients and healing properties.',
    number: '02'
  },
  { 
    icon: Palette, 
    title: 'Artisan Crafting', 
    desc: 'Each bar is lovingly handcrafted using traditional methods.',
    number: '03'
  },
  { 
    icon: Sparkles, 
    title: 'Your Transformation', 
    desc: 'Experience radiant, nourished skin as nature works its magic.',
    number: '04'
  },
];

const beforeItems = [
  { text: 'Dry, dull skin', icon: '😔' },
  { text: 'Visible signs of aging', icon: '😟' },
  { text: 'Lack of natural glow', icon: '😐' },
  { text: 'Rough texture', icon: '🙁' },
];

const afterItems = [
  { text: 'Deeply moisturized', icon: '💧' },
  { text: 'Youthful radiance', icon: '✨' },
  { text: 'Natural healthy glow', icon: '🌟' },
  { text: 'Silky smooth texture', icon: '💛' },
];

function Experience() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section 
      id="journey" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-muted/30 relative overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Leaf className="w-4 h-4" />
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            The Seabuckthorn <span className="text-primary">Journey</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            From wild mountain berries to your daily skincare ritual
          </p>
        </motion.div>

        {/* Journey Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div 
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
              >
                <div className="relative bg-card rounded-2xl p-6 border border-border/30 h-full hover:border-primary/20 hover:shadow-soft transition-all duration-200">
                  {/* Step number */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary text-primary-foreground rounded-xl flex items-center justify-center font-bold text-sm shadow-soft">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Before & After Comparison */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
              See The <span className="text-primary">Difference</span>
            </h3>
            <p className="text-muted-foreground">
              Real results after just 30 days
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Before Card */}
            <div className="bg-muted/50 rounded-2xl p-6 border border-border/30">
              <div className="w-full h-1 bg-muted-foreground/20 rounded-full mb-6" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 bg-muted-foreground/10 rounded-xl flex items-center justify-center">
                  <X className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-foreground">Before</h4>
                  <p className="text-xs text-muted-foreground">Common issues</p>
                </div>
              </div>
              <ul className="space-y-3">
                {beforeItems.map((item, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-center gap-3 text-muted-foreground text-sm p-2.5 rounded-lg bg-background/50"
                  >
                    <span className="text-base">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Center - Transformation */}
            <div className="flex flex-col items-center justify-center py-8">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-amber-glow rounded-full flex items-center justify-center shadow-soft">
                  <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-2">
                <Timer className="w-4 h-4 text-primary" />
                <span className="font-semibold text-foreground">30 Days</span>
              </div>
              <div className="px-5 py-2 bg-primary/10 text-primary rounded-full font-semibold text-sm">
                ✨ Transformation
              </div>
            </div>

            {/* After Card */}
            <div className="bg-gradient-to-br from-primary/5 to-golden-light/20 rounded-2xl p-6 border border-primary/10">
              <div className="w-full h-1 bg-gradient-to-r from-primary to-amber-glow rounded-full mb-6" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-foreground">After 30 Days</h4>
                  <p className="text-xs text-primary font-medium">Visible results</p>
                </div>
              </div>
              <ul className="space-y-3">
                {afterItems.map((item, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-center gap-3 text-foreground text-sm p-2.5 rounded-lg bg-card/60 border border-primary/5"
                  >
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="font-medium">{item.text}</span>
                    <span className="ml-auto text-base">{item.icon}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
