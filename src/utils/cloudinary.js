export const optimizeCloudinaryImage = (url) => {
  if (!url || !url.includes("/upload/")) return url;

  return url.replace(
    "/upload/",
    "/upload/f_auto,q_auto,dpr_auto,w_auto,c_limit/"
  );
};