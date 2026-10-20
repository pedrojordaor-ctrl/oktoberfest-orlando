import type { Context } from "https://edge.netlify.com";

const BOTS = /whatsapp|facebookexternalhit|facebot|twitterbot|telegrambot|linkedinbot|slackbot|discordbot|skypeuripreview|iframely|embedly/i;

export default async (request: Request, context: Context) => {
  const ua = request.headers.get("user-agent") || "";
  if (!BOTS.test(ua)) return context.next();
  const base = "https://oktoberfest-orlando.netlify.app";
  const html = `<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8">
<title>Oktoberfest Orlando · racha da viagem</title>
<meta name="description" content="Lance os gastos, veja os saldos por casal e quem paga quem.">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Oktoberfest Orlando">
<meta property="og:title" content="Oktoberfest Orlando · racha da viagem">
<meta property="og:description" content="Lance os gastos, veja os saldos por casal e quem paga quem.">
<meta property="og:url" content="${base}/">
<meta property="og:image" content="${base}/og.jpg">
<meta property="og:image:secure_url" content="${base}/og.jpg">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Oktoberfest Orlando · racha da viagem">
<meta name="twitter:image" content="${base}/og.jpg">
</head><body><h1>Oktoberfest Orlando</h1><p>Racha da viagem.</p><img src="${base}/og.jpg" alt=""></body></html>`;
  return new Response(html, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=300" } });
};

export const config = { path: "/" };
