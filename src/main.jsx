import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

const scene = new THREE.Scene();

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cubeMesh);

cubeMesh.position.y = 1
cubeMesh.position.x = 1
cubeMesh.position.z = 1

const camera = new THREE.PerspectiveCamera(36, window.innerWidth / window.innerHeight, 0.1, 30);
camera.position.z = 5;

const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);


const canvas = document.querySelector(".threejs");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.autoRotate = true
controls.autoRotateSpeed = 5


window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
})


const renderLoop = () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  controls.update()
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderLoop)
}

renderLoop()

