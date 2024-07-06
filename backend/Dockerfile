# Use the official Python image from the Docker Hub
FROM python:3.10-slim

# Set the working directory
WORKDIR /app/backend

# Copy the requirements file into the container
COPY app/requirements.txt .

# Updating the apt package manager, installing git, and cleaning up
RUN apt-get update && apt-get install -y git ffmpeg && rm -rf /var/lib/apt/lists/*

# Install the required packages
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install "git+https://github.com/openai/whisper.git"

# Copy the FastAPI app into the container
COPY . .

# Set the command to run the FastAPI server
CMD ["uvicorn", "app.api:app", "--host", "0.0.0.0", "--port", "8000"]