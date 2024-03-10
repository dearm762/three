import * as T from 'three'

const R = new T.WebGL1Renderer()

R.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(R.domElement)
