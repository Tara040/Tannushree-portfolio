import localFont from "next/font/local";
import "../style/globals.css";
import Navbar from "./components/Navbar.jsx";
import ClientLayout from "./ClientLayout";
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Tanushree Umredkar | Full Stack Developer | Python | Django | Nagpur",
  description:
    "Tanushree Umredkar, a Full Stack Developer specializing in React.js, Java, Spring Boot, and MySQL. Explore my portfolio showcasing projects in web development, backend optimization, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>
          Tanushree Umredkar | Full Stack Developer | React.js | Java
        </title>
        <meta
          name="description"
          content="Tanushree Umredkar, a Full Stack Developer specializing in React.js, Java, Spring Boot, and MySQL."
        />
        <meta
          name="google-site-verification"
          content="98AETzaZPiZuBP5F5fg30zu6V08Q5O-Is9Bj5IEPrPE"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              name: "Tanushree Umredkar",
              jobTitle: "Full Stack Developer",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Nagpur",
                addressCountry: "IN",
              },
              email: "chandanjadhav5260@gmail.com",
              url: "https://jadhavc07.github.io/portfolio/",
              sameAs: ["https://linkedin.com/in/chandan-jadhav"],
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayout>
          {children}
          <Analytics />
        </ClientLayout>
      </body>
    </html>
  );
}
