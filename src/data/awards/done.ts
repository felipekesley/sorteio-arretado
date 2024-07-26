import { API_URL } from "@/config";
import { http } from "@/services/http";
import type { AwardsProps } from "@/types";

export async function done() {
  try {
    const response = await http<AwardsProps[]>({
      url: `${API_URL}/awards/done`,
      method: "GET",
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
