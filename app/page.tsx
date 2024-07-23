import AnimateControls from "@/components/AnimateControls";
import BasicMotions from "@/components/BasicMotions";
import Gestures from "@/components/Gestures";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h2 className="text-3xl font-bold mb-12">
        Framer Motion
      </h2>
      {/* <BasicMotions /> */}
      {/* <Gestures /> */}
      <AnimateControls />
    </main>
  );
}
