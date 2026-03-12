import { motion } from "framer-motion";
import { Code2, Zap, Users, Layers } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Coding Sessions",
    description: "Weekly hands-on sessions exploring cutting-edge technologies, algorithms, and development practices.",
  },
  {
    icon: Zap,
    title: "Hackathons",
    description: "Intense 24-48 hour sprints building innovative solutions to real-world problems with your team.",
  },
  {
    icon: Layers,
    title: "Project Building",
    description: "Collaborative open-source projects spanning AI, Web3, cloud infrastructure, and emerging tech.",
  },
  {
    icon: Users,
    title: "Developer Networking",
    description: "Connect with industry professionals, mentors, and fellow developers building the future.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-mono text-sm tracking-[0.2em] text-primary uppercase mb-4 block">
            // What We Do
          </span>
          <h2 className="text-display text-4xl md:text-5xl lg:text-6xl">
            Pushing <span className="gradient-text">Boundaries</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-8 md:p-10 card-lift group relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
