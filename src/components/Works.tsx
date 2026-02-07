import { MdOutlineArrowOutward } from "react-icons/md";
import { workItems } from "../data/index";

export default function Works() {
    return (
        <section id="works" className="relative flex flex-col w-full h-full bg-black py-20">
            <h3 className="text-xl text-white z-50 container pb-5">
                Proyectos
            </h3>
            {workItems.map((item) => (
                <div key={item.id} className="flex md:flex-row flex-col justify-evenly container py-10 md:py-20 border-b-2 group gap-6 md:gap-0">
                    <div className="flex flex-col p-4 md:p-6 gap-2 justify-between w-full md:w-1/2">
                        <div className="mb-6 md:mb-12">
                            <h2 className="text-2xl md:text-4xl font-semibold pb-3">{item.title}</h2>
                            <p className="pb-6 md:pb-12 text-sm md:text-base">{item.description}</p>
                            <div className="grid">
                                <div className="flex gap-4 md:gap-10 pb-4 border-b mb-4 w-full text-sm md:text-base">
                                    <span className="w-[50%]">Category:</span>
                                    <span className="w-[50%]">{item.category}</span>
                                </div>
                                <div className="flex gap-4 md:gap-10 pb-4 border-b mb-4 w-full text-sm md:text-base">
                                    <span className="w-[50%]">Tag:</span>
                                    <span className="w-[50%]">{item.tag}</span>
                                </div>
                            </div>
                        </div>
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-end gap-4 group/button">
                            <span className="text-lg md:text-xl">Ver en YouTube</span> <MdOutlineArrowOutward className="text-2xl md:text-3xl group-hover/button:rotate-45 group-hover/button:translate-x-5 duration-500"/>
                        </a>
                    </div>
                    <div className="flex flex-col w-full md:w-1/2">
                        <div className="w-full aspect-video overflow-hidden rounded-3xl relative bg-gradient-to-br from-gray-900 to-black shadow-2xl border border-white/10">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none" />
                            <iframe
                                src={`https://www.youtube.com/embed/${item.videoId}?modestbranding=1&rel=0&showinfo=0`}
                                title={item.title}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
