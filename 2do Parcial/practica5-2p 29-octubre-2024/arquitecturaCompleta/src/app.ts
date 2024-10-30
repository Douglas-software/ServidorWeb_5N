import { envs } from './config/envs';
import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/server';

import "reflect-metadata";
import { AppDataSource } from "../src/data/postgres";

AppDataSource.initialize()
  .then(() => {
    console.log("Conexión con la base de datos establecida.");
  })
  .catch((error) => console.log(error));


(async()=> {
  main();
})();


function main() {

  const server = new Server({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
    routes: AppRoutes.routes,
  });

  server.start();
}