import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",

    background: {
      default: "#151718",
      paper: "#222527",
    },

    primary: {
      main: "#A9C2CC",
      light: "#D1E1E6",
      dark: "#7F9AA5",
      contrastText: "#101213",
    },

    secondary: {
      main: "#B33A35",
      light: "#D65B55",
      dark: "#842A27",
      contrastText: "#FFFFFF",
    },

    text: {
      primary: "#F5F4EF",
      secondary: "#C9CCCA",
    },

    divider: "rgba(255, 255, 255, 0.12)",
  },

  typography: {
    fontFamily:
      "var(--font-inter), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",

    h1: {
      fontFamily: "var(--font-oswald), Impact, 'Arial Narrow', sans-serif",
      fontWeight: 800,
      letterSpacing: "0.055em",
      textTransform: "uppercase",
      lineHeight: 1.08,
    },

    h2: {
      fontFamily: "var(--font-oswald), Impact, 'Arial Narrow', sans-serif",
      fontWeight: 800,
      letterSpacing: "0.045em",
      textTransform: "uppercase",
      lineHeight: 1.12,
    },

    h3: {
      fontFamily: "var(--font-oswald), Impact, 'Arial Narrow', sans-serif",
      fontWeight: 700,
      letterSpacing: "0.035em",
      textTransform: "uppercase",
      lineHeight: 1.15,
    },

    body1: {
      lineHeight: 1.7,
    },

    button: {
      fontWeight: 800,
      textTransform: "none",
    },
  },

  shape: {
    borderRadius: 18,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
        },

        html: {
          minHeight: "100%",
          scrollBehavior: "smooth",
        },

        body: {
          margin: 0,
          minHeight: "100vh",
          background:
            "radial-gradient(circle at 76% 20%, rgba(169, 194, 204, 0.18), transparent 30%), linear-gradient(135deg, #101213 0%, #181B1D 48%, #303335 100%)",
        },

        a: {
          color: "inherit",
          textDecoration: "none",
        },

        img: {
          maxWidth: "100%",
          display: "block",
        },

        "::selection": {
          backgroundColor: "#A9C2CC",
          color: "#101213",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "999px",
          minHeight: 46,
          paddingInline: 26,
          fontWeight: 800,
        },
      },

      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            boxShadow: "0 14px 30px rgba(0, 0, 0, 0.28)",
            transition:
              "transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease",

            "&:hover": {
              transform: "translateY(-1px)",
              boxShadow: "0 18px 38px rgba(0, 0, 0, 0.38)",
            },
          },
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            borderColor: "rgba(169, 194, 204, 0.5)",

            "&:hover": {
              borderColor: "#A9C2CC",
              backgroundColor: "rgba(169, 194, 204, 0.08)",
            },
          },
        },
      ],
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage:
            "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "0 24px 70px rgba(0, 0, 0, 0.32)",
          backdropFilter: "blur(18px)",
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },

      styleOverrides: {
        root: {
          "& .MuiInputLabel-root": {
            color: "rgba(245, 244, 239, 0.72)",
            lineHeight: 1.2,
          },

          "& .MuiInputLabel-root.Mui-focused": {
            color: "#A9C2CC",
          },

          "& .MuiOutlinedInput-root": {
            borderRadius: 3,
            backgroundColor: "rgba(255, 255, 255, 0.04)",
            alignItems: "flex-start",
          },

          "& .MuiOutlinedInput-input": {
            color: "#F5F4EF",
            lineHeight: 1.5,
          },

          "& .MuiOutlinedInput-inputMultiline": {
            paddingTop: 0,
          },

          "& .MuiOutlinedInput-root textarea": {
            lineHeight: 1.6,
          },

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(169, 194, 204, 0.45)",
          },

          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(169, 194, 204, 0.75)",
          },

          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#A9C2CC",
            },
        },
      },
    },
  },
});