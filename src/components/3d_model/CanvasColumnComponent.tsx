import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { IMeshComponenct } from "../../models/IMeshComponenct";
import styles from "../../scss/scss-modules/3d_model/lion.module.scss";
import ColumnMeshComponent from "./ColumnMeshComponent";

const CanvasComponent = ({ position, rotation, scale, name }: IMeshComponenct) => {
  return (
    <Canvas className={styles.canvas}>
      <Suspense fallback={null}>
        <OrbitControls autoRotate />
        <ambientLight intensity={1} />
        <directionalLight position={[10, 20, 20]} intensity={2} />
        <directionalLight position={[-10, 20, -20]} intensity={0.5} />
        <ColumnMeshComponent position={position} rotation={rotation} scale={scale} name={name} />
      </Suspense>
    </Canvas>
  );
};

export default CanvasComponent;
