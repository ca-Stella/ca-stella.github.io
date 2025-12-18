import { Section } from "../layout/Section";

export default function About() {
  return (
    <Section title="About me" className="bg-white px-12">
        <div className="space-y-6 text-lg text-gray-700 relative">
          <p>
            I’ve always been fascinated by how we think, make decisions, and
            experience the world. That curiosity first drew me to neuroscience
            and psychology, and now drives my motivation in computer science, where I get to experiment, build, and solve problems at the crossroads of mind, behaviour, and technology.
          </p>

          <p>
            For me, programming and analysis aren’t just technical skills. I see data and code as tools to ask questions, uncover patterns, and derive insights from numbers and observations. I enjoy connecting abstract ideas and observations into something tangible, useful, and understandable.
          </p>

          <p>
            I aspire to bring together logic and creativity to craft thoughtful solutions. By layering ideas and experimenting with different approaches from a variety of fields, I aim to turn complex challenges into something elegant, satisfying, and memorable — like a recipe refined over time.
          </p>
        </div>
    </Section>
  );
}
