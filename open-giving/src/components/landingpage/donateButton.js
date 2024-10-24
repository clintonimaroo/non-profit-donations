import React from 'react';
import { FaHeart } from 'react-icons/fa6';
import Loader from './Loader';

const DonateButton = ({
  onClick,
  children,
  otherClass,
  disabled = false,
  loading = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="button"
      className={`font-sans flex flex-row items-center justify-center font-medium text-[18px] leading-[16px] gap-3 p-[10px] border border-[#8A2BE2]  rounded-[5px] group ${
        otherClass ? otherClass : 'bg-[#8A2BE210] text-primary'
      }`}
    >
      {loading ? <Loader/> : children}
      <FaHeart  className="size-[13px] group-hover:opacity-100 opacity-100 md:opacity-50" />
    </button>
  );
};

export default DonateButton;
