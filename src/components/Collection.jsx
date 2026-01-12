import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShoppingBag, Heart, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import soapCitrus from "@/assets/soap-citrus.jpg";
import soapHerbal from "@/assets/soap-herbal.jpg";
import soapMagic from "@/assets/soap-magic.jpg";

const soaps = [
  { 
    id: 1, 
    title: "Seabuckthorn Classic", 
    img: soapMagic, 
    desc: "Our signature blend with pure seabuckthorn oil for radiant, nourished skin.",
    price: "PKR 350",
    originalPrice: "PKR 450",
    rating: 5,
    reviews: 128,
    badge: "Bestseller"
  },
  { 
    id: 2, 
    title: "Citrus Glow", 
    img: soapCitrus, 
    desc: "Energizing citrus blend with orange and lemon extracts for morning freshness.",
    price: "PKR 320",
    originalPrice: "PKR 400",
    rating: 5,
    reviews: 89,
    badge: "Popular"
  },
  { 
    id: 3, 
    title: "Herbal Calm", 
    img: soapHerbal, 
    desc: "Soothing lavender and chamomile botanical mix for relaxation and healing.",
    price: "PKR 380",
    originalPrice: "PKR 480",
    rating: 5,
    reviews: 156,
    badge: "New"
  }
];

function Collection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [likedIds, setLikedIds] = useState([]);

  const toggleLike = (id) => {
    setLikedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <section 
      id="collection" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-muted/30 relative overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <ShoppingBag className="w-4 h-4" />
            Our Collection
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Handcrafted <span className="text-primary">Luxury</span> Soaps
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Each bar is lovingly crafted with premium organic ingredients
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {soaps.map((soap, index) => (
            <motion.article 
              key={soap.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
            >
              <div className="bg-card rounded-2xl overflow-hidden border border-border/30 hover:border-primary/20 hover:shadow-card transition-all duration-300">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-cream-warm to-golden-light/20">
                  <img 
                    src={soap.img} 
                    alt={soap.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Badge */}
                  <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2.5 py-1 rounded-full text-xs font-semibold shadow-soft">
                    {soap.badge}
                  </div>

                  {/* Like Button */}
                  <button
                    className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center shadow-soft transition-all duration-200 ${
                      likedIds.includes(soap.id) 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-card/90 text-foreground hover:bg-primary hover:text-primary-foreground'
                    }`}
                    onClick={() => toggleLike(soap.id)}
                  >
                    <Heart className={`w-4 h-4 ${likedIds.includes(soap.id) ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(soap.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      ({soap.reviews})
                    </span>
                  </div>

                  <h3 className="font-serif font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                    {soap.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {soap.desc}
                  </p>

                  {/* Price & Action */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-primary">{soap.price}</span>
                      <span className="text-xs text-muted-foreground line-through">{soap.originalPrice}</span>
                    </div>
                    <Button variant="default" size="sm" className="gap-1.5">
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div 
          className="text-center mt-10 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          <Button variant="outline" size="lg" className="gap-2">
            <Sparkles className="w-4 h-4" />
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default Collection;
