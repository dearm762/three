import { WebGL1Renderer, Scene, PerspectiveCamera } from 'three'

const renderer = new WebGL1Renderer()
const scene = new Scene()
const camera = new PerspectiveCamera()

renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement)
