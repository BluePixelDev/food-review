#!/bin/bash

export NODE_ENV=production

echo "Pulling Repo..."
git pull

# Build the Next.js app
echo "Building Next.js app..."
npm run build

# Start the PM2 app
echo "Starting PM2 with ecosystem.config.js..."
pm2 start ecosystem.config.js --log-date-format "YYYY-MM-DD HH:mm Z" --log "logs/pm2.log"

# Enable PM2's monitoring dashboard (optional)
pm2 monit

# Save PM2 process list
pm2 save

# Display logs with colors
pm2 logs --colors