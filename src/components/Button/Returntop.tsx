// eslint-disable-next-line import/order
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const ReturnTopButton = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollWindow);
    return () => {
      window.removeEventListener('scroll', scrollWindow);
    };
  }, []);

  const scrollWindow = () => {
    const top = 100; //ボタンを表示させたい位置
    let scroll = 0;
    scroll = window.scrollY;
    if (top <= scroll) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  };
  const normalStyle = {
    opacity: 0,
    transition: '0.5s',
    pointerEvents: 'none',
  };
  const activeStyle = {
    opacity: 1,
    transition: '0.5s',
  };

  const style = isButtonActive ? activeStyle : normalStyle;

  return (
    <div className=" hidden fixed items-center mx-auto lg:flex  lg:bottom-32">
      <button
        style={style}
        onClick={returnTop}
        className="text-black   hover:text-cyan-800 active:text-gray-600  transition duration-75 hover:scale-125"
      >
        <Image width="100" height="70" src="/images/rin2.png" alt="" />
        <p className="font-semibold">TOP</p>
      </button>
    </div>
  );
};

export default ReturnTopButton;
