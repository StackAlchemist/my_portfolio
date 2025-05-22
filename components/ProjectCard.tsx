import { ArrowUpRight } from "lucide";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
  text,
  image,
  link,
}: {
  text: string;
  image: string;
  link: string;
}) => {
  return (
    <div className="group transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] border border-transparent hover:border-cyan-400 rounded-2xl bg-[#1a1a1a]">
      <div className="flex flex-col md:flex-row-reverse w-full max-w-6xl mx-auto items-center justify-between p-6 md:p-10 space-y-6 md:space-y-0 md:space-x-10">
        {/* Text Section */}
        <div className="flex-1 text-left">
          <h2 className="text-white text-3xl font-extrabold mb-4">{text}</h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odio
            non, saepe voluptatem itaque temporibus ducimus perspiciatis
            consectetur pariatur facere illum, in illo deleniti molestiae ea.
            Delectus nostrum, quae quas ab corrupti sit beatae cupiditate
            voluptas voluptatibus excepturi, reprehenderit praesentium illum
            molestias placeat nobis earum?
          </p>
        </div>

{/* Image Section */}
<div className="relative w-full h-[250px] md:h-[400px] rounded-lg overflow-hidden shadow-md">
  <Image
    src={image}
    alt="Project Image"
    fill
    className="object-cover transition-transform duration-300 group-hover:scale-105"
  />
  {/* Accent overlay on hover */}
  <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
</div>

      </div>

      {/* Button */}
      <div className="px-6 pb-6">
        <Link
          href={link}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-cyan-400 text-[#1a1a1a] hover:bg-cyan-300 transition-all duration-300 group/button"
        >
          View Project
          <Image src="/icons/arrow-up-right.svg" width={20} height={20} alt="Arrow Up Right" className="w-5 h-5 transition-transform group-hover/button:rotate-45" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
