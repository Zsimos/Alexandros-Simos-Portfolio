import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import {IslandScene } from '../assets/3d/island.glb'
import {a} from '@react-spring/three';
const Island = (props) => {
  const islandRef = useRef();
  const { nodes, materials } = useGLTF("IslandScene");
  return (
    <a.group ref= {islandRef} 
    group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={1.11}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials.default_tex0}
          />
          <mesh
            geometry={nodes.Object_5.geometry}
            material={materials.default_tex0}
          />
          <mesh                     
            geometry={nodes.Object_6.geometry}
            material={materials.default_tex0}
          />
          <mesh          
            geometry={nodes.Object_7.geometry}
            material={materials.default_tex0}
          />
          <mesh           
            geometry={nodes.Object_8.geometry}
            material={materials.default_tex0}
          />
          <mesh           
            geometry={nodes.Object_9.geometry}
            material={materials.default_tex0}
          />
          <mesh                        
            geometry={nodes.Object_10.geometry}
            material={materials.default_tex0}
          />
          <mesh                      
            geometry={nodes.Object_11.geometry}
            material={materials.default_tex0}
          />
          <mesh                      
            geometry={nodes.Object_12.geometry}
            material={materials.default_tex0}
          />
          <mesh                        
            geometry={nodes.Object_13.geometry}
            material={materials.default_tex0}
          />
          <mesh                        
            geometry={nodes.Object_14.geometry}
            material={materials.default_tex0}
          />
          <mesh           
            geometry={nodes.Object_15.geometry}
            material={materials.default_tex1}
          />
          <mesh                        
            geometry={nodes.Object_16.geometry}
            material={materials.default_tex1}
          />
          <mesh                        
            geometry={nodes.Object_17.geometry}
            material={materials.default_tex1}
          />
          <mesh                       
            geometry={nodes.Object_18.geometry}
            material={materials.default_tex1}
          />
          <mesh                        
            geometry={nodes.Object_19.geometry}
            material={materials.default_tex1}
          />
          <mesh           
            geometry={nodes.Object_20.geometry}
            material={materials.default_tex1}
          />
          <mesh            
            geometry={nodes.Object_21.geometry}
            material={materials.default_tex1}
          />
          <mesh                      
            geometry={nodes.Object_22.geometry}
            material={materials.default_tex1}
          />
          <mesh                       
            geometry={nodes.Object_23.geometry}
            material={materials.default_tex1}
          />
          <mesh                        
            geometry={nodes.Object_24.geometry}
            material={materials.default_tex1}
          />
          <mesh           
            geometry={nodes.Object_25.geometry}
            material={materials.default_tex1}
          />
        </group>
      </group>
    </a.group>
  );
}

 export default Island;