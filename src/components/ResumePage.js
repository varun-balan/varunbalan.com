import React from "react";
import Header from "./Header";
import resume from "../data/resume";
import "./ResumePage.css";

// One role-style entry (Experience, Research, Leadership).
function Entry({ item }) {
  return (
    <div className="entry">
      <div className="entry-head">
        <div className="entry-titles">
          <span className="entry-company">{item.company}</span>
          <span className="entry-role">
            {item.role}
            {item.location ? ` · ${item.location}` : ""}
          </span>
        </div>
        <span className="badge">{item.date}</span>
      </div>
      {item.summary && <p className="entry-summary">{item.summary}</p>}
      {item.bullets && (
        <ul className="bullets">
          {item.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
}

function ResumePage() {
  return (
    <div className="ResumePage">
      <Header />

      <main className="resume">
        <header className="resume-hero">
          <h1>{resume.name}</h1>
          <p className="hero-meta">
            {resume.location}
            {" · "}
            <a href={resume.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            {" · "}
            <a href={resume.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
          <div className="hero-actions">
            {/*
              Intentional: S3 bucket policy gates by aws:Referer matching
              varunbalan.com, so rel="noreferrer" (which strips the Referer
              header) would cause Access Denied. rel="noopener" keeps the
              tab-nabbing protection without stripping Referer.
            */}
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <a
              className="download-btn"
              href={resume.pdfUrl}
              target="_blank"
              rel="noopener"
            >
              Download PDF
            </a>
            <span className="updated">Last updated: {resume.lastUpdated}</span>
          </div>
        </header>

        <Section title="Profile">
          <ul className="profile-list">
            {resume.profile.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </Section>

        <Section title="Experience">
          {resume.experience.map((item, i) => (
            <Entry key={i} item={item} />
          ))}
        </Section>

        <Section title="Research">
          {resume.research.map((item, i) => (
            <Entry key={i} item={item} />
          ))}
        </Section>

        <Section title="Education">
          {resume.education.map((edu, i) => (
            <div className="entry" key={i}>
              <div className="entry-head">
                <div className="entry-titles">
                  <span className="entry-company">{edu.school}</span>
                  <span className="entry-role">
                    {edu.degree}
                    {edu.detail ? ` · ${edu.detail}` : ""}
                    {edu.location ? ` · ${edu.location}` : ""}
                  </span>
                </div>
                <span className="badge">{edu.date}</span>
              </div>
              {edu.bullets && (
                <ul className="bullets">
                  {edu.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </Section>

        <Section title="Technical Skills">
          <div className="skill-groups">
            {Object.entries(resume.skills).map(([category, items]) => (
              <div className="skill-group" key={category}>
                <span className="skill-cat">{category}</span>
                <div className="chips">
                  {items.map((s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Leadership & Community">
          {resume.leadership.map((item, i) => (
            <Entry key={i} item={item} />
          ))}
        </Section>

        <Section title="Awards & Scholarships">
          <ul className="plain-list">
            {resume.awards.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </Section>

        <Section title="Certifications & Learning">
          <ul className="plain-list">
            {resume.certifications.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </Section>

        <Section title="Languages">
          <div className="chips">
            {resume.languages.map((l) => (
              <span className="chip" key={l}>
                {l}
              </span>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}

export default ResumePage;
