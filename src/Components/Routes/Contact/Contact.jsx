import { useState } from "react";
export function Contact() {
  return (
    <>
      <div className="w-full h-[85vh]">
        <section className=" bg-white h-full p-4 lg:p-8 lg:px-12 font-mono w-full overflow-y-auto">
          <h1 className="text-3xl font-black mt-2 ml-4 flex gap-4 items-center">
            Contacto
            <box-icon name="user"></box-icon>
          </h1>
          <p className="text-lg mt-2 ml-2 font-mono">
            Puedes contactarme por los siguientes, medios:
          </p>
          <div className="my-16 flex justify-center flex-wrap gap-8">
            <ContactCard
              text={"Github"}
              imgcss={"h-[50%] pt-8"}
              icon={"https://i.postimg.cc/3JcqZ6Z8/pngegg-15.png"}
              link={"https://github.com/TheSebalex"}
            />
            <ContactCard
              text={"LinkedIn"}
              imgcss={"h-[50%] pt-8"}
              icon={"https://i.postimg.cc/CxcZRGCf/pngegg-11.png"}
              link={"https://www.linkedin.com/in/sebastian-lea%C3%B1ez-386b88275/"}
            />
            <ContactCard
              text={"Gmail"}
              imgcss={"h-[50%] pt-10"}
              icon={"https://i.postimg.cc/tgXFnRVY/pngegg-16.png"}
              link={"https://forms.gle/3SDjo6FZcD28Dzt88"}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export function ContactCard({ icon, css, imgcss, link, text }) {
  return (
    <>
      <div
        className={`${
          css && css
        } drop-shadow-md min-w-[180px] min-h-[220px] max-h-[300px] max-w-[250px] w-[15vw] flex flex-col rounded-xl border-[1px] overflow-hidden h-[20vw] border-zinc-200 bg-gradient-to-tr from-gray-50 to-slate-300 relative`}
      >
        <img src={icon && icon} className={`mx-auto ${imgcss && imgcss}`} />
        <p className="absolute bottom-[20%] left-0 right-0 text-center text-lg">
          {text && text}
        </p>
        <div className="absolute bottom-[10%] text-center left-0 right-0">
          <a href={link} target="_blank">
            <button className="bg-blueActive px-2 text-white rounded-lg">
              Contactar!
            </button>
          </a>
        </div>
        <div className="h-2 absolute bottom-0 bg-blueActive left-0 right-0"></div>
      </div>
    </>
  );
}
