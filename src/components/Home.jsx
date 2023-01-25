import Socials from "../utils/Socials";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <section className="grid grid-cols-2 md:flex flex-col  mx-30 gap-10 min-h-screen m-auto p-4">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          <img src="" alt="my profile" />
          <h1 className="font-nunito text-2xl  sm:flex sm:flex-row leading-10 text-gray-200 font-bold">
            Hello{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-tr from-pink-400 to-orange-400 font-extrabold tracking-widest p-4">
              There
            </span>
            , Am Tim
          </h1>
        </div>
        <div>
          <p className="font-nunito text-gray-200 text-[20px] mt-5 tracking-widest ">
            Am a Full-stack Mern Developer
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <article>
          <p className="text-gray-200 font-nunito font-semibold text-lg leading-8 p-8 ">
            Welcome to my portfolio! My name is Tim and I am a full-stack
            developer specializing in the MERN stack (MongoDB, Express.js,
            React.js, and Node.js). I have a passion for creating innovative and
            visually appealing web applications. With a strong background in
            both front-end and back-end development, I am able to bring ideas to
            life and create seamless user experiences. On my portfolio, you will
            find some of my recent projects that showcase my skills and
            abilities as a developer. From e-commerce websites to interactive
            web apps, I am confident in my ability to deliver high-quality and
            visually appealing projects. Feel free to take a look around and if
            you have any questions or would like to work together, don't
            hesitate to contact me.
          </p>
        </article>
      </div>
      <div className="col-span-2 w-full">
        <div>
          <h1 className="capitalize bg-clip-text text-transparent bg-gradient-to-tr from-pink-400 to-orange-400 text-3xl text-center">
            connect with me
          </h1>
        </div>
        <div>
          <ul>
            <li className="flex justify-center items-center m-4">
              {Socials.map((item, index) => {
                return (
                  <div>
                    <Link className="mx-10 p-10 mt-5 ">{item.icon}</Link>
                    {/* <h4>{item.name}</h4> */}
                  </div>
                );
              })}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;
