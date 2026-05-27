"use client";

import NextLink from "next/link";
import { FormEvent, useState } from "react";

import {
  Alert,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Link as MuiLink,
  TextField,
  Typography,
} from "@mui/material";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

type FormStatus = "idle" | "loading" | "success" | "error";

type LeadFormValues = {
  name: string;
  email: string;
  message: string;
};

type ApiResponse = {
  message?: string;
};

const initialFormValues: LeadFormValues = {
  name: "",
  email: "",
  message: "",
};

export function LeadForm() {
  const [values, setValues] = useState<LeadFormValues>(initialFormValues);
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isSubmitting = status === "loading";

  function updateField(field: keyof LeadFormValues, value: string) {
    setValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setErrorMessage("");

    const cleanName = values.name.trim();
    const cleanEmail = values.email.trim().toLowerCase();
    const cleanMessage = values.message.trim();

    if (!cleanName || !cleanEmail) {
      setStatus("error");
      setErrorMessage("Rellena tu nombre y tu email.");
      return;
    }

    if (!acceptedPrivacy) {
      setStatus("error");
      setErrorMessage(
        "Debes aceptar la Política de Privacidad para enviar el formulario."
      );
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: cleanName,
          email: cleanEmail,
          message: cleanMessage,
          acceptedPrivacy,
        }),
      });

      const contentType = response.headers.get("content-type");

      let result: ApiResponse = {};

      if (contentType?.includes("application/json")) {
        result = (await response.json()) as ApiResponse;
      } else {
        const textResponse = await response.text();

        console.error("Unexpected API response:", {
          status: response.status,
          body: textResponse,
        });

        setStatus("error");
        setErrorMessage(
          `La API ha respondido con un formato inesperado. Código: ${response.status}`
        );
        return;
      }

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(
          result.message ??
            `No se ha podido enviar el formulario. Código: ${response.status}`
        );
        return;
      }

      setValues(initialFormValues);
      setAcceptedPrivacy(false);
      setStatus("success");
    } catch (error) {
      console.error("Lead form submit error:", error);

      setStatus("error");
      setErrorMessage(
        "No se ha podido conectar con la API del formulario. Revisa los logs de Vercel."
      );
    }
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "grid",
        gap: 2.25,
      }}
    >
      <Box>
        <Typography
          component="label"
          htmlFor="name"
          sx={{
            display: "block",
            mb: 0.9,
            color: "rgba(245, 244, 239, 0.78)",
            fontSize: "0.9rem",
            fontWeight: 700,
          }}
        >
          Nombre
        </Typography>

        <TextField
          id="name"
          name="name"
          fullWidth
          required
          value={values.name}
          disabled={isSubmitting}
          placeholder="Tu nombre"
          onChange={(event) => updateField("name", event.target.value)}
          slotProps={{
            htmlInput: {
              "aria-label": "Nombre",
            },
          }}
        />
      </Box>

      <Box>
        <Typography
          component="label"
          htmlFor="email"
          sx={{
            display: "block",
            mb: 0.9,
            color: "rgba(245, 244, 239, 0.78)",
            fontSize: "0.9rem",
            fontWeight: 700,
          }}
        >
          Email
        </Typography>

        <TextField
          id="email"
          name="email"
          type="email"
          fullWidth
          required
          value={values.email}
          disabled={isSubmitting}
          placeholder="tuemail@ejemplo.com"
          onChange={(event) => updateField("email", event.target.value)}
          slotProps={{
            htmlInput: {
              "aria-label": "Email",
            },
          }}
        />
      </Box>

      <Box>
        <Typography
          component="label"
          htmlFor="message"
          sx={{
            display: "block",
            mb: 0.9,
            color: "rgba(245, 244, 239, 0.78)",
            fontSize: "0.9rem",
            fontWeight: 700,
          }}
        >
          Mensaje
        </Typography>

        <TextField
          id="message"
          name="message"
          multiline
          minRows={4}
          fullWidth
          value={values.message}
          disabled={isSubmitting}
          placeholder="Hola, quiero recibir información sobre el libro."
          onChange={(event) => updateField("message", event.target.value)}
          slotProps={{
            htmlInput: {
              "aria-label": "Mensaje",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              alignItems: "flex-start",
            },
            "& .MuiOutlinedInput-input": {
              pt: 0,
            },
            "& textarea": {
              lineHeight: 1.6,
            },
          }}
        />
      </Box>

      <Box
        sx={{
          p: 2,
          borderRadius: 3,
          border: "1px solid",
          borderColor: "divider",
          backgroundColor: "rgba(255,255,255,0.035)",
        }}
      >
        <Typography
          sx={{
            color: "text.secondary",
            fontSize: "0.82rem",
            lineHeight: 1.55,
            mb: 1.25,
          }}
        >
          Información básica sobre protección de datos: responsable, finalidad,
          legitimación, destinatarios y derechos se explican en la Política de
          Privacidad.
        </Typography>

        <FormControlLabel
          required
          control={
            <Checkbox
              checked={acceptedPrivacy}
              disabled={isSubmitting}
              onChange={(event) => setAcceptedPrivacy(event.target.checked)}
              color="primary"
              required
            />
          }
          label={
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: "0.86rem",
                lineHeight: 1.45,
              }}
            >
              He leído y acepto la{" "}
              <MuiLink
                component={NextLink}
                href="/politica-de-privacidad"
                target="_blank"
                sx={{
                  color: "primary.light",
                  fontWeight: 800,
                  textDecorationColor: "rgba(169,194,204,0.45)",
                }}
              >
                Política de Privacidad
              </MuiLink>{" "}
              y consiento recibir información sobre el libro por email.
            </Typography>
          }
          sx={{
            m: 0,
            alignItems: "flex-start",
            "& .MuiFormControlLabel-asterisk": {
              display: "none",
            },
          }}
        />
      </Box>

      {status === "success" && (
        <Alert
          severity="success"
          sx={{
            borderRadius: 3,
          }}
        >
          Solicitud enviada correctamente. Revisa el correo de contacto.
        </Alert>
      )}

      {status === "error" && errorMessage && (
        <Alert
          severity="error"
          sx={{
            borderRadius: 3,
          }}
        >
          {errorMessage}
        </Alert>
      )}

      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        disabled={!acceptedPrivacy || isSubmitting}
        endIcon={
          isSubmitting ? (
            <CircularProgress size={18} color="inherit" />
          ) : (
            <ArrowForwardRoundedIcon />
          )
        }
        sx={{
          justifySelf: { xs: "stretch", sm: "start" },
          mt: 1,
        }}
      >
        {isSubmitting ? "Enviando..." : "Enviar solicitud"}
      </Button>
    </Box>
  );
}