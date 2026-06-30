"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { sgData, sgAnthology, sgAuctions } from "./images";

// WebGL background — client-only so it never runs during server render
const LightPillar = dynamic(() => import("./LightPillar"), { ssr: false });

const tools = [
  {
    title: "SG Data",
    href: "https://www.sggbdata.com/password",
    image: sgData,
    description:
      "A full catalogue of passed GB items auctioned with Stanley Gibbons.",
  },
  {
    title: "SG Anthology",
    href: "https://sganthology-gzk7.vercel.app/",
    image: sgAnthology,
    description:
      "A sales tool to help match customers to their categories, and sell more stock.",
  },
  {
    title: "SG Auctions",
    href: "https://sg-auctions.vercel.app/",
    image: sgAuctions,
    description:
      "A full auction stats tracker to map how our auctions are performing.",
  },
];

export default function Home() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <>
      <div className="bg" aria-hidden="true">
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="blob b3" />
        {dark && (
          <LightPillar
            topColor="#5227FF"
            bottomColor="#FF9FFC"
            intensity={1}
            rotationSpeed={0.3}
            glowAmount={0.002}
            pillarWidth={3}
            pillarHeight={0.4}
            noiseIntensity={0.5}
            pillarRotation={25}
            interactive={false}
            mixBlendMode="screen"
            quality="high"
          />
        )}
      </div>

      <main className="page">
        <div className="switch-wrap">
          <label className="switch">
            <input
              type="checkbox"
              className="cb"
              checked={dark}
              onChange={(e) => setDark(e.target.checked)}
              aria-label="Toggle dark mode"
            />
            <span className="toggle">
              <span className="left" />
              <span className="right" />
            </span>
          </label>
        </div>

        <header className="masthead">
          <div className="brand">
            <span className="monogram">SG</span>
            <span className="wordmark">
              Stanley <em>Gibbons</em>
            </span>
          </div>
          <h1 className="title">Welcome!</h1>
        </header>

        <section className="album" aria-label="Tools">
          {tools.map((tool) => (
            <a
              key={tool.title}
              className="card"
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-inner">
                <div className="card-head">
                  <h2 className="card-title">{tool.title}</h2>
                  <span className="open">Open ↗</span>
                </div>
                <div className="shot">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={tool.image} alt={`${tool.title} screenshot`} />
                </div>
                <p className="desc">{tool.description}</p>
              </div>
            </a>
          ))}
        </section>
      </main>
    </>
  );
}
