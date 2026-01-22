# Form Validation in HTML

This is an app that validates form inputs using HTML. It uses JavaScript to check for any invalid fields.

### Getting Started

1. Clone the repository.
2. Open index.html on your browser.
3. Enter input fields on the form.
4. Check for any errors in form input fields.

# Generate the HTML Container

```
docker build --platform linux/amd64 -t mi-sitio-estatico:v1 .
```

# Run the HTML Container

```
docker run -p 8181:80 --name contenedor-web mi-sitio-estatico:v1
```

# Create Playwright E2E test

- Go into the playright folder
- Execute

```
npm init playwright@latest
```

# Test Playright

```
npx playwright test --ui
```