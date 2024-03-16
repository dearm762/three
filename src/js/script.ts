import { WebGLRenderer, Scene, PerspectiveCamera, AxesHelper } from 'three'

const R = new WebGLRenderer()
const scene = new Scene()
const camera = new PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
)
const axesHelper = new AxesHelper(5)

scene.add(axesHelper)
camera.position.set(0, 0, 1)

R.setSize(window.innerWidth, window.innerHeight)
R.render(scene, camera)

document.body.appendChild(R.domElement)
