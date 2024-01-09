import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { IMeshComponenct } from '../../models/IMeshComponenct';
import styles from '../../scss/css-modules/3d_model/lion.module.css';
import ColumnMeshComponent from './ColumnMeshComponent';

const CanvasComponent = ({ position, rotation, scale, name }: IMeshComponenct) => {
  return (
    <Canvas className={styles.canvas}>
      <Suspense fallback={null}>
        <OrbitControls autoRotate />
        <ambientLight intensity={0.7} />
        <pointLight position={[-20, 15, -25]} intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <ColumnMeshComponent position={position} rotation={rotation} scale={scale} name={name} />
      </Suspense>
    </Canvas>
  );
};

export default CanvasComponent;
