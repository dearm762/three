import {
	WebGLRenderer,
	Scene,
	PerspectiveCamera,
	AxesHelper,
	BoxGeometry,
	MeshBasicMaterial,
	Mesh,
	PlaneGeometry,
	GridHelper,
	DoubleSide,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const R = new WebGLRenderer({ antialias: true, alpha: true })
R.setClearColor(0x1da1f2)
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
const boxMaterial = new MeshBasicMaterial({ color: 'black' })
const box = new Mesh(boxGeometry, boxMaterial)
scene.add(box)

const planeGeometry = new PlaneGeometry(30, 30)
const planeMaterial = new MeshBasicMaterial({
	color: 0xffffff,
	side: DoubleSide,
})
const plane = new Mesh(planeGeometry, planeMaterial)
plane.rotation.x = -0.5 * Math.PI
scene.add(plane)

const gridHelper = new GridHelper(30)
scene.add(gridHelper)

function animationOfBox() {
	box.rotation.z += 0.1
	R.render(scene, camera)
}

const orbit = new OrbitControls(camera, R.domElement)

R.setSize(window.innerWidth, window.innerHeight)
R.setAnimationLoop(animationOfBox)

document.body.appendChild(R.domElement)
