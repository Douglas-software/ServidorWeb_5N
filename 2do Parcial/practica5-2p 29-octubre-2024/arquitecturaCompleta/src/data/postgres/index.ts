import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
     type: "postgres",
     host: "localhost",
     port: 5432,
     username: "neondb_owner",
     password: "D6u8UhZHpoxr",
     database: "ArquitecturaCompleta",
     synchronize: true,
     logging: true,
     entities: ["src/data/postgres/entities/*.ts"],
     migrations: ["src/data/postgres/migrations/**/*.ts"],
 })
 export const initializeAppDataSource = async () => {
     try {
         await AppDataSource.initialize();
         console.log("Conexión a PostgreSQL establecida correctamente");
     } catch (error) {
         console.error("Error al conectar con la base de datos PostgreSQL:", error);
         process.exit(1); // Detiene la app si hay un error en la conexión
     }
 };

