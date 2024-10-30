import { Router } from 'express';
import { AprendizajeController } from './controller';
import { AprendizajeDatasourceImpl } from '../../infrastructure/datasource/aprendizaje.datasource.impl';
import { AprendizajeRepositoryImpl } from '../../infrastructure/repositories/aprendizaje.repository.impl';

export class AprendizajeRoutes {

  static get routes(): Router {
    const router = Router();

    const datasource = new AprendizajeDatasourceImpl();
    const aprendizajeRepository = new AprendizajeRepositoryImpl(datasource);
    const aprendizajeController = new AprendizajeController(aprendizajeRepository);

    router.get('/', aprendizajeController.getAprendizajes);
    router.get('/:id', aprendizajeController.getAprendizajeById);
    
    router.post('/', aprendizajeController.createAprendizaje);
    router.put('/:id', aprendizajeController.updateAprendizaje);
    router.delete('/:id', aprendizajeController.deleteAprendizaje);

    return router;
  }

}
