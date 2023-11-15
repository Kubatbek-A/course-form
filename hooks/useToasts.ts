import { useContext } from "react";
import { ToastsContext } from "@/contexts/ToastsContext";

export default function useToasts() {
  const data = useContext(ToastsContext);

  return data;
}
