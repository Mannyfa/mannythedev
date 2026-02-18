import { motion } from "framer-motion";

const experience = [
  {
    id: 1,
    role: "Senior Backend Engineer",
    company: "MAXUT CONSULTING",
    period: "2023 - Present",
    description: "Leading a team of 5 developers building the core design system. Migrated legacy codebase to Next.js, improving load times by 40%."
  },
  {
    id: 2,
    role: "FullStack Developer",
    company: "Finclusion Inc",
    period: "2021 - Present",
    description: "Implemented complex data visualization dashboards using D3.js and React. Collaborated with UX to refine user flows."
  }
];

export default function Experience() {
  return (
    <section className="container mx-auto px-6 py-20">
      <h2 className="text-4xl font-display font-bold mb-16 text-white">Experience</h2>

      <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">
        {experience.map((job, index) => (
          <motion.div 
            key={job.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.2 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-ice-500 ring-4 ring-ice-950" />
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-white">{job.role}</h3>
                <span className="text-sm font-mono text-ice-300 bg-ice-900/50 px-2 py-1 rounded border border-white/5">
                    {job.period}
                </span>
            </div>
            
            <p className="text-lg text-slate-400 mb-2">{job.company}</p>
            <p className="text-slate-500 leading-relaxed max-w-2xl">
                {job.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}