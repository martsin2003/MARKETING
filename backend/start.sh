echo "NODE_ENV=" $NODE_ENV
echo "Database URL=" $DATABASE_URL


echo "Starting the server for development"
npm run start:docker:dev
