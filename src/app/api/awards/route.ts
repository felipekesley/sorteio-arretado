import { awards } from "@/seed";

export async function GET(req: Request) {
  return Response.json(awards);
}
