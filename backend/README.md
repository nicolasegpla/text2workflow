# 📚 Documentación técnica — Backend Text2Workflow

Este backend está desarrollado con FastAPI, un framework moderno, rápido (high-performance) y minimalista para construir APIs con Python 3.7+ basado en type hints.

backend/
├── app/
│   ├── api/                 # Rutas de la API (controladores)
│   │   └── routes.py
│   ├── core/                # Configuraciones globales
│   │   └── config.py
│   ├── models/              # Esquemas de entrada/salida (Pydantic)
│   │   └── schemas.py
│   ├── services/            # Lógica de negocio (mock, IA, etc.)
│   │   └── mock_generator.py
│   └── main.py              # Punto de entrada principal de la app
├── Dockerfile               # Contenedor del backend
├── requirements.txt         # Dependencias del proyecto
└── README.md                # Este archivo

## 📂 Descripción de carpetas

| Carpeta     | Descripción                                                                                  |
| ----------- | -------------------------------------------------------------------------------------------- |
| `app/`      | Contiene el núcleo de la aplicación. Todo el código del backend vive aquí.                   |
| `api/`      | Aquí se definen las rutas de la API. En este caso: `/generate-workflow`.                     |
| `models/`   | Esquemas de validación para las peticiones y respuestas, usando Pydantic.                    |
| `services/` | Lógica de negocio, como la generación de flujos de trabajo (actualmente simulado con mocks). |
| `core/`     | Configuración del proyecto (por ejemplo, variables de entorno o constantes).                 |
| `main.py`   | Inicializa FastAPI, middleware CORS, y conecta las rutas.                                    |


## 🧪 Endpoint principal

Ruta: POST /api/generate-workflow

Descripción: Recibe texto en lenguaje natural (español o inglés) y devuelve un flujo de trabajo estructurado en formato JSON.

````
{
  "text": "Necesito un flujo para contratar a un nuevo empleado",
  "language": "es"
}
````

## Respuesta (mock):

````
{
  "workflow": [
    { "step": 1, "title": "Analizar requerimientos", "type": "task" },
    { "step": 2, "title": "Diseñar flujo de tareas", "type": "design" },
    { "step": 3, "title": "Generar respuesta estructurada", "type": "response" }
  ]
}
````