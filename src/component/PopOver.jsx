import { useState } from "react";

const PopOver = ({ trigger, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="popover-container">
      <div className="popover-trigger" onClick={togglePopover}>
        {trigger}
      </div>
      {isOpen && <div className="popover-content">{content}</div>}
    </div>
  );
};

export default PopOver;
