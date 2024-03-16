import {
	WebGLRenderer,
	Scene,
	PerspectiveCamera,
	AxesHelper,
	BoxGeometry,
	MeshBasicMaterial,
	Mesh,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const R = new WebGLRenderer()
const scene = new Scene()
const axesHelper = new AxesHelper(5)
const camera = new PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
)

scene.add(axesHelper)
camera.position.set(0, 0, 5)

const boxGeometry = new BoxGeometry()
const boxMaterial = new MeshBasicMaterial({ color: 0x00ff00 })
const box = new Mesh(boxGeometry, boxMaterial)
scene.add(box)

function animationOfBox() {
	box.rotation.z += 0.01
	box.material.color.set(0xffffff)
	R.render(scene, camera)
}

const orbit = new OrbitControls(camera, R.domElement)

R.setSize(window.innerWidth, window.innerHeight)
R.setAnimationLoop(animationOfBox)

document.body.appendChild(R.domElement)
