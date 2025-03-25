import { useState } from 'react';
import Modal from './Modal';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  modalContent: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageSrc, modalContent }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Clickable Project Card */}
      <div
        onClick={handleOpenModal}
        role="button"
        tabIndex={0}
        className="relative !min-w-[260px] !max-w-[300px] w-full h-[350px] p-3 bg-[#FEFAE0] rounded-xl shadow-md flex flex-col cursor-pointer transition hover:shadow-lg focus:outline-none"
      >
        <div className="flex flex-col flex-grow">
          <h4 className="text-xl !font-bold">{title}</h4>
          <p className="text-sm text-gray-600">{description}</p>
          <img src={imageSrc} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <div className="p-4">{modalContent}</div>
        </Modal>
      )}
    </>
  );
};

export default ProjectCard;
