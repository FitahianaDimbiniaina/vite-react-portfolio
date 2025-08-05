import React from 'react';
import './CvButton.css';

const CVButtons = () => {
  return (
    <div className="flex gap-4 mt-6">
      <a
        href="/CV.pdf"
        download
        className="wiggle-hover px-4 py-2 rounded-lg bg-purple-600 text-white transition-all"
      >
        Get My Resume
      </a>
    </div>
  );
};

export default CVButtons;
