const Heading = ({ text }: { text: string }) => {
    return (
      <div className="mb-8">
        <h1 className="relative inline-block text-4xl font-extrabold text-white">
          {text}
          <span className="absolute left-24 -bottom-2 w-1/2 h-1 bg-cyan-400 rounde"></span>
        </h1>
      </div>
    );
  };
  
  export default Heading;
  