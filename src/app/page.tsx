import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="max-w-5xl m-auto bg-white/90 backdrop-blur-md rounded shadow-lg p-6 relative"
      id="main"
    >
      <header className="text-sm flex gap-6 flex-col md:flex-row">
        <div className="flex-[2_1_0%]">
          <h1 className="text-6xl text-sky-600">Levi Deang</h1>
          <p className="pt-4 max-w-lg">
            Passionate front-end software engineer committed to delivering
            promised results and remaining true to a unique artistic vision.
          </p>
        </div>
        <nav className="flex-1 flex flex-col justify-center">
          <Link href="mailto:arron.levi1@gmail.com">arron.levi1@gmail.com</Link>
          <Link href="tel:+639230225111">+63 923 022 5111</Link>
          <Link target="_blank" href="https://github.com/levi-ren">
            github.com/levi-ren
          </Link>
          <Link target="_blank" href="https://www.levideang.dev/">
            levideang.dev
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/levi-deang/">
            linkedin.com/in/levi-deang
          </Link>
        </nav>
      </header>
      <section className="pt-6 text-zinc-500 flex gap-10 flex-col md:flex-row">
        <article className="flex-[2_1_0%]">
          <b className="text-sky-600">EXPERIENCE</b>
          <ol className="space-y-4 mb-4">
            <li className="space-y-1">
              <b className="inline-block text-black">MDI Novare</b>
              {" — "}
              <em className="inline-block text-black">
                Senior Software Developer
              </em>
              <time className="text-sm block">January 2022 - PRESENT</time>
              <p>Lead front-end developer</p>
              <ul className="list-disc pl-8 text-justify">
                <li>
                  Deliver high-quality production code for a number of clients
                  including Jollibee Foods Corporation, and Bayad Center.
                </li>
                <li>
                  Worked alongside project owners and provided development and
                  technical solutions to fulfill business requirements.
                </li>
                <li>
                  Worked closely with other developers and other team members to
                  locate and fix issues.
                </li>
                <li>
                  Lead front-end development and transformed business
                  requirements into reality.
                </li>
              </ul>
            </li>

            <li className="space-y-1">
              <b className="inline-block text-black">Yoonet</b>
              {" — "}
              <em className="inline-block text-black">Software Developer</em>
              <time className="text-sm block">April 2020 - July 2021</time>
              <p>Team lead and Angular (2) developer.</p>
              <ul className="list-disc pl-8 text-justify">
                <li>
                  Front-end lead and developed web-application for an Australian
                  client.
                </li>
                <li>
                  Ensured team members abide by the rules and regulations set by
                  the company and the client.
                </li>
                <li>
                  Translated client&apos;s existing desktop app to a web-app
                  using Angular.
                </li>
                <li>
                  Created, maintained, and integrated new features to the
                  web-app.
                </li>
              </ul>
            </li>

            <li className="space-y-1">
              <b className="inline-block text-black">Quantum Crowd</b>
              {" — "}
              <em className="inline-block text-black">
                Associate Software Developer
              </em>
              <time className="text-sm block">August 2019 - March 2020</time>
              <p>Web 3 and Front-end developer trainee.</p>
              <ul className="list-disc pl-8 text-justify">
                <li>
                  Learned basics of front-end development ie. HTML, CSS,
                  JavaScript.
                </li>
                <li>
                  Learned basics of back-end development ie. API, status codes,
                  HTTP verbs, etc.
                </li>
                <li>Learned front-end to back-end integrations.</li>
              </ul>
            </li>
          </ol>

          <b className="text-sky-600">PROJECTS</b>
          <ul className="space-y-4 mt-2">
            <li className="space-y-2">
              <div>
                <b className="inline-block text-black">Portfolio</b>
                <p className="text-sm">Showcase</p>
              </div>
              <p className="">
                Comprehensive representation of my professional and creative
                work. Created with Next JS and Tailwind.
              </p>
            </li>
            <li className="space-y-2">
              <div>
                <b className="inline-block text-black">Parcel</b>
                <p className="text-sm">E-commerce</p>
              </div>
              <p className="">
                A rich and responsive e-commerce platform with a variety of
                products to choose from. Fullstack application built from
                NextJS, MongoDB, and Tailwind.
              </p>
            </li>
            <li className="space-y-2">
              <div>
                <b className="inline-block text-black">Tempo</b>
                <p className="text-sm">Weather app</p>
              </div>
              <p className="">
                Sleek weather app, offering real-time updates, immersive
                visuals, and daily personalized forecasts. Built with ReactJS
                and Tailwind.
              </p>
            </li>
          </ul>
        </article>
        <article className="flex-1">
          <b className="text-sky-600">SKILLS</b>
          <ul className="space-y-4">
            <li>
              <b className="inline-block text-black">Front-end Development:</b>
              <p>Javascript, Typescript, HTML, CSS</p>
            </li>
            <li>
              <b className="inline-block text-black">Back-end Development:</b>
              <p>NodeJS, MongoDB, Mongoose</p>
            </li>
            <li>
              <b className="inline-block text-black">Frameworks</b>
              <p>
                NextJs, ReactJS, Angular 2, Tailwind, Material UI, Express JS
              </p>
            </li>
            <li>
              <b className="inline-block text-black">Tools & Platforms</b>
              <p>Git, GitHub, Vercel, Jira</p>
            </li>
          </ul>

          <b className="text-sky-600 block mt-4">EDUCATION</b>
          <b className="block mt-1 text-black">Tomas del Rosario College</b>
          <p className="font-medium text-black">BS Computer Science</p>
          <time className="block mt-1 text-sm">July 2015 - May 2019</time>
        </article>
      </section>

      <Link
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 rounded-full p-2 shadow-lg bg-white animate-[bounce_2s_infinite]"
        href="/Levi_Deang_Resume.pdf"
        target="_blank"
        aria-label="Download resume button"
      >
        <Image src="/download.png" alt="download icon" width={32} height={32} />
      </Link>
    </main>
  );
}
