import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Linkedin, Mail, Phone, MapPin, Download,
  ExternalLink, Code2, Layers3, Database, Cloud, Menu, X, ChevronRight
} from "lucide-react";
import "./styles.css";

const skills = [
  "React.js","TypeScript","JavaScript","Next.js","Redux","Zustand",
  "Tailwind CSS","Material UI","Node.js","REST APIs","GraphQL","React Query",
  "PostgreSQL","MongoDB","Firebase","Vercel","GitHub Actions","CI/CD"
];

const experience = [
  {
    role:"Software Engineer",
    company:"AV DEVS Solutions Pvt. Ltd.",
    period:"Oct 2024 – Dec 2025",
    points:[
      "Converted Figma wireframes into pixel-perfect responsive interfaces using React.js and TypeScript.",
      "Improved accessibility and cross-browser compatibility.",
      "Optimized frontend performance, reducing page load times by 35%.",
      "Integrated REST APIs and real-time data flows with backend teams.",
      "Participated in Vercel deployments and CI/CD release workflows."
    ]
  },
  {
    role:"React.js Developer",
    company:"Aartoon Solution Pvt. Ltd.",
    period:"Jan 2023 – Dec 2023",
    points:[
      "Built scalable frontend components using TypeScript and React.",
      "Integrated geo-tagging for mentor-mentee matching.",
      "Implemented WebSocket-based real-time chat and notifications.",
      "Worked with product and design teams on accessibility and usability."
    ]
  },
  {
    role:"React.js Developer",
    company:"Trames Pvt. Ltd. · Remote",
    period:"Feb 2020 – Dec 2022",
    points:[
      "Integrated ERP systems through EDI, REST APIs and FTP.",
      "Built high-performance React and TypeScript interfaces.",
      "Developed shipment tracking and audit-log workflows.",
      "Implemented TradeTrust-based blockchain features.",
      "Collaborated with backend and DevOps teams on API and CI/CD optimization."
    ]
  }
];

const projects = [
  {
    title:"Healthcare Imaging Platform",
    tag:"Healthcare",
    icon:<Layers3 size={22}/>,
    description:"Data-driven healthcare interfaces with dashboards, filters and reporting views for clinical and operational workflows.",
    tech:["React.js","TypeScript","Material UI","REST APIs"],
    metric:"Performance-focused UI for large datasets"
  },
  {
    title:"Sparta — Lease Management",
    tag:"Enterprise",
    icon:<Database size={22}/>,
    description:"Lease lifecycle management covering creation, renewal, termination and compliance tracking with real-time status dashboards.",
    tech:["React.js","Redux","TypeScript","Material UI"],
    metric:"25% faster processing"
  },
  {
    title:"Mentor-Mentee Platform",
    tag:"EdTech",
    icon:<Code2 size={22}/>,
    description:"Responsive dashboards, analytics and an AI-driven recommendation experience for mentor suggestions.",
    tech:["React","TypeScript","Zustand","WebSocket"],
    metric:"25% higher match accuracy"
  },
  {
    title:"Shipment Tracking System",
    tag:"Logistics",
    icon:<Cloud size={22}/>,
    description:"Role-based shipment workflows with real-time status alerts through push notifications and email.",
    tech:["React","TypeScript","REST API","RBAC"],
    metric:"40% security improvement"
  }
];

function App(){
  const [open,setOpen] = React.useState(false);
  const close=()=>setOpen(false);
  return (
    <div className="app">
      <header className="nav">
        <a className="brand" href="#home" onClick={close}><span>SC</span> Sikandar Chauhan</a>
        <nav className={open ? "navlinks open":"navlinks"}>
          {["About","Skills","Experience","Projects","Contact"].map(x =>
            <a key={x} href={"#"+x.toLowerCase()} onClick={close}>{x}</a>
          )}
        </nav>
        <a className="navcta" href="#contact">Let's talk <ArrowUpRight size={17}/></a>
        <button className="menubtn" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="heroText">
            <div className="eyebrow"><span className="dot"></span> AVAILABLE FOR OPPORTUNITIES</div>
            <h1>Building modern web experiences with <em>React.</em></h1>
            <p className="lead">Software Engineer & Frontend Developer with 5+ years of experience building scalable, responsive and performance-focused web applications.</p>
            <div className="actions">
              <a className="primary" href="#projects">View my work <ArrowUpRight size={18}/></a>
              <a className="secondary" href="mailto:sikandar30061994@gmail.com">Contact me <Mail size={17}/></a>
            </div>
            <div className="quick">
              <span><MapPin size={16}/> Vadodara, India</span>
              <span><Code2 size={16}/> React.js · TypeScript</span>
            </div>
          </div>
          <div className="heroCard">
            <div className="glow"></div>
            <div className="cardTop"><span>frontend.ts</span><span>● ● ●</span></div>
            <pre>{`const developer = {
  name: "Sikandar Chauhan",
  role: "Software Engineer",
  experience: "5+ years",
  focus: [
    "React.js",
    "TypeScript",
    "Scalable UI"
  ],
  mindset: "Build. Improve. Ship."
};`}</pre>
            <div className="codeBottom"><span>● Available for work</span><b>→</b></div>
          </div>
        </section>

        <section id="about" className="section split">
          <div><p className="label">01 — ABOUT</p><h2>Turning product ideas into <span>production-ready interfaces.</span></h2></div>
          <div className="copy">
            <p>Frontend Developer with 5+ years of experience building scalable web applications using React.js, Next.js, TypeScript and modern frontend architectures.</p>
            <p>Experienced in translating Figma designs into responsive interfaces, integrating REST APIs, optimizing performance, accessibility and SEO, and working with Vercel and CI/CD workflows.</p>
            <div className="stats">
              <div><strong>5+</strong><small>Years experience</small></div>
              <div><strong>35%</strong><small>Page-load improvement</small></div>
              <div><strong>99.99%</strong><small>Platform uptime*</small></div>
            </div>
            <p className="note">*Project result reported in the supplied CV.</p>
          </div>
        </section>

        <section id="skills" className="section">
          <p className="label">02 — SKILLS</p>
          <div className="sectionHead"><h2>Tools I use to <span>ship.</span></h2><p>From component architecture to deployment, I enjoy owning the frontend lifecycle.</p></div>
          <div className="skillgrid">{skills.map((s,i)=><div className="skill" key={s}><span>{String(i+1).padStart(2,"0")}</span>{s}</div>)}</div>
        </section>

        <section id="experience" className="section">
          <p className="label">03 — EXPERIENCE</p>
          <div className="sectionHead"><h2>A track record of <span>building.</span></h2></div>
          <div className="timeline">{experience.map((e,i)=>
            <article className="job" key={e.company}>
              <div className="jobNo">0{i+1}</div>
              <div><div className="jobMeta">{e.period}</div><h3>{e.role}</h3><h4>{e.company}</h4><ul>{e.points.map(p=><li key={p}>{p}</li>)}</ul></div>
            </article>
          )}</div>
        </section>

        <section id="projects" className="section">
          <p className="label">04 — PROJECTS</p>
          <div className="sectionHead"><h2>Selected <span>work.</span></h2><p>Enterprise products and user-focused web experiences.</p></div>
          <div className="projectgrid">{projects.map((p,i)=>
            <article className="project" key={p.title}>
              <div className="projectIcon">{p.icon}<span>{p.tag}</span></div>
              <h3>{p.title}</h3><p>{p.description}</p>
              <div className="tech">{p.tech.map(t=><span key={t}>{t}</span>)}</div>
              <div className="metric">{p.metric}<ArrowUpRight size={17}/></div>
            </article>
          )}</div>
        </section>

        <section className="section education">
          <p className="label">05 — EDUCATION</p>
          <div className="eduRow"><div><h3>BCA (Computer Application)</h3><p>Saurashtra University · 2015</p></div><div><h3>Certifications</h3><p>Front-End Engineer Certificate · Programming with Python</p></div><div><h3>Achievement</h3><p>Best Performer of the Quarter</p></div></div>
        </section>

        <section id="contact" className="contact section">
          <p className="label">06 — CONTACT</p>
          <h2>Have a project or opportunity?<br/><span>Let's build something.</span></h2>
          <a className="emailLink" href="mailto:sikandar30061994@gmail.com">sikandar30061994@gmail.com <ArrowUpRight/></a>
          <div className="contactLinks">
            <a href="tel:+919638308905"><Phone size={17}/> +91 9638308905</a>
            <a href="https://www.linkedin.com/in/sikandar-chauhan-6631061a1" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
            <a href="https://github.com/chiku1c" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
          </div>
        </section>
      </main>
      <footer><span>© {new Date().getFullYear()} Sikandar Chauhan</span><span>Software Engineer · Frontend Developer</span></footer>
    </div>
  )
}
createRoot(document.getElementById("root")).render(<App/>);