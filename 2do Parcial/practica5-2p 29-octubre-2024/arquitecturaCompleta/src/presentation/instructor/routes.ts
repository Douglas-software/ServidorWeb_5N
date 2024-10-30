import { Router } from 'express';
import { InstructorController } from './controller';
import { InstructorDatasourceImpl } from '../../infrastructure/datasource/instructor.datasource.impl';
import { InstructorRepositoryImpl } from '../../infrastructure/repositories/instructor.repository.impl';

export class InstructorRoutes {

  static get routes(): Router {
    const router = Router();

    const datasource = new InstructorDatasourceImpl();
    const instructorRepository = new InstructorRepositoryImpl(datasource);
    const instructorController = new InstructorController(instructorRepository);

    router.get('/', instructorController.getInstructores);
    router.get('/:id', instructorController.getInstructorById);
    
    router.post('/', instructorController.createInstructor);
    router.put('/:id', instructorController.updateInstructor);
    router.delete('/:id', instructorController.deleteInstructor);

    return router;
  }

}

