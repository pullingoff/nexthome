import { Metadata } from "next";
import GlobalLayout from "./_components/layout/GlobalLayout";
import GoogleAnalytics from "./_components/SEO/GoogleAnalytics";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: _app, _document 가져오기. 가져오는 동안 기존 파일은 그대로 유지한다.
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}

// TODO: 넥스트의 built-in SEO support, customMetadata
export const metadata: Metadata = {
  title: "개발자 박하은",
  description: "Welcome to Next.js",
};
