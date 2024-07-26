import { API_URL } from "@/config";
import { http } from "@/services/http";
import type { Cotas } from "@/types";

export async function all() {
  try {
    const response = await http<Cotas[]>({
      url: `${API_URL}/cotas`,
      method: "GET",
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
