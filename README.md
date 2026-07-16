# Sitio personal — versión 3

Rediseño estático para GitHub Pages. No requiere framework, compilación ni servidor propio.

## Archivos que debes conservar o agregar

Coloca en la raíz del repositorio:

- `profile.jpg`: fotografía vertical. Funciona mejor en proporción 4:5 y al menos 900 px de alto.
- `cv.pdf`: currículum público. Esta versión ya viene incluida sin correos ni teléfono expuestos.
- Los archivos incluidos en esta carpeta.

## Actualización basada en el CV de julio de 2026

- Se incorporó la dirección del proyecto de I+D **Docta**, financiado por ANID InES I+D.
- Se reforzó la experiencia en modelación matemática, EDP, computación científica e IA aplicada a educación.
- Se añadió el primer lugar de la promoción como dato destacado.
- Se depuraron las áreas de interés para mantener únicamente líneas actuales y experiencia consolidada.
- No se añadió el trabajo puntual de elaboración de ítems a la portada para mantener el foco académico; permanece en el CV.

### CV público y privacidad

El `cv.pdf` incluido es una copia pública del CV actualizado. Los dos correos y el teléfono fueron eliminados de forma permanente del PDF y sustituidos por `carrascobarra.com`. Conserva el CV original para postulaciones privadas, pero no lo publiques en el repositorio si quieres reducir el scraping de datos de contacto.

## Configurar el formulario sin exponer tu correo

1. Crea una cuenta y un formulario en Formspree.
2. Verifica en Formspree la dirección privada donde recibirás los mensajes.
3. Formspree entregará una URL similar a `https://formspree.io/f/abcdwxyz`.
4. Abre `assets/app.js` y reemplaza:

   ```js
   const FORM_ENDPOINT = "https://formspree.io/f/REEMPLAZA_CON_TU_ID";
   ```

5. En la configuración del formulario de Formspree, restringe los envíos al dominio `carrascobarra.com` cuando esa opción esté disponible.

El formulario ya incluye un campo honeypot `_gotcha`. La dirección receptora no aparece en el repositorio, el HTML ni el JavaScript público.

## Activar Cloudflare Turnstile — recomendado

1. Crea un widget Turnstile en Cloudflare y autoriza `carrascobarra.com`.
2. Copia la **Site Key pública** a `TURNSTILE_SITE_KEY` dentro de `assets/app.js`.
3. En Formspree, activa CAPTCHA, selecciona Cloudflare Turnstile y pega allí la **Secret Key**.
4. No pongas la Secret Key en GitHub. La validación debe quedar en Formspree.

Durante pruebas locales, agrega `localhost` a los dominios permitidos del widget.

## Publicar en GitHub Pages

1. Reemplaza el contenido del repositorio por estos archivos, conservando tu `profile.jpg`. Usa el `cv.pdf` incluido, que mantiene el contenido actualizado y sustituye los datos de contacto directos por el formulario del sitio.
2. Haz commit y push a la rama publicada.
3. En GitHub: **Settings → Pages** y verifica la rama de despliegue.
4. Confirma que el dominio personalizado siga siendo `carrascobarra.com` y que **Enforce HTTPS** esté activo.

## Medidas adicionales contra spam

- No vuelvas a insertar la dirección real, ni siquiera en Base64, comentarios, atributos `data-*` o archivos JSON.
- Si necesitas publicar una dirección, usa un alias exclusivo —por ejemplo `contacto@carrascobarra.com`— que reenvíe a tu buzón real y pueda rotarse.
- Si el dominio ya utiliza Cloudflare como DNS/proxy, activa **Email Address Obfuscation** en Scrape Shield como defensa adicional, no como sustituto del formulario.
- Elimina del repositorio cualquier historial antiguo que aún contenga el correo si el repositorio es público. Cambiar solo el último commit no borra versiones anteriores.

## Personalización rápida

- Contenidos en español e inglés: `assets/app.js`, objeto `translations`.
- Colores, tamaños y composición: primeras variables de `assets/styles.css`.
- LinkedIn, Instagram y CV: enlaces al final de `index.html`.
- Métricas: se conserva GoatCounter. El script de Netlify Identity fue eliminado porque no aporta funcionalidad en GitHub Pages.
