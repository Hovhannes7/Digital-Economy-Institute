import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        graphite: "#1F2937",
        steel: "#475569",
        line: "#E5E7EB",
        paper: "#F8FAFC",
        accent: "#1D4ED8"
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(15,23,42,.06)",
        editorial: "0 24px 60px rgba(15,23,42,.10)"
      }
    }
  },
  plugins: []
};
export default config;
