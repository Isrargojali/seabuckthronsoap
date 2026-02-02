import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// CONTACT INFO
const contactInfo = [
  {
    icon: Mail,
    label: "Email Us - Product Questions & Support",
    value: "contact@seabuckthronsoap.com",
    link: "mailto:contact@seabuckthronsoap.com",
  },
  {
    icon: Phone,
    label: "Call Us - WhatsApp & Phone Support",
    value: "+92 355 4364192",
    link: "tel:+923554364192",
  },
  {
    icon: MapPin,
    label: "Visit Our Office",
    value: "Gilgit, Gilgit-Baltistan, Pakistan",
    link: null,
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Monday - Saturday: 9:00 AM - 5:00 PM (GMT+5)",
    link: null,
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "e421fea3-b007-4826-8f1b-991dc893a38a",
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: "New Contact Message – Seabuckthorn Soap",
          from_name: "Seabuckthorn Soap Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 md:py-24 bg-muted/30 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Contact <span className="text-primary">Seabuckthorn Soap</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <div className="bg-card p-6 rounded-2xl border">
              {isSubmitted ? (
                <div className="text-center py-10">
                  <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h4 className="text-lg font-semibold">Message Sent!</h4>
                  <p className="text-sm text-muted-foreground">
                    We will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Web3Forms Bot Protection */}
                  <input type="hidden" name="botcheck" />

                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full p-3 border rounded-xl"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full p-3 border rounded-xl"
                  />

                  <textarea
                    rows="4"
                    placeholder="Your Message"
                    required
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full p-3 border rounded-xl"
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gap-2"
                  >
                    {isSubmitting ? "Sending..." : <>
                      <Send className="w-4 h-4" /> Send Message
                    </>}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="space-y-4"
          >
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border"
                >
                  <Icon className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
