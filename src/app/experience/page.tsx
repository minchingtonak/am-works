import type { Metadata } from "next";
import Arrow from "../components/arrow";

export const metadata: Metadata = {
  title: "Experience",
  description: "experience",
};
const Experience = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl mb-8 tracking-tighter">
        where i've been
      </h1>
      <section className="prose prose-neutral dark:prose-invert">
        <p>
          Here's a summary of my career so far. If you want to know more about
          any role, project, or tech stack, please reach out:{" "}
          <a
            href="mailto:andrewnwhitely@gmail.com?subject=Let%27s talk%21"
            className="text-accent dark:text-shade hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
          >
            here
            <span className="inline-flex align-middle">
              <Arrow />
            </span>
          </a>
        </p>
        <hr />
        <section className="" id="resume">
          <div id="bah">
            <h2 className="mt-6">Booz Allen Hamilton</h2>
            <span className="italic">January 2023 - Present</span>
            <p>
              I'm currently a Software Engineer at{" "}
              <a
                href="https://boozallen.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="text-accent dark:text-shade hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
              >
                Booz Allen Hamilton
                <span className="inline-flex align-middle">
                  {" "}
                  <Arrow />
                </span>
              </a>
              . Due to the nature of my work, I can't immediately share
              information about this role. Please reach out if you would like
              some more info!
            </p>
            <span className="space-x-4 flex flex-row items-center overflow-auto mt-4">
              <div className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 w-fit">
                React
              </div>
              <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 w-fit">
                TailwindCSS
              </div>
              <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 w-fit">
                Rust
              </div>
              <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 w-fit">
                Python
              </div>
              <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 w-fit">
                Azure
              </div>
            </span>
          </div>

          <hr />

          <div id="firstfloor">
            <h2 className="mt-6">FirstFloor Studios</h2>
            <span className="italic">February 2022 - October 2022</span>
            <p>
              During this time I was a Software Engineer at{" "}
              <a
                href="https://firstfloor.app/"
                target="_blank"
                rel="noreferrer noopener"
                className="text-accent dark:text-shade hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
              >
                FirstFloor Studios
                <span className="inline-flex align-middle">
                  {" "}
                  <Arrow />
                </span>
              </a>
              , a startup exploring how to bring the web3 and blockchain
              experience from desktop to mobile. I worked with a small team of
              engineers creating both an iOS and web app to allow the community
              to buy, sell, trade, and auction their NFTs (non-fungible tokens).
              We interacted with the Ethereum blockchain using Solidity smart
              contracts, RESTful APIs, SwiftUI views and modular React
              components.
              <span className="space-x-4 flex flex-row items-center overflow-auto mt-4">
                <div className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 w-fit">
                  React
                </div>
                <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 w-fit">
                  NextJS
                </div>
                <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 w-fit">
                  TailwindCSS
                </div>
                <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 w-fit">
                  Google Cloud
                </div>
                <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 w-fit">
                  SwiftUI
                </div>
                <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 w-fit">
                  Python
                </div>
                <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 w-fit">
                  Web3
                </div>
              </span>
            </p>
          </div>

          <hr />

          <div id="capital-one">
            <h2 className="mt-6">Capital One</h2>
            <span className="italic">February 2019 - February 2022</span>
            <p>
              Following my time in the CODA program, I joined the "standard"
              (computer-science grad) new grad program at{" "}
              <a
                href="https://capitalone.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="text-accent dark:text-shade hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
              >
                Capital One
                <span className="inline-flex align-middle">
                  {" "}
                  <Arrow />
                </span>
              </a>{" "}
              called the Technology Development Program (TDP) . This was a
              two-year rotational program that exposed us to different teams
              within the company, allowing us to learn new skills both personal
              and professional.
            </p>
            <p>
              My first rotation within this program was in the org that
              developed our mobile (iOS and Android) applications, focusing on
              the QA/QE, and production release processes. During my time on the
              team I wrote and maintained UI tests in Swift and Java, conducted
              regression testing using live devices on a dedicated server,
              managed the release process for both applications across dozens of
              teams, as well as started as a mentor for new engineers in CODA
              and TDP.
            </p>
            <p>
              My second rotation in the program had me leaving working on a
              customer facing application to focus on internal dashboards and
              tooling. On this team I was working on developing features for an
              internal dashboard that showed a ton of metrics, analytics, and
              data/graph visualizations for different customers. I led prod
              releases, interviewed intern and new graduate candidates, and
              helped executive leadership implement a hybrid return-to-office
              policy for the company.
            </p>
            <p>
              After my time in the TDP program, I joined another team building
              an internal tool. This was an application that let project
              managers and team leads handle the flow of inbound feature
              requests for their developers. Working with only two other
              engineers, we managed the entire development process from gaining
              feedback on the current app and workflow, bringing that to a
              designer, iterating, building, and shipping to production at scale
              in only a few months. After MVP, we were able to decrease
              estimated feature development timelines by 12%.
            </p>
            <p>
              <span className="space-x-4 flex flex-row items-center overflow-auto mt-4">
                <div className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 w-fit">
                  React
                </div>
                <div className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 w-fit">
                  Angular
                </div>
                <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 w-fit">
                  NextJS
                </div>
                <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 w-fit">
                  TailwindCSS
                </div>
                <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 w-fit">
                  SCSS
                </div>
                <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 w-fit">
                  SwiftUI
                </div>
                <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 w-fit">
                  Python
                </div>
                <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 w-fit">
                  Node.js
                </div>
                <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 w-fit">
                  AWS
                </div>
                <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 w-fit">
                  GraphQL
                </div>
              </span>
            </p>
          </div>

          <hr />

          <div id="coda">
            <h2 className="mt-6">
              Capital One - Capital One Developer Academy
            </h2>
            <span className="italic">July 2018 - January 2019</span>
            <p>
              In my first role out of college, I joined{" "}
              <a
                href="https://capitalone.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="text-accent dark:text-shade hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
              >
                Capital One
                <span className="inline-flex align-middle">
                  {" "}
                  <Arrow />
                </span>
              </a>{" "}
              as a part of their (at the time, new-ish) early career program
              called the Capital One Developer Academy. This program was aimed
              at bringing both underrepresented and non-computer science
              backgrounds into the engineering field. The program ran six
              months, in which we learned fullstack web development and
              culminated in partnering with stakeholders to solve current
              enterprise problems.
              <span className="space-x-4 flex flex-row items-center overflow-auto mt-4">
                <div className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 w-fit">
                  JavaScript
                </div>
                <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 w-fit">
                  React
                </div>
                <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 w-fit">
                  Express
                </div>
                <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 w-fit">
                  HTML
                </div>
                <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 w-fit">
                  CSS
                </div>
                <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 w-fit">
                  Node.js
                </div>
                <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 w-fit">
                  PostgreSQL
                </div>
              </span>
            </p>
          </div>
        </section>
      </section>
    </div>
  );
};
export default Experience;
