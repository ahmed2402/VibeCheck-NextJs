"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import "../globals.css";
import { CustomSidebar } from "./components/CustomSideBar";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full md:max-h-screen flex flex-column md:flex-row">
        <CustomSidebar />
        {children}
    </div>
  );
};

export default DashboardLayout;
