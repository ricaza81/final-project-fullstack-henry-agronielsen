import React from 'react';
import * as THREE from 'three';

export default function CanvaLeft() {

    //let logindemo="";
   
    
    //creating scene
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x2a3b4c);
    
    //add camera
    var camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth/window.innerHeight
    );
    
    //renderer
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    //add geometry
    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});
    var cube = new THREE.Mesh(geometry, material);
    
    scene.add(cube);
    
    camera.position.z = 5;
    
    
    //animation
    var animate = function(){
        requestAnimationFrame(animate);
    
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    
        renderer.render(scene, camera);
    
    }


       return (    
               <div className="" style={{width:"50%",textAlign:"center",float:'left',height:"580px",paddingTop:"25px",color:"#fff",background:"#666a6d"}}>
                   {animate()}
               </div>      
               );
   };
   
   /*const styles = StyleSheet.create({
   map_canvas1:{
   
       overflow:'visible',
       position: 'unset',
       width:'0%',
       height: '0px',
       marginTop: '0px',
      
   },
   });*/