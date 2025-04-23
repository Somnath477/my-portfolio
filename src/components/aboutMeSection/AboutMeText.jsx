import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      Result-driven professional with expertise in programming languages including JavaScript, React JS, OOPS Concept, HTML, CSS and Python. Skilled in writing and configuring bug-free, readable codes based on design specifications and guidelines. A proven problem-solver with strong ownership skills. Experienced in unit testing all scenarios end to end before delivering to QA. A supportive, innovative, and enthusiastic team player dedicated to streamlining processes and efficiently resolving project issues. Self-motivated, agile, diligent, outgoing, and proficient in multitasking and excellent performance under pressure.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
