import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";

type State = {};

const Home: React.FC<State> = () => {
  const logoUrl = "/src/assets/images/logo.png";

  return (
    <Box>
      {/* BANNER */}
      <Grid
        container
        minHeight={{ xs: "100vh", md: "85vh" }}
        sx={{
          paddingX: {
            xs: "2em",
            sm: "2em",
            md: "2em",
            lg: "4em",
            xl: "12em",
          },
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid
          sx={{
            height: { xs: "100vh", md: "auto" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: {
              xs: "center",
              sm: "center",
              md: "center",
              lg: "flex-start",
              xl: "flex-start",
            },
          }}
          size={{ xs: 12, sm: 12, md: 12, lg: 8, xl: 8 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: {
                xs: "left",
                sm: "left",
                md: "center",
                lg: "left",
                xl: "left",
              },

              fontWeight: "bold",
              fontSize: { xs: "2em", sm: "3em", md: "3.3em", lg: "4em" },
              width: { xs: "96%", sm: "90%", md: "75%", lg: "90%" },
            }}
          >
            Proteção e Apoio para um Ambiente Digital Livre de Violência
          </Typography>
          <Typography
            sx={{
              width: { xs: "95%", sm: "90%", md: "65%", lg: "70%" },
              marginTop: "2.5em",
              fontSize: {
                xs: "1.15em",
                sm: "1.2em",
                md: "1.5em",
                lg: "1.3em",
              },
              textAlign: "justify",
            }}
          >
            Com o uso da Inteligência Artificial, identificamos e analisamos
            comentários misóginos em redes sociais, ajudando a combater a
            violência e ódio contra a mulher online. Faça sua denúncia no{" "}
            <span style={{ fontWeight: "bold", fontSize: "1.01em" }}>
              ShieldHer
            </span>{" "}
            e ajude na luta contra a misoginia em ambientes digitais de forma
            eficaz.
          </Typography>
          <Link to="/login">
            <Button
              sx={{
                fontSize: "1.1em",
                marginTop: "5em",
                color: "white",
                background:
                  "linear-gradient(140deg, rgba(116,57,146,1) 0%, rgba(140,95,162,1) 21%, rgba(155,125,179,1) 73%, rgba(165,146,191,1) 87%, rgba(179,174,206,1) 99%)",
                width: { xs: "100%", sm: "95%", md: "60%", lg: "250px" },
                height: "50px",
                border: "none",
                borderRadius: "5px",
                transition: "all 0.5s ease-in-out",
                "&:hover": {
                  background:
                    "linear-gradient(140deg, rgba(116,57,146,1) 0%, rgba(140,95,162,1) 21%, rgba(155,125,179,1) 73%, rgba(165,146,191,1) 87%, rgba(179,174,206,1) 99%)",
                  boxShadow: "0 4px 16px rgba(179,174,206,0.8)",
                },
              }}
            >
              Começar
            </Button>
          </Link>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            display={{
              xs: "none",
              sm: "none",
              md: "none",
              lg: "block",
              xl: "block",
            }}
            sx={{
              marginBottom: { lg: "50px", xl: "10px" },
              width: {
                xs: "100%",
                sm: "100%",
                md: "100%",
                lg: "430px",
                xl: "460px",
              },
              height: { lg: "450px", xl: "460px" },
              backgroundImage: `url(${logoUrl})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
        </Grid>
      </Grid>
      {/* Sobre Nós */}
      <Grid
        container
        minHeight={{ xs: "92vh", sm: "90vh", md: "60vh", lg: "75vh" }}
        sx={{
          backgroundColor: "#CAC6E4",
          paddingX: {
            xs: "1em",
            sm: "2em",
            md: "2em",
            lg: "4.2em",
            xl: "12em",
          },
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: { xs: "static", md: "static", lg: "relative" },
          }}
          order={{ xs: 2, md: 1 }}
          size={{ xs: 12, sm: 12, md: 5, lg: 6, xl: 6 }}
        >
          <Box
            sx={{
              zIndex: 1,
              borderRadius: "15px",
              backgroundColor: "#fff",
              boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.2)",
              width: { xs: "80vw", sm: "430px", md: "300px", lg: "250px" },
              height: { xs: "220px", sm: "280px", md: "450px", lg: "300px" },
              overflow: "hidden",
              position: "relative",
            }}
          >
            <img
              src="/src/assets/images/computer-eng.jpeg"
              alt="Descrição da imagem"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                objectPosition: "center",
              }}
            />
          </Box>
          <Box
            sx={{
              display: { xs: "none", lg: "block" },
              borderRadius: "15px",
              backgroundColor: "#fff",
              boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.2)",
              width: "250px",
              height: "300px",
              position: "absolute",
              top: "-70px",
              left: "45px",
              overflow: "hidden",
            }}
          >
            <img
              src="/src/assets/images/data-flux.jpeg"
              alt="Descrição da imagem"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                objectPosition: "center",
              }}
            />
          </Box>
        </Grid>

        <Grid
          sx={{
            paddingX: { xs: "1em", md: "1.1em", xl: "3em" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          order={{ xs: 1, md: 2 }}
          size={{ xs: 12, sm: 12, md: 7, lg: 6, xl: 6 }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              textAlign: "left",
              fontSize: { xs: "1.2em", md: "1.2em", xl: "1.5em" },
              color: "#743992",
            }}
          >
            Sobre nós
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              textAlign: "left",
              fontSize: { xs: "1.8em", sm: "2.5em", md: "2.5em", xl: "3em" },
              color: "#743992",
              paddingRight: { md: "1em", lg: "1.2em", xl: "2em" },
            }}
          >
            Somos uma Organização dedicada à Proteção e Apoio.
          </Typography>
          <Typography
            sx={{
              color: "#743992",
              mt: "1.2em",
              fontSize: {
                xs: "1.0em",
                sm: "1.1em",
                md: "1.2em",
                xl: "1.3em",
              },
              textAlign: "justify",
            }}
          >
            Acreditamos em um ambiente digital livre de violência e discurso de
            ódio. Nosso objetivo é tornar as redes sociais um lugar seguro e
            justo. Nossa missão é identificar e ajudar na denúncia de ataques
            misóginos, promovendo um espaço mais seguro e acolhedor para as
            mulheres.
          </Typography>
          <Box>
            <Button
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "block",
                  lg: "block",
                  xl: "block",
                },

                fontSize: "1.1em",
                marginTop: {
                  md: "2.3em",
                  lg: "2.5em",
                  xl: "2.5em",
                },
                color: "white",
                background:
                  "linear-gradient(140deg, rgba(116,57,146,1) 0%, rgba(140,95,162,1) 21%, rgba(155,125,179,1) 73%, rgba(165,146,191,1) 87%, rgba(179,174,206,1) 99%)",
                width: { md: "250px", lg: "250px" },
                height: "50px",
                border: "none",
                borderRadius: "5px",
                transition: "all 0.5s ease-in-out",
                "&:hover": {
                  background:
                    "linear-gradient(140deg, rgba(116,57,146,1) 0%, rgba(140,95,162,1) 21%, rgba(155,125,179,1) 73%, rgba(165,146,191,1) 87%, rgba(179,174,206,1) 99%)",
                  boxShadow: "0 4px 16px rgba(179,174,206,0.8)",
                },
              }}
            >
              Leia Mais
            </Button>
          </Box>
        </Grid>
        <Grid
          order={{ xs: 2 }}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: { xs: "flex", md: "none" },
            width: "100%",
          }}
        >
          <Button
            sx={{
              display: { md: "none", lg: "none", xl: "none" },
              fontSize: "1.1em",
              marginTop: {
                xs: "2em",
                sm: "1.5em",
              },
              color: "white",
              background:
                "linear-gradient(140deg, rgba(116,57,146,1) 0%, rgba(140,95,162,1) 21%, rgba(155,125,179,1) 73%, rgba(165,146,191,1) 87%, rgba(179,174,206,1) 99%)",
              width: { xs: "100%", sm: "95%" },
              height: "50px",
              border: "none",
              borderRadius: "5px",
              transition: "all 0.5s ease-in-out",
              "&:hover": {
                background:
                  "linear-gradient(140deg, rgba(116,57,146,1) 0%, rgba(140,95,162,1) 21%, rgba(155,125,179,1) 73%, rgba(165,146,191,1) 87%, rgba(179,174,206,1) 99%)",
                boxShadow: "0 4px 16px rgba(179,174,206,0.8)",
              },
            }}
          >
            Leia Mais
          </Button>
        </Grid>
      </Grid>
      {/* Nossos Serviços */}
      <Grid></Grid>
    </Box>
  );
};

export default Home;
