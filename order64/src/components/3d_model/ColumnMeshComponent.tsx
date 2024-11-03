import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTF } from "three-stdlib";
import { IMeshComponenct } from "../../models/IMeshComponenct";

const ColumnMeshComponent = ({ position, rotation, scale, name }: IMeshComponenct) => {
  const path = require(`../../assets/3d_models/${name}.glb`);

  type GLTFResult = GLTF & {
    nodes: {
      Column: THREE.Mesh;
    };
    materials: {
      SandstoneBaked: THREE.MeshStandardMaterial;
    };
  };

  const { nodes, materials } = useGLTF(path) as GLTFResult;
  // const mater = new THREE.MeshLambertMaterial({ color: 0xd5c2a5 });
  // const mesh = new THREE.Mesh(nodes.lion.geometry, materials.plaster);
  const mesh = new THREE.Mesh(nodes.Column.geometry, materials.SandstoneBaked);

  return (
    <group dispose={null}>
      <primitive
        object={mesh}
        //TODO проблема с прокидыванием пропсов position и rotation. Не считывает значения position={position}
        position={position}
        rotation={rotation}
        scale={scale}
      />
    </group>
  );
};

// useGLTF.preload(path);

export default ColumnMeshComponent;
