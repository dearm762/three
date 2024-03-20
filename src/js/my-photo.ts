import {
	WebGLRenderer,
	Scene,
	PerspectiveCamera,
	AxesHelper,
	MeshBasicMaterial,
	Mesh,
	PlaneGeometry,
	GridHelper,
	DoubleSide,
	TextureLoader,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import photo from '../img/me.jpg'

const renderer = new WebGLRenderer()
const textureLoader = new TextureLoader()
const scene = new Scene()
const texture = textureLoader.load(photo)

const axesHelper = new AxesHelper(25)
const camera = new PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
)

camera.position.set(0, 0, 50)

const planeGeometry = new PlaneGeometry(30, 30)
const planeMaterial = new MeshBasicMaterial({
	map: texture,
	side: DoubleSide,
})
const plane = new Mesh(planeGeometry, planeMaterial)
scene.add(plane)

const gridHelper = new GridHelper(30)
// scene.add(gridHelper)

const orbitControls = new OrbitControls(camera, renderer.domElement)
orbitControls.enableDamping = true

renderer.setSize(window.innerWidth, window.innerHeight)

window.addEventListener('resize', () => {
	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()
	renderer.setSize(window.innerWidth, window.innerHeight)
})

document.body.appendChild(renderer.domElement)

function animate() {
	requestAnimationFrame(animate)
	orbitControls.update()
	renderer.render(scene, camera)
}

animate()
