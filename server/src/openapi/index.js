import yaml from 'js-yaml';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Función para cargar y parsear archivos YAML
function parseYaml(file) {
    return yaml.load(readFileSync(resolve(__dirname, `${file}.yml`), "utf8"));
  }

// Definición del objeto swaggerDoc
export const swaggerDoc = {
    openapi: "3.0.0",
    info: {
        title: "API Somni joyas",
        description: "API for SomnoJoyas DB management",
    },
    servers: [
        {
            url: 'http://localhost:3000',
        },
        {
            url: 'https://somniapi.onrender.com',
        },
    ],
    components: {
        schemas: parseYaml('schemas'),
        securitySchemes: parseYaml('security'),
        examples: parseYaml('examples'),
        responses: parseYaml('responses'),
    },
    paths: {
        ...parseYaml('orders'),
        ...parseYaml('users'),
        ...parseYaml('articles'),
        ...parseYaml('misc'),
    },
    tags: [
        {
            name: 'Orders',
            description: 'Order-related endpoints',
        },
        {
            name: 'Users',
            description: 'User-related endpoints',
        },
        {
            name: 'Articles',
            description: 'Articles-related endpoints',
        },
    ]
};
