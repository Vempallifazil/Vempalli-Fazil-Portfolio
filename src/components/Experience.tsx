import { experience } from '../data/portfolio';
import { SectionHeading } from './fx';

export default function Experience() {
  const job = experience[0];
  const chapters = [
    ['System Engineer Trainee', job.points[1]],
    ['Browser automation', job.points[2]],
    ['Test execution', job.points[3]],
  ];
  return <section className="mt-20">
    <SectionHeading kicker="On location · Chennai" title="Inside Infosys" />
    <div className="gutter grid gap-8 lg:grid-cols-[4fr_5fr]">
      <figure className="relative overflow-hidden rounded-2xl">
        <img src={import.meta.env.BASE_URL + 'assets/journey.webp'} alt="Fazil at the Infosys Global Education Center" className="h-full max-h-[620px] min-h-80 w-full object-cover object-center" loading="lazy" />
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 pt-20">
          <span className="text-xs tracking-widest text-crimson-2">{job.period}</span>
          <h3 className="font-display text-5xl">Test Engineer</h3><p>Promoted from System Engineer Trainee</p>
        </figcaption>
      </figure>
      <div>{chapters.map(([title,text],i)=><article key={title} className="border-t border-white/15 py-6">
        <p className="text-xs font-semibold tracking-widest text-crimson-2">CHAPTER 0{i+1}</p>
        <h3 className="my-2 font-display text-4xl">{title}</h3><p className="max-w-xl leading-relaxed text-mist">{text}</p>
      </article>)}</div>
    </div>
  </section>;
}
