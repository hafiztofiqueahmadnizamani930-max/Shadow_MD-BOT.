module.exports = {
  apps : [{
    name: "꧁𝕊𝕚𝕝𝕖𝕟𝕥 𝔾𝕚𝕣𝕝꧂-md-bot",
    script: "./server.js",
    watch: false,
    autorestart: true,
    max_memory_restart: '2G',
    env: {
      NODE_ENV: "production",
    }
  }]
};
