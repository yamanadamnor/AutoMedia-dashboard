import "@/styles/global.css";
import { cn } from "@/utils/cn";
import {
  CalendarWidget,
  Header,
  Footer,
  Settings,
  Hero,
  CommandMenu,
} from "@/components/ClientComponents";
import { SessionProvider } from "next-auth/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-base h-full">
      <body>
        <SessionProvider>
          <div className="center justify-items-centerr text-whitelg:gap-x-8 relative z-auto mx-auto grid h-full min-h-screen max-w-8xl grid-cols-app grid-rows-app place-content-start gap-x-6 gap-y-8">
            <CommandMenu />
            <div className="col-span-7 col-start-2 row-start-1 row-end-2 flex h-24 w-full items-center justify-between py-6">
              <Header />
            </div>

            <div className="col-span-5 col-start-4 row-start-2 hidden w-full text-white lg:block xl:col-span-6 xl:col-start-3">
              <Hero />
            </div>
            <div className="col-start-2 col-end-[-2] row-start-2 w-full lg:col-end-4 lg:row-end-[-1] xl:col-end-3">
              <div className="w-full">
                <CalendarWidget />
              </div>
            </div>

            <main
              className={cn(
                "col-start-2 col-end-[-2] w-full",
                "lg:col-span-5 lg:col-start-4 lg:row-start-3",
                "xl:col-span-6 xl:col-start-3",
              )}
            >
              <Settings />
              {children}
            </main>

            <div className="relative bottom-0 col-start-1 col-end-[-1] grid w-full p-8">
              <div className="absolute bottom-0 left-0 w-full rounded-t-2xl bg-service-card"></div>
              <Footer />
            </div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
