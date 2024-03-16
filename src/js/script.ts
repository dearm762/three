import { WebGL1Renderer, Scene, PerspectiveCamera } from 'three'

const renderer = new WebGL1Renderer()
const scene = new Scene()
const camera = new PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
)

renderer.setSize(window.innerWidth, window.innerHeight)
renderer.render(scene, camera)

document.body.appendChild(renderer.domElement)
