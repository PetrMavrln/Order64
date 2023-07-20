import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';
import { IMeshComponenct } from '../../models/IMeshComponenct';

const LionMeshComponent = ({ position, rotation, scale, name }: IMeshComponenct) => {
  const path = require(`../../assets/3d_models/${name}.glb`);

  type GLTFResult = GLTF & {
    nodes: {
      lion: THREE.Mesh;
    };
    materials: {
      plaster: THREE.MeshStandardMaterial;
    };
  };

  const { nodes, materials } = useGLTF(path) as GLTFResult;
  const mesh = new THREE.Mesh(nodes.lion.geometry, materials.plaster);

  return (
    <group dispose={null}>
      <primitive
        object={mesh}
        //TODO проблема с прокидыванием пропсов position и rotation. Не считывает значения position={position}
        position={name === 'lion2Big-transformed' ? [0.013, 0.062, -0.002] : [-0.009, 0.068, 0.009]}
        rotation={
          name === 'lion2Big-transformed' ? [Math.PI / 2, 0, -2.2] : [Math.PI / 2, 0, -4.422]
        }
        scale={scale}
      />
    </group>
  );
};

// useGLTF.preload(path);

export default LionMeshComponent;
