import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/kpr-miraie-card.js",
  output: {
    file: "dist/kpr-miraie-card.js",
    format: "es",
  },
  plugins: [resolve(), terser()],
};
