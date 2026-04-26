"use client";

import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, Stars } from "@react-three/drei";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.warn("WebGL is not supported or failed to initialize:", error);
    }

    render() {
        if (this.state.hasError) {
            return null; // Fallback UI can be placed here if needed
        }
        return this.props.children;
    }
}

export function Hero3D() {
    const [isWebGLSupported, setIsWebGLSupported] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        try {
            const canvas = document.createElement("canvas");
            const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
            if (!gl) {
                setIsWebGLSupported(false);
            }
        } catch (e) {
            setIsWebGLSupported(false);
        }
    }, []);

    if (!isMounted || !isWebGLSupported) {
        return <div className="absolute inset-0 z-0 opacity-50 pointer-events-none mix-blend-screen" />;
    }

    return (
        <div className="absolute inset-0 z-0 opacity-50 pointer-events-none mix-blend-screen">
            <ErrorBoundary>
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                    <ambientLight intensity={1.5} />
                    <directionalLight position={[5, 5, 5]} intensity={2} color="#fcd34d" />
                    <directionalLight position={[-5, -5, -5]} intensity={1} color="#fb7185" />

                    <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />

                <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
                    <Sphere args={[1, 64, 64]} position={[-2, 1, -2]} scale={0.8}>
                        <MeshDistortMaterial
                            color="#fbbf24"
                            attach="material"
                            distort={0.4}
                            speed={1.5}
                            roughness={0.2}
                            metalness={0.8}
                        />
                    </Sphere>
                </Float>

                <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
                    <Sphere args={[1, 64, 64]} position={[2.5, -0.5, -3]} scale={1.2}>
                        <MeshDistortMaterial
                            color="#f43f5e"
                            attach="material"
                            distort={0.3}
                            speed={2}
                            roughness={0.1}
                            metalness={0.6}
                        />
                    </Sphere>
                </Float>

                <Float speed={3} rotationIntensity={1} floatIntensity={1}>
                    <Sphere args={[0.5, 32, 32]} position={[0, -1.5, -1]} scale={0.6}>
                        <MeshDistortMaterial
                            color="#38bdf8"
                            attach="material"
                            distort={0.5}
                            speed={3}
                            roughness={0.2}
                            metalness={0.9}
                        />
                    </Sphere>
                </Float>
                </Canvas>
            </ErrorBoundary>
        </div>
    );
}
