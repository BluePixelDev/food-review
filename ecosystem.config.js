module.exports = {
    apps: [{
        name: "Ječná food review",
        script: "startscript",
        watch: false,
        autorestart: true,
        max_restarts: 5,
        restart_delay: 5000,
        metrics: true,
    }]
}