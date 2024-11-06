import React from "react";

const Spinner: React.FC = () => {
  return (
    <div className='bg-emerald-400 min-h-screen flex items-center justify-center'>
      <div className=' w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-green-700'></div>
    </div>
  );
};

export default Spinner;
