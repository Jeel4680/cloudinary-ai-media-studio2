export default function UploadWidget({ onUpload }: any) {

  const handleUpload = (result: any) => {
    onUpload(result.info);
  };

  return (
    <button
      onClick={() =>
        window.cloudinary.openUploadWidget(
          {
            cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
            uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
          },
          (error: any, result: any) => {
            if (!error && result.event === "success") {
              handleUpload(result);
            }
          }
        )
      }
    >
      Upload Media
    </button>
  );
}