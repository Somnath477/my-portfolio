import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="chakrabortysumon1997@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 8250425989" Image={FiPhone} />
      <SingleInfo text="Kolkata, West Bengal" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
