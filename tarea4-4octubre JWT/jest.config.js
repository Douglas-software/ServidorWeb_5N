module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    transform: {
        '^.+\\.ts$': 'ts-jest', // Transforma los archivos TypeScript
    },
    testMatch: ['**/__tests__/**/*.+(ts|tsx|js)?(x)', '**/?(*.)+(spec|test).+(ts|tsx|js)?(x)'],
};
module.exports = {
    transform: {
        '^.+\\.tsx?$': 'babel-jest', // Transforma archivos TypeScript
    },
};
