import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaWebAwesome, FaWebflow } from "react-icons/fa6";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/somnath-chakraborty-245497176/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/Somnath477" Icon={FiGithub} />
      <SingleContactSocial link="" Icon={FaWebAwesome} />
    </div>
  );
};

export default ContactSocial;
