"use client";

import NextLink from "next/link";

import { Box, Container, Link as MuiLink, Typography } from "@mui/material";

import { legalConfig } from "@/lib/legalConfig";

export function LegalFooter() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        backgroundColor: "rgba(0,0,0,0.18)",
        backdropFilter: "blur(14px)",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          py: { xs: 3, md: 4 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Typography
          sx={{
            color: "text.secondary",
            fontSize: "0.9rem",
          }}
        >
          © {new Date().getFullYear()} {legalConfig.websiteName}. Todos los
          derechos reservados.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 1.5, md: 2.5 },
          }}
        >
          <MuiLink
            component={NextLink}
            href="/aviso-legal"
            sx={{
              color: "text.secondary",
              fontSize: "0.9rem",
              textDecoration: "none",
              "&:hover": {
                color: "primary.light",
              },
            }}
          >
            Aviso legal
          </MuiLink>

          <MuiLink
            component={NextLink}
            href="/politica-de-privacidad"
            sx={{
              color: "text.secondary",
              fontSize: "0.9rem",
              textDecoration: "none",
              "&:hover": {
                color: "primary.light",
              },
            }}
          >
            Política de privacidad
          </MuiLink>

          <MuiLink
            component={NextLink}
            href="/politica-de-cookies"
            sx={{
              color: "text.secondary",
              fontSize: "0.9rem",
              textDecoration: "none",
              "&:hover": {
                color: "primary.light",
              },
            }}
          >
            Política de cookies
          </MuiLink>
        </Box>
      </Container>
    </Box>
  );
}