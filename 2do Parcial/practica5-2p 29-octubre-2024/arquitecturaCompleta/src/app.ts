import { envs } from './config/envs';
import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/server';
import "reflect-metadata";
import { AppDataSource } from "../src/data/postgres";

(async () => {
  try {
    // Inicializa la conexión a la base de datos
    await AppDataSource.initialize();
    console.log("Conexión con la base de datos establecida.");

    // Inicia el servidor después de la conexión exitosa
    const server = new Server({
      port: envs.PORT,
      public_path: envs.PUBLIC_PATH,
      routes: AppRoutes.routes,
    });

    server.start();
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
    process.exit(1); // Detiene la app si hay un error en la conexión
  }
})();
