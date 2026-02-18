import React from "react";

const About = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen w-full scroll-smooth">
      {/* About Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 space-y-8">
        <h1 className="text-5xl font-bold text-indigo-400 text-center">
          About ProFolio AI
        </h1>
        <p className="max-w-3xl text-center text-gray-300 leading-relaxed text-lg">
          <span className="text-indigo-400 font-semibold">ProFolio AI</span> is
          your intelligent assistant for creating professional portfolios from
          your CV — within seconds. Our AI-driven tool helps you design,
          personalize, and host your online presence effortlessly, without any
          coding skills or paid subscriptions.
        </p>

        {/* Our Mission */}
        <div className="max-w-4xl text-center mt-10">
          <h2 className="text-3xl font-semibold mb-4 text-indigo-300">
            🌟 Our Mission
          </h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            We aim to make digital identity building simple, free, and beautiful
            for everyone. From students to freelancers, ProFolio AI empowers
            users to showcase their achievements with style and confidence.
          </p>
        </div>

        {/* Our Vision */}
        <div className="max-w-4xl text-center mt-10">
          <h2 className="text-3xl font-semibold mb-4 text-indigo-300">
            🔮 Our Vision
          </h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            We envision a world where every individual owns a digital portfolio
            that speaks louder than a résumé. Our platform focuses on
            simplicity, AI precision, and a sleek design — making portfolio
            creation as easy as uploading a file.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-5xl text-center mt-10">
          <h2 className="text-3xl font-semibold mb-4 text-indigo-300">
            💡 Why Choose ProFolio AI?
          </h2>
          <ul className="text-gray-400 leading-relaxed text-lg space-y-3">
            <li>✔️ 100% Free — No hidden charges or premium restrictions.</li>
            <li>✔️ AI-generated design templates for instant portfolios.</li>
            <li>✔️ Simple & clean UI with dark mode by default.</li>
            <li>✔️ Portfolio + Source Code — everything for the user.</li>
            <li>✔️ Hosting & domain suggestions for instant publishing.</li>
          </ul>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-10 text-center animate-bounce">
          <a href="#contact" className="text-indigo-400 text-lg">
            ↓ Scroll to Contact
          </a>
        </div> */}
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex flex-col justify-center items-center bg-gray-950 px-6 py-20"
      >
        <h2 className="text-4xl font-bold mb-8 text-indigo-400">
          Contact Us
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mb-10 text-lg">
          Have questions, suggestions, or want to collaborate?  
          We’d love to hear from you! Fill out the form below and we’ll get back to you soon.
        </p>

        <form className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 transition duration-300 text-white font-semibold py-2 px-4 rounded-md"
          >
            Send Message
          </button>
        </form>

        <footer className="mt-12 text-gray-500 text-sm">
          © {new Date().getFullYear()} ProFolio AI — Created with ❤️ by Raunak Singh
        </footer>
      </section>
    </div>
  );
};

export default About;
