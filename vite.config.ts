import path from "path";
import { defineConfig } from "vite";
import packageJson from './package.json';
import babel from '@rollup/plugin-babel';
import { terser } from "rollup-plugin-terser";

const getPackageName = () => {
    return packageJson.name;
};

const getPackageNameCamelCase = () => {
    try {
        return getPackageName().replace(/-./g, char => char[1].toUpperCase());
    } catch (err) {
        throw new Error("Name property in package.json is missing.");
    }
};

const fileName = {
    es: `${getPackageName()}.mjs`,
    cjs: `${getPackageName()}.cjs`,
    iife: `${getPackageName()}.iife.js`,
};

const formats = Object.keys(fileName) as Array<keyof typeof fileName>;

export default defineConfig({
    base: "./",
    build: {
        target: "es2015",
        outDir: "./build",
        minify: "terser",
        lib: {
            entry: path.resolve(__dirname, "src/main.ts"),
            name: getPackageNameCamelCase(),
            formats,
            fileName: format => fileName[format],
        },
        rollupOptions: {
            external:[/\\src\/icons/],
            plugins: [
                terser(),
                babel({
                    extensions: ['.js', '.ts'],
                    babelHelpers: 'runtime',
                    plugins: ['@babel/plugin-transform-runtime'],
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                useBuiltIns: "entry",
                                corejs: { "version": 3, "proposals": true },
                                targets: {
                                    browsers: ['last 2 versions', '> 1%', 'not ie <= 11'],
                                },
                            },
                        ],
                    ],
                }),
            ],
        }
    },
    resolve: {
        alias: [
            { find: "@", replacement: path.resolve(__dirname, "src") },
            { find: "@components", replacement: path.resolve(__dirname, "src/components") },
        ],
    },
});