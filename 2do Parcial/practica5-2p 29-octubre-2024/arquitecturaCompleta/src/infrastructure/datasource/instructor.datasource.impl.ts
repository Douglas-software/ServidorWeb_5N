import { Instructor } from '../../data/postgres/entities/instructor.entity';
import { CreateInstructorDto, InstructorDatasource, InstructorEntity, UpdateInstructorDto } from '../../domain';
import { AppDataSource } from '../../data/postgres';

export class InstructorDatasourceImpl implements InstructorDatasource {
    async create(createInstructorDto: CreateInstructorDto): Promise<InstructorEntity> {
        const [error, dto] = CreateInstructorDto.create(createInstructorDto);

        if (error) throw new Error(error);
        if (!dto) throw new Error('DTO creation failed');

        const instructor = new Instructor();
        instructor.nombre = dto.nombre;
        instructor.fechaNacimiento = new Date(dto.fechaNacimiento);
        instructor.experiencia = dto.experiencia;

        await AppDataSource.manager.save(instructor);
        return InstructorEntity.fromObject(instructor);
    }

    async getAll(): Promise<InstructorEntity[]> {
        try {
            const instructores = await AppDataSource.manager.find(Instructor);
            return instructores.map(instructor => InstructorEntity.fromObject(instructor));
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    async findById(id: number): Promise<InstructorEntity> {
        const instructor = await AppDataSource.manager.findOne(Instructor, { where: { id } });
        if (!instructor) throw new Error(`Instructor with id ${id} not found`);
        return InstructorEntity.fromObject(instructor);
    }

    async updateById(updateInstructorDto: UpdateInstructorDto): Promise<InstructorEntity> {
        const instructor = await AppDataSource.manager.findOne(Instructor, { where: { id: updateInstructorDto.id } });
        if (!instructor) throw new Error(`Instructor with id ${updateInstructorDto.id} not found`);

        if (updateInstructorDto.nombre) {
            instructor.nombre = updateInstructorDto.nombre;
        }
        if (updateInstructorDto.fechaNacimiento) {
            instructor.fechaNacimiento = new Date(updateInstructorDto.fechaNacimiento);
        }
        if (updateInstructorDto.experiencia !== undefined) {
            instructor.experiencia = updateInstructorDto.experiencia;
        }

        await AppDataSource.manager.save(instructor);
        return InstructorEntity.fromObject(instructor);
    }

    async deleteById(id: number): Promise<InstructorEntity> {
        const instructor = await AppDataSource.manager.findOne(Instructor, { where: { id } });
        if (!instructor) throw new Error(`Instructor with id ${id} not found`);

        await AppDataSource.manager.remove(instructor);
        return InstructorEntity.fromObject(instructor);
    }
}
