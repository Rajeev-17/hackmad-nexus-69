import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CalendarDays, ArrowRight } from "lucide-react";

const upcomingEvents = [
  {
    title: "TechnovAte Hackathon 2026",
    date: "2026-04-15",
    description: "48-hour hackathon focused on AI solutions for sustainability.",
    tag: "Hackathon",
  },
  {
    title: "Web3 Dev Workshop",
    date: "2026-03-28",
    description: "Hands-on smart contract development with Solidity and Ethereum.",
    tag: "Workshop",
  },
  {
    title: "AI/ML Sprint",
    date: "2026-05-10",
    description: "Build and deploy machine learning models in a single weekend.",
    tag: "Sprint",
  },
];

const pastEvents = [
  { title: "Open Source Summit", date: "Jan 2026", description: "Community contributions to major open source projects." },
  { title: "Cloud Native Meetup", date: "Dec 2025", description: "Exploring Kubernetes, serverless, and edge computing." },
  { title: "AI Prompt Engineering", date: "Nov 2025", description: "Deep dive into LLM prompting and agent architectures." },
  { title: "Blockchain Bootcamp", date: "Oct 2025", description: "3-day intensive on blockchain fundamentals and DeFi." },
];

const Countdown = ({ targetDate }: { targetDate: string }) => {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const calc = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      setDays(Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24))));
    };
    calc();
    const interval = setInterval(calc, 60000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <span className="text-mono text-sm text-primary font-semibold">
      Starts in {days} Days
    </span>
  );
};

const EventsSection = () => {
  return (
    <section id="events" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-mono text-sm tracking-[0.2em] text-primary uppercase mb-4 block">
            // Events
          </span>
          <h2 className="text-display text-4xl md:text-5xl lg:text-6xl">
            What's <span className="gradient-text">Happening</span>
          </h2>
        </motion.div>

        {/* Upcoming */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <CalendarDays className="w-6 h-6 text-primary" />
            Upcoming Events
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 card-lift group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                <span className="inline-block text-mono text-xs px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
                  {event.tag}
                </span>
                <h4 className="text-lg font-semibold mb-2">{event.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
                <div className="flex items-center justify-between">
                  <Countdown targetDate={event.date} />
                  <button className="text-sm text-foreground flex items-center gap-1 group-hover:text-primary transition-colors">
                    Register <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Past */}
        <div>
          <h3 className="text-2xl font-semibold mb-8">Past Events</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pastEvents.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-xl p-5 hover:bg-secondary/40 transition-all duration-300"
              >
                <span className="text-mono text-xs text-muted-foreground">{event.date}</span>
                <h4 className="font-semibold mt-1 mb-1">{event.title}</h4>
                <p className="text-xs text-muted-foreground">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
