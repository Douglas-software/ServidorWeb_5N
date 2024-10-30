import { Idioma } from '../../data/postgres/entities/idioma.entity';
import { CreateIdiomaDto, IdiomaDatasource, IdiomaEntity, UpdateIdiomaDto } from '../../domain';
import { AppDataSource } from '../../data/postgres'; 
export class IdiomaDatasourceImpl implements IdiomaDatasource {
    async create(createIdiomaDto: CreateIdiomaDto): Promise<IdiomaEntity> {
        const [error, dto] = CreateIdiomaDto.create(createIdiomaDto);

        if (error) throw new Error(error);
        if (!dto) throw new Error('DTO creation failed'); 

        const idioma = new Idioma();
        idioma.descripcion = dto.descripcion; 

        await AppDataSource.manager.save(idioma);
        return IdiomaEntity.fromObject(idioma); 
    }

    async getAll(): Promise<IdiomaEntity[]> {
        try {
            const idiomas = await AppDataSource.manager.find(Idioma);
            return idiomas.map(idioma => IdiomaEntity.fromObject(idioma)); 
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    async findById(id: number): Promise<IdiomaEntity> {
        const idioma = await AppDataSource.manager.findOne(Idioma, { where: { id } });
        if (!idioma) throw new Error(`Idioma with id ${id} not found`);
        return IdiomaEntity.fromObject(idioma);
    }

    async updateById(updateIdiomaDto: UpdateIdiomaDto): Promise<IdiomaEntity> {
        const idioma = await AppDataSource.manager.findOne(Idioma, { where: { id: updateIdiomaDto.id } });
        if (!idioma) throw new Error(`Idioma with id ${updateIdiomaDto.id} not found`);
        

        if (updateIdiomaDto.descripcion) {
            idioma.descripcion = updateIdiomaDto.descripcion; 
        }
        
        await AppDataSource.manager.save(idioma);
        return IdiomaEntity.fromObject(idioma);
    }

    async deleteById(id: number): Promise<IdiomaEntity> {
        const idioma = await AppDataSource.manager.findOne(Idioma, { where: { id } });
        if (!idioma) throw new Error(`Idioma with id ${id} not found`);
        
        await AppDataSource.manager.remove(idioma);
        return IdiomaEntity.fromObject(idioma);
    }
}
