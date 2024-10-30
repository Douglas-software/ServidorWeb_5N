import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Idioma } from './idioma.entity'; 
import { Instructor } from './instructor.entity'; 

@Entity('aprendizajes')
export class Aprendizaje {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Idioma, (idioma) => idioma.aprendizajes)
    idioma!: Idioma;

    @ManyToOne(() => Instructor, (instructor) => instructor.aprendizajes)
    instructor!: Instructor;

    @Column()
    fecha!: Date;

    @Column()
    hora!: string; 

    @Column()
    numeroHoras!: number;

    @Column()
    nivel!: string; 
}
