import { WebGL1Renderer } from 'three'

const R = new WebGL1Renderer()

R.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(R.domElement)
