import projTasky from "../assets/images/proj-tasky.png";
import projCompiler from "../assets/images/proj-compiler.png";
import projWd from "../assets/images/proj-wd.png";
import projExpress from "../assets/images/proj-express.webp";

function Projects() {
    return (
        <section className="grid grid-rows-1 md:grid-cols-2 gap-6 px-4 pb-15 border-b border-gray-300 *:bg-gray-200/40 *:p-8 *:lg:py-12 lg:px-0 lg:w-7/10 2xl:w-3/5">
            <div
                className="space-y-3 rounded-xl cursor-pointer hover:bg-gray-200/70"
                onClick={() => window.open("https://tasky.atanu.dev", "_blank")}
            >
                <figure className="rounded-md space-y-4">
                    <img src={projTasky} alt="" className="rounded-md w-full h-full object-cover shadow-lg " />
                    <figcaption className="flex flex-col gap-y-1 text-gray-800">
                        <span className="text-lg font-semibold">Tasky</span>
                        <span className="text-gray-600">
                            Your deadlines delivered right into your inbox.
                        </span>
                    </figcaption>
                </figure>

                <p className="flex items-center gap-x-1 text-sm font-medium text-purple-600">
                    <span>Try Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 transition-transform group-hover:translate-x-2">
                        <path fillRule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
                    </svg>
                </p>
            </div>

            <div
                className="space-y-3 rounded-xl cursor-pointer hover:bg-gray-200/70" 
                onClick={() => window.open("https://compiler.atanu.dev", "_blank")}
            >
                <figure className="rounded-md space-y-4">
                    <img src={projCompiler} alt="" className="rounded-md w-full h-full object-cover shadow-lg shadow-gray-400"/>
                    <figcaption className="flex flex-col gap-y-1 text-gray-800">
                        <span className="text-lg font-semibold">Ace Compiler</span>
                        <span className="text-gray-600">
                            A blazing-fast platform for coders in a hurry.
                        </span>
                    </figcaption>
                </figure>

                <p className="flex items-center gap-x-1 text-sm font-medium text-purple-600">
                    <span>Try Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 transition-transform group-hover:translate-x-2">
                        <path fillRule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
                    </svg>
                </p>
            </div>

            <div
                className="space-y-3 rounded-xl cursor-pointer hover:bg-gray-200/70" 
                onClick={() => window.open("https://watchdog.atanu.dev/about", "_blank")}
            >
                <figure className="rounded-md space-y-4">
                    <img src={projWd} alt="" className="rounded-md w-full h-full object-cover shadow-lg shadow-gray-400/50"/>
                    <figcaption className="flex flex-col gap-y-1 text-gray-800">
                        <span className="text-lg font-semibold">Watchdog</span>
                        <span className="text-gray-600">
                            A real-time CPU health monitor based on WebSocket.
                        </span>
                    </figcaption>
                </figure>

                <p className="flex items-center gap-x-1 text-sm font-medium text-purple-600">
                    <span>Learn More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 transition-transform group-hover:translate-x-2">
                        <path fillRule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
                    </svg>
                </p>
            </div>

            <div
                className="space-y-3 rounded-xl cursor-pointer hover:bg-gray-200/70" 
                onClick={() => window.open("https://github.com/atanu5arkar/NodeJS-MVC", "_blank")}
            >
                <figure className="rounded-md space-y-4">
                    <img src={projExpress} alt="" className="rounded-md w-full h-full object-cover shadow-lg"/>
                    <figcaption className="flex flex-col gap-y-1 text-gray-800">
                        <span className="text-lg font-semibold">Node MVC</span>
                        <span className="text-gray-600">
                            A non-bloated routing system, modeled after Express.js.
                        </span>
                    </figcaption>
                </figure>

                <p className="flex items-center gap-x-1 text-sm font-medium text-purple-600">
                    <span>Source Code</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 transition-transform group-hover:translate-x-2">
                        <path fillRule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
                    </svg>
                </p>
            </div>
            
        </section>
    )
}

export default Projects;
