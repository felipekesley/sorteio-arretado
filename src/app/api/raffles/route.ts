import { raffles } from "@/seed";

export async function GET(req: Request) {
  return Response.json(raffles);
}
