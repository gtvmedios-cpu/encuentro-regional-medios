import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
 title: "Encuentro Regional de Medios 2026",
 description: "Medios que conectan, innovan y transforman. Gamarra, Cesar, Colombia."
};
export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="es"><body>{children}</body></html>;
}
