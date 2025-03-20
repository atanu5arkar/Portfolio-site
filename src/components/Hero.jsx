import { Link } from "react-router";

import Navbar from "./Nav.jsx";
import Projects from "./Projects.jsx";
import Footer from "./Footer.jsx";

function Hero() {

    return (
        <>
            <Navbar />
            <section className="flex flex-col gap-y-6 py-15 px-4 border-b border-gray-300 lg:px-0 lg:w-9/20 2xl:w-2/5">
                <h1 className="font-semibold text-4xl">Ciao, I'm Atanu.</h1>

                <p className="text-lg">
                    Am a CS engineer specialized in web software development.
                    MERN is my weapon of choice.
                    Building robust web apps is what I do.
                    FYI, I'm a graduate of&nbsp;
                    <a href="https://cs.code.in/" target="_blank" className="text-blue-600">cs.code.in</a>,
                    which means web witchcraft is my X factor.
                </p>

                <Link
                    to="/contact"
                    className="font-[JetBrains_Mono] text-xs font-medium self-start px-10 py-2.5 rounded-full bg-black text-white flex gap-x-2 items-center hover:bg-black/90 group"
                >
                    <span>Contact Me</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 transition-transform group-hover:translate-x-2">
                        <path fillRule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
                    </svg>

                </Link>
            </section>

            <div className=" px-4 py-15 space-y-4 lg:px-0 lg:w-9/20 2xl:w-2/5">
                <h2 className="font-semibold text-2xl">Personal Projects</h2>
                <p>
                    Below is a selection of projects that I've built from scratch.
                </p>
            </div>
            <Projects />
            <Footer />
        </>
    );
}

export default Hero;
