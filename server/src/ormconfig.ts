import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite', // Ruta a tu base de datos
  synchronize: false, // Establecer en true para desarrollo, pero ten cuidado en producción
  entities: ["src/entities/pokemon/*.ts"],
  migrations: ["src/migrations/*.ts"],
});

export default AppDataSource.options; // Exportar la configuración para su uso en run-migrations.ts
