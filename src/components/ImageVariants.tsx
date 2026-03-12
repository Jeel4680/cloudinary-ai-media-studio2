import { getImageVariants } from "../lib/transformations";

type Props = {
  publicId: string;
};

export default function ImageVariants({ publicId }: Props) {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const variants = getImageVariants(publicId, cloudName);

  const handleDownload = async (url: string, filename: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();

      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `${filename}.jpg`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Could not download image.");
    }
  };

  return (
    <section style={{ marginTop: "40px" }}>
      <h2 style={{ fontSize: "42px", marginBottom: "24px" }}>
        Generated image variants
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
        }}
      >
        {variants.map((variant) => (
          <div
            key={variant.label}
            style={{
              border: "1px solid #2c2c2c",
              borderRadius: "16px",
              padding: "16px",
              background: "#111111",
            }}
          >
            <h3 style={{ marginTop: 0, marginBottom: "14px" }}>{variant.label}</h3>

            <img
              src={variant.url}
              alt={variant.label}
              style={{
                width: "100%",
                borderRadius: "12px",
                display: "block",
                marginBottom: "14px",
              }}
              onError={() => {
                console.error("Image failed to load:", variant.url);
              }}
            />

            <button
              type="button"
              onClick={() =>
                handleDownload(
                  variant.url,
                  variant.label.toLowerCase().replace(/\s+/g, "-")
                )
              }
              style={{
                background: "#ffffff",
                color: "#111111",
                border: "none",
                padding: "10px 16px",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Download
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}