import React from "react";
import { Outlet } from "react-router-dom";
import "./layout.css";
import { Header } from './header/header';
import { Footer } from './footer/footer';

export const MainLayout = () => {
  return (
    <div className="wrapper">
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};
