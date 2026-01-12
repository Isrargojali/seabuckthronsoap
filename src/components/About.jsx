import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Heart, Globe, Award, CheckCircle2 } from "lucide-react";
import aboutImage from "@/assets/about-seabuckthorn.jpg";

const stats = [
  { value: "100+", label: "Years of Tradition", icon: "" },
  { value: "99%", label: "Organic Ingredients", icon: "" },
  { value: "5K+", label: "Happy Customers", icon: "" },
  { value: "Zero", label: "Harmful Chemicals", icon: "" },
];

const features = [
  {
    icon: Sparkles,
    title: "Ancient Wisdom",
    description: "Seabuckthorn has been treasured for over 1,000 years in Asia and Europe for its healing properties.",
  },
  {
    icon: Heart,
    title: "Cold-Process Crafted",
    description: "Each bar is handcrafted in small batches to preserve essential nutrients and antioxidants.",
  },
  {
    icon: Globe,
    title: "Eco-Friendly",
    description: "Ethically sourced ingredients with 100% biodegradable packaging.",
  },
];

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 md:py-24 bg-background overflow-hidden relative"
    >
      {/* Subtle background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Our Story
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Crafted with <span className="text-primary">Ancient Wisdom</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            The power of Seabuckthorn—nature's golden treasure for radiant, healthy skin
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={aboutImage}
                alt="Fresh seabuckthorn berries"
                className="w-full h-[350px] md:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
            </div>

            {/* Certification badge */}
            <motion.div 
              className="absolute -bottom-4 -right-4 md:bottom-4 md:right-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              <div className="bg-card rounded-xl p-4 shadow-card border border-border/30">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-primary flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Certified Organic</p>
                    <p className="text-xs text-muted-foreground">99.9% Natural</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Since badge */}
            <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-full shadow-soft">
              <span className="text-xs font-semibold">Since 2020</span>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                At <span className="font-semibold text-primary">Seabuckthorn Soap Co.</span>, 
                we harness the natural benefits of the powerful Seabuckthorn berry—a superfruit 
                valued for its healing, nourishing, and skin-rejuvenating properties.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Each organic soap bar is carefully handcrafted in small batches using the 
                traditional cold-process method, ensuring the berries' essential nutrients 
                remain intact.
              </p>

              <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm text-foreground font-medium">
                  Join <span className="text-primary">50,00+</span> customers who transformed their skincare
                </p>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="space-y-3">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/30 hover:border-primary/20 hover:shadow-soft transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-semibold text-foreground mb-0.5">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-5 md:p-6 rounded-xl bg-card border border-border/30 hover:border-primary/20 hover:shadow-soft transition-all duration-200"
            >
              <span className="text-2xl mb-2 block">{stat.icon}</span>
              <p className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
