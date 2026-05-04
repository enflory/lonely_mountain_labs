export default function Contact() {
  const accent = "#9c6b3a";

  return (
    <section
      id="contact"
      className="text-center"
      style={{ padding: "80px 56px", borderTop: "1px solid #d4c9af" }}
    >
      <h2
        className="font-serif m-0 mb-3.5"
        style={{
          fontWeight: 400,
          fontSize: "clamp(32px, 4vw, 48px)",
          letterSpacing: "-0.02em",
        }}
      >
        Drop a line.
      </h2>
      <p
        className="font-serif italic text-lg m-0 mb-7"
        style={{ color: "#3a3a35" }}
      >
        A question, an idea, or just a hello.
      </p>
      <a
        href="mailto:ethan@lonelymtnlabs.com"
        className="font-serif text-[22px] no-underline"
        style={{
          color: "#1c1d1a",
          borderBottom: `1px solid ${accent}`,
          paddingBottom: 2,
        }}
      >
        ethan@lonelymtnlabs.com
      </a>
    </section>
  );
}
