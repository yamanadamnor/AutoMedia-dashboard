import React from "react";
import type { NextPage } from "next";
import { Toaster } from "react-hot-toast";
import { useSession } from "next-auth/react";

import Hero from "@/components/Hero";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceShelf from "@/components/ServiceShelf/ServiceShelf";

import { cn } from "@/utils";
import CalendarWidget from "@/components/CalendarWidget/CalendarWidget";

import { CommandMenu } from "@/components/CommandMenu";
import { Settings } from "@/components/Settings";
import { ServiceAddDialog } from "@/components/ServiceShelf/ServiceAddDialog";

const App: NextPage = () => {
  const { data: session } = useSession();

  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 left-0 top-0 flex w-full select-none justify-center overflow-hidden">
        <div className="flex w-[108rem] flex-none justify-end">
          <CommandMenu />
          <picture>
            <source srcSet="/img/1-dark.png" type="image/png" />
            <img src="" alt="" />
          </picture>
        </div>
      </div>

      <div>
        <div className="center justify-items-centerr text-whitelg:gap-x-8 relative z-auto mx-auto grid h-full min-h-screen max-w-8xl grid-cols-app grid-rows-app place-content-start gap-x-6 gap-y-8">
          <Toaster
            position="top-right"
            toastOptions={{
              success: {
                style: {
                  borderRadius: "10px",
                  background: "#20202c",
                  color: "#fff",
                },
              },
              error: {
                style: {
                  borderRadius: "10px",
                  background: "#20202c",
                  color: "#fff",
                },
              },
            }}
          />
          <div className="col-span-7 col-start-2 row-start-1 row-end-2 flex h-24 w-full items-center justify-between py-6">
            <Header />
          </div>

          <div className="col-span-5 col-start-4 row-start-2 hidden w-full text-white lg:block xl:col-span-6 xl:col-start-3">
            <Hero />
          </div>

          {/* <---- Sidebar ----> */}
          <div className="col-start-2 col-end-[-2] row-start-2 w-full lg:col-end-4 lg:row-end-[-1] xl:col-end-3">
            <div className="w-full">
              <CalendarWidget />
            </div>
          </div>

          {/* <---- Services ----> */}
          <div
            className={cn(
              "col-start-2 col-end-[-2] w-full",
              "lg:col-span-5 lg:col-start-4 lg:row-start-3",
              "xl:col-span-6 xl:col-start-3",
            )}
          >
            <div className="flex-gap-48 flex items-center">
              <Settings />
              {session?.user.isAdmin && (
                <div className="my-4 text-white">
                  <ServiceAddDialog />
                </div>
              )}
            </div>
            <ServiceShelf />
          </div>

          <div
            className={cn(
              "relative",
              "bottom-0 col-start-1 col-end-[-1] grid w-full p-8",
            )}
          >
            <div className="absolute bottom-0 left-0 w-full rounded-t-2xl bg-service-card"></div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
