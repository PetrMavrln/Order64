import { useGLTF } from "@react-three/drei";
import { useLayoutEffect, useMemo } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";
import { setTextureColorSpace } from "../../utils/gltfTextureFix";
import { IMeshComponenct } from "../../models/IMeshComponenct";

const ColumnMeshComponent = ({
  position,
  rotation,
  scale,
  name,
}: IMeshComponenct) => {
  const path = `${import.meta.env.BASE_URL}3d_models/${name}.glb`;

  type GLTFResult = GLTF & {
    nodes: {
      Column: THREE.Mesh;
    };
    scene: THREE.Group;
  };

  const { nodes, scene } = useGLTF(path) as GLTFResult;

  useLayoutEffect(() => {
    setTextureColorSpace(scene);
  }, [scene]);

  const mesh = useMemo(() => {
    const cloned = nodes.Column.clone();
    cloned.castShadow = true;
    cloned.receiveShadow = true;
    return cloned;
  }, [nodes.Column]);

  return (
    <group dispose={null}>
      <primitive
        object={mesh}
        position={position as [number, number, number]}
        rotation={rotation as [number, number, number]}
        scale={scale}
      />
    </group>
  );
};

// useGLTF.preload(path);

export default ColumnMeshComponent;
