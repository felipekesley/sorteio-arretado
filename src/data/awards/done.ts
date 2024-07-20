import { http } from "@/services/http";
import type { AwardsProps } from "@/types";

export async function done() {
  try {
    const response = await http<AwardsProps[]>({
      url: `${process.env.NEXT_PUBLIC_SITE_API_URL}/awards/done`,
      method: "GET",
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
