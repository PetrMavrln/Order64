import * as THREE from "three";
import { describe, expect, it } from "vitest";
import { setTextureColorSpace } from "./gltfTextureFix";

describe("setTextureColorSpace", () => {
  it("устанавливает SRGBColorSpace для map-текстуры в материале", () => {
    const texture = new THREE.Texture();
    texture.image = document.createElement("canvas");
    const material = new THREE.MeshStandardMaterial({ map: texture });
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);

    expect(texture.colorSpace).not.toBe(THREE.SRGBColorSpace);

    setTextureColorSpace(mesh);

    expect(texture.colorSpace).toBe(THREE.SRGBColorSpace);
  });

  it("не падает на mesh без материала", () => {
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      undefined as unknown as THREE.Material
    );
    expect(() => setTextureColorSpace(mesh)).not.toThrow();
  });

  it("обрабатывает группу с несколькими mesh", () => {
    const texture = new THREE.Texture();
    texture.image = document.createElement("canvas");
    const material = new THREE.MeshStandardMaterial({ map: texture });
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);
    const group = new THREE.Group();
    group.add(mesh);

    setTextureColorSpace(group);

    expect(texture.colorSpace).toBe(THREE.SRGBColorSpace);
  });
});
