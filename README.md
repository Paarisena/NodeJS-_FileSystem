```markdown
# Timestamped File Creator API

This API allows users to create timestamped text files and list and read files from a specified folder. It is deployed on Render and can be accessed at the base URL: [https://nodejs-filesystem-lic6.onrender.com/](https://nodejs-filesystem-lic6.onrender.com/).

## Base URL
```

https://nodejs-filesystem-lic6.onrender.com/

```

## Endpoints

### 1. Home

- **URL**: `/`
- **Method**: `GET`
- **Description**: A simple home endpoint to verify the API is running.
- **Request Parameters**: None
- **Response**:
  - Status: `200 OK`
  - Body: `"API is running"`

### 2. Create Timestamped File

- **URL**: `/create-file`
- **Method**: `GET`
- **Description**: Creates a timestamped text file in the system's temporary directory.
- **Request Parameters**: None
- **Response**:
  - Status: `200 OK`
  - Body: `File created: {filename}`

### 3. List All Files

- **URL**: `/list-all-files`
- **Method**: `GET`
- **Description**: Lists all files in the specified folder.
- **Request Parameters**: None
- **Response**:
  - Status: `200 OK`
  - Body: JSON array of file paths

### 4. Display File Contents

- **URL**: `/file-contents/:filename`
- **Method**: `GET`
- **Description**: Displays the contents of a specific file.
- **Request Parameters**:
  - `:filename`: The name of the file whose contents you want to read.
- **Response**:
  - Status: `200 OK`
  - Body: Contents of the file
  - Status: `500 Internal Server Error` if the file cannot be read

## Example Requests

### Create Timestamped File

```

GET https://nodejs-filesystem-lic6.onrender.com/create-file

```

Response:
```

File created: 24052024_180000.txt

```

### List All Files

```

GET https://nodejs-filesystem-lic6.onrender.com/list-all-files

````

Response:
```json
{
  "files": [
    "/tmp/timestamps/24052024_180000.txt",
    "/tmp/timestamps/24052024_180100.txt"
  ]
}
````

### Display File Contents

```
GET https://nodejs-filesystem-lic6.onrender.com/file-contents/24052024_180000.txt
```

Response:

```
This file is created by the user [username] and created at 24/05/2024, 18:00:00
```

## Installation

1. **Clone the repository**:

```bash
git clone <repository-url>
```

2. **Navigate to the project directory**:

```bash
cd <project-directory>
```

3. **Install dependencies**:

```bash
npm install
```

4. **Start the server**:

```bash
npm start
```

The server will start listening on port 8100 by default.

## License

This project is licensed under the [MIT License](LICENSE).

```

```
