import PersonalPortfolioWebsite from './PersonalPortfolioWebsite';
import ProjectCard from './ProjectCard';
import TerraMetricsiOS from './TerraMetricsiOSApp';
import TerraMetricsIOTSystem from './TerraMetricsIOTSystem';

const ProjectSection = () => {
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
      title: 'TerraMetrics IOT System',
      description: 'A smart garden monitoring system that tracks soil moisture, temperature, and humidity.',
      imageSrc: '/arduino-4753005_1280.jpg',
      modalContent: <TerraMetricsIOTSystem />,
    },
    {
      title: 'TerraMetrics iOS Application',
      description: 'An iOS application that provides real-time data from the TerraMetrics IOT system.',
      imageSrc: '/TerraMetricsiOS.png',
      modalContent: <TerraMetricsiOS />,
    },
    {
      title: 'TerraMetrics Web Dashboard',
      description: 'A web dashboard for visualizing data from the TerraMetrics IOT system.',
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
