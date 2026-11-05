// Array containing your gallery items (supports video with a fallback image)
const galleryItems = [
    {
        videoSrc: 'runway1.mp4', // Path to your video file
        posterSrc: 'runway1.jpg', // Fallback image while loading
        altText: 'Runway Model 1 Loop'
    },
    {
        videoSrc: 'runway2.mp4',
        posterSrc: 'runway2.jpg',
        altText: 'Runway Model 2 Loop'
    },
    {
        videoSrc: 'runway3.mp4',
        posterSrc: 'runway3.jpg',
        altText: 'Runway Model 3 Loop'
    }
];

// Function to render the video cards into the DOM
function renderGallery() {
    const container = document.getElementById('gallery-container');
    if (!container) return;

    // Clear any existing content
    container.innerHTML = '';

    galleryItems.forEach(item => {
        // Create the card wrapper
        const card = document.createElement('div');
        card.className = 'gallery-card';

        // Create the video element
        const video = document.createElement('video');
        video.src = item.videoSrc;
        video.poster = item.posterSrc;
        video.ariaLabel = item.altText;
        
        // Premium background loop settings
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.playsInline = true; // Essential for autoplay on mobile iOS/Android

        // Append video to card, and card to container
        card.appendChild(video);
        container.appendChild(card);
    });
}

// Initialize the gallery once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', renderGallery);