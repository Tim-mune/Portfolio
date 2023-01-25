const About = () => {
  return (
    <section className=" grid grid-cols-4 justify-between">
      <div className="col-span-4 flex flex-row justify-center items-center">
        <h1 className="text-gray-200 leading-6 p-2 tracking-widest font-nunito font-bold">
          About Me
        </h1>
      </div>
      <div className="flex flex-row items-center justify-center">
        <h1 className="text-gray-200 text-2xl">Background</h1>
      </div>
      <div className="flex flex-row items-center justify-center">
        <h1 className="text-gray-200 text-2xl">Experience</h1>
      </div>
      <div className="flex flex-row items-center justify-center">
        <h1 className="text-gray-200 text-2xl ">Skills</h1>
      </div>
    </section>
  );
};

export default About;
