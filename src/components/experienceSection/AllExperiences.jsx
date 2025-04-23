import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    company: "Mphasis",
    date: "2021 - 2024",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "Front-End Developer",
    company: "American International Group",
    date: "2022 - 2023",
    responsibilities: [
      "Analyzed requirements and developed user interfaces. ",
      "successful building and maintenance of multiple high-value applications.",
      "Actively participated in requirement analysis and UI development. ",
    ],
  },
  {
    job: "Medical Billing Developer",
    company: "Wyde Corporation",
    date: "2023 - 2024",
    responsibilities: [
      "Demonstrated proficiency in creating, configuring  and validating medical bills using Wynsure software.",
      "Effectively coordinated and collaborated with stakeholders to create and manage bills."
      
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
