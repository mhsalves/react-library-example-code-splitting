import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: {
    ExampleButton: "src/components/ExampleButton/index.jsx",
    ExampleLink: "src/components/ExampleLink/index.jsx",
  },
  output: [
    {
      dir: "public/module",
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      dir: "public/nomodule",
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  experimentalCodeSplitting: true,
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/env', '@babel/preset-react'],
    }),
    commonjs(),
  ],
}