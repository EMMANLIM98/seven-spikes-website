"use client";

import React, { useState } from "react";
import { MinusIcon, PlusIcon } from "@/icons/icons";
import Link from "next/link";

interface FAQItem {
  id: number;
  category: string;
  question: string;
  answer: React.ReactNode;
}

const ALL_FAQS: FAQItem[] = [
  // General
  {
    id: 1,
    category: "General",
    question: "What is Seven Spikes Group?",
    answer:
      "Seven Spikes Group is a diversified conglomerate with a presence in various industries, including Roads & Infrastructure, Building Construction, Facilities Management, Real Estate, Hospitality, General Trading, Logistics, and Consultancy.",
  },
  {
    id: 2,
    category: "General",
    question: "Where is the company headquartered?",
    answer:
      "The group is headquartered in Dubai, UAE, at the SIT Tower in Dubai Silicon Oasis.",
  },
  {
    id: 3,
    category: "General",
    question: "In which countries does Seven Spikes operate?",
    answer:
      "Beyond the UAE, the group has a global footprint with operations in Turkey, India, Jordan, and Oman.",
  },
  // Services
  {
    id: 4,
    category: "Services",
    question: "What infrastructure services do you offer?",
    answer:
      "Our Infrastructure & Road Contracting division provides comprehensive solutions, including road construction and rehabilitation, road marking, signage installation, crack sealing, street lighting, and emergency road repairs.",
  },
  {
    id: 5,
    category: "Services",
    question: "Do you provide building construction and management?",
    answer:
      "Yes, Seven Spikes Building Contracting handles residential, commercial, and industrial projects. We also offer Facility Management & Maintenance and high-end Interior Fit-outs.",
  },
  {
    id: 6,
    category: "Services",
    question: "What products are available through your trading division?",
    answer: (
      <span>
        Seven Spikes General Trading L.L.C. sources and supplies a wide variety of materials:
        <ul className="mt-2 space-y-1 list-none">
          <li><span className="font-semibold text-gray-700 dark:text-gray-300">Construction & MEP:</span> Building tools, cement, pipes, fittings, and HVAC accessories.</li>
          <li><span className="font-semibold text-gray-700 dark:text-gray-300">Safety & Traffic:</span> Cones, barricades, and asphalt crack sealants.</li>
          <li><span className="font-semibold text-gray-700 dark:text-gray-300">Specialized Goods:</span> Solar panels, landscaping products, and joinery materials.</li>
        </ul>
      </span>
    ),
  },
  {
    id: 7,
    category: "Services",
    question: "Do you offer business consultancy?",
    answer:
      "Yes, we provide strategic insights through Consultancy Services, including project planning, market research, feasibility studies, and business development solutions.",
  },
  // About
  {
    id: 8,
    category: "About",
    question: "What is the company's approach to sustainability?",
    answer:
      "We are committed to sustainable growth and responsible business practices, focusing on delivering infrastructure that connects communities while minimizing environmental impact.",
  },
  // Contact & Partnerships
  {
    id: 9,
    category: "Contact & Partnerships",
    question: "How can I partner with or request a quote from Seven Spikes?",
    answer:
      "For project inquiries or trading requirements, you can contact our headquarters at +971 4 336 4991 or visit the Contact page on our website to submit a query.",
  },
  // Careers
  {
    id: 10,
    category: "Careers",
    question: "How can I apply for a job at Seven Spikes Group?",
    answer:
      "Interested candidates should email their updated CV and a brief introduction to our HR team. Ensure you specify the role you are applying for in the subject line.",
  },
  {
    id: 11,
    category: "Careers",
    question: "What is the company culture like?",
    answer:
      "We foster a collaborative and inclusive culture where teamwork and continuous learning are central to our success. We believe in nurturing talent and providing an environment where professionals can grow alongside the business.",
  },
  {
    id: 12,
    category: "Careers",
    question: "What types of roles do you typically hire for?",
    answer: (
      <span>
        As a diversified group, we frequently have openings across several sectors:
        <ul className="mt-2 space-y-1 list-none">
          <li><span className="font-semibold text-gray-700 dark:text-gray-300">Infrastructure & Construction:</span> Planning Engineers, Site Engineers, Surveyors, Foremen, and HSE Engineers.</li>
          <li><span className="font-semibold text-gray-700 dark:text-gray-300">Technical & MEP:</span> Electrical Engineers and specialized operators (e.g., Bobcat, JCB, and Roller operators).</li>
          <li><span className="font-semibold text-gray-700 dark:text-gray-300">Administrative & Support:</span> Document Controllers, Estimators, and Time Keepers.</li>
        </ul>
      </span>
    ),
  },
];

const CATEGORIES = ["All", "General", "Services", "About", "Contact & Partnerships", "Careers"];

export default function FaqLandingPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeItem, setActiveItem] = useState<number | null>(1);

  const filtered =
    activeCategory === "All"
      ? ALL_FAQS
      : ALL_FAQS.filter((f) => f.category === activeCategory);

  const toggleItem = (id: number) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 overflow-hidden bg-[#081325]">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 50% at 50% 0%, #c9a82a 0%, transparent 70%)",
          }}
        />
        <div className="wrapper relative z-10 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#c9a82a]/40 text-[#c9a82a] text-sm font-medium tracking-wide">
            Support
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            Everything you need to know about Seven Spikes Group, our services, projects, and how to work with us.
          </p>
          {/* Search-style hint */}
          <p className="mt-4 text-gray-500 text-sm">
            Still have questions?{" "}
            <Link href="/contact" className="text-[#c9a82a] hover:underline">
              Contact us
            </Link>
          </p>
        </div>
      </section>

      {/* Category filters + FAQ */}
      <section className="py-16 md:py-24 dark:dark-surface-bg bg-gray-50 dark:bg-[#0d1a2d]">
        <div className="wrapper">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Sidebar categories */}
            <aside className="lg:w-56 shrink-0">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                Categories
              </p>
              <nav className="flex flex-row flex-wrap lg:flex-col gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setActiveItem(null);
                    }}
                    className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      activeCategory === cat
                        ? "bg-[#c9a82a] text-white shadow-sm"
                        : "bg-white dark:bg-[#081325] text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-[#c9a82a]/50 hover:text-[#c9a82a]"
                    }`}
                  >
                    {cat}
                    <span
                      className={`ml-2 text-xs font-normal ${
                        activeCategory === cat
                          ? "text-white/80"
                          : "text-gray-400 dark:text-gray-500"
                      }`}
                    >
                      (
                      {cat === "All"
                        ? ALL_FAQS.length
                        : ALL_FAQS.filter((f) => f.category === cat).length}
                      )
                    </span>
                  </button>
                ))}
              </nav>
            </aside>

            {/* Accordion */}
            <div className="flex-1 max-w-3xl">
              {filtered.length === 0 ? (
                <p className="text-gray-400">No questions in this category.</p>
              ) : (
                <div className="space-y-3">
                  {filtered.map((item) => {
                    const isActive = activeItem === item.id;
                    return (
                      <div
                        key={item.id}
                        className={`rounded-xl border transition-all ${
                          isActive
                            ? "border-[#c9a82a]/50 bg-white dark:bg-[#081325] shadow-sm"
                            : "border-gray-200 dark:border-gray-700/60 bg-white dark:bg-[#081325]"
                        }`}
                      >
                        <button
                          onClick={() => toggleItem(item.id)}
                          className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                        >
                          <span
                            className={`font-semibold text-sm md:text-base leading-snug ${
                              isActive
                                ? "text-[#c9a82a]"
                                : "text-gray-800 dark:text-white"
                            }`}
                          >
                            {item.question}
                          </span>
                          <span
                            className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all ${
                              isActive
                                ? "border-[#c9a82a] bg-[#c9a82a]/10 text-[#c9a82a]"
                                : "border-gray-200 dark:border-gray-700 text-gray-400"
                            }`}
                          >
                            {isActive ? (
                              <MinusIcon />
                            ) : (
                              <PlusIcon />
                            )}
                          </span>
                        </button>
                        {isActive && (
                          <div className="px-6 pb-5">
                            <div className="h-px bg-gray-100 dark:bg-gray-700/50 mb-4" />
                            <div className="text-gray-600 dark:text-gray-400 text-sm md:text-[15px] leading-relaxed">
                              {item.answer}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Category quick count */}
              <p className="mt-6 text-xs text-gray-400 dark:text-gray-600">
                Showing {filtered.length} of {ALL_FAQS.length} questions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#081325] border-t border-white/5">
        <div className="wrapper text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Didn&apos;t find your answer?
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Our team is ready to help. Reach out and we will get back to you as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#c9a82a] hover:bg-[#b8941f] text-white font-semibold rounded-lg transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/companies"
              className="inline-flex items-center justify-center px-8 py-3 border border-white/20 hover:border-[#c9a82a]/50 text-white font-medium rounded-lg transition-colors"
            >
              Explore Our Companies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
