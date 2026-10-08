import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

const skills = [
  "React.js","TypeScript","JavaScript","Next.js","Redux","Zustand",
  "Tailwind CSS","Material UI","Node.js","REST APIs","React Query",
  "PostgreSQL","MongoDB","Firebase","Vercel","GitHub Actions","CI/CD"
];

const projects = [
  {
    type:"HEALTHCARE",
    title:"Healthcare Imaging Platform",
    desc:"Production-ready healthcare dashboards, filters and reporting interfaces for complex clinical workflows and large datasets.",
    tech:["React.js","TypeScript","Material UI","REST APIs"],
    result:"Performance-focused UI",
    visual:"health"
  },
  {
    type:"AVIATION / ENTERPRISE",
    title:"Sparta — Lease Management",
    desc:"Lease lifecycle platform covering creation, renewal, termination, compliance tracking, inventory and real-time lease status.",
    tech:["React.js","Redux","TypeScript","Material UI"],
    result:"25% faster processing",
    visual:"aviation"
  },
  {
    type:"EDTECH",
    title:"Mentor-Mentee Platform",
    desc:"Responsive dashboards with geo-tagging, analytics, real-time communication and AI-driven mentor recommendations.",
    tech:["React","TypeScript","Zustand","WebSocket"],
    result:"25% better match accuracy",
    visual:"mentor"
  },
  {
    type:"LOGISTICS",
    title:"Shipment Tracking System",
    desc:"Enterprise shipment workflows with role-based access, audit logs and real-time shipment alerts.",
    tech:["React","TypeScript","REST API","RBAC"],
    result:"40% security improvement",
    visual:"logistics"
  }
];

const experience = [
  {
    year:"2024 — 2025",
    role:"Software Engineer",
    company:"AV DEVS Solutions Pvt. Ltd.",
    tech:"React.js · TypeScript · REST APIs · Vercel"
  },
  {
    year:"2023",
    role:"React.js Developer",
    company:"Aartoon Solution Pvt. Ltd.",
    tech:"React · TypeScript · Zustand · WebSocket"
  },
  {
    year:"2020 — 2022",
    role:"React.js Developer",
    company:"Trames Pvt. Ltd. · Remote",
    tech:"React · TypeScript · EDI · REST API · Blockchain"
  }
];

function Arrow() {
  return <span className="arrow">↗</span>;
}

function ProjectVisual({type}) {

  if(type === "health") {
    return (
      <div className="visual health">
        <div className="healthCircle"></div>
        <div className="ecg">
          ──╱╲──╱╲────╱╲──╱╲──
        </div>
        <div className="heart">♥</div>
        <span>ECG MONITOR</span>
      </div>
    );
  }

  if(type === "aviation") {
    return (
      <div className="visual aviation">
        <div className="aviationGrid"></div>
        <div className="plane">✈</div>
        <div className="flightLine one"></div>
        <div className="flightLine two"></div>
        <span>ASSET LIFECYCLE</span>
      </div>
    );
  }

  if(type === "mentor") {
    return (
      <div className="visual mentor">
        <div className="person one">●</div>
        <div className="person two">●</div>
        <div className="person three">●</div>
        <div className="connection one"></div>
        <div className="connection two"></div>
        <div className="connection three"></div>
        <span>SMART MATCHING</span>
      </div>
    );
  }

  return (
    <div className="visual logistics">
      <div className="map"></div>
      <div className="location a">●</div>
      <div className="location b">●</div>
      <div className="truck">▰</div>
      <span>LIVE TRACKING</span>
    </div>
  );
}

function App() {

  const [menu,setMenu] = useState(false);
  const [active,setActive] = useState("home");

  useEffect(() => {

    const onScroll = () => {

      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "projects",
        "contact"
      ];

      sections.forEach(id => {

        const el = document.getElementById(id);

        if(el && window.scrollY >= el.offsetTop - 200) {
          setActive(id);
        }

      });

    };

    window.addEventListener("scroll",onScroll);

    return () => window.removeEventListener("scroll",onScroll);

  },[]);

  return (

    <div className="site">

      <style>{`

        *{
          box-sizing:border-box;
        }

        html{
          scroll-behavior:smooth;
        }

        body{
          margin:0;
          background:#05070b;
          color:#f5f7fa;
          font-family:Arial,Helvetica,sans-serif;
        }

        a{
          color:inherit;
          text-decoration:none;
        }

        .site{
          min-height:100vh;
          overflow:hidden;
          background:
            radial-gradient(circle at 10% 15%,rgba(110,80,255,.13),transparent 28%),
            radial-gradient(circle at 90% 40%,rgba(0,220,255,.09),transparent 25%),
            #05070b;
        }

        .nav{
          height:78px;
          position:sticky;
          top:0;
          z-index:50;
          display:flex;
          align-items:center;
          justify-content:space-between;
          max-width:1180px;
          margin:auto;
          padding:0 28px;
          background:rgba(5,7,11,.82);
          backdrop-filter:blur(20px);
          border-bottom:1px solid #202936;
        }

        .logo{
          display:flex;
          align-items:center;
          gap:10px;
          font-weight:800;
        }

        .logoBox{
          width:36px;
          height:36px;
          border:1px solid #405066;
          border-radius:10px;
          display:grid;
          place-items:center;
          color:#b8ff45;
          font-size:11px;
        }

        .navlinks{
          display:flex;
          gap:28px;
        }

        .navlinks a{
          color:#788497;
          font-size:11px;
          text-transform:uppercase;
          letter-spacing:.08em;
        }

        .navlinks a:hover,
        .navlinks .active{
          color:#fff;
        }

        .hire{
          border:1px solid #354154;
          padding:10px 15px;
          border-radius:8px;
          font-size:12px;
          font-weight:700;
        }

        .menu{
          display:none;
          background:none;
          border:0;
          color:white;
          font-size:25px;
        }

        .wrap{
          max-width:1180px;
          margin:auto;
          padding-left:28px;
          padding-right:28px;
        }

        .hero{
          min-height:760px;
          display:grid;
          grid-template-columns:1.05fr .95fr;
          align-items:center;
          gap:55px;
        }

        .status{
          color:#a7b2c2;
          font-size:10px;
          letter-spacing:.16em;
        }

        .status i{
          width:7px;
          height:7px;
          display:inline-block;
          border-radius:50%;
          background:#b8ff45;
          box-shadow:0 0 18px #b8ff45;
          margin-right:9px;
        }

        h1{
          font-size:clamp(48px,6vw,84px);
          line-height:.98;
          letter-spacing:-.06em;
          margin:25px 0;
        }

        h1 span,
        h2 span{
          color:#b8ff45;
        }

        .heroText{
          color:#8c98aa;
          font-size:17px;
          line-height:1.8;
          max-width:650px;
        }

        .heroText b{
          color:#fff;
        }

        .buttons{
          display:flex;
          gap:12px;
          margin:30px 0;
        }

        .button{
          padding:14px 19px;
          border-radius:8px;
          font-size:13px;
          font-weight:800;
        }

        .primary{
          background:#b8ff45;
          color:#071006;
        }

        .secondary{
          border:1px solid #344052;
        }

        .meta{
          display:flex;
          gap:20px;
          color:#687588;
          font-size:10px;
          text-transform:uppercase;
        }

        .codeWindow{
          position:relative;
          background:#0b1018;
          border:1px solid #293545;
          border-radius:16px;
          box-shadow:0 35px 100px #000;
          overflow:hidden;
          animation:float 6s ease-in-out infinite;
        }

        @keyframes float{
          50%{
            transform:translateY(-10px);
          }
        }

        .codeTop,
        .codeBottom{
          height:44px;
          padding:0 15px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          border-bottom:1px solid #202b39;
          color:#687588;
          font-size:10px;
        }

        .dots i{
          display:inline-block;
          width:7px;
          height:7px;
          background:#465163;
          border-radius:50%;
          margin-right:5px;
        }

        .code{
          padding:25px 18px;
          font-family:monospace;
          font-size:12px;
          line-height:2;
          color:#aeb8c7;
        }

        .code p{
          margin:0;
        }

        .line{
          display:inline-block;
          width:28px;
          color:#465162;
        }

        .green{
          color:#b8ff45;
        }

        .blue{
          color:#65d7ff;
        }

        .purple{
          color:#b895ff;
        }

        .orange{
          color:#ffbd6b;
        }

        .codeBottom{
          border:0;
          border-top:1px solid #202b39;
        }

        .codeBottom strong{
          color:#b8ff45;
        }

        .section{
          padding-top:125px;
          padding-bottom:125px;
        }

        .tag{
          color:#6d7a8d;
          font-family:monospace;
          font-size:10px;
          letter-spacing:.16em;
        }

        .aboutGrid{
          margin-top:25px;
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:100px;
        }

        h2{
          font-size:clamp(40px,5vw,65px);
          line-height:1.04;
          letter-spacing:-.05em;
          margin:0;
        }

        .aboutText{
          color:#8995a7;
          line-height:1.85;
        }

        .stats{
          display:flex;
          gap:35px;
          margin-top:35px;
        }

        .stats strong{
          display:block;
          font-size:28px;
          color:#fff;
        }

        .stats small{
          color:#667386;
          font-size:9px;
          text-transform:uppercase;
        }

        .titleRow{
          display:flex;
          justify-content:space-between;
          align-items:end;
          gap:30px;
          margin:22px 0 45px;
        }

        .titleRow p{
          max-width:380px;
          color:#7d899b;
          line-height:1.7;
          font-size:13px;
        }

        .skills{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          border-top:1px solid #1d2633;
        }

        .skill{
          height:72px;
          border-bottom:1px solid #1d2633;
          display:flex;
          align-items:center;
          gap:18px;
          padding:0 8px;
          transition:.3s;
        }

        .skill:hover{
          background:#0d141d;
          padding-left:18px;
        }

        .skill small{
          color:#465264;
          font-family:monospace;
        }

        .skill span{
          font-size:13px;
          font-weight:700;
        }

        .jobs{
          border-top:1px solid #1d2633;
        }

        .job{
          display:grid;
          grid-template-columns:140px 1fr 40px;
          gap:20px;
          padding:35px 0;
          border-bottom:1px solid #1d2633;
        }

        .year{
          color:#788497;
          font:10px monospace;
        }

        .role{
          color:#b8ff45;
          font:10px monospace;
          text-transform:uppercase;
        }

        .job h3{
          margin:8px 0;
          font-size:24px;
        }

        .job p{
          margin:0;
          color:#6f7b8d;
          font-size:12px;
        }

        .number{
          color:#3d4858;
          font:10px monospace;
        }

        .projects{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:18px;
        }

        .project{
          background:#090d13;
          border:1px solid #202b39;
          border-radius:16px;
          overflow:hidden;
          transition:.35s;
        }

        .project:hover{
          transform:translateY(-8px);
          border-color:#455267;
          box-shadow:0 30px 80px #000;
        }

        .visual{
          height:245px;
          position:relative;
          overflow:hidden;
        }

        .visual>span{
          position:absolute;
          left:18px;
          bottom:16px;
          z-index:5;
          padding:7px 9px;
          border:1px solid #3a4656;
          background:#070a0dcc;
          border-radius:5px;
          color:#dce5ef;
          font:9px monospace;
        }

        /* HEALTHCARE */

        .health{
          background:
            radial-gradient(circle at center,#31e8ff22,transparent 40%),
            linear-gradient(135deg,#06151a,#071017);
        }

        .healthCircle{
          width:210px;
          height:210px;
          position:absolute;
          left:50%;
          top:50%;
          transform:translate(-50%,-50%);
          border-radius:50%;
          border:1px solid #55e7ff55;
          box-shadow:
            0 0 50px #39dfff22,
            inset 0 0 40px #39dfff12;
          animation:scan 5s linear infinite;
        }

        .healthCircle:before,
        .healthCircle:after{
          content:"";
          position:absolute;
          inset:30px;
          border:1px dashed #55e7ff44;
          border-radius:50%;
        }

        .healthCircle:after{
          inset:60px;
        }

        @keyframes scan{
          to{
            transform:translate(-50%,-50%) rotate(360deg);
          }
        }

        .ecg{
          position:absolute;
          top:48%;
          left:0;
          right:0;
          color:#63e7ff;
          font-size:23px;
          white-space:nowrap;
          animation:ecg 4s linear infinite;
        }

        @keyframes ecg{
          from{
            transform:translateX(-70px);
          }
          to{
            transform:translateX(60px);
          }
        }

        .heart{
          position:absolute;
          top:29%;
          right:25%;
          color:#ff5d7b;
          font-size:50px;
          filter:drop-shadow(0 0 18px #ff4f7288);
          animation:beat 1.4s infinite;
        }

        @keyframes beat{
          50%{
            transform:scale(1.13);
          }
        }

        /* AVIATION */

        .aviation{
          background:
            radial-gradient(circle at 50% 45%,#777cff24,transparent 40%),
            linear-gradient(135deg,#0d1022,#07101c);
        }

        .aviationGrid{
          position:absolute;
          inset:-100px;
          background-image:
            linear-gradient(#858dff14 1px,transparent 1px),
            linear-gradient(90deg,#858dff14 1px,transparent 1px);
          background-size:35px 35px;
          transform:perspective(300px) rotateX(55deg);
          animation:grid 8s linear infinite;
        }

        @keyframes grid{
          to{
            transform:perspective(300px) rotateX(55deg) translateY(35px);
          }
        }

        .plane{
          position:absolute;
          left:45%;
          top:38%;
          font-size:60px;
          color:#b1b5ff;
          filter:drop-shadow(0 0 20px #777cff);
          transform:rotate(-20deg);
          animation:plane 5s ease-in-out infinite;
        }

        @keyframes plane{
          50%{
            transform:translate(50px,-25px) rotate(-20deg);
          }
        }

        .flightLine{
          position:absolute;
          width:200px;
          height:80px;
          border-top:1px dashed #8b91ff66;
          border-radius:50%;
        }

        .flightLine.one{
          left:8%;
          top:52%;
          transform:rotate(-18deg);
        }

        .flightLine.two{
          right:5%;
          top:25%;
          transform:rotate(20deg);
        }

        /* MENTOR */

        .mentor{
          background:
            radial-gradient(circle at center,#a979ff20,transparent 45%),
            linear-gradient(135deg,#140d22,#0a1019);
        }

        .person{
          position:absolute;
          color:#c2a5ff;
          font-size:55px;
          filter:drop-shadow(0 0 15px #a87cff);
          animation:pulse 2s infinite;
        }

        .person.one{
          left:25%;
          top:28%;
        }

        .person.two{
          right:25%;
          top:45%;
        }

        .person.three{
          left:42%;
          bottom:18%;
          font-size:45px;
        }

        .connection{
          position:absolute;
          width:210px;
          height:1px;
          background:linear-gradient(90deg,transparent,#b28cff,transparent);
          left:30%;
          top:50%;
        }

        .connection.one{
          transform:rotate(22deg);
        }

        .connection.two{
          transform:rotate(-22deg);
        }

        .connection.three{
          transform:rotate(90deg);
          width:120px;
          left:46%;
          top:55%;
        }

        @keyframes pulse{
          50%{
            transform:scale(1.15);
            opacity:.7;
          }
        }

        /* LOGISTICS */

        .logistics{
          background:
            radial-gradient(circle at center,#b8ff4518,transparent 45%),
            linear-gradient(135deg,#0b1710,#07100c);
        }

        .map{
          position:absolute;
          inset:0;
          background:
            linear-gradient(115deg,transparent 40%,#b8ff4512 41%,transparent 42%),
            linear-gradient(25deg,transparent 55%,#b8ff4510 56%,transparent 57%);
          background-size:80px 80px;
          animation:map 8s linear infinite;
        }

        @keyframes map{
          to{
            background-position:80px 80px;
          }
        }

        .location{
          position:absolute;
          color:#b8ff45;
          font-size:18px;
          filter:drop-shadow(0 0 12px #b8ff45);
          animation:pulse 2s infinite;
        }

        .location.a{
          left:20%;
          top:32%;
        }

        .location.b{
          right:20%;
          bottom:28%;
        }

        .truck{
          position:absolute;
          left:42%;
          top:40%;
          font-size:62px;
          color:#e5f6d1;
          filter:drop-shadow(0 0 20px #b8ff4577);
          animation:truck 4s ease-in-out infinite;
        }

        @keyframes truck{
          50%{
            transform:translateX(55px);
          }
        }

        .projectInfo{
          padding:22px 24px 25px;
        }

        .projectType{
          display:flex;
          justify-content:space-between;
          color:#697689;
          font:9px monospace;
        }

        .project h3{
          font-size:24px;
          margin:22px 0 10px;
        }

        .projectInfo>p{
          color:#7e8a9c;
          font-size:12px;
          line-height:1.75;
        }

        .tech{
          display:flex;
          flex-wrap:wrap;
          gap:6px;
          margin:18px 0;
        }

        .tech span{
          background:#111821;
          border:1px solid #202b38;
          padding:6px 8px;
          color:#98a5b6;
          font:9px monospace;
          border-radius:4px;
        }

        .result{
          border-top:1px solid #1d2633;
          padding-top:15px;
          display:flex;
          justify-content:space-between;
          color:#b8ff45;
          font:10px monospace;
        }

        .contact{
          padding-top:150px;
          padding-bottom:150px;
          text-align:center;
          border-top:1px solid #1d2633;
          position:relative;
        }

        .contact h2{
          font-size:clamp(48px,7vw,86px);
          margin:22px 0;
        }

        .contact p{
          max-width:560px;
          margin:0 auto 30px;
          color:#788497;
          line-height:1.7;
        }

        .email{
          display:inline-block;
          font-size:clamp(19px,2.5vw,30px);
          font-weight:700;
          border-bottom:1px solid #657185;
          padding-bottom:8px;
        }

        .social{
          display:flex;
          justify-content:center;
          gap:30px;
          margin-top:35px;
        }

        .social a{
          color:#8995a7;
          font:10px monospace;
          text-transform:uppercase;
        }

        footer{
          border-top:1px solid #1d2633;
          padding-top:25px;
          padding-bottom:25px;
          display:flex;
          justify-content:space-between;
          color:#526072;
          font:9px monospace;
          text-transform:uppercase;
        }

        @media(max-width:850px){

          .navlinks{
            display:none;
          }

          .navlinks.show{
            display:flex;
            position:absolute;
            top:78px;
            left:0;
            right:0;
            background:#05070bf5;
            padding:25px;
            flex-direction:column;
            border-bottom:1px solid #202936;
          }

          .hire{
            display:none;
          }

          .menu{
            display:block;
          }

          .hero{
            grid-template-columns:1fr;
            padding-top:90px;
          }

          .aboutGrid{
            grid-template-columns:1fr;
            gap:35px;
          }

          .skills{
            grid-template-columns:1fr 1fr;
          }

          .projects{
            grid-template-columns:1fr;
          }

          .titleRow{
            display:block;
          }

        }

        @media(max-width:520px){

          .wrap{
            padding-left:19px;
            padding-right:19px;
          }

          h1{
            font-size:48px;
          }

          .skills{
            grid-template-columns:1fr;
          }

          .hero{
            min-height:auto;
            padding-top:80px;
            padding-bottom:80px;
          }

          .code{
            font-size:10px;
          }

          .meta{
            flex-direction:column;
            gap:8px;
          }

          .stats{
            gap:15px;
          }

          .stats strong{
            font-size:22px;
          }

          .job{
            grid-template-columns:1fr;
            gap:10px;
          }

          footer{
            flex-direction:column;
            gap:10px;
          }

        }

      `}</style>

      <nav className="nav">

        <a href="#home" className="logo">
          <span className="logoBox">SC</span>
          <b>Sikandar<span>.</span></b>
        </a>

        <div className={"navlinks "+(menu ? "show":"")}>

          {["home","about","skills","experience","projects","contact"].map(x => (

            <a
              key={x}
              href={"#"+x}
              className={active===x ? "active":""}
              onClick={()=>setMenu(false)}
            >
              {x}
            </a>

          ))}

        </div>

        <a className="hire" href="#contact">
          Hire me <Arrow/>
        </a>

        <button className="menu" onClick={()=>setMenu(!menu)}>
          {menu ? "×" : "☰"}
        </button>

      </nav>

      <main>

        <section id="home" className="hero wrap">

          <div>

            <div className="status">
              <i></i>
              SOFTWARE ENGINEER · FRONTEND SPECIALIST
            </div>

            <h1>
              Building digital products
              <br/>
              <span>that feel exceptional.</span>
            </h1>

            <p className="heroText">
              I build scalable, high-performance web applications with
              <b> React.js, TypeScript</b> and modern frontend architecture —
              from pixel-perfect UI to production deployment.
            </p>

            <div className="buttons">

              <a className="button primary" href="#projects">
                View selected work <Arrow/>
              </a>

              <a className="button secondary" href="#contact">
                Let's talk
              </a>

            </div>

            <div className="meta">
              <span>5+ Years Experience</span>
              <span>React.js Specialist</span>
              <span>Enterprise Products</span>
            </div>

          </div>

          <div>

            <div className="codeWindow">

              <div className="codeTop">

                <div className="dots">
                  <i></i><i></i><i></i>
                </div>

                developer.tsx

                <span>●</span>

              </div>

              <div className="code">

                <p>
                  <small className="line">01</small>
                  <span className="purple">const</span>{" "}
                  <span className="blue">developer</span> = {"{"}
                </p>

                <p>
                  <small className="line">02</small>
                  name: <span className="green">"Sikandar Chauhan"</span>,
                </p>

                <p>
                  <small className="line">03</small>
                  role: <span className="green">"Software Engineer"</span>,
                </p>

                <p>
                  <small className="line">04</small>
                  experience: <span className="orange">"5+ years"</span>,
                </p>

                <p>
                  <small className="line">05</small>
                  stack: [<span className="green">"React"</span>,{" "}
                  <span className="green">"TypeScript"</span>],
                </p>

                <p>
                  <small className="line">06</small>
                  mindset: <span className="green">"Build · Improve · Ship"</span>
                </p>

                <p>
                  <small className="line">07</small>
                  {"};"}
                </p>

              </div>

              <div className="codeBottom">
                <strong>● Available for opportunities</strong>
                <span>React / TS</span>
              </div>

            </div>

          </div>

        </section>

        <section id="about" className="section wrap">

          <div className="tag">01 / ABOUT ME</div>

          <div className="aboutGrid">

            <h2>
              Not just code.
              <br/>
              <span>Product thinking.</span>
            </h2>

            <div className="aboutText">

              <p>
                Frontend Developer with 5+ years of experience building
                scalable web applications using React.js, Next.js,
                TypeScript and modern frontend architectures.
              </p>

              <p>
                I translate Figma designs into responsive interfaces,
                integrate REST APIs, optimize performance and build reusable
                components that teams can maintain.
              </p>

              <div className="stats">

                <div>
                  <strong>35%</strong>
                  <small>page-load improvement</small>
                </div>

                <div>
                  <strong>40%</strong>
                  <small>response-time reduction</small>
                </div>

                <div>
                  <strong>99.99%</strong>
                  <small>reported uptime</small>
                </div>

              </div>

            </div>

          </div>

        </section>

        <section id="skills" className="section wrap">

          <div className="tag">02 / TOOLBOX</div>

          <div className="titleRow">

            <h2>
              My <span>stack.</span>
            </h2>

            <p>
              Tools I use to design, build, optimize and ship
              production applications.
            </p>

          </div>

          <div className="skills">

            {skills.map((skill,i)=>(

              <div className="skill" key={skill}>

                <small>
                  {String(i+1).padStart(2,"0")}
                </small>

                <span>{skill}</span>

                <Arrow/>

              </div>

            ))}

          </div>

        </section>

        <section id="experience" className="section wrap">

          <div className="tag">03 / EXPERIENCE</div>

          <div className="titleRow">

            <h2>
              Where I've <span>worked.</span>
            </h2>

            <p>
              Experience across healthcare, enterprise,
              education and logistics products.
            </p>

          </div>

          <div className="jobs">

            {experience.map((item,i)=>(

              <article className="job" key={item.company}>

                <div className="year">
                  {item.year}
                </div>

                <div>

                  <div className="role">
                    {item.role}
                  </div>

                  <h3>
                    {item.company}
                  </h3>

                  <p>
                    {item.tech}
                  </p>

                </div>

                <div className="number">
                  0{i+1}
                </div>

              </article>

            ))}

          </div>

        </section>

        <section id="projects" className="section wrap">

          <div className="tag">
            04 / SELECTED WORK
          </div>

          <div className="titleRow">

            <h2>
              Projects with <span>purpose.</span>
            </h2>

            <p>
              Domain-specific product experiences built with
              modern frontend technologies.
            </p>

          </div>

          <div className="projects">

            {projects.map(project=>(

              <article className="project" key={project.title}>

                <ProjectVisual type={project.visual}/>

                <div className="projectInfo">

                  <div className="projectType">

                    <span>PROJECT</span>

                    <span>
                      {project.type}
                    </span>

                  </div>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.desc}
                  </p>

                  <div className="tech">

                    {project.tech.map(t=>(
                      <span key={t}>{t}</span>
                    ))}

                  </div>

                  <div className="result">

                    <span>
                      ↗ {project.result}
                    </span>

                    <Arrow/>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </section>

        <section id="contact" className="contact wrap">

          <div className="tag">
            05 / CONTACT
          </div>

          <h2>
            Have a role in mind?
            <br/>
            <span>Let's build something.</span>
          </h2>

          <p>
            I'm open to frontend and software engineering opportunities
            where I can create meaningful, high-quality products.
          </p>

          <a
            className="email"
            href="mailto:sikandar30061994@gmail.com"
          >
            sikandar30061994@gmail.com <Arrow/>
          </a>

          <div className="social">

            <a href="tel:+919638308905">
              Phone ↗
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

          </div>

        </section>

      </main>

      <footer className="wrap">

        <span>
          © {new Date().getFullYear()} Sikandar Chauhan
        </span>

        <span>
          Designed & built with React
        </span>

      </footer>

    </div>
  );
}

createRoot(
  document.getElementById("root")
).render(<App/>);