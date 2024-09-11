import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import { useRef } from "react";

function CubeRotate() {
  const RotatingCube = () => {
    const meshRef = useRef();
    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.rotation.y += 0.01;
        meshRef.current.rotation.x += 0.01;
      }
    });
    return (
      <mesh ref={meshRef}>
        <cylinderGeometry args={[2, 5, 5]} />
        <meshLambertMaterial color="#468585" emissive="#468585" />
        <Sparkles sparkles="#ff0" width="20px" />
      </mesh>
    );
  };
  return (
    <>
      <Canvas
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <OrbitControls enableZoom enablePan enableRotate />
        <directionalLight
          position={[1, 1, 1]}
          intensity={10}
          color={0x9cdba6}
        />
        <color attach="background" args={["#000"]} />
        <RotatingCube />
      </Canvas>
    </>
  );
}

export default CubeRotate;
