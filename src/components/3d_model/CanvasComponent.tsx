import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import * as THREE from "three";
import { IMeshComponenct } from "../../models/IMeshComponenct";
import styles from "../../scss/scss-modules/3d_model/lion.module.scss";
import LionMeshComponent from "./LionMeshComponent";
import { Scene3DSetup } from "./Scene3DSetup";

const CanvasComponent = ({
  position,
  rotation,
  scale,
  name,
}: IMeshComponenct) => {
  return (
    <Canvas
      className={styles.canvas}
      shadows
      gl={{
        antialias: true,
        outputColorSpace: THREE.SRGBColorSpace,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1,
      }}
    >
      <Suspense fallback={null}>
        <OrbitControls autoRotate />
        <Scene3DSetup />
        <LionMeshComponent
          position={position}
          rotation={rotation}
          scale={scale}
          name={name}
        />
      </Suspense>
    </Canvas>
  );
};

export default CanvasComponent;
