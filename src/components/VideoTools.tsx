import { AdvancedVideo } from "@cloudinary/react";
import { cld } from "../lib/cloudinary";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";

type Props = {
  publicId: string;
};

export default function VideoTools({ publicId }: Props) {
  const video = cld
    .video(publicId)
    .resize(fill().width(960).height(540))
    .delivery(format("auto"))
    .delivery(quality("auto"));

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Optimized video preview</h2>

      <div className="rounded-2xl border p-4 shadow-sm">
        <AdvancedVideo
          cldVid={video}
          controls
          className="w-full rounded-xl overflow-hidden"
        />
        <p className="text-sm text-gray-600 mt-3">
          This version is delivered in a web-optimized format with automatic
          quality settings.
        </p>
      </div>
    </section>
  );
}