export const metadata = {
  title: "Message Received",
  description: "Thank you for contacting ELORNA.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "grid",
      placeItems: "center",
      padding: "40px 20px",
      background: "radial-gradient(circle at 50% 0%, #102236 0%, #06101a 28%, #02070d 70%)",
      color: "#f4efe6",
      fontFamily: "'Manrope', 'Avenir Next', Helvetica, sans-serif",
    }}>
      <section style={{
        width: "min(760px, 100%)",
        textAlign: "center",
        padding: "64px 34px",
        border: "1px solid rgba(214,163,74,.4)",
        boxShadow: "inset 0 0 0 7px rgba(214,163,74,.02), 0 30px 90px rgba(0,0,0,.35)",
        background: "linear-gradient(180deg,rgba(13,24,36,.96),rgba(5,11,17,.96))",
      }}>
        <p style={{
          color: "#d6a34a",
          letterSpacing: ".18em",
          fontSize: 12,
          fontWeight: 700,
          marginBottom: 20,
        }}>MESSAGE RECEIVED</p>
        <h1 style={{
          fontFamily: "'Bodoni Moda','Cormorant Garamond',Georgia,serif",
          fontSize: "clamp(48px,7vw,82px)",
          lineHeight: 1,
          margin: "0 0 24px",
          fontWeight: 600,
        }}>Thank you for contacting ELORNA.</h1>
        <p style={{
          color: "#b9c0c6",
          fontSize: 18,
          lineHeight: 1.8,
          margin: "0 auto 34px",
          maxWidth: 600,
        }}>
          Your message has been sent to contact@elorna.net. We’ll review it and get back to you through the email address you provided.
        </p>
        <a href="/" style={{
          display: "inline-block",
          padding: "15px 28px",
          borderRadius: 999,
          background: "#d6a34a",
          color: "#07101a",
          textDecoration: "none",
          fontWeight: 800,
          letterSpacing: ".04em",
        }}>
          RETURN TO ELORNA
        </a>
      </section>
    </main>
  );
}
