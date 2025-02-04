import React from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Button, invertTheme, theme } from "../estilos-componentes/theme";

const Home = () => {
    return (
      <ThemeProvider theme={theme}>
        <div className="features">
          <h2>Bienvenido</h2>
          <p>Somos una tienda online de celulares </p>
          <ThemeProvider theme={invertTheme}>
            <Link to="/search-page">
              <Button>Ver Más</Button>
            </Link>
          </ThemeProvider>
        </div>
      </ThemeProvider>
    );
  };

export default Home;