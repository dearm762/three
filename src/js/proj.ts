import * as T from 'three'

const scene = new T.Scene()
const camera = new T.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
)

const renderer = new T.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)



function animate() {
	requestAnimationFrame(animate)
	renderer.render(scene, camera)
}

animate()
