import Image from "next/image";

const FloatingCards = ({ text, image }: { text: string; image: string }) => {
  return (
    <div
      className="flex items-center gap-3 
      px-5 py-2 rounded-xl 
      bg-gray/30 backdrop-blur-md 
      border border-white/20 
      shadow-md hover:shadow-lg 
      transition-shadow duration-300 
      animate-subtle-glow 
      max-w-fit text-white z-50 h-[50px]"
    >
      <p className="text-sm md:text-base font-medium">{text}</p>
      <Image
        src={image}
        alt="Icon"
        width={28}
        height={24}
        className="object-contain"
      />
    </div>
  );
};

export default FloatingCards;
