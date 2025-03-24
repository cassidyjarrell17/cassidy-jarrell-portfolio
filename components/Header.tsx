import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-10 flex justify-between items-center px-8 bg-[#5F6F52]/90 backdrop-blur-lg shadow-md h-[44px]">
      {/* Logo on the left */}
      <Link href="/" className="!text-[#FEFAE0] !font-bold !text-xl !no-underline !whitespace-nowrap">
        Cassidy Jarrell
      </Link>

      {/* Centered Navigation */}
      <nav className="flex justify-center flex-grow">
        <ul className="flex list-none m-0 p-0 space-x-6 text-white">
          <li>
            <Link
              href="/"
              className="!no-underline !text-[#FEFAE0] !opacity-70 !font-normal transition-colors duration-300 ease-in-out hover:!opacity-100"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#aboutme"
              className="!no-underline !text-[#FEFAE0] !opacity-70 !font-normal transition-colors duration-300 ease-in-out hover:!opacity-100"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="!no-underline !text-[#FEFAE0] !opacity-70 !font-normal transition-colors duration-300 ease-in-out hover:!opacity-100"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="!no-underline !text-[#FEFAE0] !opacity-70 !font-normal transition-colors duration-300 ease-in-out hover:!opacity-100"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Spacer to keep everything balanced */}
      <div className="w-[120px]"></div>
    </header>
  );
};

export default Header;
