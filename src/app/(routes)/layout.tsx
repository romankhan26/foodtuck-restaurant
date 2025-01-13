import HeaderSection from "@/components/GeneralComponents/HeaderSection";
import HeaderTwo from "@/components/Header/HeaderGeneral";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <div
        className={` antialiased bg-white  `}
      >
        <HeaderTwo/>
        <HeaderSection text='Menu' textHeading='Our Menu'/>

        {children}

      </div>
  );
}
