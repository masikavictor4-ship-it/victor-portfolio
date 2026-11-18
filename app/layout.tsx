import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Victor Masika | IT Professional & Aspiring Developer",
  description:
    "Portfolio of Victor Masika, an Information Technology graduate with interests in software development, web applications, AI training and data annotation.",
  keywords: [
    "Victor Masika",
    "Information Technology",
    "Software Development",
    "AI Training",
    "Data Annotation",
    "Web Development",
    "Kenya",
  ],
  authors: [{ name: "Victor Masika" }],
  openGraph: {
    title: "Victor Masika | IT & Technology Portfolio",
    description:
      "Explore my technology projects, skills and professional interests.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
