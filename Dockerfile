FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies including dev dependencies for build
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build TinaCMS locally (generates types and GraphQL)
RUN npx @tinacms/cli build --local --skip-indexing --skip-cloud-checks

# Build Next.js app 
RUN npm run build

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=15s --retries=3 \
  CMD wget -qO- http://localhost:3000/ || exit 1

# Start the standalone server
CMD ["node", ".next/standalone/server.js"]
