import { ReactNode } from "react";
import ResumeLayout from "./ResumeLayout";

export default function Layout({ children }: { children: ReactNode }) {
  return <ResumeLayout>{children}</ResumeLayout>;
}
