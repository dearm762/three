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
	SphereGeometry,
	TextureLoader,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import photo from '../img/me.jpg'

const R = new WebGLRenderer()
const textureLoader = new TextureLoader()
const scene = new Scene()

const texture = textureLoader.load(photo)

const axesHelper = new AxesHelper(5)
const camera = new PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
)

// scene.add(axesHelper)
camera.position.set(0, 0, 50)

const boxGeometry = new BoxGeometry()
const boxMaterial = new MeshBasicMaterial({ color: 0x000000 })
const box = new Mesh(boxGeometry, boxMaterial)
// scene.add(box)

const planeGeometry = new PlaneGeometry(30, 30)
const planeMaterial = new MeshBasicMaterial({
	map: texture,
	side: DoubleSide,
})
const plane = new Mesh(planeGeometry, planeMaterial)

scene.add(plane)

const gridHelper = new GridHelper(30)
// scene.add(gridHelper)

const sphereGeometry = new SphereGeometry(4, 50, 50)
const sphereMaterial = new MeshBasicMaterial({
	color: 0x1da1f2,
})
const sphere = new Mesh(sphereGeometry, sphereMaterial)
// scene.add(sphere)

function animationOfBox() {
	box.rotation.x += 0.1
	R.render(scene, camera)
}

const orbit = new OrbitControls(camera, R.domElement)

R.setSize(window.innerWidth, window.innerHeight)
R.setAnimationLoop(animationOfBox)

document.body.appendChild(R.domElement)
