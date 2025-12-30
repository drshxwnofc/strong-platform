
export const metadata = {
  title: "Strong Platform",
  description: "Build and deploy apps instantly"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "sans-serif", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
