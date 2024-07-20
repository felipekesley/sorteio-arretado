import { http } from "@/services/http";
import type { AwardsProps } from "@/types";

export async function active() {
  try {
    const response = await http<AwardsProps[]>({
      url: `${process.env.NEXT_PUBLIC_SITE_API_URL}/awards/`,
      method: "GET",
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
