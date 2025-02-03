"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import Image from "next/image";

interface ValentineCardProps {
  personName: string;
}

interface YesButtonPosition {
  top: number;
  left: number;
}

export default function ValentineCard({ personName }: ValentineCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [yesButtons, setYesButtons] = useState<YesButtonPosition[]>([]);

  const gifs = ["/clingy-love-1.gif", "/clingy-love-2.gif", "/clingy-love-3.gif", "/clingy-love-4.gif"];

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    const newButton = {
      top: Math.random() * 70, // Percentage of container height
      left: Math.random() * 70, // Percentage of container width
    };
    setYesButtons([...yesButtons, newButton]);
  };

  return (
    <div className="relative min-w-[300px] max-w-[60%] w-[700px] h-[400px]">
      {!isOpen && (
        <div
          className="content-center absolute inset-0 bg-white rounded-lg shadow-lg p-8 cursor-pointer transform transition-transform bg-[url(/valentine-card-bg.jpg)] bg-cover bg-center hover:scale-105"
          onClick={() => setIsOpen(true)}>
          <Heart className="text-red-500 w-24 h-24 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-[40px]">For {personName}</h2>
        </div>
      )}

      {isOpen && !yesPressed && (
        <div className="fade-in-up absolute inset-0 bg-white rounded-lg shadow-lg p-8 text-center bg-[url(/valentine-inner-bg.jpg)] bg-cover bg-center pt-[60px]">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Will you be my Valentine, {personName}?</h2>
          <div className="relative flex items-center justify-center gap-4 w-full h-48 mt-[20px]">
            <button
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded"
              onClick={() => setYesPressed(true)}>
              YES
            </button>
            <button
              className="bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded"
              onClick={handleNoClick}>
              {noCount === 0 ? "NO" : noCount === 1 ? "PLEASE!" : "PRETTY PLEASE!"}
            </button>

            {yesButtons.map((pos, index) => (
              <button
                key={index}
                className="absolute bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded"
                style={{ top: `${pos.top}%`, left: `${pos.left}%` }}
                onClick={() => setYesPressed(true)}>
                YES
              </button>
            ))}
          </div>
        </div>
      )}

      {yesPressed && (
        <div className="fade-in-up absolute inset-0 bg-white rounded-lg shadow-lg p-8 flex items-center justify-center flex-col text-center">
          <h2 className="text-2xl font-bold mb-[40px] text-gray-800">Yay! Happy Valentine's Day, {personName}!</h2>
          <div className="w-[240px] p-[10px] bg-pink-300 -rotate-[0.27rad] mt-[10px] rounded-lg">
            <Image
              src={gifs[Math.floor(Math.random() * gifs.length)]}
              alt="Cute Valentine's GIF"
              width={230}
              height={230}
              className="mx-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
