import { useEffect, useState } from 'react';

export const isStableCoin = (coin) => {
    let stables = [
      "usdt",
      "usdc",
      "busd",
      "dai",
      "ust",
      "mim",
      "tusd",
      "usdp",
      "usdn",
      "fei",
      "tribe",
      "gusd",
      "frax",
      "lusd",
      "husd",
      "ousd",
      "xsgd",
      "usdx",
      "eurs",
      "cusdc",
      "cdai",
      "usdd",
      "ibeur",
      "eurt",
      "flexusd",
      "alusd",
      "susd",
    ];
    if (stables.includes(coin)) {
      return false;
    } else {
      return true;
    }
  };
  
  export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  
    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowSize;
  };