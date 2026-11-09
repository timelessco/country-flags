import coreWebVitals from "eslint-config-next/core-web-vitals";
import ts from "eslint-config-next/typescript";

const config = [
  {
    ignores: [".next/**", ".turbo/**", "node_modules/**", "next-env.d.ts", "dist/**", ".vinext/**", ".cloudflare/**"],
  },
  ...coreWebVitals,
  ...ts,
];

export default config;
