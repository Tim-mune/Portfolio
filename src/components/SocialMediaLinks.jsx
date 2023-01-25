
const SocialMediaLinks = () => {
  return (
    <div className="">
      <h1 className="text-white text-center font-sans capitalize text-3xl leading-5 tracking-widest text-transparent bg-clip-text overflow-clip bg-gradient-to-tr from-fuchsia-500 to-purple-400">
        Social Media
      </h1>
      <div className="flex flex-row">
        <ul>
          {Socials.map((item, index) => {
            const { icon, name } = item;
            return (
              <div key={index}>
                <img src={icon} alt={name} />
                <h5 className="text-white">{name}</h5>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
