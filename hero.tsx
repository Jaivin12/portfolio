import React, { useState } from "react";
import { Brain, Code2, Lightbulb, Download, ArrowRight, Mail, Users } from "lucide-react";

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Education", "Contact"];

// Simple, brand-colored technology mark icons (custom SVGs, drawn to be
// recognizable without reproducing any copyrighted logo artwork).
function PythonIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M16 3c-6 0-5.6 2.6-5.6 2.6l.01 2.7h5.7v.8H8.2S5 8.7 5 14.8s2.8 5.9 2.8 5.9h1.7v-2.9s-.1-2.8 2.8-2.8h5.6s2.6.04 2.6-2.5V5.6S20.9 3 16 3z" fill="#3776AB" />
      <path d="M16 29c6 0 5.6-2.6 5.6-2.6l-.01-2.7h-5.7v-.8h7.9s3.2.4 3.2-5.7-2.8-5.9-2.8-5.9h-1.7v2.9s.1 2.8-2.8 2.8h-5.6s-2.6-.04-2.6 2.5v6.9S11.1 29 16 29z" fill="#FFD43B" />
      <circle cx="13" cy="6" r="1" fill="#fff" />
      <circle cx="19" cy="26" r="1" fill="#fff" />
    </svg>
  );
}

function TensorFlowIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M16 2 4 9v14l6 3.5V13.7L16 10l6 3.7v12.8l6-3.5V9L16 2z" fill="#FF6F00" />
      <path d="M15 12v18l-3-1.7V13.7L15 12z" fill="#FF6F00" opacity="0.7" />
      <path d="M17 12v18l3-1.7V13.7L17 12z" fill="#FF6F00" opacity="0.7" />
    </svg>
  );
}

function ScikitLearnIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="13" cy="13" r="8" fill="#F89939" />
      <circle cx="20" cy="21" r="6" fill="#3499CD" />
      <circle cx="13" cy="13" r="2.4" fill="#fff" />
      <circle cx="20" cy="21" r="1.8" fill="#fff" />
    </svg>
  );
}

function ReactIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="2.6" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1.6" fill="none">
        <ellipse cx="16" cy="16" rx="11" ry="4.4" />
        <ellipse cx="16" cy="16" rx="11" ry="4.4" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="11" ry="4.4" transform="rotate(120 16 16)" />
      </g>
    </svg>
  );
}

function NodeJsIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path
        d="M16 2.5 27 9v14L16 29.5 5 23V9L16 2.5z"
        fill="#68A063"
      />
      <path d="M16 2.5 27 9v14L16 29.5V2.5z" fill="#3C873A" opacity="0.55" />
    </svg>
  );
}

function MongoDbIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path
        d="M16 3c3 4 6 8.5 6 13.5C22 22 19 26 16 29c-3-3-6-7-6-12.5C10 11.5 13 7 16 3z"
        fill="#47A248"
      />
      <path d="M16 3v26c-1-1-2-2-2.5-3V16" stroke="#fff" strokeWidth="0.8" opacity="0.6" fill="none" />
    </svg>
  );
}

const TECH_STACK = [
  { name: "Python", Icon: PythonIcon },
  { name: "TensorFlow", Icon: TensorFlowIcon },
  { name: "Scikit-learn", Icon: ScikitLearnIcon },
  { name: "React", Icon: ReactIcon },
  { name: "Node.js", Icon: NodeJsIcon },
  { name: "MongoDB", Icon: MongoDbIcon },
];

function NeuralBrain() {
  // Node positions roughly shaped like a brain silhouette, generated once.
  const nodes = [
    [170, 35], [208, 52], [132, 52], [230, 80], [110, 80], [248, 112], [92, 112],
    [253, 148], [87, 148], [248, 184], [92, 184], [230, 214], [110, 214],
    [208, 238], [132, 238], [170, 250], [184, 132], [156, 132], [170, 168],
    [196, 100], [144, 100], [170, 198],
  ];

  const edges = [
    [0, 1], [0, 2], [1, 3], [2, 4], [3, 5], [4, 6], [5, 7], [6, 8], [7, 9],
    [8, 10], [9, 11], [10, 12], [11, 13], [12, 14], [13, 15], [14, 15],
    [0, 19], [0, 20], [19, 3], [20, 4], [16, 17], [16, 18], [17, 21],
    [18, 12], [16, 5], [17, 6], [1, 19], [2, 20], [9, 21], [10, 21],
    [7, 16], [8, 17],
  ];

  return (
    <svg
      viewBox="0 0 340 320"
      className="w-full h-full brain-float"
      style={{ overflow: "visible" }}
    >
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D4A017" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#D4A017" stopOpacity="0" />
        </radialGradient>
      </defs>

      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="#C9973A"
          strokeWidth="1"
          opacity="0.35"
          className="brain-edge"
          style={{ animationDelay: `${(i % 8) * 0.3}s` }}
        />
      ))}

      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i % 5 === 0 ? 5 : 3.2}
          fill="#C9973A"
          className="brain-node"
          style={{ animationDelay: `${(i % 6) * 0.4}s` }}
        />
      ))}

      {/* stem connecting brain to podium */}
      <line x1="170" y1="250" x2="170" y2="300" stroke="#C9973A" strokeWidth="1.5" opacity="0.4" />
      <circle cx="170" cy="300" r="4" fill="#C9973A" className="platform-pulse" />

      <style>{`
        .brain-float {
          animation: brainFloat 6s ease-in-out infinite;
          transform-origin: center;
        }
        .brain-node {
          animation: pulseNode 3s ease-in-out infinite;
          transform-origin: center;
        }
        .brain-edge {
          animation: pulseEdge 4s ease-in-out infinite;
        }
        .platform-pulse {
          animation: platformPulse 4.5s ease-in-out infinite;
          transform-origin: center;
        }
        @keyframes brainFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes pulseNode {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.25); }
        }
        @keyframes pulseEdge {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.55; }
        }
        @keyframes platformPulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.6); }
        }
        @media (prefers-reduced-motion: reduce) {
          .brain-node, .brain-edge, .brain-float, .platform-pulse { animation: none; }
        }
      `}</style>
    </svg>
  );
}

export default function PortfolioHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#FBF8F2] font-sans text-neutral-900 overflow-x-hidden">
      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(14px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.7s ease-out both; }
        @keyframes ringPulse {
          0%, 100% { opacity: 0.7; box-shadow: 0 0 0 0 rgba(212,160,23,0.15); }
          50% { opacity: 1; box-shadow: 0 0 0 6px rgba(212,160,23,0.08); }
        }
        .platform-ring { animation: ringPulse 4.5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .fade-up, .platform-ring { animation: none; }
        }
      `}</style>

      {/* NAV */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
        <nav className="flex items-center justify-between bg-white rounded-2xl shadow-sm border border-amber-100/70 px-5 sm:px-6 py-3.5">
          <a href="#home" className="flex items-center gap-0.5 text-xl font-bold tracking-tight">
            Jaivin
            <span className="text-amber-500 text-2xl leading-none">.</span>
          </a>

          <div className="hidden lg:flex items-center gap-8 text-[15px] text-neutral-700">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`relative pb-1 hover:text-amber-600 transition-colors ${
                  link === "Home" ? "text-neutral-900 font-medium" : ""
                }`}
              >
                {link}
                {link === "Home" && (
                  <span className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-amber-500 rounded-full" />
                )}
              </a>
            ))}
          </div>

          <a
            href="/resume/jaivin-resume.pdf"
            download
            className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-sm font-medium px-5 py-2.5 rounded-xl shadow-sm shadow-amber-500/30 transition-all active:scale-95"
          >
            Download Resume <Download size={15} />
          </a>

          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-neutral-800 rounded" />
            <span className="w-6 h-0.5 bg-neutral-800 rounded" />
            <span className="w-6 h-0.5 bg-neutral-800 rounded" />
          </button>
        </nav>

        {menuOpen && (
          <div className="lg:hidden mt-2 bg-white rounded-2xl shadow-sm border border-amber-100/70 p-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-neutral-700 text-[15px] py-1"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="/resume/jaivin-resume.pdf"
              download
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-medium px-5 py-2.5 rounded-xl mt-1"
              onClick={() => setMenuOpen(false)}
            >
              Download Resume <Download size={15} />
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <main id="home" className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-20 relative">
        {/* faint code snippet backdrop, desktop only */}
        <pre className="hidden xl:block absolute right-[26%] top-8 text-[13px] leading-6 text-amber-700/20 font-mono pointer-events-none select-none">
{`import numpy as np
import pandas as pd
from sklearn.model_selection import
from sklearn.ensemble import
from sklearn.metrics import

def train_model(X, y):
    model = RandomForest
    model.fit(X_train, y_train)
    return model

def predict(model, X):
    return model.predict(X)`}
        </pre>

        <div className="grid lg:grid-cols-2 gap-12 items-center relative">
          {/* LEFT */}
          <div className="fade-up">
            <span className="inline-flex items-center gap-2 bg-white border border-amber-200 text-amber-700 text-xs font-medium tracking-wide px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              AI STUDENT &amp; ASPIRING AI ENGINEER
            </span>

            <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                Jaivin
              </span>
            </h1>

            <p className="mt-5 text-neutral-600 text-lg leading-relaxed max-w-md">
              I build practical AI, machine learning and full-stack applications that solve real-world problems.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {[
                { icon: Brain, label: "AI & Machine Learning" },
                { icon: Code2, label: "Full-Stack Developer" },
                { icon: Lightbulb, label: "Problem Solver" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-2 bg-white border border-neutral-200 text-sm text-neutral-700 px-4 py-2 rounded-xl"
                >
                  <Icon size={16} className="text-amber-500" />
                  {label}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium px-6 py-3.5 rounded-xl shadow-md shadow-amber-500/30 transition-all active:scale-95"
              >
                View Projects <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 bg-white border border-neutral-200 hover:border-neutral-300 text-neutral-800 font-medium px-6 py-3.5 rounded-xl transition-all active:scale-95"
              >
                Contact Me <Mail size={16} />
              </a>
            </div>

            <div className="mt-7 flex items-center gap-2 text-neutral-500 text-sm">
              <Users size={16} />
              Let's build something impactful together.
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center items-center min-h-[420px] lg:min-h-[540px]">
            <div className="w-[300px] sm:w-[400px] lg:w-[460px]">
              <NeuralBrain />
            </div>

            {/* podium */}
            <div className="absolute bottom-10 w-[75%] max-w-[360px]">
              <div className="h-3 rounded-full bg-gradient-to-b from-neutral-200 to-neutral-100 border border-neutral-200 shadow-inner platform-ring" />
              <div className="h-1.5 rounded-full bg-neutral-100 border border-amber-200/50 mt-1 mx-4" />
            </div>
          </div>
        </div>

        {/* TECH STACK STRIP */}
        <div className="mt-20 pt-8 border-t border-amber-100 flex flex-wrap justify-center gap-x-12 gap-y-4 text-neutral-600 text-sm">
          {TECH_STACK.map(({ name, Icon }) => (
            <span key={name} className="flex items-center gap-2">
              <Icon size={22} />
              {name}
            </span>
          ))}
        </div>
      </main>
    </div>
  );
}