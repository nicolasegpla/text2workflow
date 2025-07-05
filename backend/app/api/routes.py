from fastapi import APIRouter
from app.models.schemas import WorkflowRequest, WorkflowResponse
from app.services.mock_generator import generate_mock_workflow

router = APIRouter()

@router.post("/generate-workflow", response_model=WorkflowResponse)
def generate_workflow(request: WorkflowRequest):
    return generate_mock_workflow(request)
