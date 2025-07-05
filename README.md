# 🧠 Text2Workflow

**Text2Workflow** es una aplicación que convierte descripciones en lenguaje natural (en español o inglés) en flujos de trabajo estructurados. El objetivo es facilitar la automatización de procesos y la visualización de tareas a partir de texto plano, usando una API propia.

Este proyecto está en fase de desarrollo como parte de mi proceso de aprendizaje en **Python**, **FastAPI** y **arquitectura backend**, integrando un frontend moderno con **React + TypeScript**.

---

## 🚀 ¿Qué hace la app?

Convierte entradas como:

> "Quiero un flujo para contratar a un nuevo empleado: publicar vacante, revisar hojas de vida, hacer entrevistas..."

En una salida estructurada tipo JSON como:

```json
{
  "workflow": [
    { "step": 1, "title": "Publicar vacante", "type": "task" },
    { "step": 2, "title": "Revisar hojas de vida", "type": "review" },
    { "step": 3, "title": "Entrevistar candidatos", "type": "event" }
  ]
}
```

| Stack           | Tecnología              |
| --------------- | ----------------------- |
| Backend         | Python, FastAPI         |
| Frontend        | React, Vite, TypeScript |
| Infraestructura | Docker, Docker Compose  |
| DevTools        | Postman, GitHub         |

## 🧑‍💻 ¿Por qué estoy construyendo esto?

Este proyecto es parte de mi transición de frontend a arquitectura fullstack orientada a APIs, empezando desde lo más básico en backend con Python.
Lo uso para:

    Aprender a construir APIs profesionales con FastAPI

    Dominar estructuras de carpetas escalables

    Integrar frontend/backend desde cero

    Practicar CI/CD y despliegue real en próximos sprints

## ✍️ Autor

Nicolás Gracia
Desarrollador Frontend en transición hacia arquitectura de software moderna con foco en rendimiento, documentación, testing y DevOps.

## 🧩 Próximos pasos

Conectar API con modelo de IA (GPT)

Agregar historial y autenticación

Dockerizar completamente

Añadir pruebas automatizadas

CI/CD con GitHub Actions

## 📌 Licencia

Proyecto personal y educativo. Código abierto para compartir el aprendizaje.