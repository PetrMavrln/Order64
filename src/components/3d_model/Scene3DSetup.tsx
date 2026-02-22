import { Environment } from "@react-three/drei";
import React from "react";
/**
 * Общая настройка сцены: освещение и environment map для PBR-материалов.
 * Environment даёт отражения и мягкий ambient, улучшая отображение текстур.
 */
export function Scene3DSetup() {
  return (
    <>
      <ambientLight intensity={0.4} />

      <hemisphereLight
        color={0x87ceeb}
        groundColor={0x8b7355}
        intensity={0.6}
        position={[0, 50, 0]}
      />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={0.5}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-bias={-0.0001}
      />
      <directionalLight position={[-5, 5, 5]} intensity={0.4} />
      <directionalLight position={[0, 5, -5]} intensity={0.3} />
      <Environment preset="studio" environmentIntensity={0.8} />
    </>
  );
}
