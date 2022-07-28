import React from "react";
import { SnackbarProvider } from "notistack";

//custom components
import { NavBar, Header, About, Work, Skills, Footer } from "./components";

const App = () => {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Work />
      <Skills />
      <SnackbarProvider>
        <Footer />
      </SnackbarProvider>
    </>
  );
};

export default App;
