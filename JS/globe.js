document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('globe-3d-container');
    if (!container) return;

    // Force hardcoded fallback sizes if the container reports 0 on startup
    const width = container.clientWidth || 450;
    const height = container.clientHeight || 450;

    // 1. Setup Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 12; // Moved slightly closer so it fills space nicely

    const renderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: true 
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    container.appendChild(renderer.domElement);

    // 2. Create the Globe
    const geometry = new THREE.SphereGeometry(4.5, 30, 30);
    const material = new THREE.MeshBasicMaterial({
        color: 0x000be3, // Electric Blue
        wireframe: true,
        transparent: true,
        opacity: 0.85
    });
    
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Add an inner solid dark core to hide overlapping back-lines
    const coreGeometry = new THREE.SphereGeometry(4.4, 20, 20);
    const coreMaterial = new THREE.MeshBasicMaterial({
        color: 0x581012, // Matches the dark crimson card background
        transparent: true,
        opacity: 0.6
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    globe.add(core);

    globe.rotation.x = 0.3;

    // 3. Animation Loop
    function animate() {
        requestAnimationFrame(animate);
        globe.rotation.y += 0.004; // Rotating speed
        renderer.render(scene, camera);
    }
    
    animate();

    // 4. Handle Window Resize dynamically
    window.addEventListener('resize', () => {
        const newWidth = container.clientWidth || 450;
        const newHeight = container.clientHeight || 450;
        
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        
        renderer.setSize(newWidth, newHeight);
    });
});