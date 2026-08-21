import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Octahedron, Box, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Procedural 3D Abstract Geometric Core
function CentralPrism({ isMobile }: { isMobile: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const outerRingRef = useRef<THREE.Mesh>(null!);
  const innerRingRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z += delta * 0.15;
      outerRingRef.current.rotation.x -= delta * 0.1;
    }
    if (innerRingRef.current) {
      innerRingRef.current.rotation.y -= delta * 0.25;
      innerRingRef.current.rotation.z += delta * 0.12;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central Floating Polyhedron */}
      <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh ref={meshRef} scale={isMobile ? 1.2 : 1.5}>
          <octahedronGeometry args={[1, 2]} />
          <meshPhysicalMaterial
            color="#8b5cf6"
            emissive="#4c1d95"
            emissiveIntensity={0.6}
            roughness={0.15}
            metalness={0.8}
            transmission={0.6}
            thickness={1.2}
            clearcoat={1}
            clearcoatRoughness={0.1}
            wireframe={false}
          />
        </mesh>
      </Float>

      {/* Outer Cyan Orbital Ring */}
      <mesh ref={outerRingRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[isMobile ? 2.0 : 2.5, 0.02, 16, 64]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#0891b2"
          emissiveIntensity={1.5}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Inner Violet Orbital Ring */}
      <mesh ref={innerRingRef} rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[isMobile ? 1.6 : 2.0, 0.025, 16, 64]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#7e22ce"
          emissiveIntensity={1.8}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Floating Micro Nodes */}
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={1.8}>
        <mesh position={[1.8, 1.2, -0.5]} scale={0.22}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#38bdf8" emissive="#0284c7" emissiveIntensity={1} metalness={0.8} roughness={0.2} />
        </mesh>
      </Float>

      <Float speed={3} rotationIntensity={1.2} floatIntensity={2}>
        <mesh position={[-1.9, -1.1, 0.4]} scale={0.18}>
          <octahedronGeometry args={[1]} />
          <meshStandardMaterial color="#c084fc" emissive="#9333ea" emissiveIntensity={1.2} metalness={0.8} roughness={0.2} />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={1} floatIntensity={1.5}>
        <mesh position={[1.5, -1.4, -0.8]} scale={0.15}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={1.5} />
        </mesh>
      </Float>
    </group>
  );
}

// Particle dust background in 3D
function ParticleField({ isMobile }: { isMobile: boolean }) {
  const count = isMobile ? 35 : 70;
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 12;
      p[i * 3 + 1] = (Math.random() - 0.5) * 12;
      p[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return p;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null!);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
      pointsRef.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[points, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#a78bfa"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Interactive Parallax Camera Rig
function CameraRig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null!);

  useFrame((state) => {
    // Subtle parallax with mouse
    const targetX = (state.pointer.x * Math.PI) / 10;
    const targetY = (state.pointer.y * Math.PI) / 10;
    
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetX, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -targetY, 0.05);
  });

  return <group ref={group}>{children}</group>;
}

// Fallback CSS Prism for mobile or non-WebGL environments
function FallbackPrism() {
  return (
    <div className="relative w-72 h-72 flex items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600/30 to-cyan-500/20 blur-3xl animate-pulse-slow" />
      <div className="relative w-44 h-44 rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-950/40 via-zinc-900/60 to-cyan-950/40 backdrop-blur-xl shadow-2xl flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-700">
        <div className="w-28 h-28 rounded-2xl border border-cyan-400/40 bg-purple-500/10 flex items-center justify-center animate-float-slow">
          <span className="font-heading text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">
            AP
          </span>
        </div>
      </div>
      {/* Decorative orbital dots */}
      <div className="absolute top-4 right-8 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] animate-ping opacity-75" />
      <div className="absolute bottom-6 left-10 w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_10px_#c084fc]" />
    </div>
  );
}

export default function HeroScene3D() {
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setHasWebGL(!!gl);
    } catch {
      setHasWebGL(false);
    }

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (hasWebGL === false) {
    return <FallbackPrism />;
  }

  return (
    <div className="w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] relative flex items-center justify-center">
      {/* Ambient background glow behind 3D Canvas */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-purple-600/15 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-1/3 left-2/3 -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-cyan-500/15 rounded-full blur-[80px] pointer-events-none" />

      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={1.5} color="#8b5cf6" />
        <pointLight position={[0, -5, 5]} intensity={1.2} color="#06b6d4" />
        <directionalLight position={[0, 5, 5]} intensity={0.8} color="#c084fc" />

        <CameraRig>
          <CentralPrism isMobile={isMobile} />
          <ParticleField isMobile={isMobile} />
        </CameraRig>
      </Canvas>
    </div>
  );
}
