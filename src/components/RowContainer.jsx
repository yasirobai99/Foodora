import React from "react";
import {MdShoppingBasket} from "react-icons/md";
import { motion } from "framer-motion";

const RowContainer = ({ flag }) => {
  return (
    <div 
    className={`w-full my-12 ${ flag ? "overflow-x-scroll" : "overflow-x-hidden"
    }`}
    >
        <div className="w-300 md:w-340 h-auto bg-cardOverlay p-2 rounded-lg my-12  backdrop-blur-lg hover:drop-shadow-lg">
<div className="w-full flex items-center justify-between">
<motion.img
whileTap={{scale: 1.2}}
src="https://b.zmtcdn.com/data/pictures/chains/7/2801557/28c886002730b0931d75c6cdddeabdad.png?output-format=webp&fit=around|300:273&crop=300:273;*,*" alt="" 
className="w-40 -mt-8 drop-shadow-2xl"
/>
<motion.div
whileTap={{scale: 0.75}}
className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
>
    <MdShoppingBasket className="text-white" />
</motion.div>
</div>
<div className="w-full flex flex-col gap-4 items-end justify-end">
<p className="text-textColor font-semibold text-base md:text-lg">
    Chocolate & Vanilla
    </p>
    <p className="mt-1 text-sm text-gray-500">45 Calories</p>
    <div className="flex items-center gap-8">
        <p className="text-lg text-headingColor font-semibold">
            <span className="text-sm text-red-500">$</span>5.25
        </p>
    </div>
</div>
        </div>
      </div>
  );
};

export default RowContainer;
