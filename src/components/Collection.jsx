import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ShoppingBag, Heart, Star, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";

import soapImage1 from "@/assets/sea1.jpg";
import soapImage2 from "@/assets/sea2.jpg";
import soapImage3 from "@/assets/sea3.jpg";

const product = {
  id: 1,
  name: "Seabuckthorn Soap - Premium Cold-Pressed Organic Bar",
  shortDescription:
    "100% organic cold-pressed seabuckthorn soap. Handcrafted in small batches for visible skin transformation, deep hydration, and anti-aging benefits.",
  rating: 4.8,
  reviews: 373,
  images: [
    { src: soapImage1, alt: "Front view", angle: "Front View" },
    { src: soapImage3, alt: "Side view", angle: "Side Angle" },
    { src: soapImage2, alt: "Top view", angle: "Top View" },
  ],
  benefits: [
    "Deep hydration with 200+ omega fatty acids",
    "Anti-aging power with high vitamin C",
    "Safe for sensitive and eczema-prone skin",
    "100% organic & chemical-free",
    "Cold-pressed to preserve nutrients",
    "Eco-friendly & cruelty-free",
  ],
  keyFeatures: [
    "✓ Handcrafted in small batches",
    "✓ Dermatologist-tested & approved",
    "✓ Free shipping",
    "✓ 30-day transformation guarantee",
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Collection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <section
      id="collection"
      ref={sectionRef}
      className="py-14 sm:py-20 lg:py-28 bg-muted/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <ShoppingBag className="w-4 h-4" />
            Our Premium Collection
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold">
            <span className="text-primary">Seabuckthorn Soap</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Certified organic, cold-pressed soap trusted by thousands for real,
            visible results.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Main Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="relative aspect-square rounded-2xl overflow-hidden bg-card shadow-card"
            >
              <img
                src={product.images[activeImageIndex].src}
                alt={product.images[activeImageIndex].alt}
                className="w-full h-full object-cover"
              />

              {/* Like */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsLiked(!isLiked)}
                className={`absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur shadow-soft transition ${
                  isLiked
                    ? "bg-primary text-primary-foreground"
                    : "bg-white/90 hover:bg-primary hover:text-white"
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
              </motion.button>

              {/* Zoom */}
              <div className="absolute bottom-3 left-3 bg-white/90 px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-medium">
                <ZoomIn className="w-4 h-4" />
                View Angles
              </div>
            </motion.div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((img, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActiveImageIndex(i)}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition ${
                    activeImageIndex === i
                      ? "border-primary"
                      : "border-border/40"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.angle}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {[
                { v: "5K+", l: "Customers" },
                { v: "97%", l: "Satisfaction" },
                { v: "30", l: "Day Guarantee" },
                { v: "4.8★", l: "Rating" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="p-3 text-center rounded-xl bg-card border shadow-soft"
                >
                  <p className="text-lg font-bold text-primary">{item.v}</p>
                  <p className="text-xs text-muted-foreground">{item.l}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-serif font-bold">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
              <span className="text-sm font-medium">
                {product.rating} ({product.reviews})
              </span>
            </div>

            <p className="text-muted-foreground">
              {product.shortDescription}
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-2 bg-primary/5 p-4 rounded-xl">
              {product.keyFeatures.map((f, i) => (
                <p key={i} className="text-sm font-medium">
                  {f}
                </p>
              ))}
            </div>

            {/* Benefits */}
            <ul className="space-y-2">
              {product.benefits.map((b, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 6 }}
                  className="flex gap-3 p-3 bg-card rounded-lg border"
                >
                  <span className="text-primary font-bold">→</span>
                  <span className="text-sm text-muted-foreground">{b}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button size="lg" className="flex-1 gap-2">
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                View Details
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Collection;