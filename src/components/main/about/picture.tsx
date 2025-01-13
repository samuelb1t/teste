import { GlareCard } from "../../ui/glare-card";
import foto from "../../../assets/foto.png";

export function Picture() {
  return (
    <GlareCard className="flex items-center justify-center">
        <img src={foto} className="w-36 md:w-48 lg:w-64 xl:w-auto 2xl:w-[512px] h-40 md:h-56 lg:h-80 xl:h-auto object-cover"/>
    </GlareCard>
  );
}
