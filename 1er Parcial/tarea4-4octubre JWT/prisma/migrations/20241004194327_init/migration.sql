-- CreateTable
CREATE TABLE "Idioma" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "Idioma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Instructor" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "fechaNacimiento" TIMESTAMP(3) NOT NULL,
    "experiencia" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Instructor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Aprendizaje" (
    "id" SERIAL NOT NULL,
    "idiomaId" INTEGER NOT NULL,
    "instructorId" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "hora" TEXT NOT NULL,
    "numeroHoras" DOUBLE PRECISION NOT NULL,
    "nivel" TEXT NOT NULL,

    CONSTRAINT "Aprendizaje_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Aprendizaje" ADD CONSTRAINT "Aprendizaje_idiomaId_fkey" FOREIGN KEY ("idiomaId") REFERENCES "Idioma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aprendizaje" ADD CONSTRAINT "Aprendizaje_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "Instructor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
