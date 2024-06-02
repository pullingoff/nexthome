import { useEffect, useRef } from "react";

const REPO_NAME = "pullingoff/nexthome";
const LABEL = "comment";
const THEME = "github-light";

export default function Comments() {
  const ref = useRef<HTMLDivElement>(null);
  // first load
  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const scriptElem = document.createElement("script");
    scriptElem.src = "https://utteranc.es/client.js";
    scriptElem.async = true;
    scriptElem.crossOrigin = "anonymous";
    scriptElem.setAttribute("repo", REPO_NAME);
    scriptElem.setAttribute("issue-term", "url");
    scriptElem.setAttribute("label", LABEL);
    scriptElem.setAttribute("theme", THEME);

    ref.current.appendChild(scriptElem);
  }, []);

  // when theme change
  useEffect(() => {
    const iframe =
      document.querySelector<HTMLIFrameElement>(".utterances-frame");

    if (iframe) {
      iframe?.contentWindow?.postMessage(
        { type: "set-theme", THEME },
        "https://utteranc.es"
      );
    }
  }, [THEME]);

  return <section ref={ref} />;
}
