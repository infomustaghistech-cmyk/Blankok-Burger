import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, ContactShadows, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

function BurgerPart({ position, targetY, delay, children }: { position: [number, number, number], targetY: number, delay: number, children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStart(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useFrame((state, delta) => {
    if (!ref.current || !start) return;
    
    // Smooth drop animation to target Y
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, targetY, 0.08);
  });

  return (
    <group ref={ref} position={position}>
      {children}
    </group>
  );
}

function BurgerModel() {
  return (
    <group>
      {/* Bottom Bun - Toasted Brioche */}
      <BurgerPart position={[0, 4, 0]} targetY={-0.45} delay={100}>
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[1, 1, 0.4, 48]} />
          <meshStandardMaterial 
            color="#c5a059" 
            roughness={0.3} 
            metalness={0.05} 
            bumpScale={0.02}
          />
        </mesh>
      </BurgerPart>
      
      {/* Lettuce - Fresh Green */}
      <BurgerPart position={[0, 6, 0]} targetY={-0.25} delay={400}>
        <mesh position={[0, -0.05, 0]} rotation={[0.1, 0, 0]} castShadow>
          <cylinderGeometry args={[1.1, 1.1, 0.05, 32]} />
          <meshStandardMaterial 
            color="#2f5a2d" 
            roughness={0.8} 
            emissive="#1a3a1a"
            emissiveIntensity={0.2}
          />
        </mesh>
      </BurgerPart>

      {/* Patty - Juicy Grilled */}
      <BurgerPart position={[0, 8, 0]} targetY={-0.12} delay={700}>
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[1.05, 1.05, 0.3, 32]} />
          <meshStandardMaterial 
            color="#2b1a18" 
            roughness={0.9} 
            metalness={0.1}
          />
        </mesh>
      </BurgerPart>

      {/* Cheese - Melting Cheddar */}
      <BurgerPart position={[0, 10, 0]} targetY={0.02} delay={1000}>
        <mesh rotation={[0, Math.PI / 4, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.6, 0.04, 1.6]} />
          <meshStandardMaterial color="#fcc419" roughness={0.2} />
        </mesh>
        {/* Melt overflow */}
        <mesh position={[0.75, -0.1, 0.75]} rotation={[0.3, 0, 0.3]}>
           <cylinderGeometry args={[0.05, 0.05, 0.3, 12]} />
           <meshStandardMaterial color="#fcc419" roughness={0.2} />
        </mesh>
      </BurgerPart>

      {/* Tomato - Fresh Slices */}
      <BurgerPart position={[0, 12, 0]} targetY={0.15} delay={1300}>
        <group>
          <mesh position={[0.4, 0, 0]} castShadow>
            <cylinderGeometry args={[0.45, 0.45, 0.08, 16]} />
            <meshStandardMaterial color="#c92a2a" roughness={0.3} />
          </mesh>
          <mesh position={[-0.4, 0, 0]} castShadow>
            <cylinderGeometry args={[0.45, 0.45, 0.08, 16]} />
            <meshStandardMaterial color="#c92a2a" roughness={0.3} />
          </mesh>
        </group>
      </BurgerPart>

      {/* Top Bun - Glazed Brioche with Seeds */}
      <BurgerPart position={[0, 15, 0]} targetY={0.4} delay={1600}>
        <group>
          <mesh castShadow receiveShadow>
            <sphereGeometry args={[1, 48, 24, 0, Math.PI * 2, 0, Math.PI / 2]} />
            <meshStandardMaterial 
              color="#c5a059" 
              roughness={0.3} 
              metalness={0.05}
            />
          </mesh>
          
          {/* Detailed Seeds */}
          {[...Array(25)].map((_, i) => (
            <mesh
              key={i}
              position={[
                Math.sin(i * 1.5) * (0.3 + Math.random() * 0.45),
                0.8,
                Math.cos(i * 1.5) * (0.3 + Math.random() * 0.45)
              ]}
              scale={0.02}
              rotation={[Math.random(), Math.random(), Math.random()]}
            >
              <sphereGeometry />
              <meshStandardMaterial color="#f8f9fa" roughness={0.1} />
            </mesh>
          ))}
        </group>
      </BurgerPart>
    </group>
  );
}

export function BurgerScene() {
  return (
    <div className="h-full w-full">
      <Canvas shadows dpr={[1, 2]} gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}>
        <PerspectiveCamera makeDefault position={[6, 4, 6]} fov={30} />
        <Suspense fallback={null}>
          <Environment preset="night" />
          
          {/* Main Studio Light */}
          <pointLight position={[5, 10, 5]} intensity={250} castShadow shadow-mapSize={[1024, 1024]} />
          
          {/* Red Rim Light Behind */}
          <spotLight 
            position={[-5, 2, -5]} 
            intensity={400} 
            color="#FF0000" 
            angle={0.5} 
            penumbra={1} 
          />
          
          <ambientLight intensity={0.5} />

          <Float
            speed={0.5} 
            rotationIntensity={0.05} 
            floatIntensity={0.1} 
          >
            <BurgerModel />
          </Float>

          <ContactShadows 
            position={[0, -0.65, 0]} 
            opacity={0.8} 
            scale={8} 
            blur={3} 
            far={4} 
            color="#000000"
          />
        </Suspense>
        <OrbitControls 
          autoRotate 
          autoRotateSpeed={0.3} 
          enableZoom={false} 
          enableDamping 
          dampingFactor={0.05} 
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>
    </div>
  );
}

