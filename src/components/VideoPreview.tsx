import { cld } from "../cloudinary/config";
import { AdvancedVideo } from "@cloudinary/react";

export default function VideoPreview({ publicId }: any) {

  const video = cld.video(publicId);

  return (
    <div>
      <h2>Optimized Video Preview</h2>

      <AdvancedVideo
        cldVid={video}
        controls
        style={{ width: "500px" }}
      />
    </div>
  );
}