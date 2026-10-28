# ELORNA Final Website

## Run locally
```cmd
npm install
npm run dev
```

## Production test
```cmd
npm run build
```

## Deploy
Push this folder to GitHub and import the repository into Vercel.

## Chat and customer enquiries

Run the behavioural checks with `node tests/chat.cjs`.

The chat uses up to 60 recent messages, with same-tab session recovery and a clear-conversation control. Without a working model connection, a labelled multilingual service guide remains available. It must never claim to have saved an enquiry or booked a meeting.

Configure these secrets in the production hosting settings (never commit them):

- `OPENAI_API_KEY`: enables live AI responses; `OPENAI_MODEL` is optional (default `gpt-5-mini`).
- `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`: enable durable enquiries in the private CRM. Existing `KV_REST_API_URL` / `KV_REST_API_TOKEN` installations are also supported.
- `ELORNA_ADMIN_KEY`: protects the existing CRM and booking admin routes.

Enquiries are saved only after the visitor submits the structured form with explicit consent. The public endpoint validates data, uses a rate limit and atomically deduplicates the request ID. A reference is returned only after Redis confirms storage. When storage is unavailable, no success is displayed and the visitor can open an email draft to send themselves. No email is sent automatically and no meeting is booked by chat.

Production acceptance: send more than ten chat messages and verify context, switch language, test model failure, submit an authorised test enquiry, confirm its reference in the private CRM, and verify storage failure does not report success. Local checks mock provider/storage dependencies; they do not verify production credentials or provision databases.

## Engineering portfolio

The portfolio lives at `/projects`, with statically generated case-study pages at
`/projects/smartfarm`, `/projects/finance`, and `/projects/ai`. All three homepages
(English, Persian, Swedish) include the project showcase. The detail pages are in English.

- Project copy and exact GitHub repository links: `app/projects/data.ts`.
- Interactive previews: `app/projects/ProjectDemo.tsx`; sample data stays in component state.
- Original prototype screenshots: `public/projects/`.
- Styling: Tailwind CSS v4 via PostCSS, with the `pf:` prefix and no global Preflight reset.
- The invoice preview uses a labelled fixed scenario date (28 October 2026).
- These previews do not use localhost APIs, send messages, call AI models, or operate equipment.

Validate with `npm run build`. Production services and the original repositories are
separate from these portfolio simulations.
