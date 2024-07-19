import { HomeScreen } from "@/screens/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return <HomeScreen />;
}
