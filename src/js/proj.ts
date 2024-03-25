import * as T from 'three'

const scene = new T.Scene()
const camera = new T.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
)

camera.position.set(0, 0, 50)
camera.lookAt(0, 0, 0)

const renderer = new T.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const material = new T.LineBasicMaterial({ color: 0x0000ff })

const points = []
points.push(new T.Vector3(-10, 0, 0) as never)
points.push(new T.Vector3(0, 10, 0) as never)
points.push(new T.Vector3(10, 0, 0) as never)

const geometry = new T.BufferGeometry().setFromPoints(points)

const line = new T.Line(geometry, material)
scene.add(line)

function animate() {
	requestAnimationFrame(animate)
	renderer.render(scene, camera)
}

animate()
