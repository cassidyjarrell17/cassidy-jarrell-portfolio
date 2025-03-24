import Link from "next/link";

interface ProjectCardProps {
    imageSrc: string;
    title: string;
    description: string;
    link: string;
}

export const ProjectCard = ({ imageSrc, title, description, link }: ProjectCardProps) => {
    return (
        <Link
            href={link}
            className="!no-underline block !h-[450px] p-6 max-w-xs mx-auto bg-[#FEFAE0] rounded-xl shadow-md" // Set the height here
        >
            <div className="flex flex-col justify-between h-full"> {/* Ensure content is distributed inside the card */}
                <div>
                    <h3 className="!text-[#A9B388]">{title}</h3>
                    <p className="!text-[#A9B388]/70">{description}</p>
                </div>
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-[200px] object-cover" // Set the image height here
                />
            </div>
        </Link>
    );
};
