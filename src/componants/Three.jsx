import React, { useEffect } from "react";
import * as THREE from "three";

const Three = () => {
  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    ); // Decreased far plane for closer view
    camera.position.z = 3; // Moved camera closer to the sphere

    // Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Sphere
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshPhongMaterial({ color: 0xff0000 }); // Phong material for lighting
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Light
    const pointLight = new THREE.PointLight(0xffffff, 5); // Increased intensity
    pointLight.position.set(2, 1, 2); // Position the light closer to the sphere
    scene.add(pointLight);

    // Render function (not in an animation loop)
    const render = () => {
      renderer.render(scene, camera);
    };

    render(); // Call render once to render the scene initially

    // Cleanup
    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null; // No need to render anything here as Three.js handles rendering
};

export default Three;
