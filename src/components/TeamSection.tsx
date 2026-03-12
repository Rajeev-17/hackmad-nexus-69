import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const team = [
  { name: "Arjun Verma", role: "Founder & Lead", skills: "Full-Stack, AI/ML", avatar: "AV" },
  { name: "Sara Chen", role: "Tech Lead", skills: "React, Web3, Rust", avatar: "SC" },
  { name: "Raj Patel", role: "AI Research Head", skills: "Python, TensorFlow, LLMs", avatar: "RP" },
  { name: "Maya Singh", role: "Community Manager", skills: "DevRel, Events, Content", avatar: "MS" },
  { name: "Liam O'Brien", role: "Cloud Architect", skills: "AWS, Kubernetes, Go", avatar: "LO" },
  { name: "Zara Khan", role: "Design Lead", skills: "UI/UX, Figma, Motion", avatar: "ZK" },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-32 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-mono text-sm tracking-[0.2em] text-primary uppercase mb-4 block">
            // The Team
          </span>
          <h2 className="text-display text-4xl md:text-5xl lg:text-6xl">
            The <span className="gradient-text">Builders</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-8 card-lift group relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-primary/5 to-accent/5" />

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 text-2xl font-bold gradient-text">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-primary text-sm font-medium mt-1">{member.role}</p>
                <p className="text-muted-foreground text-sm mt-2 mb-4">{member.skills}</p>

                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Github className="w-4 h-4" />
                  </button>
                  <button className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
