# HTMX Tutorial with Bun & Elysia

This project demonstrates basic and advanced [HTMX](https://htmx.org/) concepts using the [Bun](https://bun.sh/) runtime and the [Elysia](https://elysiajs.com/) framework.

## Requirements
- Bun v1.2.14 or later
- Elysia v1.3.8
- HTMX v2.0.6 (loaded from a CDN)

## Setup
Install dependencies:

```bash
bun install
```

Start the development server:

```bash
bun run dev
```

Then visit `http://localhost:3000` in your browser.

## Examples
The home page includes interactive demos for several HTMX features:

- **hx-get** – fetch the current server time with a button.
- **hx-post** – submit a form without a full page reload.
- **hx-trigger** – live search with debounced requests.
- **hx-swap-oob** – update elements outside the target area.
- **hx-boost** & **hx-push-url** – enhanced navigation that pushes the URL history.

Feel free to explore the code to learn how these features are implemented.
