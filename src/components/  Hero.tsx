type Props = {
  onStartClick?: () => void;
};

export default function Hero({ onStartClick }: Props) {
  return (
    <section
      style={{
        padding: "64px 20px 48px",
        textAlign: "center",
        borderBottom: "1px solid #e5e7eb",
        marginBottom: "32px",
      }}
    >
      <p
        style={{
          display: "inline-block",
          padding: "6px 12px",
          borderRadius: "999px",
          background: "#f3f4f6",
          fontSize: "14px",
          marginBottom: "16px",
        }}
      >
        Built with Cloudinary + React
      </p>

      <h1
        style={{
          fontSize: "48px",
          lineHeight: 1.1,
          margin: "0 0 16px",
          fontWeight: 700,
        }}
      >
        Cloudinary AI Media Studio
      </h1>

      <p
        style={{
          maxWidth: "760px",
          margin: "0 auto 24px",
          fontSize: "18px",
          color: "#4b5563",
          lineHeight: 1.6,
        }}
      >
        Upload one image or video and instantly generate optimized media.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <button
          type="button"
          onClick={onStartClick}
          style={{
            background: "#111827",
            color: "#fff",
            border: "none",
            padding: "14px 24px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Start Creating
        </button>

        <a
          href="#features"
          style={{
            textDecoration: "none",
            color: "#111827",
            border: "1px solid #d1d5db",
            padding: "14px 24px",
            borderRadius: "10px",
          }}
        >
          View Features
        </a>
      </div>
    </section>
  );
}