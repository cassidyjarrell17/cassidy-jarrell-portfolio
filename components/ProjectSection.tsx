import { ProjectCard } from "./ProjectCard";

const ProjectsSection = () => {
    const projects = [
        {
            title: 'TerraMetrics IoT System',
            description: 'An Arduino-based IoT sensor system for tracking environmental data.',
            imageUrl: '/file.svg',
            link:'/projects/terrametrics/iot'
        },
        {
            title: 'TerraMetrics iOS App',
            description: 'A SwiftUI app for monitoring plant health in real-time.',
            imageUrl: '/file.svg',
            link:'/projects/terrametrics/ios'
        },
        {
            title: 'TerraMetrics Web Dashboard',
            description: 'A Next.js dashboard displaying real-time data from plant sensors.',
            imageUrl: '/file.svg',
            link:'/projects/terrametrics/web'
        },
    ];

    return (
        <div className="relative w-full h-[450px] max-w-5xl mx-auto">

            {/* Scrollable Projects Container */}
            <div 
                className="overflow-x-auto flex space-x-6 h-full scrollbar-hide scroll-smooth snap-x snap-mandatory w-full"
            >
                {projects.map((project, index) => (
                    <div key={index} className="snap-start h-full flex-shrink-0 w-[300px]">
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            imageSrc={project.imageUrl}
                            link={project.link}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectsSection;
