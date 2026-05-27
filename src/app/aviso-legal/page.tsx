import { Box, Card, CardContent, Container, Typography } from "@mui/material";

import { legalConfig } from "@/lib/legalConfig";

export default function LegalNoticePage() {
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
                fontSize: { xs: "2.6rem", md: "4.2rem" },
                mb: 3,
              }}
            >
              Aviso legal
            </Typography>

            <Typography sx={{ color: "text.secondary", mb: 4 }}>
              Última actualización: {legalConfig.lastUpdated}
            </Typography>

            <Typography sx={{ mb: 3, lineHeight: 1.8 }}>
              En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de
              la Información y Comercio Electrónico, se informa de los siguientes
              datos identificativos del titular del sitio web:
            </Typography>

            <Box sx={{ display: "grid", gap: 1.2, mb: 4 }}>
              <Typography>
                <strong>Titular:</strong> {legalConfig.ownerName}
              </Typography>
              <Typography>
                <strong>NIF:</strong> {legalConfig.nif}
              </Typography>
              <Typography>
                <strong>Email de contacto:</strong>{" "}
                {legalConfig.contactEmail}
              </Typography>
              <Typography>
                <strong>Sitio web:</strong> {legalConfig.websiteUrl}
              </Typography>
            </Box>

            <Typography variant="h2" sx={{ fontSize: "2rem", mb: 2 }}>
              Objeto
            </Typography>

            <Typography sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}>
              El presente sitio web tiene carácter informativo y divulgativo. Su
              finalidad es ofrecer información sobre el libro del titular, su
              próxima publicación, puntos de venta y contenidos relacionados con
              la temática del mismo.
            </Typography>

            <Typography variant="h2" sx={{ fontSize: "2rem", mb: 2 }}>
              Condiciones de uso
            </Typography>

            <Typography sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}>
              El acceso al sitio web es gratuito y no exige registro previo,
              salvo para recibir comunicaciones informativas mediante el
              formulario habilitado al efecto. El usuario se compromete a hacer
              un uso adecuado de los contenidos y servicios del sitio.
            </Typography>

            <Typography variant="h2" sx={{ fontSize: "2rem", mb: 2 }}>
              Propiedad intelectual
            </Typography>

            <Typography sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}>
              Todos los contenidos del sitio web, incluidos textos, imágenes,
              diseño y código, son titularidad de {legalConfig.ownerName} o
              cuentan con la correspondiente autorización para su uso. Queda
              prohibida su reproducción total o parcial sin autorización previa
              por escrito.
            </Typography>

            <Typography variant="h2" sx={{ fontSize: "2rem", mb: 2 }}>
              Responsabilidad
            </Typography>

            <Typography sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}>
              El titular no se hace responsable de los daños y perjuicios que
              pudieran derivarse del uso de la información contenida en el sitio
              web. Los consejos ofrecidos tienen carácter divulgativo y no
              sustituyen asesoramiento profesional.
            </Typography>

            <Typography variant="h2" sx={{ fontSize: "2rem", mb: 2 }}>
              Legislación aplicable
            </Typography>

            <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              El presente Aviso Legal se rige por la legislación española.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}