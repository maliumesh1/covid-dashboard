import React from "react";

const Header = ({ countries, selected, onChange }) => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
      <input
        type='text'
        placeholder='Search Country'
        className='p-2 rounded shadow w-full md:w-1/3'
        value={selected}
        onChange={(e) => onChange(e.target.value.toUpperCase())}
      />
      <input
        type='text'
        disabled
        className='p-2 rounded shadow w-full md:w-1/3 bg-white'
        value='24-10-2022 ~ 08-12-2023'
      />
    </div>
  );
};

export default Header;
