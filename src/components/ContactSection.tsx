import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Would integrate with backend
    alert("Thanks for reaching out! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-mono text-sm tracking-[0.2em] text-primary uppercase mb-4 block">
            // Get In Touch
          </span>
          <h2 className="text-display text-4xl md:text-5xl lg:text-6xl">
            Join <span className="gradient-text">TechnovAte</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 space-y-6"
          >
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-2 block">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-2 block">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-2 block">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                placeholder="Tell us about yourself..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              Send Message <Send className="w-4 h-4" />
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email Us</h4>
                <p className="text-muted-foreground">hello@technovate.dev</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Location</h4>
                <p className="text-muted-foreground">Global Developer Community</p>
              </div>
            </div>

            {/* Social links */}
            <div className="glass rounded-2xl p-6">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {["GitHub", "Twitter", "Discord", "LinkedIn"].map((social) => (
                  <button
                    key={social}
                    className="px-4 py-2 rounded-lg bg-secondary text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300"
                  >
                    {social}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
