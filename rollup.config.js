import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        dir: "dist",
        preserveModules: true,
        preserveModulesRoot: "src",
        format: "es",
        sourcemap: true,
        exports: "named"
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.prod.json" }),
      peerDepsExternal(),
      terser(),
      postcss({
        config: {
          path: "./postcss.config.js"
        },
        extensions: [".css"],
        minimize: true,
        inject: {
          insertAt: "top"
        }
      })
    ],
    external: [...Object.keys(packageJson.peerDependencies), /\.css$/]
  },
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts.default()],
    external: [/\.css$/]
  }
];
