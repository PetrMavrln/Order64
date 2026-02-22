import * as THREE from "three";

const COLOR_TEXTURE_KEYS = [
  "map",
  "emissiveMap",
  "specularMap",
  "alphaMap",
  "envMap",
] as const;

/**
 * Устанавливает правильное цветовое пространство (sRGB) для цветовых текстур.
 * Вызывать после загрузки GLTF, чтобы текстуры отображались корректно.
 */
export function setTextureColorSpace(obj: THREE.Object3D): void {
  obj.traverse((child) => {
    if (!(child instanceof THREE.Mesh)) return;
    const material = child.material;
    if (!material) return;

    const materials = Array.isArray(material) ? material : [material];
    for (const mat of materials) {
      if (!mat) continue;
      for (const key of COLOR_TEXTURE_KEYS) {
        const texture = mat[key as keyof THREE.Material];
        if (texture instanceof THREE.Texture && texture.image) {
          texture.colorSpace = THREE.SRGBColorSpace;
        }
      }
    }
  });
}
