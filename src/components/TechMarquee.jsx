const techs = [
  "React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion", 
  "Node.js", "PostgreSQL", "Docker", "Figma", "AWS"
];

export default function TechMarquee() {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] py-10">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {techs.map((tech, index) => (
          <li key={index} className="text-2xl font-display font-bold text-slate-500/50 uppercase tracking-widest whitespace-nowrap">
            {tech}
          </li>
        ))}
      </ul>
      {/* Duplicate list for seamless looping */}
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {techs.map((tech, index) => (
          <li key={index} className="text-2xl font-display font-bold text-slate-500/50 uppercase tracking-widest whitespace-nowrap">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}