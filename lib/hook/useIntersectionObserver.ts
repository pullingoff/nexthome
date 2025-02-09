import { useEffect, useState } from "react";

interface Props {
  onShow: () => void;
  onHide?: () => void;
  options?: IntersectionObserverInit;
  once?: boolean;
}

export const useIntersectionObserver = ({
  onShow,
  onHide,
  options,
  once,
}: Props) => {
  const [target, setTarget] = useState<Element | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onShow();
          once && target && observer.unobserve(entry.target); // once일 경우 관찰 해제
        } else {
          onHide && onHide();
        }
      });
    }, options ?? {});
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [target, options, onShow, onHide, once]);

  return { setTarget };
};
