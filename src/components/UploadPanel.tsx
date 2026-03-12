type UploadedAsset = {
  public_id: string;
  resource_type: string;
  secure_url: string;
};

type Props = {
  onUploadComplete: (asset: UploadedAsset) => void;
};

declare global {
  interface Window {
    cloudinary: any;
  }
}

export default function UploadPanel({ onUploadComplete }: Props) {
  const openWidget = () => {
    if (!window.cloudinary) {
      alert("Cloudinary widget not loaded");
      return;
    }

    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
        uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
        sources: ["local", "url", "camera"],
        multiple: false,
        resourceType: "auto",
        clientAllowedFormats: ["jpg", "jpeg", "png", "webp", "mp4", "mov"],
        maxFileSize: 10000000,
      },
      (error: any, result: any) => {
        console.log("Cloudinary widget result:", error, result);

        if (error) {
          alert(error.message || "Upload failed");
          return;
        }

        if (result?.event === "success") {
          onUploadComplete(result.info);
        }
      }
    );

    widget.open();
  };

  return (
    <section style={{ margin: "30px 0" }}>
      <button type="button" onClick={openWidget}>
        Upload Image or Video
      </button>
    </section>
  );
}