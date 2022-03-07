Staging Server: [![Netlify Status](https://api.netlify.com/api/v1/badges/2d26443b-dd3c-4487-b7ab-5ea92b28b728/deploy-status)](https://app.netlify.com/sites/shark-tank-india-stats/deploys)  

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Sheets API Setup

1. From the Google Cloud console, enable the **[Google Sheets API](https://developers.google.com/sheets/api)**.
2. Click manage, then go to the credentials tab. **Click on the App Engine default service account**.
3. From there, click the _Keys_ tab and add an new JSON key.
4. This will download a JSON file to your system. Save it.
5. Convert this json to base64

6. Setting up .env.local:

```
GOOGLE_CREDENTIALS="Json converted to base64"
SHEET_ID=1OSSh4hn3o9xUs9HqRWSybyK9IvFyA6wvS_PYMsccihA
```

Google API Steps Credits: [Fireship](https://fireship.io/)

---

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
