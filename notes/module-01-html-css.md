# Módulo 1: HTML5 y CSS3 - Apuntes Técnicos y Laboratorio

## 1. Arquitectura Base HTML5
Estructura semántica obligatoria para cualquier documento web moderno.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laboratorio Módulo 1</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Título Principal</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#home">Inicio</a></li>
        </ul>
    </nav>
    <main>
        <section id="home">
            <h2>Sección de Contenido</h2>
        </section>
    </main>
    <footer>
        <p>&copy; 2026</p>
    </footer>
</body>
</html>
