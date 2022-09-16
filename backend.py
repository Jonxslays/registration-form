"""
Backend for testing the API response.
"""

import base64

import fastapi
import uvicorn
from fastapi.middleware.cors import CORSMiddleware


app = fastapi.FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    allow_origins=["*"],
)


@app.post("/api/user")
async def index(req: fastapi.Request) -> dict[str, str]:
    print("Beanos")
    data = await req.json()
    return {
        "id": "abc123",
        "username": base64.b64decode(data["username"]).decode(),
    }


if __name__ == "__main__":
    uvicorn.run(app, port=8080, host="127.0.0.1")
