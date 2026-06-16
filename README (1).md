# Plan nutricional · Jorge & Manuela

Web estática del plan semanal. Sin servidor: se aloja en GitHub Pages.

## Qué hace ahora (v1)
- Tres secciones navegables: **Fase I** (nutrición), **Fase II** (menú), **Fase III** (compra).
- Selector **Ambos / Jorge / Manuela** que filtra los valores que se muestran.
- Selector de **semana** (listo para añadir más semanas).
- **Seguimiento**: en Fase I puedes marcar cada ingesta como hecha. Se guarda en *ese* dispositivo (no se sincroniza todavía entre móviles).
- **Instalable** en el móvil: al abrir la web, "Añadir a pantalla de inicio". Funciona sin conexión.

## Archivos
- `index.html` — estructura y estilos.
- `data.js` — **el plan**. Es lo único que editas cada semana.
- `app.js` — lógica de render. No hace falta tocarlo.
- `manifest.json`, `icon.svg`, `sw.js` — para que se instale como app y abra offline.

## Subir a GitHub Pages (una sola vez)
1. Crea una cuenta en https://github.com y pulsa **New repository**.
2. Nombre, por ejemplo, `plan-nutricional`. Marca **Public**. Crea el repo.
3. En la página del repo: **Add file > Upload files**. Arrastra **todos** los archivos de esta carpeta (no la carpeta, su contenido). Commit.
4. **Settings > Pages**. En "Source" elige **Deploy from a branch**, rama `main`, carpeta `/ (root)`. Guarda.
5. En 1–2 minutos aparece la URL: `https://TU_USUARIO.github.io/plan-nutricional/`.
6. Ábrela en el móvil y añádela a la pantalla de inicio.

## Actualizar el plan cada semana
1. Edita `data.js`: copia el bloque de la última semana dentro de `weeks`, cambia `id` y `label`, edita los platos.
2. Sube el `data.js` nuevo (Add file > Upload files, sobrescribe).
3. Si cambiaste `app.js`, `index.html` u otros, sube también `sw.js` con la versión incrementada (`plan-jm-v2`, etc.) para que el móvil recoja los cambios.

## Lo siguiente (cuando quieras)
- **Sincronizar el seguimiento entre Manuela y tú** y poder **editar el plan desde la web**: requiere cuentas y base de datos. La vía gratuita que encaja es **Supabase** (login + base de datos) sobre esta misma web. La estructura de `data.js` ya está pensada para migrar a ese modelo sin rehacer la interfaz.
- **Comparar planificado vs. real**: una vez el seguimiento esté en base de datos, la Fase I ya tiene el gancho (las marcas de "hecho") para construir el informe.
