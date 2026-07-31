# carrascobarra.com — versión 4

Sitio estático listo para GitHub Pages.

## Cambios principales

- Perfil actualizado hacia **gravitación, cosmología y física matemática**.
- Se eliminó la dependencia de una línea de tesis específica o de un supervisor concreto.
- El interés por enfoques matemáticos y teóricos se expresa como preferencia, no como especialización ya consolidada.
- Todo el contenido bilingüe principal está ahora en `index.html`.
- `assets/app.js` ya no sobrescribe los textos: solo cambia el idioma y controla el formulario.
- El correo no aparece en el HTML, JavaScript ni PDF público.
- Se incluye un favicon `.ico` y sus variantes PNG.

## Publicación

1. Conserva una copia del endpoint Formspree que usas actualmente.
2. En `index.html`, busca:

   `https://formspree.io/f/REEMPLAZA_CON_TU_ID`

   y reemplázalo por tu endpoint real.
3. Si utilizas Cloudflare Turnstile, reemplaza también:

   `REEMPLAZA_CON_TU_SITE_KEY`

   Si no lo utilizas, puedes dejarlo como está.
4. Sube todos los archivos de esta carpeta a la raíz del repositorio publicado por GitHub Pages.
5. Fuerza una recarga con `Ctrl + F5` después del despliegue.

## Cómo editar los textos

Todos los textos principales se editan directamente en `index.html`.

- Español: elementos con `data-lang="es"`.
- Inglés: elementos con `data-lang="en"`.

No es necesario modificar `assets/app.js` para cambiar biografía, intereses, trayectoria o botones.
