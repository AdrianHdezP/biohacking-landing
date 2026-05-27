import { Box, Card, CardContent, Container, Typography } from "@mui/material";

import { legalConfig } from "@/lib/legalConfig";

export default function PrivacyPolicyPage() {
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
              Política de privacidad
            </Typography>

            <Typography sx={{ color: "text.secondary", mb: 4 }}>
              Última actualización: {legalConfig.lastUpdated}
            </Typography>

            <Typography sx={{ mb: 4, lineHeight: 1.8 }}>
              En cumplimiento del Reglamento General de Protección de Datos
              2016/679 y de la Ley Orgánica 3/2018, de Protección de Datos
              Personales y Garantía de los Derechos Digitales, se informa al
              usuario de la siguiente política.
            </Typography>

            <Typography variant="h2" sx={{ fontSize: "2rem", mb: 2 }}>
              1. Responsable del tratamiento
            </Typography>

            <Box sx={{ display: "grid", gap: 1.2, mb: 4 }}>
              <Typography>
                <strong>Responsable:</strong> {legalConfig.ownerName}
              </Typography>
              <Typography>
                <strong>NIF:</strong> {legalConfig.nif}
              </Typography>
              <Typography>
                <strong>Email:</strong> {legalConfig.contactEmail}
              </Typography>
            </Box>

            <Typography variant="h2" sx={{ fontSize: "2rem", mb: 2 }}>
              2. Datos que recogemos
            </Typography>

            <Typography sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}>
              A través del formulario de contacto se recogen los siguientes
              datos personales: nombre, dirección de correo electrónico y, en su
              caso, el mensaje que el usuario decida enviar.
            </Typography>

            <Typography variant="h2" sx={{ fontSize: "2rem", mb: 2 }}>
              3. Finalidad del tratamiento
            </Typography>

            <Typography sx={{ color: "text.secondary", mb: 2, lineHeight: 1.8 }}>
              Los datos se tratarán para:
            </Typography>

            <Box component="ul" sx={{ color: "text.secondary", mb: 4 }}>
              <li>Informar al usuario sobre la publicación del libro.</li>
              <li>Enviar información sobre disponibilidad y puntos de venta.</li>
              <li>
                Enviar contenidos divulgativos relacionados con la temática del
                libro.
              </li>
              <li>Atender consultas realizadas por el usuario.</li>
            </Box>

            <Typography sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}>
              No se utilizarán los datos para fines distintos a los aquí
              indicados ni se elaborarán perfiles automatizados.
            </Typography>

            <Typography variant="h2" sx={{ fontSize: "2rem", mb: 2 }}>
              4. Base legal
            </Typography>

            <Typography sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}>
              La base legal para el tratamiento es el consentimiento expreso del
              usuario, otorgado al marcar la casilla correspondiente en el
              formulario.
            </Typography>

            <Typography variant="h2" sx={{ fontSize: "2rem", mb: 2 }}>
              5. Plazo de conservación
            </Typography>

            <Typography sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}>
              Los datos se conservarán mientras el usuario no solicite su
              supresión o revoque su consentimiento.
            </Typography>

            <Typography variant="h2" sx={{ fontSize: "2rem", mb: 2 }}>
              6. Destinatarios
            </Typography>

            <Typography sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}>
              Los datos no se cederán a terceros, salvo a los proveedores de
              servicios necesarios para el envío de comunicaciones o alojamiento
              de la web, que actuarán como encargados del tratamiento y deberán
              cumplir con la normativa aplicable de protección de datos.
            </Typography>

            <Typography variant="h2" sx={{ fontSize: "2rem", mb: 2 }}>
              7. Derechos del usuario
            </Typography>

            <Typography sx={{ color: "text.secondary", mb: 2, lineHeight: 1.8 }}>
              El usuario puede ejercer los siguientes derechos:
            </Typography>

            <Box component="ul" sx={{ color: "text.secondary", mb: 4 }}>
              <li>Acceso a sus datos.</li>
              <li>Rectificación de datos inexactos.</li>
              <li>Supresión de sus datos.</li>
              <li>Limitación del tratamiento.</li>
              <li>Portabilidad de los datos.</li>
              <li>Oposición al tratamiento.</li>
              <li>Revocación del consentimiento.</li>
            </Box>

            <Typography sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}>
              Para ejercer estos derechos, el usuario puede enviar un correo
              electrónico a {legalConfig.contactEmail}. Asimismo, tiene derecho a
              presentar una reclamación ante la Agencia Española de Protección de
              Datos.
            </Typography>

            <Typography variant="h2" sx={{ fontSize: "2rem", mb: 2 }}>
              8. Seguridad
            </Typography>

            <Typography sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}>
              El responsable adopta las medidas técnicas y organizativas
              necesarias para garantizar la seguridad y confidencialidad de los
              datos personales y evitar su alteración, pérdida o acceso no
              autorizado.
            </Typography>

            <Typography variant="h2" sx={{ fontSize: "2rem", mb: 2 }}>
              9. Modificaciones
            </Typography>

            <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              El responsable se reserva el derecho a modificar esta política
              para adaptarla a novedades legislativas o de su actividad. En caso
              de cambios sustanciales, se notificará al usuario cuando resulte
              necesario.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}