import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Aprendizaje } from './aprendizaje.entity'; 

@Entity('idiomas')
export class Idioma {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    descripcion!: string;

    @OneToMany(() => Aprendizaje, (aprendizaje) => aprendizaje.idioma)
    aprendizajes!: Aprendizaje[];
}
