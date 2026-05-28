import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import resume from "../data/resume";
import "./ResumePage.css";

// Renders one role-style entry (used by Experience, Research, Leadership).
function Entry({ item }) {
  return (
    <div className="resume-entry">
      <div className="resume-entry-head">
        <span className="resume-entry-title">
          {item.company} — {item.role}
        </span>
        <span className="resume-entry-date">{item.date}</span>
      </div>
      {item.location && <div className="resume-entry-meta">{item.location}</div>}
      {item.summary && <p className="resume-entry-summary">{item.summary}</p>}
      {item.bullets && (
        <ul>
          {item.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ResumePage() {
  return (
    <div className="ResumePage">
      <Header />

      <main className="resume-container">
        <header className="resume-top">
          <h1>{resume.name}</h1>
          <p className="resume-subline">
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
          <p className="resume-updated">Last updated: {resume.lastUpdated}</p>
          <div className="resume-actions">
            <a
              className="resume-download"
              href={resume.pdfUrl}
              target="_blank"
              rel="noreferrer"
            >
              Download PDF
            </a>
            <Link className="resume-back" to="/">
              ← Back to home
            </Link>
          </div>
        </header>

        <section className="resume-section">
          <h2>Profile</h2>
          <ul>
            {resume.profile.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </section>

        <section className="resume-section">
          <h2>Experience</h2>
          {resume.experience.map((item, i) => (
            <Entry key={i} item={item} />
          ))}
        </section>

        <section className="resume-section">
          <h2>Research</h2>
          {resume.research.map((item, i) => (
            <Entry key={i} item={item} />
          ))}
        </section>

        <section className="resume-section">
          <h2>Education</h2>
          {resume.education.map((edu, i) => (
            <div className="resume-entry" key={i}>
              <div className="resume-entry-head">
                <span className="resume-entry-title">{edu.school}</span>
                <span className="resume-entry-date">{edu.date}</span>
              </div>
              <div className="resume-entry-meta">
                {edu.degree}
                {edu.detail ? ` · ${edu.detail}` : ""}
                {edu.location ? ` · ${edu.location}` : ""}
              </div>
              {edu.bullets && (
                <ul>
                  {edu.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h2>Technical Skills</h2>
          <ul className="resume-skills">
            {Object.entries(resume.skills).map(([category, items]) => (
              <li key={category}>
                <span className="resume-skill-cat">{category}:</span>{" "}
                {items.join(", ")}
              </li>
            ))}
          </ul>
        </section>

        <section className="resume-section">
          <h2>Leadership & Community</h2>
          {resume.leadership.map((item, i) => (
            <Entry key={i} item={item} />
          ))}
        </section>

        <section className="resume-section">
          <h2>Awards & Scholarships</h2>
          <ul>
            {resume.awards.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </section>

        <section className="resume-section">
          <h2>Certifications & Learning</h2>
          <ul>
            {resume.certifications.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </section>

        <section className="resume-section">
          <h2>Languages</h2>
          <p>{resume.languages.join("; ")}</p>
        </section>
      </main>
    </div>
  );
}

export default ResumePage;
