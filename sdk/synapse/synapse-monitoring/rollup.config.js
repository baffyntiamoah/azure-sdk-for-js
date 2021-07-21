import rollup from "rollup";
import nodeResolve from "rollup-plugin-node-resolve";
import sourcemaps from "rollup-plugin-sourcemaps";
import cjs from "@rollup/plugin-commonjs";
import { openTelemetryCommonJs } from "@azure/dev-tool/shared-config/rollup";


const ignoreKnownWarnings = (warning) => {
  if (warning.code === "THIS_IS_UNDEFINED") {
    // This error happens frequently due to TypeScript emitting `this` at the
    // top-level of a module. In this case its fine if it gets rewritten to
    // undefined, so ignore this error.
    return;
  }

  if (warning.code === "CIRCULAR_DEPENDENCY" && warning.importer.indexOf("@opentelemetry/api") >= 0) {
    // OpenTelemetry contains circular references as of 1.0.0, but they are not fatal and can be ignored.
    return;
  }

  console.error(`(!) ${warning.message}`);
}

/**
 * @type {rollup.RollupFileOptions}
 */
const config = {
  input: "./dist-esm/monitoringClient.js",
  external: ["@azure/core-http", "@azure/core-arm"],
  onwarn: ignoreKnownWarnings,
  output: {
    file: "./dist/index.js",
    format: "cjs",
    name: "Azure.SynapseMonitoring",
    sourcemap: true,
    globals: {
      "@azure/core-http": "coreHttp",
      "@azure/core-arm": "coreArm"
    },
    banner: `/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */ `
  },
  plugins: [
    nodeResolve({ module: true }),
    sourcemaps(),
    cjs({
      namedExports: {
        assert: ["ok", "deepEqual", "equal", "fail", "deepStrictEqual", "strictEqual"],
        ...openTelemetryCommonJs()
      }
    })
  ]
};

export default config;
