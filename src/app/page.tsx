"use client"
import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, PerspectiveCamera, OrbitControls, PointerLockControls, Center, Environment } from '@react-three/drei'
import { Embotrap } from '@/app/Embotrap'

export default function Home() {
  return (
    <main>
      <Canvas style={{ height: "100vh" }}>
        <PerspectiveCamera name="camera" fov={18} near={1} far={80} position={[0, 0, 10]} />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        {/* <PointerLockControls /> */}
        <Environment preset="studio" />
        <Center>
          {/* <ambientLight color={"white"} intensity={0.3} />
          <pointLight position={[50, 80, 10]} /> */}
          <Embotrap />
        </Center>

      </Canvas>
    </main>
  )
}

