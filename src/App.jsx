import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTelegram, FaFileAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const contacts = [
  { name: "GitHub", url: "https://github.com/kaptn3", icon: <FaGithub /> },
  { name: "LeetCode", url: "https://leetcode.com/u/kaptn3/", icon: <SiLeetcode /> },
  { name: "LinkedIn", url: "https://linkedin.com/", icon: <FaLinkedin /> },
  { name: "Telegram", url: "https://telegram.me/vikapitoshka", icon: <FaTelegram /> },
  { name: "Резюме", url: "https://career.habr.com/kaptn", icon: <FaFileAlt /> },
]

const projects = [
  {
    name: "future-imperfect-theme",
    description: {
      en: "Future Imperfect Theme on Jekyll",
      ru: "Future Imperfect тема на базе Jekyll"
    },
    stack: ["Jekyll", "Sass"],
    link: "https://github.com/kaptn3/future-imperfect"
  },
  {
    name: "Capital DEX",
    description: {
      en: "dApp for token swap, farming, and staking with multi-chain support and Uniswap v2 integration.",
      ru: "dApp для обмена, фарминга и стейкинга токенов с мультичейн-поддержкой и интеграцией Uniswap v2."
    },
    stack: ["React", "polkadot.js", "ethers.js", "WalletConnect"],
    link: "https://capitaldex.exchange",
  },
  {
    name: "Capital DEX Bridge",
    description: {
      en: "Cross-chain bridge for transferring CGT and other tokens between TON, Polkadot, and EVM networks.",
      ru: "Межсетевой мост для перевода CGT и других токенов между TON, Polkadot и EVM."
    },
    stack: ["React", "polkadot.js", "ethers.js", "Wallet Connect"],
    link: "https://bridge.capitaldex.exchange",
  },
  {
    name: "RollApp",
    description: {
      en: "NFT marketplace with ERC-721 and ERC-1155 support, secure purchasing, and improved NFT display.",
      ru: "NFT-маркетплейс с поддержкой ERC-721 и ERC-1155, безопасной покупкой и улучшенным отображением.",
    },
    stack: ["React", "web3.js"],
    link: "https://rollapp.store",
  },
  {
    name: "Jamton dApp",
    description: {
      en: "Platform combining liquidity aggregation, cross-chain staking, and DEX for TON and DOT.",
      ru: "Платформа с агрегатором ликвидности, кроссчейновым стейкингом и DEX для TON и DOT."
    },
    stack: ["React", "polkadot.js", "ethers.js", "Wallet Connect"],
    link: "https://app.jamton.network/"
  },
  {
    name: "Starfetch",
    description: {
      ru: "Приложение для обмена токенов с интеграцией блокчейн-инфраструктуры.",
      en: "Token exchange app with blockchain infrastructure integration similar to DEX.",
    },
    stack: ["React", "polkadot.js", "ethers.js", "Reown"],
    link: "https://starfetch.ai/"
  },
  {
    name: "CurioInvest",
    description: {
      en: "",
      ru: ""
    },
    stack: ["Vue"],
    link: "https://curioinvest.com/"
  }
]

const translations = {
  en: {
    greeting: "Hi👋! I’m Victoria, a Frontend Developer.",
    work: 'I work at <a href="https://rebase.agency" class="text-blue-400 hover:underline">Rebase</a>.',
    contactsTitle: "Contacts",
    projectsSubtitle: "Some of the projects I’ve worked on"
  },
  ru: {
    greeting: "Привет👋! Я Виктория, фронтенд-разработчик.",
    work: 'Работаю в <a href="https://rebase.agency" class="text-blue-400 hover:underline">Rebase</a>.',
    contactsTitle: "Контакты",
    projectsSubtitle: "Некоторые проекты, в которых я участвовала"
  },
};

export default function App() {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="flex justify-end p-4 border-b border-gray-700">
        <button
          onClick={() => setLang(lang === "en" ? "ru" : "en")}
          className="px-3 py-1 bg-gray-800 rounded hover:bg-gray-700 transition"
        >
          {lang === "en" ? "EN" : "RU"}
        </button>
      </header>

      {/* Main */}
      <main className="flex-1 container mx-auto px-4 py-8 space-y-12">
        {/* Greeting */}
        <section className="space-y-2 text-center animate-fadeIn">
          <h1 className="text-3xl font-bold">{t.greeting}</h1>
          <p
            className="text-lg"
            dangerouslySetInnerHTML={{ __html: t.work }}
          ></p>
        </section>

        {/* Contacts */}
        <section className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">{t.contactsTitle}</h2>
          <div className="flex justify-center gap-6 text-2xl">
            {contacts.map((c, i) => (
              <a
                key={i}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
                title={c.name}
              >
                {c.icon}
              </a>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-semibold text-center mb-8">
            {t.projectsSubtitle}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((p, i) => (
              <a
                key={i}
                className="bg-gray-800 p-4 rounded-lg shadow-lg shadow-transparent hover:shadow-blue-500/30 transition duration-300"
                href={p.link} target="_blank" rel="noreferrer"
              >
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="text-gray-300 mt-2">{p.description[lang]}</p>
                <div className="mt-3 text-sm text-gray-400">
                  Stack: {p.stack.join(", ")}
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center p-4 border-t border-gray-700 text-gray-400">
        © {new Date().getFullYear()} Victoria
      </footer>
    </div>
  );
}
