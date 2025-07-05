from pydantic import BaseModel
from typing import List

# Modelo de entrada (lo que el usuario envía en la solicitud POST)
class WorkflowRequest(BaseModel):
    text: str
    language: str

# Modelo de cada paso del workflow
class WorkflowStep(BaseModel):
    step: int
    title: str
    type: str

# Modelo de salida (la respuesta que devuelve la API)
class WorkflowResponse(BaseModel):
    workflow: List[WorkflowStep]
