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
    "experiencia" INTEGER NOT NULL,

    CONSTRAINT "Instructor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "aprendizajes" (
    "id" SERIAL NOT NULL,
    "idIdioma" INTEGER NOT NULL,
    "idInstructor" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "hora" TIMESTAMP(3) NOT NULL,
    "numeroHoras" INTEGER NOT NULL,
    "nivel" TEXT NOT NULL,

    CONSTRAINT "aprendizajes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "aprendizajes" ADD CONSTRAINT "aprendizajes_idIdioma_fkey" FOREIGN KEY ("idIdioma") REFERENCES "Idioma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aprendizajes" ADD CONSTRAINT "aprendizajes_idInstructor_fkey" FOREIGN KEY ("idInstructor") REFERENCES "Instructor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
