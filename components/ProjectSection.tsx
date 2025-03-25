import PersonalPortfolioWebsite from './PersonalPortfolioWebsite';
import ProjectCard from './ProjectCard';
import TerraMetricsiOS from './TerraMetricsiOSApp';

const ProjectSection = () => {
  const Project2ModalContent = (
    <>
      <h2 className="text-2xl font-bold">Project 2 Details</h2>
      <p>This is more detailed information about Project 2.</p>
    </>
  );

  const Project3ModalContent = (
    <>
      <h2 className="text-2xl font-bold">Project 3 Details</h2>
      <p>This is more detailed information about Project 3.</p>
    </>
  );

  const projects = [
    {
        title: 'Personal Portfolio Website',
        description: 'A modern, interactive portfolio website built using React, Next.js, and Tailwind CSS.',
        imageSrc: '/PersonalPortfolioWebsite.png',
        modalContent: <PersonalPortfolioWebsite />,
    },
    {
      title: 'TerraMetrics iOS App',
      description: 'Description of project 1',
      imageSrc: '/path-to-image/project1.jpg',
      modalContent: <TerraMetricsiOS />,
    },
    {
      title: 'TerraMetrics IOT System',
      description: 'Description of project 2',
      imageSrc: '/path-to-image/project2.jpg',
      modalContent: Project2ModalContent,
    },
    {
      title: 'TerraMetrics Web Dashboard',
      description: 'Description of project 3',
      imageSrc: '/path-to-image/project3.jpg',
      modalContent: Project3ModalContent,
    },
    // Add more projects as needed
  ];

  return (
    <div className="relative w-full mx-auto">
      {/* Horizontal Scroll Container with initial left margin */}
      <div
        className="overflow-x-auto flex space-x-6 h-full scrollbar-hide scroll-smooth snap-x snap-mandatory max-w-full ml-8"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            modalContent={project.modalContent} // Passing the content as a component
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
