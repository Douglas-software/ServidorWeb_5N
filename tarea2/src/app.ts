import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// FUNCION DE CREAR O ACTUALIZAR REGISTROS
async function crearOActualizarIdioma(id: number, descripcion: string) {
  const idioma = await prisma.idioma.upsert({
    where: { id },
    update: {}, // No actualiza nada si ya existe
    create: { descripcion },
  });
  return idioma;
}

async function crearOActualizarInstructor(id: number, nombre: string, fechaNacimiento: Date, experiencia: number) {
  const instructor = await prisma.instructor.upsert({
    where: { id },
    update: {}, // No actualiza nada si ya existe
    create: { nombre, fechaNacimiento, experiencia },
  });
  return instructor;
}

// FUNCION DE CREAR APRENDIZAJE
async function crearAprendizaje(
  idIdioma: number,
  idInstructor: number,
  fecha: Date,
  hora: Date,
  numeroHoras: number,
  nivel: string
) {
  try {
    // Crea o actualiza los registros en Idioma e Instructor
    await crearOActualizarIdioma(idIdioma, 'Descripción del Idioma');
    await crearOActualizarInstructor(idInstructor, 'Nombre del Instructor', new Date('1985-01-15'), 10);

    const nuevoAprendizaje = await prisma.aprendizaje.create({
      data: {
        idIdioma,
        idInstructor,
        fecha,
        hora,
        numeroHoras,
        nivel,
      },
    });

    console.log('Aprendizaje creado:', nuevoAprendizaje);
    return nuevoAprendizaje;
  } catch (error) {
    console.error('Error creando Aprendizaje:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// FUNCION DE CONSULTA GENERAL
async function obtenerTodosLosAprendizajes() {
  try {
    const aprendizajes = await prisma.aprendizaje.findMany({
      include: {
        idioma: true,
        instructor: true,
      },
    });

    console.log('Todos los aprendizajes:', aprendizajes);
    return aprendizajes;
  } catch (error) {
    console.error('Error obteniendo aprendizajes:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Ejecuta las funciones
crearAprendizaje(1, 2, new Date('2024-09-20'), new Date('2024-09-20T15:00:00Z'), 5, 'Intermedio');
obtenerTodosLosAprendizajes();
