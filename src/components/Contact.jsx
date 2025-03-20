import Navbar from "./Nav.jsx";
import Footer from "./Footer.jsx";

function Contact() {
    return (
        <>
            <Navbar />
            <section className="flex flex-col gap-y-6 py-12 px-4 border-b border-gray-200 lg:px-0 lg:w-9/20 2xl:w-2/5">
                <h1 className="font-semibold text-4xl pb-6 border-b border-gray-200">Contact</h1>
                <p>
                    If you'd like to get in touch, you can punch any of the following links. Please note that I'm always available for web sorcery.
                </p>

                <div className="grid grid-rows-1 md:grid-cols-2 gap-6 text-lg">
                    <a href="mailto:atanu_sarkar1@outlook.com">
                        <p className="font-semibold">Email</p>
                        <p className="text-base text-gray-600">atanu_sarkar1@outlook.com</p>
                    </a>
                    <a href="https://www.linkedin.com/in/atanu23/">
                        <p className="font-semibold">LinkedIn</p>
                        <p className="text-base text-gray-600">in/atanu23</p>
                    </a>
                    <a href="https://github.com/atanu5arkar">
                        <p className="font-semibold">GitHub</p>
                        <p className="text-base text-gray-600">git/atanu5arkar</p>
                    </a>
                    <a href="https://x.com/x_atanu">
                        <p className="font-semibold">Twitter</p>
                        <p className="text-base text-gray-600">@x_atanu</p>
                    </a>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Contact;