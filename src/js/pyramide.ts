import {
	WebGLRenderer,
	Scene,
	PerspectiveCamera,
	Vector3,
	LineBasicMaterial,
	BufferGeometry,
	Line,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const renderer = new WebGLRenderer()
const scene = new Scene()

const camera = new PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
)

camera.position.set(0, 0, 50)

const orbitControls = new OrbitControls(camera, renderer.domElement)
orbitControls.enableDamping = true

renderer.setSize(window.innerWidth, window.innerHeight)

window.addEventListener('resize', () => {
	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()
	renderer.setSize(window.innerWidth, window.innerHeight)
})

document.body.appendChild(renderer.domElement)

const points = []
points.push(new Vector3(15, 0, 15) as never)
points.push(new Vector3(-15, 0, 15) as never)
points.push(new Vector3(-15, 0, -15) as never)
points.push(new Vector3(15, 0, -15) as never)
points.push(new Vector3(15, 0, 15) as never)
points.push(new Vector3(0, 25, 0) as never)
points.push(new Vector3(-15, 0, -15) as never)
points.push(new Vector3(0, 25, 0) as never)
points.push(new Vector3(15, 0, -15) as never)
points.push(new Vector3(0, 25, 0) as never)
points.push(new Vector3(-15, 0, 15) as never)

const geometry = new BufferGeometry().setFromPoints(points)

const material = new LineBasicMaterial({
	color: 0xffffff,
	linewidth: 0,
})

const line = new Line(geometry, material)
scene.add(line)

function animate() {
	requestAnimationFrame(animate)
	orbitControls.update()
	renderer.render(scene, camera)
}

animate()
