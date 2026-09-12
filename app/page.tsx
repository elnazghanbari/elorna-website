const businessStages = [
  {
    number: "01",
    title: "BUILD",
    text: "Turn an idea into a focused business — from strategy and brand to launch.",
  },
  {
    number: "02",
    title: "SELL",
    text: "Create a clearer path to customers, conversion and revenue.",
  },
  {
    number: "03",
    title: "GROW",
    text: "Use data, analytics and AI to make smarter decisions and scale.",
  },
  {
    number: "04",
    title: "CAPITAL",
    text: "Build stronger business fundamentals and prepare for future capital opportunities — without promises of funding or investment outcomes.",
  },
];

const showcase = [
  {
    eyebrow: "THE CHALLENGE",
    title: "Too many tools. Too much complexity.",
    text: "Entrepreneurs lose time moving between disconnected tools, services and decisions. Elorna brings the journey together.",
    image: "/problem.jpg",
  },
  {
    eyebrow: "THE SOLUTION",
    title: "One intelligent business ecosystem.",
    text: "Strategy, brand, sales, growth and AI — connected through one clear operating system.",
    image: "/our-solution.jpg",
  },
  {
    eyebrow: "01 / BUILD",
    title: "From idea to launch.",
    text: "Transform your vision into a structured business, powerful brand and launch-ready foundation.",
    image: "/build.jpg",
  },
  {
    eyebrow: "02 / SELL",
    title: "Turn attention into revenue.",
    text: "Create stronger customer journeys with sales tools, funnels, commerce, leads and analytics.",
    image: "/sell.jpg",
  },
  {
    eyebrow: "03 / GROW",
    title: "Make growth measurable.",
    text: "Use data, AI insights and optimization to understand performance and identify the next opportunity.",
    image: "/grow.jpg",
  },
  {
    eyebrow: "04 / CAPITAL",
    title: "Prepare for the next level.",
    text: "Build stronger business fundamentals and prepare for future capital conversations. ELORNA provides readiness tools and information, not investment advice, brokerage or guaranteed funding.",
    image: "/invest.jpg",
  },
  {
    eyebrow: "INTELLIGENCE LAYER",
    title: "AI that works with your business.",
    text: "Intelligent assistance, automation and recommendations designed to reduce repetitive work and support better decisions.",
    image: "/Ai-power.jpg",
  },
  {
    eyebrow: "THE VISION",
    title: "Build today. Shape tomorrow.",
    text: "We believe ambitious founders should have access to intelligent infrastructure that helps them build beyond borders.",
    image: "/future.jpg",
  },
];

const pillars = [
  {
    title: "AI POWER",
    text: "Intelligent systems designed to support founders and businesses.",
  },
  {
    title: "BUSINESS GROWTH",
    text: "A connected operating path from idea and launch to sustainable growth.",
  },
  {
    title: "CAPITAL READINESS",
    text: "Tools and structure that help founders prepare for future capital opportunities and conversations."
  },
  {
    title: "GLOBAL VISION",
    text: "Built for ambitious businesses that think beyond one market.",
  },
];

export default function Home() {
  return (
    <main style={styles.page}>
      {/* NAVIGATION */}
      <header style={styles.nav}>
        <a href="#top" style={styles.brand}>
          <img
            src="/elorna-emblem.jpg"
            alt="Elorna emblem"
            style={styles.brandIcon}
          />
          <span>ELORNA</span>
        </a>

        <nav style={styles.navLinks}>
          <a href="#platform" style={styles.navLink}>
            Platform
          </a>
          <a href="#journey" style={styles.navLink}>
            Journey
          </a>
          <a href="#ai" style={styles.navLink}>
            AI
          </a>
          <a href="#vision" style={styles.navLink}>
            Vision
          </a>
          <a href="#contact" style={styles.navLink}>
            Contact
          </a>
        </nav>

        <a href="#start" style={styles.navButton}>
          Start Building
        </a>
      </header>

      {/* HERO */}
      <section id="top" style={styles.hero}>
        <div style={styles.heroGlow} />

        <div style={styles.heroContent}>
          <p style={styles.kicker}>AI • IT • BUSINESS • FUTURE</p>

          <h1 style={styles.heroTitle}>
            Build the business.
            <br />
            <span style={styles.goldText}>Shape the future.</span>
          </h1>

          <p style={styles.heroText}>
            ELORNA is an AI-powered business operating system for founders who want one connected path from idea to launch, sales and growth — without stitching together disconnected tools.
          </p>

          <div style={styles.heroButtons}>
            <a href="#platform" style={styles.primaryButton}>
              Explore ELORNA
            </a>

            <a href="#journey" style={styles.secondaryButton}>
              How it works
            </a>
          </div>

          <div style={styles.badges}>
            <span style={styles.badge}>AI-Powered</span>
            <span style={styles.badge}>Founder-Focused</span>
            <span style={styles.badge}>Growth-Oriented</span>
          </div>
        </div>

        <div style={styles.heroVisual}>
          <img
            src="/elorna-vision.jpg"
            alt="Elorna vision"
            style={styles.heroImage}
          />
        </div>
      </section>

      {/* USP */}
      <section style={styles.uspSection}>
        <p style={styles.kicker}>WHY ELORNA</p>
        <h2 style={styles.uspTitle}>One journey. Fewer disconnected tools.</h2>
        <p style={styles.uspText}>
          Unlike standalone AI tools that solve isolated tasks, ELORNA connects strategy, building, selling and growth in one founder-controlled system.
        </p>
        <div style={styles.uspBadge}>AI-assisted • Human-approved • Connected by design</div>
      </section>

      {/* PILLARS */}
      <section id="platform" style={styles.pillars}>
        {pillars.map((pillar) => (
          <div key={pillar.title} style={styles.pillar}>
            <p style={styles.pillarTitle}>{pillar.title}</p>
            <p style={styles.pillarText}>{pillar.text}</p>
          </div>
        ))}
      </section>

      {/* INTRO */}
      <section style={styles.intro}>
        <p style={styles.kicker}>THE ELORNA SYSTEM</p>

        <h2 style={styles.sectionTitle}>
          One infrastructure.
          <br />
          <span style={styles.goldText}>Limitless possibilities.</span>
        </h2>

        <p style={styles.sectionDescription}>
          Building a business should not require a disconnected collection of
          tools. Elorna brings the essential stages of business creation and
          growth into one coherent ecosystem.
        </p>
      </section>

      {/* BUSINESS JOURNEY */}
      <section id="journey" style={styles.journey}>
        {businessStages.map((stage) => (
          <div key={stage.number} style={styles.stage}>
            <span style={styles.stageNumber}>{stage.number}</span>
            <h3 style={styles.stageTitle}>{stage.title}</h3>
            <p style={styles.stageText}>{stage.text}</p>
          </div>
        ))}
      </section>

      {/* INFRASTRUCTURE IMAGE */}
      <section style={styles.featureImageSection}>
        <img
          src="/infrastructurepossibilities.jpg"
          alt="Elorna infrastructure"
          style={styles.fullFeatureImage}
        />
      </section>

      {/* SHOWCASE */}
      <section style={styles.showcaseSection}>
        {showcase.map((item, index) => (
          <article
            key={item.title}
            id={item.eyebrow === "INTELLIGENCE LAYER" ? "ai" : undefined}
            style={{
              ...styles.showcase,
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            }}
          >
            <div style={styles.showcaseImageWrap}>
              <img
                src={item.image}
                alt={item.title}
                style={styles.showcaseImage}
              />
            </div>

            <div style={styles.showcaseContent}>
              <p style={styles.kicker}>{item.eyebrow}</p>
              <h2 style={styles.showcaseTitle}>{item.title}</h2>
              <p style={styles.showcaseText}>{item.text}</p>
            </div>
          </article>
        ))}
      </section>

      {/* VISION */}
      <section id="vision" style={styles.vision}>
        <img
          src="/elorna-emblem.jpg"
          alt="Elorna"
          style={styles.visionLogo}
        />

        <p style={styles.kicker}>OUR VISION</p>

        <h2 style={styles.visionTitle}>
          Technology should make
          <br />
          ambition <span style={styles.goldText}>possible.</span>
        </h2>

        <p style={styles.visionText}>
          Elorna is built around a simple idea: founders should spend less time
          managing complexity and more time creating, selling and growing.
        </p>
      </section>

      {/* TRUST */}
      <section style={styles.trust}>
        <div style={styles.trustItem}>
          <span style={styles.trustIcon}>◇</span>
          <h3 style={styles.trustTitle}>SMARTER</h3>
          <p style={styles.trustText}>
            AI-supported decisions and workflows.
          </p>
        </div>

        <div style={styles.trustItem}>
          <span style={styles.trustIcon}>◈</span>
          <h3 style={styles.trustTitle}>SIMPLER</h3>
          <p style={styles.trustText}>
            One connected journey instead of scattered tools.
          </p>
        </div>

        <div style={styles.trustItem}>
          <span style={styles.trustIcon}>△</span>
          <h3 style={styles.trustTitle}>SCALABLE</h3>
          <p style={styles.trustText}>
            Designed to evolve as your business grows.
          </p>
        </div>

        <div style={styles.trustItem}>
          <span style={styles.trustIcon}>◎</span>
          <h3 style={styles.trustTitle}>GLOBAL</h3>
          <p style={styles.trustText}>
            A future-facing platform built beyond borders.
          </p>
        </div>
      </section>

      {/* FOUNDER & TRUST */}
      <section style={styles.founderSection}>
        <div>
          <p style={styles.kicker}>FOUNDER-LED</p>
          <h2 style={styles.founderTitle}>Built with accountability, clarity and founder control.</h2>
        </div>
        <div style={styles.founderCard}>
          <span style={styles.contactLabel}>FOUNDER</span>
          <strong style={styles.founderName}>Elnaz Ghanbari</strong>
          <p style={styles.founderText}>
            ELORNA is being built as a practical, responsible AI business ecosystem. Recommendations remain assistive: founders review important decisions and stay in control.
          </p>
          <a href="mailto:elnaz@elorna.net" style={styles.founderLink}>elnaz@elorna.net</a>
        </div>
      </section>

      {/* CAPITAL NOTICE */}
      <section style={styles.noticeSection}>
        <p style={styles.noticeText}>
          <strong>Capital notice:</strong> ELORNA may provide general readiness tools, educational information and introductions. It does not guarantee funding, profit, investment performance or approval, and does not present itself as a regulated investment adviser or broker.
        </p>
      </section>

      {/* FINAL CTA */}
      <section id="start" style={styles.cta}>
        <div style={styles.ctaGlow} />

        <img
          src="/elorna-emblem.jpg"
          alt="Elorna emblem"
          style={styles.ctaLogo}
        />

        <p style={styles.kicker}>THE NEXT CHAPTER STARTS HERE</p>

        <h2 style={styles.ctaTitle}>
          Are you ready to
          <br />
          <span style={styles.goldText}>build your legacy?</span>
        </h2>

        <p style={styles.ctaText}>
          Build. Sell. Grow. Prepare for what comes next.
          <br />
          All through one connected vision.
        </p>

        <a href="mailto:contact@elorna.net" style={styles.ctaButton}>
          START WITH ELORNA
        </a>
      </section>

      {/* TRUST LANGUAGE */}
      <section style={styles.languageSection}>
        <div>
          <p style={styles.kicker}>HOW ELORNA COMMUNICATES</p>
          <h2 style={styles.languageTitle}>Clear words. Credible promises.</h2>
        </div>
        <div style={styles.languageGrid}>
          <div style={styles.languageCard}>
            <span style={styles.goodLabel}>USE</span>
            <p style={styles.languageWords}>clarity • opportunity • connected • useful • responsible • founder-controlled</p>
          </div>
          <div style={styles.languageCard}>
            <span style={styles.avoidLabel}>AVOID</span>
            <p style={styles.languageWords}>guarantee • revolutionary • disrupt • risk-free • guaranteed funding • guaranteed profit</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={styles.contactSection}>
        <div style={styles.contactIntro}>
          <p style={styles.kicker}>CONTACT ELORNA</p>
          <h2 style={styles.contactTitle}>One official identity. Clear ways to reach us.</h2>
          <p style={styles.contactText}>
            Choose the right contact route and we will direct your message to the right place.
          </p>
        </div>

        <div style={styles.contactGrid}>
          <a href="mailto:contact@elorna.net" style={styles.contactCard}>
            <span style={styles.contactLabel}>GENERAL CONTACT</span>
            <strong style={styles.contactValue}>contact@elorna.net</strong>
          </a>
          <a href="mailto:elnaz@elorna.net" style={styles.contactCard}>
            <span style={styles.contactLabel}>FOUNDER</span>
            <strong style={styles.contactValue}>elnaz@elorna.net</strong>
          </a>
          <a href="mailto:support@elorna.net" style={styles.contactCard}>
            <span style={styles.contactLabel}>SUPPORT</span>
            <strong style={styles.contactValue}>support@elorna.net</strong>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerBrand}>
          <img
            src="/elorna-emblem.jpg"
            alt=""
            style={styles.footerLogo}
          />

          <div>
            <div style={styles.footerName}>ELORNA</div>
            <div style={styles.footerTagline}>
              AI • IT • INVESTMENT • FUTURE
            </div>
          </div>
        </div>

        <div style={styles.footerLinks}>
          <a href="https://elorna.net">elorna.net</a>
          <a href="mailto:contact@elorna.net">Contact</a>
          <a href="https://www.linkedin.com/company/elorna" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/elorna.official" target="_blank" rel="noreferrer">Instagram</a>
        </div>

        <div style={styles.footerRight}>
          © 2026 ELORNA. All rights reserved.<br />
          <span style={styles.footerFine}>AI-assisted. Human-approved. No guaranteed commercial or investment outcomes.</span>
        </div>
      </footer>
    </main>
  );
}

const gold = "#d6a34a";
const border = "rgba(214,163,74,0.22)";

const styles: Record<string, React.CSSProperties> = {
  page: {
    margin: 0,
    minHeight: "100vh",
    background:
      "radial-gradient(circle at 50% 0%, #102236 0%, #06101a 28%, #02070d 70%)",
    color: "#f7f3eb",
    fontFamily: "Arial, Helvetica, sans-serif",
    overflowX: "hidden",
  },

  nav: {
    minHeight: 78,
    padding: "0 5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    borderBottom: border,
    background: "rgba(2,7,13,0.88)",
    position: "sticky",
    top: 0,
    zIndex: 50,
    backdropFilter: "blur(14px)",
  },

  brand: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    color: "#e8bd70",
    textDecoration: "none",
    fontFamily: "Georgia, serif",
    fontSize: 23,
    letterSpacing: 6,
  },

  brandIcon: {
    width: 42,
    height: 42,
    borderRadius: "50%",
    objectFit: "cover",
  },

  navLinks: {
    display: "flex",
    gap: 32,
    alignItems: "center",
  },

  navLink: {
    color: "#c9c9c9",
    textDecoration: "none",
    fontSize: 14,
  },

  navButton: {
    color: "#e8bd70",
    textDecoration: "none",
    border: `1px solid ${gold}`,
    borderRadius: 30,
    padding: "11px 20px",
    fontSize: 13,
  },

  hero: {
    minHeight: "calc(100vh - 78px)",
    maxWidth: 1500,
    margin: "auto",
    padding: "80px 6%",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 60,
    position: "relative",
  },

  heroGlow: {
    position: "absolute",
    width: 500,
    height: 500,
    left: "-200px",
    top: "20%",
    borderRadius: "50%",
    background: "rgba(198,139,49,.09)",
    filter: "blur(90px)",
  },

  heroContent: {
    flex: "1 1 520px",
    position: "relative",
    zIndex: 2,
  },

  kicker: {
    color: gold,
    letterSpacing: 4,
    fontSize: 12,
    fontWeight: 700,
    marginBottom: 22,
  },

  heroTitle: {
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontSize: "clamp(54px, 7vw, 105px)",
    lineHeight: 0.95,
    letterSpacing: -3,
    margin: "0 0 30px",
    fontWeight: 500,
  },

  goldText: {
    color: gold,
  },

  heroText: {
    color: "#b9bec4",
    fontSize: 18,
    lineHeight: 1.8,
    maxWidth: 650,
  },

  heroButtons: {
    display: "flex",
    flexWrap: "wrap",
    gap: 14,
    marginTop: 35,
  },

  primaryButton: {
    padding: "15px 26px",
    background: gold,
    color: "#07101a",
    borderRadius: 5,
    textDecoration: "none",
    fontWeight: 700,
  },

  secondaryButton: {
    padding: "14px 26px",
    color: "#fff",
    border: "1px solid rgba(255,255,255,.25)",
    borderRadius: 5,
    textDecoration: "none",
  },

  badges: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 35,
  },

  badge: {
    padding: "8px 13px",
    border: "1px solid rgba(255,255,255,.12)",
    borderRadius: 30,
    color: "#aeb5bc",
    fontSize: 11,
  },

  heroVisual: {
    flex: "1 1 500px",
    maxWidth: 620,
    position: "relative",
  },

  heroImage: {
    width: "100%",
    display: "block",
    borderRadius: 26,
    boxShadow: "0 30px 100px rgba(0,0,0,.65)",
  },

  pillars: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
    borderTop: border,
    borderBottom: border,
  },

  pillar: {
    padding: "45px 6%",
    borderRight: border,
  },

  pillarTitle: {
    color: gold,
    fontFamily: "Georgia, serif",
    letterSpacing: 1,
    fontSize: 18,
  },

  pillarText: {
    color: "#919aa3",
    lineHeight: 1.7,
    fontSize: 14,
  },

  intro: {
    maxWidth: 1000,
    margin: "0 auto",
    padding: "130px 6% 70px",
    textAlign: "center",
  },

  sectionTitle: {
    fontFamily: "Georgia, serif",
    fontWeight: 400,
    fontSize: "clamp(45px,6vw,82px)",
    lineHeight: 1.05,
    margin: "0 0 28px",
  },

  sectionDescription: {
    maxWidth: 750,
    margin: "auto",
    color: "#9ca5ad",
    fontSize: 18,
    lineHeight: 1.8,
  },

  journey: {
    maxWidth: 1400,
    margin: "0 auto",
    padding: "30px 5% 120px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
    gap: 18,
  },

  stage: {
    minHeight: 240,
    padding: 30,
    background: "linear-gradient(145deg,#091522,#050b11)",
    border: border,
    borderRadius: 18,
  },

  stageNumber: {
    color: gold,
    fontSize: 12,
    letterSpacing: 3,
  },

  stageTitle: {
    fontFamily: "Georgia, serif",
    color: "#e6bd76",
    fontSize: 30,
    margin: "30px 0 15px",
  },

  stageText: {
    color: "#9da5ad",
    lineHeight: 1.7,
  },

  featureImageSection: {
    maxWidth: 1250,
    padding: "0 5% 130px",
    margin: "auto",
  },

  fullFeatureImage: {
    width: "100%",
    display: "block",
    borderRadius: 24,
    border: border,
    boxShadow: "0 40px 100px rgba(0,0,0,.5)",
  },

  showcaseSection: {
    maxWidth: 1400,
    margin: "auto",
    padding: "0 5%",
  },

  showcase: {
    display: "flex",
    alignItems: "center",
    gap: "clamp(35px,7vw,100px)",
    padding: "100px 0",
    borderTop: border,
    flexWrap: "wrap",
  },

  showcaseImageWrap: {
    flex: "1 1 460px",
  },

  showcaseImage: {
    width: "100%",
    display: "block",
    borderRadius: 22,
    boxShadow: "0 30px 80px rgba(0,0,0,.5)",
  },

  showcaseContent: {
    flex: "1 1 380px",
  },

  showcaseTitle: {
    fontFamily: "Georgia, serif",
    fontWeight: 400,
    fontSize: "clamp(40px,5vw,68px)",
    lineHeight: 1.05,
    margin: "0 0 25px",
  },

  showcaseText: {
    color: "#a7afb6",
    fontSize: 18,
    lineHeight: 1.8,
  },

  vision: {
    textAlign: "center",
    padding: "150px 6%",
    background:
      "radial-gradient(circle at center,rgba(190,132,46,.12),transparent 45%)",
  },

  visionLogo: {
    width: 95,
    height: 95,
    objectFit: "cover",
    borderRadius: "50%",
    marginBottom: 35,
  },

  visionTitle: {
    fontFamily: "Georgia, serif",
    fontWeight: 400,
    fontSize: "clamp(45px,6vw,85px)",
    lineHeight: 1.05,
    margin: "0 auto 30px",
  },

  visionText: {
    maxWidth: 720,
    margin: "auto",
    color: "#a5adb4",
    lineHeight: 1.8,
    fontSize: 18,
  },

  trust: {
    maxWidth: 1300,
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    borderTop: border,
    borderBottom: border,
  },

  trustItem: {
    padding: "60px 30px",
    textAlign: "center",
    borderRight: border,
  },

  trustIcon: {
    color: gold,
    fontSize: 35,
  },

  trustTitle: {
    color: "#e7bd72",
    letterSpacing: 3,
    marginTop: 25,
  },

  trustText: {
    color: "#929ba3",
    lineHeight: 1.7,
  },

  cta: {
    padding: "150px 6%",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },

  ctaGlow: {
    position: "absolute",
    width: 600,
    height: 300,
    background: "rgba(196,136,43,.10)",
    filter: "blur(100px)",
    left: "50%",
    transform: "translateX(-50%)",
  },

  ctaLogo: {
    width: 110,
    height: 110,
    objectFit: "cover",
    borderRadius: "50%",
    marginBottom: 35,
    position: "relative",
  },

  ctaTitle: {
    position: "relative",
    fontFamily: "Georgia, serif",
    fontWeight: 400,
    fontSize: "clamp(48px,7vw,90px)",
    lineHeight: 1,
    margin: "0 0 30px",
  },

  ctaText: {
    position: "relative",
    color: "#a6adb4",
    fontSize: 18,
    lineHeight: 1.8,
    marginBottom: 40,
  },

  ctaButton: {
    position: "relative",
    display: "inline-block",
    padding: "17px 32px",
    borderRadius: 5,
    background: gold,
    color: "#07101a",
    textDecoration: "none",
    fontWeight: 800,
    letterSpacing: 1,
  },

  contactSection: {
    maxWidth: 1400,
    margin: "0 auto",
    padding: "100px 6% 120px",
    borderTop: "1px solid rgba(255,255,255,.07)",
  },
  contactIntro: {
    maxWidth: 850,
    marginBottom: 42,
  },
  contactTitle: {
    fontFamily: "Georgia, serif",
    fontSize: "clamp(38px,4vw,60px)",
    fontWeight: 400,
    margin: "0 0 20px",
  },
  contactText: {
    color: "#aab1b8",
    fontSize: 17,
    lineHeight: 1.75,
  },
  contactGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: 16,
  },
  contactCard: {
    padding: 26,
    border: border,
    background: "rgba(7,14,21,.85)",
    textDecoration: "none",
    minHeight: 130,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  contactLabel: {
    color: "#86704e",
    fontSize: 11,
    letterSpacing: 2,
  },
  contactValue: {
    color: "#e8bd70",
    fontFamily: "Georgia, serif",
    fontSize: 20,
    fontWeight: 400,
  },
  uspSection: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "95px 6%",
    textAlign: "center",
    borderBottom: border,
  },
  uspTitle: {
    fontFamily: "Georgia, serif",
    fontSize: "clamp(42px,5vw,72px)",
    fontWeight: 400,
    lineHeight: 1.06,
    margin: "0 0 22px",
  },
  uspText: {
    maxWidth: 850,
    margin: "0 auto",
    color: "#aab1b8",
    fontSize: 18,
    lineHeight: 1.8,
  },
  uspBadge: {
    display: "inline-block",
    marginTop: 28,
    padding: "10px 16px",
    border: border,
    borderRadius: 999,
    color: "#e8bd70",
    fontSize: 12,
    letterSpacing: 1,
  },
  founderSection: {
    maxWidth: 1300,
    margin: "0 auto",
    padding: "110px 6%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 50,
    alignItems: "center",
    borderTop: border,
  },
  founderTitle: {
    fontFamily: "Georgia, serif",
    fontSize: "clamp(40px,4.6vw,68px)",
    fontWeight: 400,
    lineHeight: 1.06,
    margin: 0,
  },
  founderCard: {
    padding: 32,
    border: border,
    background: "rgba(7,14,21,.82)",
  },
  founderName: {
    display: "block",
    color: "#e8bd70",
    fontFamily: "Georgia, serif",
    fontSize: 28,
    fontWeight: 400,
    margin: "14px 0",
  },
  founderText: {
    color: "#aab1b8",
    lineHeight: 1.75,
    fontSize: 15,
  },
  founderLink: {
    color: "#e8bd70",
    textDecoration: "none",
    fontSize: 14,
  },
  noticeSection: {
    maxWidth: 1300,
    margin: "0 auto",
    padding: "0 6% 100px",
  },
  noticeText: {
    margin: 0,
    padding: 24,
    border: "1px solid rgba(214,163,74,.18)",
    background: "rgba(214,163,74,.04)",
    color: "#9da5ad",
    lineHeight: 1.7,
    fontSize: 13,
  },
  languageSection: {
    maxWidth: 1300,
    margin: "0 auto",
    padding: "90px 6%",
    borderTop: "1px solid rgba(255,255,255,.07)",
  },
  languageTitle: {
    fontFamily: "Georgia, serif",
    fontSize: "clamp(38px,4vw,58px)",
    fontWeight: 400,
    margin: "0 0 32px",
  },
  languageGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
  },
  languageCard: {
    padding: 24,
    border: border,
    background: "rgba(7,14,21,.82)",
  },
  goodLabel: {
    color: "#e8bd70",
    fontSize: 11,
    letterSpacing: 2,
    fontWeight: 700,
  },
  avoidLabel: {
    color: "#a6adb4",
    fontSize: 11,
    letterSpacing: 2,
    fontWeight: 700,
  },
  languageWords: {
    margin: "12px 0 0",
    color: "#aab1b8",
    lineHeight: 1.7,
    fontSize: 14,
  },
  footerFine: {
    display: "inline-block",
    marginTop: 5,
    color: "#5f6870",
    fontSize: 10,
    lineHeight: 1.5,
  },
  footerLinks: {
    display: "flex",
    gap: 18,
    flexWrap: "wrap",
    fontSize: 12,
    color: "#a4abb1",
  },
  footer: {
    padding: "40px 5%",
    borderTop: border,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 25,
  },

  footerBrand: {
    display: "flex",
    alignItems: "center",
    gap: 16,
  },

  footerLogo: {
    width: 48,
    height: 48,
    objectFit: "cover",
    borderRadius: "50%",
  },

  footerName: {
    fontFamily: "Georgia, serif",
    color: "#e6bb6d",
    fontSize: 23,
    letterSpacing: 7,
  },

  footerTagline: {
    color: "#806b49",
    fontSize: 9,
    letterSpacing: 3,
    marginTop: 5,
  },

  footerRight: {
    color: "#6f7880",
    fontSize: 12,
  },
};