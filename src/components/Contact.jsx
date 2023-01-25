import React from "react";

const Contact = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="bg-slate-500">
        <form className="flex flex-col">
          <label className="uppercase leading-5 font-nunito text-teal-900 font-bold">
            name
          </label>
          <input type="text" placeholder="Name" className="w-full rounded-md" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
