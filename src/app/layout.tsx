import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Next.js First Project",
    template: "%s | Next.js",
  },
  description: "Next.js description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "lightblue", padding: "1rem" }}>
          <p>Header</p>
        </header>
        {children}
        <footer style={{ backgroundColor: "ghostwhite", padding: "1rem" }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
