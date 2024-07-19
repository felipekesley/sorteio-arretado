import { http } from "@/services/http";
import type { RafflesProps } from "@/types";

export async function getRaffles() {
  try {
    const response = await http<RafflesProps[]>({
      url: `${process.env.NEXT_PUBLIC_SITE_API_URL}/raffles/`,
      method: "GET",
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
