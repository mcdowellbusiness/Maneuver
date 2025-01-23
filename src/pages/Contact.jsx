import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import Attribution from "@/components/Attribution";
import EarthCanvas from "@/components/canvas/Earth";
import { acknowledgement } from "@/constants";
import { slideIn } from "@/utils/motion";
import SectionWrapper from "@/layout/SectionWrapper";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch("https://formsubmit.co/ajax/magesh@purdue.edu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    }).then(
      () => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        setLoading(false);
        console.error(error);

        alert("Ahh, something went wrong. Please try again.");
      }
    );
  };

  return (
    <SectionWrapper headingText="Contact">
      <div className="w-4/5 mx-auto">
        <div
          className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
        >
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="flex-[0.75] p-8 rounded-2xl"
          >
            <p className="sm:text-[18px] text-[14px] text-white uppercase tracking-wider">
              Get in touch
            </p>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-8"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Submission at Spextra-NSF"
              />
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your web address?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  Your Message
                </span>
                <textarea
                  rows={7}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What you want to say?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
              </label>

              <button
                type="submit"
                className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-secondary font-bold shadow-md"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>

            <p className="mt-12">
              You can also reach out to us directly on the following contacts:{" "}
            </p>
            <p className="mt-3">
              <strong>Email:</strong>{" "}
              <a className="" href="mailto:mchandr@pnw.edu">
                magesh@purdue.edu
              </a>
            </p>
            <p className="mt-1">
              <strong>Phone:</strong>{" "}
              <a href="tel:219-670-8785">+1 (219) 989-3195</a>{" "}
            </p>
          </motion.div>

          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="xl:flex-1 h-[350px] md:h-[550px] xl:h-[700px]"
          >
            <EarthCanvas />
          </motion.div>
        </div>

        <Attribution items={acknowledgement.contact} />
      </div>
    </SectionWrapper>
  );
};

export default Contact;
