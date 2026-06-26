import profilePhoto from "@/assets/profile.jpeg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SplitText } from "@/components/SplitText";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Mail, Phone, Github, Linkedin, ArrowDown, Code2, Database,
  Globe, Wrench, Cpu, GraduationCap, Award, Briefcase, FolderGit2,
  ExternalLink, MapPin, FileSpreadsheet
} from "lucide-react";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  { icon: Code2, title: "Programming", items: [
    { name: "C", level: 80 },
    { name: "Python", level: 75 },
  ]},
  { icon: Globe, title: "Web", items: [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 70 },
  ]},
  { icon: Database, title: "Database", items: [
    { name: "MySQL", level: 75 },
    { name: "SQL", level: 75 },
  ]},
  { icon: Cpu, title: "ECE", items: [
    { name: "Digital Logic Design", level: 85 },
    { name: "VLSI Design", level: 75 },
  ]},
  { icon: Wrench, title: "Tools", items: [
    { name: "GitHub", level: 80 },
    { name: "VS Code", level: 90 },
  ]},
  { icon: FileSpreadsheet, title: "Office", items: [
    { name: "MS Excel", level: 80 },
    { name: "MS Word", level: 90 },
    { name: "MS PowerPoint", level: 85 },
  ]},
];

const PROJECTS = [
  {
    title: "Voice-Controlled Smart Home Automation",
    stack: ["Arduino", "Bluetooth", "C"],
    desc: "Built a voice-driven home automation system on Arduino Uno using a Bluetooth module and relays to wirelessly control LEDs, motors, and sensors — improving accessibility through speech recognition.",
  },
  {
    title: "Bus Reservation System",
    stack: ["C", "File Handling"],
    desc: "Command-line booking platform in C that lets users view bus details, check seat availability, and reserve tickets. Persistent file handling keeps reservation data secure across sessions.",
  },
  {
    title: "Personal Portfolio Website",
    stack: ["HTML", "CSS", "JavaScript"],
    desc: "Designed a fully responsive personal portfolio with smooth navigation and organized project showcases — focused on clean typography and refined motion.",
  },
  {
    title: "Apple Clone Website",
    stack: ["HTML", "CSS"],
    desc: "Recreated Apple's marketing site with pixel-perfect layout and full responsiveness across breakpoints — a deep study in spacing, hierarchy, and modern web design.",
  },
];

const CERTS = [
  { title: "Python / Python Django", issuer: "ExcelR EdTech Pvt. Ltd" },
  { title: "Fundamentals of Artificial Intelligence", issuer: "NPTEL" },
  { title: "Smart Speech Improvement Platform", issuer: "Infosys Springboard" },
  { title: "IT Essentials — Hardware and Software", issuer: "Cisco Networking Academy" },
];

const EXPERIENCE = [
  {
    role: "Python / Django Intern",
    company: "ExcelR EdTech Pvt. Ltd",
    period: "May 2025 – Jul 2025",
    subtitle: "Backend Web Development",
    points: [
      "Completed a focused short-term internship in Python and Django.",
      "Learned Python fundamentals and Django basics for backend web development.",
      "Built sample Django apps using models, views, and URL routing.",
    ],
  },
  {
    role: "Virtual Intern",
    company: "Infosys Springboard",
    period: "2024",
    subtitle: "Smart Speech Improvement Platform — Adaptive Practice & Real-Time Tracking",
    points: [
      "Contributed to a Smart Speech Improvement Platform with adaptive practice and live tracking.",
      "Collaborated across frontend, backend, and NLP teams to ship a user-friendly solution.",
      "Strengthened real-world development, teamwork, and problem-solving skills.",
    ],
  },
  {
    role: "Final Assembly Intern — Quality Testing",
    company: "AIL Dixon Technologies",
    period: "Dec 2022 – May 2023",
    subtitle: "CCTV Camera Manufacturing",
    points: [
      "6-month internship in the Final Assembly department of CCTV manufacturing.",
      "Hands-on experience in quality testing and hardware verification.",
      "Collaborated with the team to meet production and operational targets.",
      "Sharpened problem-solving, teamwork, and on-floor communication.",
    ],
  },
];

const EDU = [
  {
    school: "Sri Venkateswara College of Engineering, Kadapa",
    degree: "B.Tech — Electronics and Communication Engineering",
    year: "2023 – 2026",
    score: "82.92%",
  },
  {
    school: "Govt. Polytechnic for Women, Kadapa",
    degree: "Diploma — Electronics and Communication Engineering",
    year: "2020 – 2023",
    score: "84.59%",
  },
  {
    school: "Siddartha English Medium School, Kadapa",
    degree: "Secondary School Certificate (SSC)",
    year: "2020",
    score: "98.6%",
  },
];

const STRENGTHS = [
  "Time Management",
  "Team Collaboration",
  "Problem Solving",
  "Adaptability",
  "Quick Learning",
  "Strong Work Ethic",
];

const Section = ({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="container py-24 scroll-mt-20">
    <div className="mb-14 max-w-2xl reveal">
      <p className="font-mono text-sm text-primary mb-3">// {eyebrow}</p>
      <SplitText as="h2" text={title} className="text-4xl md:text-5xl font-bold tracking-tight block" step={0.03} />
    </div>
    <div className="reveal">{children}</div>
  </section>
);

const Index = () => {
  const rootRef = useScrollReveal<HTMLDivElement>();
  return (
    <div ref={rootRef} className="min-h-screen scroll-smooth">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
        <nav className="container flex items-center justify-between h-16">
          <a href="#" className="font-bold text-lg tracking-tight">
            Shaik Kanishka Karim
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-muted-foreground hover:text-foreground transition-smooth">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild size="sm" className="rounded-full">
              <a href="#contact">Let's talk</a>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative gradient-hero pt-32 pb-24 overflow-hidden">
        <div className="container flex flex-col items-center text-center">
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 rounded-full gradient-primary blur-2xl opacity-40 animate-float" />
            <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden ring-4 ring-background shadow-elegant bg-transparent">
              <img
                src={profilePhoto}
                alt="Shaik Kanishka Karim"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-bold tracking-tight text-center text-white">
            Shaik Kanishka Karim
          </h1>

          <p className="mt-5 text-lg md:text-xl text-muted-foreground text-center animate-fade-up" style={{ animationDelay: "0.1s" }}>
            B.Tech Graduate | Passionate About Technology and Continuous Learning
          </p>


          <div className="mt-10 flex flex-wrap gap-3 justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button asChild size="lg" className="rounded-full hover-scale">
              <a href="#projects">View my work</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full hover-scale">
              <a href="#contact">Get in touch</a>
            </Button>
          </div>

          <div className="mt-16 animate-float text-muted-foreground">
            <ArrowDown className="w-5 h-5" />
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" eyebrow="about" title="A little about me">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-5">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a results-driven B.Tech student with a strong foundation in Electronics and
              Communication Engineering. I love translating ideas into thoughtful, responsive web
              experiences and applying technology to solve real-world problems.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              My academic record reflects my dedication, and I'm constantly learning across the
              stack — from hardware-level ECE concepts to modern web and Python development.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {STRENGTHS.map((s) => (
                <Badge key={s} variant="secondary" className="rounded-full font-normal">{s}</Badge>
              ))}
            </div>
          </div>
          <Card className="p-6 rounded-2xl border-border shadow-soft">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <MapPin className="w-4 h-4" /> Kadapa, India
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between"><span className="text-muted-foreground">Focus</span><span className="font-medium">Technology & Web Development</span></li>
              <li className="flex justify-between"><span className="text-muted-foreground">Status</span><span className="font-medium">B.Tech Graduate</span></li>
              <li className="flex justify-between"><span className="text-muted-foreground">Open to</span><span className="font-medium">Job Opportunities & Professional Collaborations</span></li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" eyebrow="skills" title="Tools I work with">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((s, i) => (
            <Card
              key={s.title}
              className="group p-6 rounded-2xl border-border shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground mb-4 group-hover:scale-110 transition-smooth">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-4">{s.title}</h3>
              <div className="space-y-3">
                {s.items.map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-foreground/90">{item.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">{item.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full gradient-primary transition-all duration-1000 ease-out"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" eyebrow="projects" title="Selected work">
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <Card key={p.title} className="group relative overflow-hidden p-8 rounded-2xl border-border shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-smooth gradient-hero pointer-events-none" />
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <FolderGit2 className="w-10 h-10 text-primary group-hover:scale-110 transition-smooth" />
                  <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <Badge key={t} variant="outline" className="rounded-full font-mono text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" eyebrow="experience" title="Internships">
        <div className="space-y-6">
          {EXPERIENCE.map((x) => (
            <Card key={x.role + x.company} className="p-8 rounded-2xl border-border shadow-soft hover:shadow-elegant transition-smooth">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center text-primary-foreground shrink-0">
                  <Briefcase className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-2xl font-semibold">{x.role}</h3>
                    <Badge className="rounded-full">{x.company}</Badge>
                    <span className="font-mono text-xs text-muted-foreground">{x.period}</span>
                  </div>
                  {x.subtitle && (
                    <p className="text-muted-foreground italic mb-4">{x.subtitle}</p>
                  )}
                  <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                    {x.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" eyebrow="education" title="Where I studied">
        <div className="grid md:grid-cols-3 gap-6">
          {EDU.map((e) => (
            <Card key={e.school} className="p-7 rounded-2xl border-border shadow-soft hover:shadow-elegant transition-smooth">
              <GraduationCap className="w-9 h-9 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-1">{e.school}</h3>
              <p className="text-muted-foreground text-sm mb-4">{e.degree}</p>
              <div className="flex justify-between text-sm font-mono">
                <span className="text-muted-foreground">{e.year}</span>
                <span className="text-primary font-semibold">{e.score}</span>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section id="certifications" eyebrow="certifications" title="Certifications">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTS.map((c) => (
            <Card key={c.title} className="p-6 rounded-2xl border-border shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth">
              <Award className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-semibold mb-2 leading-snug">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.issuer}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <section id="contact" className="container py-24 scroll-mt-20">
        <Card className="relative overflow-hidden p-10 md:p-16 rounded-3xl border-0 gradient-primary text-primary-foreground text-center shadow-elegant">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 0%, transparent 40%), radial-gradient(circle at 80% 80%, white 0%, transparent 40%)" }} />
          <div className="relative">
            <p className="font-mono text-sm opacity-80 mb-3">// contact</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's build something together</h2>
            <p className="opacity-90 max-w-xl mx-auto mb-10">
              I'm open to job opportunities, internships, and professional collaborations. Feel free to reach out.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto text-left">
              <a href="mailto:kanishkakarimshaik@gmail.com" className="flex items-center gap-3 rounded-2xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth p-4">
                <Mail className="w-5 h-5 shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs opacity-70">Email</p>
                  <p className="font-medium truncate">kanishkakarimshaik@gmail.com</p>
                </div>
              </a>
              <a href="tel:+919052086457" className="flex items-center gap-3 rounded-2xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth p-4">
                <Phone className="w-5 h-5 shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs opacity-70">Phone</p>
                  <p className="font-medium truncate">+91 90520 86457</p>
                </div>
              </a>
              <a href="https://github.com/kanishkashaik" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth p-4">
                <Github className="w-5 h-5 shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs opacity-70">GitHub</p>
                  <p className="font-medium truncate">github.com/kanishkashaik</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/shaik-kanishka-karim" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth p-4">
                <Linkedin className="w-5 h-5 shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs opacity-70">LinkedIn</p>
                  <p className="font-medium truncate">in/shaik-kanishka-karim</p>
                </div>
              </a>
            </div>
          </div>
        </Card>
      </section>

      <footer className="border-t border-border">
        <div className="container py-8 text-center text-sm text-muted-foreground">
          © 2026 Shaik Kanishka Karim · Crafted with care
        </div>
      </footer>
    </div>
  );
};

export default Index;
