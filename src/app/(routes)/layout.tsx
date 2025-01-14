
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <div
        className={` antialiased bg-white  `}
      >

        {children}

      </div>
  );
}
