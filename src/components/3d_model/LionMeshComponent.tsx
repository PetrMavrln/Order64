import { useGLTF } from "@react-three/drei";
import { useLayoutEffect, useMemo } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";
import { setTextureColorSpace } from "../../utils/gltfTextureFix";
import { IMeshComponenct } from "../../models/IMeshComponenct";

const LionMeshComponent = ({ scale, name }: IMeshComponenct) => {
  const path = `${import.meta.env.BASE_URL}3d_models/${name}.glb`;

  type GLTFResult = GLTF & {
    nodes: {
      lion: THREE.Mesh;
    };
    scene: THREE.Group;
  };

  const { nodes, scene } = useGLTF(path) as GLTFResult;

  useLayoutEffect(() => {
    setTextureColorSpace(scene);
  }, [scene]);

  const mesh = useMemo(() => {
    const cloned = nodes.lion.clone();
    cloned.castShadow = true;
    cloned.receiveShadow = true;
    return cloned;
  }, [nodes.lion]);

  const position: [number, number, number] =
    name === "lion2-sandstone-transformed"
      ? [0.013, 0.062, -0.002]
      : [-0.009, 0.068, 0.009];

  const rotation: [number, number, number] =
    name === "lion2-sandstone-transformed"
      ? [Math.PI / 2, 0, -2.2]
      : [Math.PI / 2, 0, -4.422];

  return (
    <group dispose={null}>
      <primitive
        object={mesh}
        position={position}
        rotation={rotation}
        scale={scale}
      />
    </group>
  );
};

// useGLTF.preload(path);

export default LionMeshComponent;
