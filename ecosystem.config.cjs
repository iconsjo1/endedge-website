/** PM2 — CloudPanel nginx proxies endedge.co to port 5533 */
module.exports = {
  apps: [
    {
      name: "endedge-website",
      cwd: __dirname,
      script: "node_modules/next/dist/bin/next",
      args: "start -p 5533",
      env: {
        NODE_ENV: "production",
        PORT: "5533",
      },
    },
  ],
};
