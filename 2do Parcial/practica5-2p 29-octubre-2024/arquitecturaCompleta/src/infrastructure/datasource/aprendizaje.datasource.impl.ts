import { Aprendizaje } from '../../data/postgres/entities/aprendizaje.entity';
import { CreateAprendizajeDto, AprendizajeDatasource, AprendizajeEntity, UpdateAprendizajeDto } from '../../domain';
import { AppDataSource } from '../../data/postgres'; 
export class AprendizajeDatasourceImpl implements AprendizajeDatasource {
    async create(createAprendizajeDto: CreateAprendizajeDto): Promise<AprendizajeEntity> {
        const [error, dto] = CreateAprendizajeDto.create(createAprendizajeDto);

        if (error) throw new Error(error);
        if (!dto) throw new Error('DTO creation failed'); 
        const aprendizaje = new Aprendizaje();
        aprendizaje.idioma = { id: dto.idiomaId } as any; 
        aprendizaje.instructor = { id: dto.instructorId } as any; 
        aprendizaje.fecha = new Date(dto.fecha);
        aprendizaje.hora = dto.hora;
        aprendizaje.numeroHoras = dto.numeroHoras;
        aprendizaje.nivel = dto.nivel;

        await AppDataSource.manager.save(aprendizaje); 
        return AprendizajeEntity.fromObject(aprendizaje);
    }

    async getAll(): Promise<AprendizajeEntity[]> {
        try {
            const aprendizajes = await AppDataSource.manager.find(Aprendizaje);
            return aprendizajes.map(aprendizaje => AprendizajeEntity.fromObject(aprendizaje));
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    async findById(id: number): Promise<AprendizajeEntity> {
        const aprendizaje = await AppDataSource.manager.findOne(Aprendizaje, { where: { id } });
        if (!aprendizaje) throw `Aprendizaje with id ${id} not found`;
        return AprendizajeEntity.fromObject(aprendizaje);
    }

    async updateById(updateAprendizajeDto: UpdateAprendizajeDto): Promise<AprendizajeEntity> {
        const aprendizaje = await AppDataSource.manager.findOne(Aprendizaje, { where: { id: updateAprendizajeDto.id } });
        if (!aprendizaje) throw `Aprendizaje with id ${updateAprendizajeDto.id} not found`;
        

        Object.assign(aprendizaje, updateAprendizajeDto.values);  
        await AppDataSource.manager.save(aprendizaje);
        return AprendizajeEntity.fromObject(aprendizaje);
    }

    async deleteById(id: number): Promise<AprendizajeEntity> {
        const aprendizaje = await AppDataSource.manager.findOne(Aprendizaje, { where: { id } });
        if (!aprendizaje) throw `Aprendizaje with id ${id} not found`;
        
        await AppDataSource.manager.remove(aprendizaje);
        return AprendizajeEntity.fromObject(aprendizaje);
    }
}
