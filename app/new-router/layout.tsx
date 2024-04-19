import "@/styles/global.css";
import { Sidebar } from "@/components/Sidebar";
import * as React from "react";

export default function NewRouterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="grid grid-cols-app p-10 text-white">
          <Sidebar className="col-start-2 col-end-3" />
          <main className="grid">{children}</main>
        </div>
      </body>
    </html>
  );
}
