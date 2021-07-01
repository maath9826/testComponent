import svelte from "rollup-plugin-svelte";
// import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
// import livereload from "rollup-plugin-livereload";
// import { terser } from "rollup-plugin-terser";
// import css from "rollup-plugin-css-only";

// const production = !process.env.ROLLUP_WATCH;

// function serve() {
//   let server;

//   function toExit() {
//     if (server) server.kill(0);
//   }

//   return {
//     writeBundle() {
//       if (server) return;
//       server = require("child_process").spawn(
//         "npm",
//         ["run", "start", "--", "--dev"],
//         {
//           stdio: ["ignore", "inherit", "inherit"],
//           shell: true,
//         }
//       );

//       process.on("SIGTERM", toExit);
//       process.on("exit", toExit);
//     },
//   };
// }

const pkg = require("./package.json");

export default {
  input: "src/stories/Button.svelte",
  output: [
    { file: pkg.module, format: "es" },
    { file: pkg.main, format: "umd", name: "Button" },
  ],
  plugins: [
    postcss({
      plugins: [],
      minimize: true,
    }),

    // babel({
    //   extensions: [".js", ".mjs", ".html", ".svelte"],
    //   include: ["src/**", "node_modules/svelte/**"],
    // }),
    svelte(),
    resolve(),
  ],
  watch: {
    clearScreen: false,
  },
};
