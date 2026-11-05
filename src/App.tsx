"use client";
import { useEffect, useState } from "react";
import { ThemeProvider, useTheme } from "next-themes";
import { BadgeCheck, BookOpen, BriefcaseBusiness, Check, ChevronDown, Code2, Copy, Database, Download, ExternalLink, GraduationCap, Mail, MapPin, Menu, MessageCircle, Moon, Network, Palette, Sun, Terminal, Trophy, X, ZoomIn } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Github({size = 20}: {size?: number; strokeWidth?: number}) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>; }
function Linkedin({size = 20}: {size?: number; strokeWidth?: number}) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>; }

const profile = {
  name: "Alif Nur Rachman", email: "alifnurrachman25@gmail.com",
  github: "https://github.com/alifnurrachman25", linkedin: "https://www.linkedin.com/in/alif-nur-rachman/",
  whatsapp: "https://wa.me/6282152069360", previousPortfolio: "https://portofolio-alif-three.vercel.app/",
  cv: "/documents/CV-Alif-Nur-Rachman.pdf",
};
type Project = { id: string; title: string; category: string; label: string; image: string; description: string; tools: string[]; repository?: string; role: string; highlights: string[] };
type Certificate = { id: string; title: string; issuer: string; date: string; badge: string; image: string; secondImage?: string; dialogImage?: string; original: string; filename: string; format: string; description: string };
const projects: Project[] = [
  { id: "pos", title: "POS Bakso Pak Tum", category: "Laravel", label: "POINT OF SALES", image: "/images/project-1.webp",
    description: "Sistem kasir untuk mengelola pesanan, pembayaran, menu, dan laporan keuangan warung bakso dan mie ayam.",
    tools: ["Laravel", "MySQL", "Blade", "JavaScript"], repository: "https://github.com/Alifnurrachman25/TugasAkhirCoba2", role: "Web Developer",
    highlights: ["Hak akses manager, cashier, dan admin.", "Pencatatan pesanan, perubahan transaksi, dan pembayaran.", "Pengelolaan menu serta riwayat transaksi dan pengeluaran.", "Dashboard untuk melihat penjualan dan laporan usaha."] },
  { id: "zakat", title: "Sistem Zakat Al-Ikhlas", category: "Laravel", label: "WEB APPLICATION", image: "/images/project-2.webp",
    description: "Aplikasi pengelolaan zakat Masjid Al-Ikhlas TBS 2 untuk pencatatan muzakki, pembayaran, dan infaq.",
    tools: ["Laravel", "MySQL", "Tailwind CSS"], repository: "https://github.com/Alifnurrachman25/web-zakat", role: "Web Developer",
    highlights: ["Pendataan muzakki dan jumlah jiwa dalam pembayaran zakat.", "Pengelolaan jenis zakat serta pilihan pembayaran uang atau beras.", "Perhitungan kewajiban zakat dan pencatatan infaq.", "Riwayat transaksi untuk membantu administrasi masjid."] },
  { id: "masjid", title: "Masjid Al-Ikhlas Profile Website", category: "React", label: "PROFILE WEBSITE", image: "/images/project-5.webp",
    description: "Website profil Masjid Al-Ikhlas TBS 2, Balikpapan Utara, untuk memperkenalkan masjid, kegiatan, fasilitas, dan jadwal salat kepada jamaah.",
    tools: ["React", "Next.js", "Prayer-Time API"], role: "Web Developer",
    highlights: ["Halaman profil, kegiatan, fasilitas, ramah anak, dan galeri masjid.", "Integrasi Prayer-Time API untuk menampilkan jadwal salat bagi pengunjung.", "Waktu salat ditampilkan dalam WITA beserta jam saat ini.", "Alamat dan tombol \u201CKunjungi masjid\u201D untuk membantu jamaah menemukan lokasi."] },
  { id: "ribcalls", title: "Ribcalls Fanbase Profile Website", category: "Laravel", label: "PROFILE WEBSITE", image: "/images/project-6.webp",
    description: "Website profil fanbase Ribcalls untuk menyajikan informasi dan identitas fanbase, dengan konten yang dikelola melalui dashboard admin.",
    tools: ["Laravel", "React", "Filament"], role: "Web Developer",
    highlights: ["Halaman Home, About Us, Galeri, dan Event untuk memperkenalkan fanbase.", "Bagian profil dengan biodata dan deskripsi singkat.", "Fitur CRUD (Create, Read, Update, Delete) menggunakan Filament untuk mengelola konten website.", "Dashboard admin sehingga konten dapat diperbarui tanpa mengubah kode."] },
  { id: "stock", title: "Manajemen Stok Toko", category: "Laravel", label: "INVENTORY MANAGEMENT", image: "/images/project-3.webp",
    description: "Website pengelolaan stok toko makanan untuk membantu pendataan barang dan kebutuhan operasional toko.",
    tools: ["Laravel", "MySQL", "Bootstrap"], repository: "https://github.com/Alifnurrachman25/UCP-4-ManajemenToko", role: "Web Developer",
    highlights: ["Pengelolaan data barang melalui aplikasi web.", "Pencatatan dan pembaruan persediaan toko.", "Antarmuka berbasis Bootstrap untuk mengakses informasi stok.", "Penyimpanan data terstruktur menggunakan MySQL."] },
  { id: "portfolio", title: "Personal Web Portfolio", category: "React", label: "FRONTEND DEVELOPMENT", image: "/images/project-4.webp",
    description: "Portofolio pribadi untuk memperkenalkan profil, keahlian, dan karya pengembangan web dalam satu tempat.",
    tools: ["React", "Next.js", "Tailwind CSS"], repository: "https://github.com/Alifnurrachman25/portofolio-test", role: "Frontend Developer",
    highlights: ["Halaman profil, teknologi, dan proyek pilihan.", "Tampilan responsif untuk perangkat desktop dan mobile.", "Komponen antarmuka dengan React dan Next.js.", "Tautan repositori serta kontak profesional."] },
];
const certificates: Certificate[] = [
  { id: "bnsp", title: "Certified Web Developer", issuer: "BNSP · LSP Informatika", date: "14 Februari 2025", badge: "SERTIFIKASI KOMPETENSI",
    image: "/certificates/bnsp-page-1.webp", secondImage: "/certificates/bnsp-page-2.webp", original: "/certificates/sertifikat-bnsp.pdf", filename: "Sertifikat-BNSP-Alif-Nur-Rachman.pdf", format: "PDF · 2 halaman",
    description: "Sertifikasi kompetensi Pengembang Web (CWDev) pada bidang Pengembangan Perangkat Lunak dan Pemrograman. Diterbitkan 14 Februari 2025 dengan masa berlaku tiga tahun." },
  { id: "mtcna", title: "MikroTik Certified Network Associate (MTCNA)", issuer: "MikroTik", date: "3 November 2026", badge: "SERTIFIKASI JARINGAN",
    image: "/certificates/mtcna.webp", dialogImage: "/certificates/mtcna.webp", original: "/certificates/sertifikat-mtcna.pdf", filename: "Sertifikat-MTCNA-Alif-Nur-Rachman.pdf", format: "PDF",
    description: "Sertifikasi MikroTik Certified Network Associate (MTCNA) atas penyelesaian pelatihan dan persyaratan sertifikasi. Diterbitkan 3 November 2026 dengan masa berlaku tiga tahun." },
  { id: "ccna-intro", title: "CCNAv7: Introduction to Networks", issuer: "Cisco Networking Academy", date: "17 Februari 2023", badge: "KURSUS JARINGAN",
    image: "/certificates/ccna-intro.webp", dialogImage: "/certificates/ccna-intro.webp", original: "/certificates/sertifikat-ccna-introduction.pdf", filename: "Sertifikat-CCNA-Introduction-to-Networks-Alif-Nur-Rachman.pdf", format: "PDF",
    description: "Penyelesaian kursus CCNAv7: Introduction to Networks melalui program Cisco Networking Academy, mencakup dasar-dasar jaringan komputer." },
  { id: "ccna-addressing", title: "Network Addressing and Basic Troubleshooting", issuer: "Cisco Networking Academy", date: "13 Desember 2023", badge: "KURSUS JARINGAN",
    image: "/certificates/ccna-network-addressing.webp", dialogImage: "/certificates/ccna-network-addressing.webp", original: "/certificates/sertifikat-ccna-network-addressing.pdf", filename: "Sertifikat-CCNA-Network-Addressing-Alif-Nur-Rachman.pdf", format: "PDF",
    description: "Penyelesaian kursus Network Addressing and Basic Troubleshooting: dasar jaringan, pengalamatan IPv6, router, switch, dan penanganan masalah konektivitas." },
  { id: "deployment", title: "Deployment Perangkat Lunak", issuer: "TLab · PT. Teknologi Kode Indonesia", date: "Juni 2024", badge: "KURSUS PENGEMBANGAN",
    image: "/certificates/deployment.webp", dialogImage: "/certificates/deployment.webp", original: "/certificates/sertifikat-deployment.pdf", filename: "Sertifikat-Deployment-Perangkat-Lunak-Alif-Nur-Rachman.pdf", format: "PDF",
    description: "Sertifikat penyelesaian pelatihan Deployment Perangkat Lunak dari TLab (PT. Teknologi Kode Indonesia), diselesaikan pada Juni 2024." },
  { id: "intern", title: "Magang Web Development", issuer: "Dinas Kominfosan Kota Yogyakarta", date: "12 Maret–12 Juni 2024", badge: "PENGALAMAN PROFESIONAL",
    image: "/certificates/magang-preview.webp", original: "/certificates/sertifikat-magang.jpg", filename: "Sertifikat-Magang-Alif-Nur-Rachman.jpg", format: "JPG",
    description: "Sertifikat penyelesaian magang / kerja praktik di Dinas Komunikasi Informatika dan Persandian Kota Yogyakarta, 12 Maret hingga 12 Juni 2024." },
];
const skills = [
  { icon: Code2, title: "Frontend Development", description: "Membangun antarmuka yang responsif dan nyaman digunakan.", tags: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap"] },
  { icon: Database, title: "Backend & Database", description: "Menghubungkan alur aplikasi dengan data yang terstruktur.", tags: ["PHP", "Laravel", "REST API", "MySQL", "SQLite", "SQL Server"] },
  { icon: Network, title: "Networking & IT", description: "Dasar jaringan dan penanganan masalah konektivitas.", tags: ["TCP/IP", "IPv6", "OSPF", "NAT", "VLAN", "Cisco Packet Tracer"] },
  { icon: Palette, title: "Design & Workflow", description: "Merancang pengalaman pengguna dan berkolaborasi dalam proyek.", tags: ["Figma", "Git & GitHub", "VS Code", "Photoshop", "Canva", "Microsoft Office"] },
];
const nav = [{ href: "#tentang", text: "Tentang" }, { href: "#keahlian", text: "Keahlian" }, { href: "#proyek", text: "Proyek" }, { href: "#sertifikat", text: "Sertifikat" }];
function SocialLinks({ withLabels = false }: { withLabels?: boolean }) {
  const links = [{ label: "GitHub", href: profile.github, icon: Github }, { label: "LinkedIn", href: profile.linkedin, icon: Linkedin }, { label: "WhatsApp", href: profile.whatsapp, icon: MessageCircle }, { label: "Email", href: `mailto:${profile.email}`, icon: Mail }];
  return <div className={`social-links ${withLabels ? "with-labels" : ""}`}>{links.map(({ label, href, icon: Icon }) => <a key={label} href={href} target={href.startsWith("https") ? "_blank" : undefined} rel="noopener noreferrer" aria-label={label} title={label}><Icon size={19} strokeWidth={1.7} />{withLabels && <span>{label}</span>}</a>)}</div>;
}
function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <p className="section-label"><span>{number}</span>{children}</p>;
}
function Portfolio() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [copied, setCopied] = useState(false);
  const [modal, setModal] = useState<{ type: "project" | "certificate"; id: string } | null>(null);
  const selectedProject = modal?.type === "project" ? projects.find(p => p.id === modal.id) : undefined;
  const selectedCertificate = modal?.type === "certificate" ? certificates.find(c => c.id === modal.id) : undefined;
  useEffect(() => {
    setMounted(true);
    document.documentElement.classList.add("motion-ready");
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("revealed"); revealObserver.unobserve(entry.target); } });
    }, { threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
    const navObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(`#${entry.target.id}`); });
    }, { rootMargin: "-20% 0px -65% 0px", threshold: 0 });
    document.querySelectorAll("section[id]").forEach(el => navObserver.observe(el));
    return () => { revealObserver.disconnect(); navObserver.disconnect(); };
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [menuOpen]);
  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2500);
    return () => window.clearTimeout(timer);
  }, [copied]);
  async function copyEmail() {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); }
    catch { window.location.href = `mailto:${profile.email}`; }
  }
  return <>
    <a className="skip-link" href="#main">Langsung ke konten</a>
    <header className="site-header"><div className="container header-inner">
      <a className="wordmark" href="#beranda" aria-label="Alif, beranda"><span className="logo-mark"><Code2 size={22} /></span>alif<span className="wordmark-dot">.</span><span className="wordmark-caption">IT PORTFOLIO</span></a>
      <nav className="desktop-nav" aria-label="Navigasi utama">{nav.map(link => <a href={link.href} key={link.href} className={active === link.href ? "active" : ""}>{link.text}</a>)}</nav>
      <div className="header-actions"><button className="theme-toggle" type="button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={mounted && theme === "dark" ? "Aktifkan light mode" : "Aktifkan dark mode"} title={mounted && theme === "dark" ? "Light mode" : "Dark mode"}>{mounted && theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}</button><a className="header-contact" href="#kontak">Mari terhubung</a><button className="mobile-menu-button" type="button" aria-label={menuOpen ? "Tutup menu" : "Buka menu"} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={23} /> : <Menu size={23} />}</button></div>
    </div>{menuOpen && <nav className="mobile-nav" id="mobile-nav" aria-label="Navigasi mobile">{[...nav, { href: "#pengalaman", text: "Pengalaman" }, { href: "#kontak", text: "Kontak" }].map(link => <a href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>{link.text}</a>)}</nav>}</header>
    <main id="main">
      <section className="hero" id="beranda" aria-labelledby="hero-title"><div className="hero-grid" aria-hidden="true" /><span className="hero-side left" aria-hidden="true">A LITTLE CURIOSITY. A LOT OF BUILDING.</span><span className="hero-side right" aria-hidden="true">BALIKPAPAN, INDONESIA / 2026</span><div className="container hero-content">
        <div className="portrait-wrap intro-enter"><div className="portrait-frame"><img src="/images/alif-photo.webp" alt="Foto Alif Nur Rachman mengenakan jas almamater Universitas Muhammadiyah Yogyakarta" width={449} height={685} fetchPriority="high" /></div><span className="portrait-badge" title="BNSP Certified Web Developer"><BadgeCheck size={23} /></span></div>
        <p className="hero-eyebrow intro-enter delay-1"><span className="availability-dot" />TERBUKA UNTUK PELUANG IT</p>
        <h1 id="hero-title" className="intro-enter delay-2">Halo, saya<br /><span>Alif Nur Rachman</span><span className="hero-period">.</span></h1>
        <p className="hero-role intro-enter delay-3">Frontend Developer <span>/</span> IT Enthusiast</p><p className="hero-description intro-enter delay-3">Mengubah kebutuhan menjadi aplikasi yang fungsional,<br className="desktop-break" /> responsif, dan nyaman digunakan.</p>
        <div className="hero-buttons intro-enter delay-4"><a className="button primary" href="#proyek"><Code2 size={18} />Lihat proyek saya</a><a className="button secondary" href={profile.cv} download="CV-Alif-Nur-Rachman.pdf"><Download size={18} />Unduh CV</a></div>
        <div className="hero-social intro-enter delay-4"><span className="social-divider" /><SocialLinks /><span className="social-divider" /></div><a className="scroll-cue" href="#tentang" aria-label="Jelajahi tentang Alif"><span>KENALI SAYA LEBIH DEKAT</span><ChevronDown size={18} /></a>
      </div></section>
      <div className="container credentials-strip reveal"><div className="credential"><span className="credential-icon"><Trophy size={23} /></span><div><strong>Best Graduate 2025</strong><span>Program Studi TI · UMY</span></div></div><div className="credential"><span className="credential-icon"><GraduationCap size={25} /></span><div><strong>3,87 <small>/ 4,00</small></strong><span>IPK · Cumlaude</span></div></div><div className="credential"><span className="credential-icon"><BadgeCheck size={25} /></span><div><strong>BNSP Certified</strong><span>Certified Web Developer</span></div></div></div>
      <section className="section container about-section" id="tentang" aria-labelledby="about-title"><div className="about-heading reveal"><SectionLabel number="01">TENTANG SAYA</SectionLabel><h2 id="about-title">Senang belajar.<br />Suka membangun<span className="accent">.</span></h2><p className="about-location"><MapPin size={17} />Balikpapan, Kalimantan Timur</p></div><div className="about-copy reveal"><p>Saya Alif, lulusan S1 Teknologi Informasi <strong>Universitas Muhammadiyah Yogyakarta</strong>. Fokus saya adalah pengembangan web dan frontend: membuat sistem yang bekerja dengan baik, sekaligus mudah digunakan.</p><p>Pengalaman saya mencakup aplikasi kasir, pengelolaan zakat, dan manajemen stok. Saya juga memiliki dasar pengembangan Android, database, serta jaringan komputer, dan terbuka untuk berkembang dalam peran web development maupun IT.</p><div className="education-note"><GraduationCap size={24} /><div><strong>S1 Teknologi Informasi</strong><span>Universitas Muhammadiyah Yogyakarta · 2021–2025</span></div></div></div></section>
      <section className="skills-section" id="keahlian" aria-labelledby="skills-title"><div className="container section"><div className="section-heading reveal"><div><SectionLabel number="02">KEAHLIAN & TEKNOLOGI</SectionLabel><h2 id="skills-title">Tools untuk mewujudkan ide<span className="accent">.</span></h2></div><p>Dari antarmuka hingga data,<br />dari desain hingga implementasi.</p></div><div className="skills-grid">{skills.map(({ icon: Icon, title, description, tags }, i) => <article className="skill-card reveal" style={{ transitionDelay: `${i * 65}ms` }} key={title}><div className="skill-icon"><Icon size={25} strokeWidth={1.6} /></div><h3>{title}</h3><p>{description}</p><div className="tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div><div className="learning-note reveal"><BookOpen size={18} /><p>Terus belajar dan memperdalam <strong>React, Next.js, dan TypeScript.</strong></p></div></div></section>
      <section className="section container projects-section" id="proyek" aria-labelledby="projects-title"><div className="section-heading reveal"><div><SectionLabel number="03">PROYEK PILIHAN</SectionLabel><h2 id="projects-title">Dari kebutuhan,<br />menjadi aplikasi<span className="accent">.</span></h2></div><p>Beberapa proyek yang saya kerjakan<br />untuk kebutuhan nyata sehari-hari.</p></div>
        <Tabs defaultValue="Semua" className="project-tabs"><TabsList className="filter-tabs" aria-label="Filter proyek">{["Semua", "Laravel", "React"].map(filter => <TabsTrigger className="filter-tab" value={filter} key={filter}>{filter}<span className="filter-count">{filter === "Semua" ? projects.length : projects.filter(p => p.category === filter).length}</span></TabsTrigger>)}</TabsList>{["Semua", "Laravel", "React"].map(filter => <TabsContent value={filter} key={filter}><div className="projects-grid">{projects.filter(p => filter === "Semua" || p.category === filter).map(project => <article className="project-card" key={project.id}><button className={`project-image project-image-${project.id}`} onClick={() => setModal({ type: "project", id: project.id })} type="button" aria-label={`Lihat detail ${project.title}`}><div className="project-image-topline"><span><Terminal size={13} />{project.label}</span><span>{String(projects.indexOf(project) + 1).padStart(2, "0")}</span></div><img src={project.image} alt={`Tampilan aplikasi ${project.title}`} width={1400} height={800} loading="lazy" /><span className="project-image-overlay"><ZoomIn size={20} />Lihat detail proyek</span></button><div className="project-body"><div className="project-title-row"><h3>{project.title}</h3>{project.repository && <a href={project.repository} target="_blank" rel="noopener noreferrer" className="project-github" aria-label={`Repositori GitHub ${project.title}`}><Github size={21} /></a>}</div><p>{project.description}</p><div className="project-bottom"><div className="tags">{project.tools.slice(0, 3).map(tool => <span key={tool}>{tool}</span>)}</div><button className="text-link" type="button" onClick={() => setModal({ type: "project", id: project.id })}>Detail proyek<ExternalLink size={14} /></button></div></div></article>)}</div></TabsContent>)}</Tabs>
        <a className="all-github" href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={18} />Lihat karya lainnya di GitHub<ExternalLink size={14} /></a>
      </section>
      <section className="experience-section" id="pengalaman" aria-labelledby="experience-title"><div className="container section experience-layout"><div className="reveal"><SectionLabel number="04">PENGALAMAN</SectionLabel><h2 id="experience-title">Belajar lewat<br />pengalaman<span className="accent">.</span></h2><p className="experience-intro">Berkolaborasi dalam pengembangan web dan berbagi pengetahuan di lingkungan akademik.</p></div><div className="experience-list reveal"><article className="experience-item"><span className="timeline-icon"><BriefcaseBusiness size={19} /></span><div><div className="experience-meta"><span>MAGANG</span><time>2024</time></div><h3>IT Web Developer Intern</h3><p className="experience-company">Dinas Kominfosan Kota Yogyakarta</p><p>Mengembangkan frontend website, merancang UI/UX bersama tim, dan menyesuaikan desain melalui diskusi serta revisi dengan klien.</p><div className="tags"><span>Frontend</span><span>UI/UX</span><span>Teamwork</span></div></div></article><article className="experience-item"><span className="timeline-icon"><GraduationCap size={20} /></span><div><div className="experience-meta"><span>KONTRAK</span><time>Maret–Juli 2024</time></div><h3>Assistant Lecturer</h3><p className="experience-company">Web Design Development · UMY</p><p>Mendampingi praktikum HTML, CSS, JavaScript, Bootstrap, dan React. Membantu mahasiswa menyusun serta mengembangkan proyek akhir pengembangan web.</p><div className="tags"><span>Web Development</span><span>Mentoring</span><span>React</span></div></div></article></div></div></section>
      <section className="section container certificates-section" id="sertifikat" aria-labelledby="certificates-title"><div className="section-heading reveal"><div><SectionLabel number="05">SERTIFIKAT & KOMPETENSI</SectionLabel><h2 id="certificates-title">Terus bertumbuh,<br />teruji dalam proses<span className="accent">.</span></h2></div><p>Bekal kompetensi pengembangan web,<br />dasar jaringan, dan pengalaman magang.</p></div><div className="certificates-grid">{certificates.map(cert => <article className="certificate-card reveal" key={cert.id}><button type="button" className={`certificate-preview certificate-${cert.id}`} onClick={() => setModal({ type: "certificate", id: cert.id })} aria-label={`Perbesar sertifikat ${cert.title}`}><img src={cert.image} alt={`Sertifikat ${cert.title} atas nama Alif Nur Rachman`} width={1200} height={850} loading="lazy" /><span className="certificate-zoom"><ZoomIn size={19} /></span></button><div className="certificate-body"><p className="certificate-badge">{cert.badge}</p><h3>{cert.title}</h3><p className="certificate-issuer">{cert.issuer}</p><time>{cert.date}</time><div className="certificate-actions"><button type="button" className="text-link" onClick={() => setModal({ type: "certificate", id: cert.id })}>Lihat sertifikat<ZoomIn size={14} /></button><a href={cert.original} download={cert.filename} aria-label={`Unduh ${cert.title}`} className="certificate-download"><Download size={17} /></a></div></div></article>)}</div></section>
      <section className="contact-section" id="kontak" aria-labelledby="contact-title"><div className="container contact-inner reveal"><div><p className="contact-eyebrow">LET’S BUILD SOMETHING MEANINGFUL</p><h2 id="contact-title">Punya peluang?<br />Mari berbicara<span>.</span></h2><p>Terbuka untuk peluang Frontend Developer,<br />Web Developer, dan peran IT.</p><div className="contact-buttons"><a className="button lime" href={`mailto:${profile.email}`}><Mail size={18} />Kirim email</a><a className="button contact-outline" href={profile.cv} download="CV-Alif-Nur-Rachman.pdf"><Download size={18} />Unduh CV</a></div></div><div className="contact-details"><div className="contact-monogram" aria-hidden="true">a<span>.</span></div><p className="contact-detail-label">TEMUKAN SAYA DI</p><SocialLinks withLabels /><div className="contact-email"><a href={`mailto:${profile.email}`}>{profile.email}</a><button type="button" onClick={copyEmail} aria-label={copied ? "Email berhasil disalin" : "Salin alamat email"} title={copied ? "Tersalin" : "Salin email"}>{copied ? <Check size={17} /> : <Copy size={17} />}</button><span role="status" className="copy-status">{copied ? "Email tersalin" : ""}</span></div></div></div></section>
    </main>
    <footer className="site-footer"><div className="container footer-inner"><a className="wordmark" href="#beranda">alif<span className="wordmark-dot">.</span></a><p>© {new Date().getFullYear()} Alif Nur Rachman</p><a href={profile.previousPortfolio} target="_blank" rel="noopener noreferrer">Portofolio sebelumnya<ExternalLink size={13} /></a><span className="footer-note">Always learning, always building.</span></div></footer>
    <Dialog open={!!modal} onOpenChange={open => { if (!open) setModal(null); }}><DialogContent showCloseButton={false} className={`portfolio-dialog ${selectedCertificate ? "certificate-dialog" : ""}`}><DialogClose className="dialog-close" aria-label="Tutup detail"><X size={21} /></DialogClose>
      {selectedProject && <><div className="dialog-heading"><p className="section-label">{selectedProject.label}</p><DialogTitle className="dialog-title">{selectedProject.title}</DialogTitle><DialogDescription className="dialog-description">{selectedProject.description}</DialogDescription></div><img className="dialog-project-image" src={selectedProject.image} alt={`Tampilan ${selectedProject.title}`} /><div className="dialog-project-body"><p className="dialog-role">Peran saya<span>{selectedProject.role}</span></p><h4>Yang saya kerjakan</h4><ul className="project-highlights">{selectedProject.highlights.map(item => <li key={item}><Check size={16} />{item}</li>)}</ul><div className="tags">{selectedProject.tools.map(tool => <span key={tool}>{tool}</span>)}</div>{selectedProject.repository && <a className="button primary" href={selectedProject.repository} target="_blank" rel="noopener noreferrer"><Github size={17} />Lihat repositori</a>}</div></>}
      {selectedCertificate && <><div className="dialog-heading"><p className="section-label">{selectedCertificate.issuer}</p><DialogTitle className="dialog-title">{selectedCertificate.title}</DialogTitle><DialogDescription className="dialog-description">{selectedCertificate.description}</DialogDescription></div>{selectedCertificate.secondImage ? <Tabs defaultValue="certificate" className="certificate-page-tabs"><TabsList className="filter-tabs" aria-label="Halaman sertifikat BNSP"><TabsTrigger value="certificate" className="filter-tab">Sertifikat</TabsTrigger><TabsTrigger value="competencies" className="filter-tab">Unit kompetensi</TabsTrigger></TabsList><TabsContent value="certificate"><img className="dialog-certificate-image" src={selectedCertificate.image} alt="Halaman pertama sertifikat BNSP Alif Nur Rachman" /></TabsContent><TabsContent value="competencies"><img className="dialog-certificate-image" src={selectedCertificate.secondImage} alt="Daftar 17 unit kompetensi sertifikasi BNSP Alif Nur Rachman" /></TabsContent></Tabs> : <img className="dialog-certificate-image" src={selectedCertificate.dialogImage ?? selectedCertificate.original} alt={`Sertifikat ${selectedCertificate.title}`} />}<div className="dialog-certificate-actions"><span>{selectedCertificate.format}</span><a className="button primary" href={selectedCertificate.original} download={selectedCertificate.filename}><Download size={17} />Unduh sertifikat</a></div></>}
    </DialogContent></Dialog>
  </>;
}
export default function App() {
  return <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} storageKey="alif-it-theme" disableTransitionOnChange><Portfolio /></ThemeProvider>;
}
