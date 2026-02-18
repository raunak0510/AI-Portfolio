"use client";
import React from 'react'

const page = () => {
  return (
    <div className="bg-gray-950 text-gray-100">
      <>
        {/* Hero */}
        <div className="bg-gradient-to-b from-violet-800/20 via-gray-900 to-gray-950">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
            <div className="flex justify-center">
              <a
                className="group inline-flex items-center bg-violet-600/10 hover:bg-violet-600/20 border border-violet-600/30 p-1 ps-4 rounded-full shadow-md focus:outline-none focus:bg-violet-600/20"
                href="#"
              >
                <p className="me-2 text-violet-300 text-sm">
                  Upload • Generate • Impress
                </p>
              </a>
            </div>

            {/* Title */}
            <div className="max-w-3xl text-center mx-auto">
              <h1 className="block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-pink-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                From CV To Portfolio — Instantly With AI
              </h1>
            </div>

            {/* Subtitle */}
            <div className="max-w-3xl text-center mx-auto">
              <p className="text-lg text-gray-400">
                ProFolio AI turns your resume into a professional portfolio website in seconds —
                perfect for showcasing your skills, projects, and experience online.
              </p>
            </div>

            {/* Buttons */}
            <div className="text-center">
              <a
                className="inline-flex justify-center items-center gap-x-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-medium rounded-full focus:outline-none py-3 px-6 shadow-lg hover:shadow-violet-700/40 transition"
                href="/uploadcv"
              >
                Get started
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* End Hero */}
      </>

      <>
        {/* Features */}
        <div id="features" className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="relative p-6 md:p-16 bg-gray-900/50 rounded-3xl shadow-lg shadow-black/20">
            {/* Grid */}
            <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
              <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
                <h2 className="text-2xl font-bold sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                  AI that designs your portfolio for you
                </h2>
              <h4></h4>
                {/* Tab Navs */}
                <nav
                  className="grid gap-4 mt-5 md:mt-10"
                  aria-label="Tabs"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  {/* 1 */}
                  <button
                    type="button"
                    className="hs-tab-active:bg-gray-800 hs-tab-active:shadow-md text-start hover:bg-gray-800/70 focus:outline-none p-4 md:p-5 rounded-xl border border-gray-800"
                    id="tabs-with-card-item-1"
                    aria-selected="true"
                    data-hs-tab="#tabs-with-card-1"
                    aria-controls="tabs-with-card-1"
                    role="tab"
                  >
                    <span className="flex gap-x-6">
                      <svg
                        className="shrink-0 mt-2 size-6 text-blue-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4Z" />
                      </svg>
                      <span className="grow">
                        <span className="block text-lg font-semibold text-gray-100">
                          AI Resume Parsing
                        </span>
                        <span className="block mt-1 text-gray-400">
                          Automatically extracts your skills, experience, and projects from your CV.
                        </span>
                      </span>
                    </span>
                  </button>

                  {/* 2 */}
                  <button
                    type="button"
                    className="hs-tab-active:bg-gray-800 hs-tab-active:shadow-md text-start hover:bg-gray-800/70 focus:outline-none p-4 md:p-5 rounded-xl border border-gray-800"
                    id="tabs-with-card-item-2"
                    aria-selected="false"
                    data-hs-tab="#tabs-with-card-2"
                    aria-controls="tabs-with-card-2"
                    role="tab"
                  >
                    <span className="flex gap-x-6">
                      <svg
                        className="shrink-0 mt-2 size-6 text-violet-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 3v18h18" />
                        <path d="m19 9-5 5-4-4-3 3" />
                      </svg>
                      <span className="grow">
                        <span className="block text-lg font-semibold text-gray-100">
                          Smart Design Generation
                        </span>
                        <span className="block mt-1 text-gray-400">
                          AI creates a sleek, responsive, and modern portfolio layout automatically.
                        </span>
                      </span>
                    </span>
                  </button>

                  {/* 3 */}
                  <button
                    type="button"
                    className="hs-tab-active:bg-gray-800 hs-tab-active:shadow-md text-start hover:bg-gray-800/70 focus:outline-none p-4 md:p-5 rounded-xl border border-gray-800"
                    id="tabs-with-card-item-3"
                    aria-selected="false"
                    data-hs-tab="#tabs-with-card-3"
                    aria-controls="tabs-with-card-3"
                    role="tab"
                  >
                    <span className="flex gap-x-6">
                      <svg
                        className="shrink-0 mt-2 size-6 text-pink-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 12h16M4 6h16M4 18h7" />
                      </svg>
                      <span className="grow">
                        <span className="block text-lg font-semibold text-gray-100">
                          One-Click Hosting
                        </span>
                        <span className="block mt-1 text-gray-400">
                          Instantly deploy and share your portfolio — no coding required.
                        </span>
                      </span>
                    </span>
                  </button>
                </nav>
              </div>

              {/* Right Side Image */}
              <div className="lg:col-span-6">
                <div className="relative">
                  <div id="tabs-with-card-1" role="tabpanel">
                    <img
                      className="shadow-xl rounded-xl border border-gray-800"
                      src=""
                      alt="AI Portfolio Example"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* End Grid */}
          </div>
        </div>
        {/* End Features */}
        {/* How It Works Section */}
<div className="bg-gray-950 py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-[85rem] mx-auto text-center">
    {/* Section Heading */}
    <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
      How It Works
    </h2>
    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
      Turn your resume into a professional portfolio in three simple steps — no coding required.
    </p>

    {/* Steps Grid */}
    <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {/* Step 1 */}
      <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:bg-gray-900/70 transition">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-600/10 p-3 rounded-full border border-blue-600/30">
            <svg
              className="size-7 text-blue-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M4 4v16h16V4H4Zm4 8 4 4 4-4" />
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-100 mb-2">Upload Your CV</h3>
        <p className="text-gray-400 text-sm">
          Start by uploading your resume — in PDF or DOC format. ProFolio AI reads your details automatically.
        </p>
      </div>

      {/* Step 2 */}
      <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:bg-gray-900/70 transition">
        <div className="flex justify-center mb-4">
          <div className="bg-violet-600/10 p-3 rounded-full border border-violet-600/30">
            <svg
              className="size-7 text-violet-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M12 20h9M12 4h9M12 12h9M3 5h6v6H3zM3 13h6v6H3z" />
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-100 mb-2">AI Generates Portfolio</h3>
        <p className="text-gray-400 text-sm">
          Our AI instantly creates a personalized, responsive, and modern portfolio layout for you.
        </p>
      </div>

      {/* Step 3 */}
      <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:bg-gray-900/70 transition">
        <div className="flex justify-center mb-4">
          <div className="bg-pink-600/10 p-3 rounded-full border border-pink-600/30">
            <svg
              className="size-7 text-pink-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M4 4v16h16V4H4Zm4 8 4 4 4-4" />
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-100 mb-2">Launch & Share</h3>
        <p className="text-gray-400 text-sm">
          Host your portfolio with one click and share it anywhere — your professional site is live!
        </p>
      </div>
    </div>
  </div>
</div>
{/* End How It Works Section */}
{/* Generated Portfolio Previews Section */}
<div className="bg-gray-950 py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-[85rem] mx-auto text-center">
    {/* Section Heading */}
    <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">
      See What ProFolio AI Creates
    </h2>
    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
      Explore sample portfolios generated by AI — each uniquely designed based on uploaded resumes.
    </p>

    {/* Preview Cards Grid */}
    <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {/* Portfolio Card 1 */}
      <div className="group bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:bg-gray-900/70 transition shadow-md hover:shadow-violet-700/30">
        <img
          src="https://i.pinimg.com/1200x/be/7a/f7/be7af74fe093f0aefedbeb56be82cf17.jpg"
          alt="Portfolio Example 1"
          className="w-full h-60 object-contain border-b border-gray-800 bg-gray-950 p-2"
        />
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-100">Modern Developer Portfolio</h3>
          <p className="text-gray-400 text-sm mt-2">
            Clean and responsive layout — perfect for software engineers and web developers.
          </p>
        </div>
      </div>

      {/* Portfolio Card 2 */}
      <div className="group bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:bg-gray-900/70 transition shadow-md hover:shadow-violet-700/30">
        <img
          src="https://i.pinimg.com/736x/98/f9/86/98f9869b8a1a6d2449cc9b1b17c3353b.jpg"
          alt="Portfolio Example 2"
          className="w-full h-60 object-contain border-b border-gray-800 bg-gray-950 p-2"
        />
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-100">Creative Designer Portfolio</h3>
          <p className="text-gray-400 text-sm mt-2">
            A bold design that highlights your creativity, projects, and personal branding.
          </p>
        </div>
      </div>

      {/* Portfolio Card 3 */}
      <div className="group bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:bg-gray-900/70 transition shadow-md hover:shadow-violet-700/30">
        <img
          src="https://i.pinimg.com/474x/dd/b4/3f/ddb43fa5ff9e0ed6babb7c9597ce02b0.jpg"
          alt="Portfolio Example 3"
          className="w-full h-60 object-contain border-b border-gray-800 bg-gray-950 p-2"
        />
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-100">Data Scientist Portfolio</h3>
          <p className="text-gray-400 text-sm mt-2">
            Minimal and professional layout showcasing analytics projects and achievements.
          </p>
        </div>
      </div>
    </div>

    
    <div className="mt-16">
      <a
        href="/uploadcv"
        className="inline-flex items-center gap-x-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium py-3 px-6 rounded-full shadow-lg hover:shadow-violet-700/40 transition"
      >
        Create My Portfolio
        <svg
          className="size-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </a>
    </div>
  </div>
</div>

{/* Final CTA Section */}
<div className="bg-gradient-to-b from-gray-900 via-gray-950 to-black py-20 px-4 sm:px-6 lg:px-8 text-center">
  <div className="max-w-[85rem] mx-auto">

    <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
      Ready to Build Your AI Portfolio?
    </h2>
    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
      In just a few clicks, turn your resume into a stunning portfolio website — crafted by AI, made for you.
    </p>

    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
      <a
        href="/uploadcv"
        className="inline-flex items-center justify-center gap-x-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-violet-700/40 transition"
      >
        Get Started Free
        <svg
          className="size-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </a>

      <a
        href="#features"
        className="inline-flex items-center justify-center gap-x-3 border border-gray-700 text-gray-300 font-medium py-3 px-8 rounded-full hover:bg-gray-800 transition"
      >
        Learn More
      </a>
    </div>

  
    <div className="mt-14 flex justify-center">
      <div className="h-[1px] w-32 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 opacity-40"></div>
    </div>


    <p className="mt-6 text-gray-500 text-sm">
      Designed with 💜 by <span className="text-violet-400 font-semibold">ProFolio AI</span>
    </p>
  </div>
</div>
{/* CTA Section */}


      </>
    </div>
  );
};

export default page;
