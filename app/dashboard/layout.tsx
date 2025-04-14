"use client";
import "../globals.css";
import { CustomSidebar } from "./components/CustomSideBar";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full md:max-h-screen flex flex-col md:flex-row">
        <CustomSidebar />
        {children}
    </div>
  );
};

export default DashboardLayout;
