import { Box, Card, CardContent, Container, Typography } from "@mui/material";

import { legalConfig } from "@/lib/legalConfig";

export default function CookiesPolicyPage() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        py: { xs: 5, md: 8 },
      }}
    >
      <Container maxWidth="md">
        <Card sx={{ borderRadius: 5 }}>
          <CardContent sx={{ p: { xs: 3, md: 5 } }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.4rem", md: "4rem" },
                mb: 3,
              }}
            >
              Política de cookies
            </Typography>

            <Typography sx={{ color: "text.secondary", mb: 4 }}>
              Última actualización: {legalConfig.lastUpdated}
            </Typography>

            <Typography sx={{ mb: 4, lineHeight: 1.8 }}>
              Esta Política de Cookies se aplica al sitio web{" "}
              {legalConfig.websiteUrl}, titularidad de {legalConfig.ownerName}.
            </Typography>

            <Typography variant="h2" sx={{ fontSize: "2rem", mb: 2 }}>
              1. ¿Qué son las cookies?
            </Typography>

            <Typography sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}>
              Las cookies son pequeños archivos de texto que los sitios web
              pueden almacenar en el dispositivo del usuario cuando navega por
              ellos. Permiten recordar preferencias, facilitar la navegación o
              analizar el uso del sitio.
            </Typography>

            <Typography variant="h2" sx={{ fontSize: "2rem", mb: 2 }}>
              2. Cookies que utilizamos
            </Typography>

            <Typography sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}>
              Actualmente este sitio web utiliza únicamente cookies técnicas o
              necesarias para el correcto funcionamiento de la web y la
              navegación del usuario. Estas cookies están exentas de
              consentimiento.
            </Typography>

            <Typography variant="h2" sx={{ fontSize: "2rem", mb: 2 }}>
              3. Cookies de análisis o marketing
            </Typography>

            <Typography sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}>
              En este momento no se utilizan cookies de análisis, publicidad,
              Meta Pixel, Google Analytics ni herramientas similares. Si en el
              futuro se incorporan estas herramientas, se actualizará esta
              política y se mostrará un banner de consentimiento que permita
              aceptar, rechazar o configurar las cookies no esenciales.
            </Typography>

            <Typography variant="h2" sx={{ fontSize: "2rem", mb: 2 }}>
              4. Cómo gestionar o eliminar cookies
            </Typography>

            <Typography sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}>
              El usuario puede configurar o eliminar las cookies en cualquier
              momento a través de las opciones de su navegador.
            </Typography>

            <Typography variant="h2" sx={{ fontSize: "2rem", mb: 2 }}>
              5. Modificaciones
            </Typography>

            <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              El titular podrá modificar esta Política de Cookies en función de
              novedades legislativas, regulatorias o técnicas. Se recomienda al
              usuario revisarla periódicamente.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}