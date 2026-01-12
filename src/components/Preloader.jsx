import React from 'react';

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <img
        src="https://wp.dynamiclayers.net/industrus/wp-content/themes/industrus/assets/img/preloader.gif"
        alt="Loading..."
        className="w-24 h-auto animate-pulse"
      />
    </div>
  );
};

export default Preloader;
