# Use the official Golang image as the base image
FROM golang:1.17-alpine

# Set the current working directory inside the container
WORKDIR /webdev-blog

# Copy the go.mod and go.sum files
COPY webdev-blog/go.mod webdev-blog/go.sum ./

# Download dependencies
RUN go mod download

# Copy the source code into the container
COPY webdev-blog .

# Build the Go application with the name 'webdev-blog'
RUN go build -o webdev-blog

# Command to run the executable
CMD ["./webdev-blog"]
