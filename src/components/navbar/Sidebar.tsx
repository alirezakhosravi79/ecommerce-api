import { Link } from "react-router-dom";

interface SidebarProps {
  show: boolean;
  handleClose: () => void;
}

function Sidebar({ show, handleClose }: SidebarProps) {
  return (
    <aside
      className={`fixed top-0 left-0 w-full h-screen bg-white z-50 transform transition-transform duration-300 ease-in-out ${
        show ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Close Button */}
      <button
        type="button"
        aria-label="Close menu"
        className="absolute top-4 right-4 p-2"
        onClick={handleClose}
      >
        <svg className="h-8 w-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Menu Items */}
      <ul className="flex flex-col justify-center items-center h-full gap-6 text-xl font-semibold text-orange-400">
        <li><Link to='/' onClick={handleClose}>Home</Link></li>
        <li><Link to='/' onClick={handleClose}>Contact Us</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
