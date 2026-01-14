import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

// ✅ OPTIMIZED CONTENT - TESTIMONIALS WITH SPECIFIC BENEFITS & SKIN CONCERNS
const testimonials = [
  { 
    name: "Sarah Ali", 
    avatar: "SA", 
    role: "Verified Buyer",
    location: "Lahore",
    stars: 5, 
    text: "I struggled with dry, dull skin for years. After using Seabuckthorn Classic for just 2 weeks, my skin feels softer, deeply moisturized, and has the most amazing natural glow. This soap has become my daily essential!",
    date: "2 weeks ago"
  },
  { 
    name: "Mustafa Khan", 
    avatar: "MK", 
    role: "Verified Buyer",
    location: "Karachi",
    stars: 5, 
    text: "As someone with sensitive skin, I'm cautious about new products. But after just one week with the Citrus Glow soap, my skin looked visibly brighter and healthier. The vitamin C boost is exactly what I needed. Absolutely refreshing!",
    date: "1 month ago"
  },
  { 
    name: "Aliya Rahman", 
    avatar: "AR", 
    role: "Verified Buyer",
    location: "Islamabad",
    stars: 5, 
    text: "Finally found an organic soap that actually nourishes without harsh chemicals! My entire family loves Seabuckthorn Classic—it's gentle on sensitive skin, deeply hydrating, and delivers visible anti-aging results in 30 days.",
    date: "3 weeks ago"
  },
  { 
    name: "Hassan Malik", 
    avatar: "HM", 
    role: "Verified Buyer",
    location: "Rawalpindi",
    stars: 5, 
    text: "I was skeptical about organic soaps, but this cold-pressed seabuckthorn soap exceeded expectations. My chronic dry skin issues completely disappeared within 3 weeks. The difference is genuinely visible and my skin feels so healthy now.",
    date: "1 week ago"
  },
  { 
    name: "Fatima Ahmed", 
    avatar: "FA", 
    role: "Verified Buyer",
    location: "Gilgit",
    stars: 5, 
    text: "The Herbal Calm variant is absolutely perfect for my eczema-prone, irritated skin. Zero inflammation, no reaction—just pure nourishment and healing. I've recommended it to everyone with sensitive skin issues. It genuinely works!",
    date: "2 months ago"
  },
];

function Testimonials() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section 
      id="testimonials"
      ref={sectionRef}
      className="py-16 md:py-24 bg-background relative overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - ✅ OPTIMIZED */}
        <motion.div 
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <MessageCircle className="w-4 h-4" />
            Customer Love & Proven Results
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Real Transformations from <span className="text-primary">Real Customers</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            <span className="font-semibold text-primary">5,000+ verified reviews • 97% satisfaction • 4.5★ average rating</span> • Read how our customers transformed their skin with cold-pressed seabuckthorn
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {getVisibleTestimonials().map((t, idx) => (
                <motion.div 
                  key={`${t.name}-${currentIndex}-${idx}`}
                  className="bg-card rounded-2xl p-6 border border-border/30 relative overflow-hidden hover:border-primary/20 hover:shadow-soft transition-all duration-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                >
                  {/* Quote icon */}
                  <div className="absolute top-4 right-4 text-primary/10">
                    <Quote className="w-10 h-10" />
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-0.5 mb-4">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Text - ✅ OPTIMIZED */}
                  <p className="text-foreground leading-relaxed mb-6 text-sm">
                    "{t.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-gradient-to-br from-primary to-amber-glow rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">{t.name}</div>
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium">{t.role}</span> • <span className="text-primary font-medium">{t.location}</span> • <span>{t.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-card border border-border/30 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(idx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex 
                      ? 'bg-primary w-6' 
                      : 'bg-border w-2 hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-card border border-border/30 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Trust Stats - ✅ OPTIMIZED */}
        <motion.div 
          className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          {[
            { value: "5K+", label: "Verified Happy Customers" },
            { value: "97%", label: "Customer Satisfaction Rate" },
            { value: "4.5★", label: "Average Rating (5000+ Reviews)" },
            { value: "10+", label: "Pakistan Cities Shipped" },
          ].map((stat, idx) => (
            <div 
              key={idx}
              className="text-center p-4 rounded-xl bg-card/50 border border-border/20"
            >
              <div className="text-2xl font-bold text-primary mb-0.5">{stat.value}</div>
              <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;