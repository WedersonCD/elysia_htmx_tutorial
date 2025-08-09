import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'

const app = new Elysia()
  .use(html())
  .get('/', ({ html }) =>
    html`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>HTMX with Elysia</title>
  <script src="https://unpkg.com/htmx.org@2.0.6"></script>
</head>
<body>
  <h1>HTMX Examples</h1>
  <section>
    <h2>Basic hx-get</h2>
    <button hx-get="/time" hx-target="#time" hx-swap="innerHTML">Get current time</button>
    <div id="time"></div>
  </section>

  <section>
    <h2>Form with hx-post</h2>
    <form hx-post="/echo" hx-target="#echo" hx-swap="innerHTML">
      <input type="text" name="text" placeholder="Say something..." />
      <button type="submit">Send</button>
    </form>
    <div id="echo"></div>
  </section>

  <section>
    <h2>Live search (hx-trigger)</h2>
    <input type="text"
      name="q"
      placeholder="Start typing..."
      hx-get="/search"
      hx-trigger="keyup changed delay:500ms"
      hx-target="#results"
      hx-swap="innerHTML" />
    <ul id="results"></ul>
  </section>

  <section>
    <h2>Out-of-band swap</h2>
    <h3 id="oob-target">Original header</h3>
    <button hx-get="/oob">Update header</button>
  </section>

  <section>
    <h2>Navigation with hx-boost & hx-push-url</h2>
    <div hx-boost="true" hx-target="#about">
      <a href="/about" hx-push-url="true">Load about snippet</a>
    </div>
    <div id="about"></div>
  </section>
</body>
</html>`
  )
  .get('/time', () => new Date().toLocaleTimeString())
  .post('/echo', ({ body }) => `You said: ${body.text ?? ''}`)
  .get('/search', ({ query }) => {
    const q = String(query.q ?? '').toLowerCase()
    const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape']
    const filtered = items.filter(item => item.toLowerCase().includes(q))
    return filtered.map(item => `<li>${item}</li>`).join('') || '<li>No results</li>'
  })
  .get('/oob', () => '<h3 id="oob-target" hx-swap-oob="true">Updated header via OOB swap</h3>')
  .get('/about', () => `<p>This content was loaded via hx-boost and pushes the URL.</p>`)
  .listen(3000)

console.log(`Elysia server running at http://localhost:${app.server?.port}`)
