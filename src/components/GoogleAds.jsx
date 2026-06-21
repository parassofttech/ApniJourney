import { useEffect } from "react";

const GoogleAds = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-3485728465300958"
      data-ad-slot="9379395632"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default GoogleAds;