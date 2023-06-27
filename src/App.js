import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Stats, OrbitControls, useGLTF } from '@react-three/drei'
import vs from './glsl/Skull.vs'
import fs from './glsl/Skull.fs'

const ShadowMap = (props) => {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -3, 0]}
      receiveShadow
    >
      <planeBufferGeometry attach='geometry' args={[100, 100]} />
      <shadowMaterial attach='material' opacity={0.5} color={'black'}/>
    </mesh>
  )
}

const Skull = (props) => {
  const group = useRef()
  const skull = useLoader(OBJLoader, '/model/skull/SkullHead.obj')
  const noisTex = useLoader(TextureLoader, '/model/skull/noise.png')
  // const material = new THREE.RawShaderMaterial({
  //   uniforms: {
  //     time: {
  //       type: 'f',
  //       value: 0
  //     },
  //     renderOutline: {
  //       type: 'f',
  //       value: 0
  //     },
  //     noiseTex: {
  //       type: 't',
  //       value: noisTex
  //     },
  //   },
  //   vertexShader: ,
  //   fragmentShader: '',
  // })
  // console.log(vs)
  // const skulln = new THREE.Mesh(skull.children[1].geometry, material)
  // useFrame((state, delta) => {
  //   material.uniforms.time.value += delta
  // })
  
  return(
    <group ref={group}>
      <primitive object={skull} scale={0.5}/>
    </group>
  )
}

const Box = (props) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta))
  // Return the view, these are regular Threejs elements expressed in JSX

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      castShadow
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const App = (props) => {
  const ref = useRef()
  const [height, setHeight] = useState(0)

  const resizeUpdate = (e) => {
    let h = e.target.innerHeight
    setHeight(e)
    ref.current.style.height = h.toString() + 'px'
    document.getElementById('myCanvas').height = h
    console.log(h, document.getElementById('myCanvas').height)
  }

  useEffect(() => {
    let h = window.innerHeight;
    setHeight(h);

    window.addEventListener('resize', resizeUpdate)
    console.log(ref.current.getContext('webgl2', {antialias: false}))
    return () => {
      window.removeEventListener('resize', resizeUpdate)
    }
  })

  return (
    <Canvas
      ref={ref}
      id='myCanvas'
      camera={{position: [0, 2, 10], fov: 70}}
    >
      <ambientLight intensity={0.1}/>
      <pointLight position={[10, 10, 10]} />
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      {/* <Box position={[-1.2, 0, 0]} /> */}
      <ShadowMap />
      <Skull position={[0, 0, 0]} />
      <OrbitControls />
    </Canvas>
  )
}

export default App