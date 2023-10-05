import "./globals.css";
import type { Metadata } from "next";
import Header from "./_components/Header/Header";
import Card from "./_components/composables/Card/Card";
import ContentCard from "./_components/composables/Card/ContentCard";
import Footer from "./_components/composables/Footer/Footer";

export const metadata: Metadata = {
  title: "블로그 만들기 프로젝트",
  description: "Blog Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Card>
          <Header />
          <ContentCard>{children}</ContentCard>
          <Footer />
        </Card>
      </body>
    </html>
  );
}
