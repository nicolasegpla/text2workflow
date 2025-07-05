from app.models.schemas import WorkflowRequest, WorkflowResponse

def generate_mock_workflow(request: WorkflowRequest) -> WorkflowResponse:
    return WorkflowResponse(workflow=[
        {"step": 1, "title": "Analizar requerimientos", "type": "task"},
        {"step": 2, "title": "Diseñar flujo de tareas", "type": "design"},
        {"step": 3, "title": "Generar respuesta estructurada", "type": "response"},
    ])
