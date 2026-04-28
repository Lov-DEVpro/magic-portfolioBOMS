import { getPosts } from "@/utils/utils";
import { notFound } from "next/navigation";

export const runtime = "nodejs";

function cleanText(value: string): string {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/[\\()]/g, "\\$&")
    .replace(/[^\x20-\x7E]/g, "")
    .trim();
}

function createPdf(title: string, summary: string): string {
  const lines = [
    "BOMS-expo portfolio",
    cleanText(title),
    cleanText(summary),
    "Kontakt: info@bomsexpo.com",
  ].filter(Boolean);

  const text = lines
    .map(
      (line, index) =>
        `BT /F1 ${index === 1 ? 20 : 12} Tf 72 ${740 - index * 34} Td (${line}) Tj ET`,
    )
    .join("\n");

  const objects = [
    "1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj",
    "2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj",
    "3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >> endobj",
    "4 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj",
    `5 0 obj << /Length ${text.length} >> stream\n${text}\nendstream endobj`,
  ];

  let offset = 9;
  const xref = ["0000000000 65535 f "];
  const body = objects
    .map((object) => {
      xref.push(`${String(offset).padStart(10, "0")} 00000 n `);
      offset += object.length + 1;
      return object;
    })
    .join("\n");
  const table = `xref\n0 ${xref.length}\n${xref.join("\n")}`;
  const trailer = `trailer << /Size ${xref.length} /Root 1 0 R >>\nstartxref\n${offset}\n%%EOF`;

  return `%PDF-1.4\n${body}\n${table}\n${trailer}`;
}

export async function GET(_: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPosts(["src", "app", "portfolio", "posts"]).find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const pdf = createPdf(post.metadata.title, post.metadata.summary);

  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${slug}.pdf"`,
    },
  });
}
