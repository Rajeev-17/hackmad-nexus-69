import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "All" | "Hackathons" | "Workshops" | "Meetups" | "Projects";

const galleryItems = [
  { title: "Hackathon 2025 Finals", category: "Hackathons" as const, color: "from-primary/30 to-accent/30" },
  { title: "AI Workshop Series", category: "Workshops" as const, color: "from-neon-blue/30 to-primary/30" },
  { title: "Monthly Dev Meetup", category: "Meetups" as const, color: "from-accent/30 to-neon-blue/30" },
  { title: "Open Source Project Demo", category: "Projects" as const, color: "from-primary/20 to-accent/20" },
  { title: "Web3 Buildathon", category: "Hackathons" as const, color: "from-accent/30 to-primary/30" },
  { title: "Cloud Computing Lab", category: "Workshops" as const, color: "from-neon-blue/20 to-accent/30" },
  { title: "Community Networking Night", category: "Meetups" as const, color: "from-primary/30 to-neon-blue/20" },
  { title: "ML Pipeline Builder", category: "Projects" as const, color: "from-accent/20 to-primary/30" },
];

const categories: Category[] = ["All", "Hackathons", "Workshops", "Meetups", "Projects"];

const GallerySection = () => {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? galleryItems : galleryItems.filter((item) => item.category === active);

  return (
    <section id="gallery" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-mono text-sm tracking-[0.2em] text-primary uppercase mb-4 block">
            // Gallery
          </span>
          <h2 className="text-display text-4xl md:text-5xl lg:text-6xl">
            Our <span className="gradient-text">Moments</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} bg-secondary`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-mono text-xs text-muted-foreground/50">{item.category}</span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-5">
                  <div>
                    <p className="text-xs text-primary text-mono mb-1">{item.category}</p>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
