import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Aprendizaje } from './aprendizaje.entity'; 

@Entity('instructores')
export class Instructor {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nombre!: string;

    @Column()
    fechaNacimiento!: Date; 

    @Column()
    experiencia!: number; 

    @OneToMany(() => Aprendizaje, (aprendizaje) => aprendizaje.instructor)
    aprendizajes!: Aprendizaje[]; 
}
