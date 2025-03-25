"use client";
import { motion } from "framer-motion";
import ProjectsSection from "../components/ProjectSection";

export default function Page() {
  return (
    <div className="bg-white text-black min-h-screen">
      <section
          style={{
            backgroundColor: "#5F6F52",
            backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.4))",
          }}
        className="h-screen flex flex-col justify-center items-center text-center p-8"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold !text-[#FEFAE0]"
        >
          Hello I&apos;m Cassidy!
        </motion.h1>
        <p className="mt-4 text-lg text-white/80 max-w-lg" style={{ color: "#FEFAE0" }}>
          I&apos;m a Software Engineer passionate about building high-performance applications and creative projects.
        </p>
        <a
          href="/CassidyJarrellResume2025.pdf" 
          download="Cassidy_Jarrell_Resume.pdf" // This will specify the name of the downloaded file
          className="!no-underline px-6 py-2 bg-[#A9B388] !text-[#FEFAE0] rounded-lg font-semibold text-lg transition-all hover:bg-[#B99470] focus:outline-none"
        >
          Download My Resume
        </a>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
          className="mt-8 text-white"
        >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="#B99470">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
        </motion.div>
      </section>
      
      {/* About me */}
      <section
        id="aboutme" className="h-screen flex flex-col justify-start items-start p-8"
        style={{
          backgroundColor: "#5F6F52",
          backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.4))",
        }}
      >
        <div className="mt-[44px]"></div>
        <h2 className="text-3xl !text-[#FEFAE0] font-bold mt-8 ml-8 !mb-4">About me.</h2>
        <h5 className="!text-md !text-[#5F6F52] mt-8 ml-8 !mb-8">
          Hi, I&apos;m Cassidy. I am a software engineer with over 6 years of experience developing web applications, internal tools, and automation systems.
          At Fujifilm Dimatix, I led the development of systems that optimize manufacturing processes, improve efficiency, and reduce human processing errors.

        </h5> 
        <h5 className="!text-md !text-[#5F6F52] mt-8 ml-8 !mb-8">
        I am always curious to learn about the latest technologies in the software engineering field. I thrive in collaborative environments, and I am always eager to hear different perspectives. This mindset helps me stay innovative and approach problems with creative solutions.
        </h5>
        <h5 className="!text-md !text-[#5F6F52] mt-8 ml-8">
          Outside of work, I enjoy sewing, gardening, and playing guitar. I have three cats named Calypso, Miso, and Comet. I also love to watch and attend sporting events. 
          Find me at a Bay FC or Valkyries game this season.
        </h5>
      </section>

      {/* Projects Preview */}
      <section 
      style={{
        backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.4))", 
      }}
      id="projects" className="h-screen flex flex-col justify-start items-start p-8 bg-[#A9B388]">
        <div className="mt-[44px]"></div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mt-8 ml-8 !text-[#FEFAE0] inline-block"
        >
          Take a look at what I&apos;m working on.
        </motion.h2>
        <h4 className="text-2xl !text-[#B99470] mt-8 ml-8 !mb-8">Click to see more.</h4>
        <ProjectsSection/>
      </section>

      {/* Contact Preview */}
      <section id="contact" className="h-screen flex flex-col justify-start items-start p-8 bg-[#FEFAE0]">
        <div className="mt-[44px]"></div>
        <h2 className="text-3xl !text-[#5F6F52] font-bold mt-8 ml-8 !mb-4">Contact.</h2>
        <h4 className="text-2xl !text-[#5F6F52]/85 ml-8">I’d love to hear from you! Send me an email or connect with me on LinkedIn.</h4>

        <div className="space-y-4 ml-8">
          <h3 className="text-xl !text-[#5F6F52] font-semibold">Email:</h3>
          <p className="text-lg text-[#5F6F52]">
            <a href="mailto:cassidyjarrell17@gmail.com" className="hover:underline">cassidyjarrell17@gmail.com</a>
          </p>
        </div>

        <div className="space-y-4 ml-8">
          <h3 className="text-xl !text-[#5F6F52] font-semibold">Linkedin:</h3>
          <p className="text-lg text-[#5F6F52]">
            <a href="https://www.linkedin.com/in/cassidyjarrell/" className="hover:underline">https://www.linkedin.com/in/cassidyjarrell/</a>
          </p>
        </div>
      </section>
    </div>
  );
}
