import Image from "next/image";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Typography,
} from "@mui/material";

import PsychologyAltRoundedIcon from "@mui/icons-material/PsychologyAltRounded";
import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";
import BedtimeRoundedIcon from "@mui/icons-material/BedtimeRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

import { LeadForm } from "@/components/LeadForm";

const benefits = [
  {
    title: "Claridad mental",
    description:
      "Aprende a preparar tu mente antes de jugar y a reducir el ruido interno durante la sesión.",
    icon: PsychologyAltRoundedIcon,
  },
  {
    title: "Control del estrés",
    description:
      "Herramientas para detectar el tilt, cortar la impulsividad y volver a tomar decisiones con criterio.",
    icon: LocalFireDepartmentRoundedIcon,
  },
  {
    title: "Rutinas sostenibles",
    description:
      "Descanso, alimentación, entorno y hábitos para que el póker no dependa solo de la fuerza de voluntad.",
    icon: BedtimeRoundedIcon,
  },
];

const contentItems = [
  "Biohacking aplicado al jugador",
  "Gestión del estrés y del tilt",
  "Descanso, energía y concentración",
  "Organización del entorno de juego",
];

export default function HomePage() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 78% 18%, rgba(169, 194, 204, 0.2), transparent 30%), radial-gradient(circle at 12% 80%, rgba(179, 58, 53, 0.13), transparent 26%)",
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          py: { xs: 3, md: 5 },
        }}
      >
        <Box
          component="header"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: { xs: 5, md: 6 },
          }}
        >
          <Typography
            sx={{
              fontFamily: "var(--font-oswald)",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontSize: { xs: "1.1rem", md: "1.35rem" },
            }}
          >
            Biohacking Póker
          </Typography>

          <Button
            href="#contacto"
            variant="outlined"
            color="primary"
            sx={{
              display: { xs: "none", sm: "inline-flex" },
            }}
          >
            Solicitar información
          </Button>
        </Box>

        <Box
          sx={{
            minHeight: { md: "calc(100vh - 130px)" },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "0.9fr 1.1fr" },
            gap: { xs: 5, md: 6, lg: 8 },
            alignItems: "center",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "inline-flex",
                maxWidth: "100%",
                mb: 3,
                px: 2,
                py: 1,
                borderRadius: "999px",
                border: "1px solid",
                borderColor: "rgba(169, 194, 204, 0.42)",
                backgroundColor: "rgba(169, 194, 204, 0.08)",
              }}
            >
              <Typography
                sx={{
                  color: "primary.light",
                  fontWeight: 800,
                  fontSize: { xs: "0.82rem", sm: "0.92rem" },
                  lineHeight: 1.35,
                }}
              >
                Preparación física y mental del jugador de póker
              </Typography>
            </Box>

            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: "3rem",
                  sm: "4.7rem",
                  md: "6.2rem",
                  lg: "7.1rem",
                },
                lineHeight: 1,
                maxWidth: 760,
                textShadow: "0 8px 28px rgba(0,0,0,0.45)",
                "& span": {
                  display: "block",
                  lineHeight: 1.08,
                  mb: "0.32em",
                },
                "& span:last-of-type": {
                  mb: 0,
                },
              }}
            >
              <Box component="span">Juega con</Box>
              <Box component="span">más</Box>
              <Box component="span">cabeza</Box>
            </Typography>

            <Typography
              sx={{
                mt: 3,
                maxWidth: 660,
                color: "text.secondary",
                fontSize: { xs: "1.04rem", md: "1.18rem" },
                lineHeight: 1.75,
              }}
            >
              Un libro para profesionalizar tu cuerpo y tu mente.
            </Typography>

            <Typography
              sx={{
                mt: 1.5,
                maxWidth: 660,
                color: "text.secondary",
                fontSize: { xs: "1.04rem", md: "1.18rem" },
                lineHeight: 1.75,
              }}
            >
              Porque la ventaja técnica ya no es suficiente.
            </Typography>

            <Box
              sx={{
                mt: 4,
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
              }}
            >
              <Button
                href="#contacto"
                variant="contained"
                color="primary"
                endIcon={<ArrowForwardRoundedIcon />}
              >
                Quiero información
              </Button>

              <Button href="#contenido" variant="outlined" color="primary">
                Qué incluye
              </Button>
            </Box>

            <Box
              sx={{
                mt: 5,
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
                gap: 2,
                maxWidth: 760,
              }}
            >
              {[
                ["Mentalidad", "sin humo ni promesas mágicas"],
                ["Hábitos", "aplicados al rendimiento real"],
                ["Póker", "más allá de las cartas"],
              ].map(([title, label]) => (
                <Box
                  key={title}
                  sx={{
                    p: 2.2,
                    borderRadius: 4,
                    border: "1px solid",
                    borderColor: "divider",
                    backgroundColor: "rgba(255,255,255,0.035)",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "var(--font-oswald)",
                      fontSize: "1.45rem",
                      fontWeight: 800,
                      lineHeight: 1.15,
                      letterSpacing: "0.035em",
                      textTransform: "uppercase",
                    }}
                  >
                    {title}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 0.8,
                      color: "text.secondary",
                      fontSize: "0.95rem",
                      lineHeight: 1.45,
                    }}
                  >
                    {label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: { xs: "center", lg: "flex-end" },
              alignItems: "center",
              minHeight: { xs: 320, sm: 420, lg: 620 },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: { xs: 260, sm: 380, lg: 520 },
                height: { xs: 260, sm: 380, lg: 520 },
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(169,194,204,0.18), transparent 62%)",
                filter: "blur(10px)",
              }}
            />

            <Box
              sx={{
                position: "relative",
                width: {
                  xs: "min(100%, 440px)",
                  sm: "min(100%, 620px)",
                  lg: 760,
                },
                transform: { xs: "none", lg: "translateX(26px)" },
              }}
            >
              <Image
                src="/portada-biohacking.png"
                alt="Portada completa del libro Biohacking"
                width={1600}
                height={1000}
                priority
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 760px"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 34px 70px rgba(0,0,0,0.48))",
                }}
              />
            </Box>
          </Box>
        </Box>

        <Box
          id="contenido"
          sx={{
            mt: { xs: 7, md: 10 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.85fr 1.15fr" },
            gap: { xs: 3, md: 5 },
            alignItems: "start",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                mb: 2,
                color: "primary.light",
              }}
            >
              <AutoAwesomeRoundedIcon fontSize="small" />

              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: "0.92rem",
                }}
              >
                Contenido del libro
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.4rem", md: "3.8rem" },
                maxWidth: 540,
              }}
            >
              Lo importante ocurre antes de sentarte
            </Typography>

            <Typography
              sx={{
                mt: 2,
                color: "text.secondary",
                fontSize: { xs: "1rem", md: "1.1rem" },
                maxWidth: 540,
                lineHeight: 1.7,
              }}
            >
              La técnica importa, pero también importa desde qué estado juegas:
              cómo duermes, cómo gestionas la frustración, cómo preparas tu
              sesión y cómo reaccionas cuando aparece la varianza.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gap: 2,
            }}
          >
            {contentItems.map((item, index) => (
              <Box
                key={item}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: 2,
                  alignItems: "center",
                  p: { xs: 2, md: 2.5 },
                  borderRadius: 4,
                  border: "1px solid",
                  borderColor: "divider",
                  backgroundColor: "rgba(255,255,255,0.035)",
                }}
              >
                <Box
                  sx={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: "rgba(169, 194, 204, 0.1)",
                    color: "primary.light",
                    fontWeight: 900,
                  }}
                >
                  {index + 1}
                </Box>

                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "1rem", md: "1.08rem" },
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            mt: { xs: 7, md: 10 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 2,
          }}
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <Card
                key={benefit.title}
                sx={{
                  borderRadius: 4,
                  minHeight: "100%",
                }}
              >
                <CardContent
                  sx={{
                    p: { xs: 2.5, md: 3 },
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 3,
                      display: "grid",
                      placeItems: "center",
                      color: "primary.main",
                      backgroundColor: "rgba(169, 194, 204, 0.1)",
                      mb: 2.25,
                      flexShrink: 0,
                    }}
                  >
                    <Icon fontSize="small" />
                  </Box>

                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: "1.05rem", md: "1.22rem" },
                      mb: 1.25,
                      lineHeight: 1.25,
                      letterSpacing: "0.045em",
                    }}
                  >
                    {benefit.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.98rem",
                      lineHeight: 1.65,
                    }}
                  >
                    {benefit.description}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Box>

        <Card
          id="contacto"
          sx={{
            mt: { xs: 7, md: 10 },
            mb: { xs: 3, md: 5 },
            borderRadius: 6,
            overflow: "hidden",
          }}
        >
          <CardContent
            sx={{
              p: { xs: 3, md: 5 },
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" },
              gap: { xs: 4, md: 6 },
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2.3rem", md: "3.5rem" },
                  maxWidth: 560,
                }}
              >
                Recibe información del libro
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  color: "text.secondary",
                  fontSize: { xs: "1rem", md: "1.08rem" },
                  maxWidth: 520,
                  lineHeight: 1.7,
                }}
              >
                Deja tus datos y te enviaremos información sobre disponibilidad,
                compra o próximos pasos cuando esté todo preparado.
              </Typography>

              <Divider sx={{ my: 3 }} />

              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: "0.95rem",
                }}
              >
                Escrito por <strong>Raquel Prieto Jarillo</strong>.
              </Typography>
            </Box>

            <LeadForm />
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}