import { Router } from 'express';

import { AprendizajeRoutes } from './aprendizaje/routes';
import { IdiomaRoutes } from './idioma/routes';
import { InstructorRoutes } from './instructor/routes';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/aprendizaje', AprendizajeRoutes.routes );
    router.use('/api/idioma', IdiomaRoutes.routes );
    router.use('/api/instructor', InstructorRoutes.routes );
    
    return router;
  }


}

