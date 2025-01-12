import { useState, useRef } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WorkoutItem = ({ topContent, revealedContent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="border-b bg-white p-2 w-full">
      <button
        onClick={toggle}
        className="w-full flex justify-between items-center py-4 px-6 text-left"
      >
        <span className="font-medium ">{topContent}</span>
        <FontAwesomeIcon icon={faChevronDown}
          className={`max-w-[20px] transform transition-transform ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>
      <div
        ref={contentRef}
        className="transition-all overflow-hidden"
        style={{
          height: isOpen ? contentRef.current.scrollHeight : 0,
        }}
      >
        <div className="px-6 pl-10 pb-4 text-gray-500">{revealedContent}</div>
      </div>
    </div>
  );
};

export default WorkoutItem;
