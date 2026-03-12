export type ImageVariant = {
  label: string;
  url: string;
};

export function getImageVariants(publicId: string, cloudName: string): ImageVariant[] {
  const base = `https://res.cloudinary.com/${cloudName}/image/upload`;

  return [
    {
      label: "Instagram Post",
      url: `${base}/c_fill,g_auto,w_1080,h_1080/f_auto/q_auto/${publicId}`,
    },
    {
      label: "Story Format",
      url: `${base}/c_fill,g_auto,w_1080,h_1920/f_auto/q_auto/${publicId}`,
    },
    {
      label: "YouTube Thumbnail",
      url: `${base}/c_fill,g_auto,w_1280,h_720/f_auto/q_auto/${publicId}`,
    },
    {
      label: "Product Card",
      url: `${base}/c_fill,g_auto,w_800,h_1000/f_auto/q_auto/${publicId}`,
    },
    {
      label: "Web Optimized",
      url: `${base}/c_fill,g_auto,w_1400,h_900/f_auto/q_auto/${publicId}`,
    },
  ];
}