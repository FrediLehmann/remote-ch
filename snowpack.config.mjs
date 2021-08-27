/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: "/",
    src: "/dist"
  },
  alias: {
    components: "./src/components",
    atoms: "./src/atoms"
  },
  plugins: [
    "snowpack-plugin-relative-css-urls",
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-dotenv",
    [
      "@snowpack/plugin-run-script",
      {
        cmd: "eslint src --ext .js,.jsx,.ts,.tsx",
        // Optional: Use npm package "eslint-watch" to run on every file change
        watch: "esw -w --clear src --ext .js,.jsx,.ts,.tsx"
      }
    ]
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    bundle: true
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  }
}
