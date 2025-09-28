// Custom Gallery JavaScript
class CustomGallery {
    constructor(galleryId, imageFolder) {
        this.galleryId = galleryId;
        this.imageFolder = imageFolder;
        this.images = [];
        this.currentIndex = 0;
        this.lightbox = null;
        
        this.init();
    }
    
    init() {
        this.createLightbox();
        this.loadImages();
    }
    
    createLightbox() {
        // Create lightbox HTML
        const lightboxHTML = `
            <div class="lightbox" id="lightbox-${this.galleryId}">
                <div class="lightbox-content">
                    <button class="lightbox-close">&times;</button>
                    <button class="lightbox-nav lightbox-prev">‹</button>
                    <button class="lightbox-nav lightbox-next">›</button>
                    <img src="" alt="Gallery Image">
                </div>
            </div>
        `;
        
        // Add lightbox to body
        document.body.insertAdjacentHTML('beforeend', lightboxHTML);
        this.lightbox = document.getElementById(`lightbox-${this.galleryId}`);
        
        // Add event listeners
        this.lightbox.querySelector('.lightbox-close').addEventListener('click', () => this.closeLightbox());
        this.lightbox.querySelector('.lightbox-prev').addEventListener('click', (e) => {
            e.stopPropagation();
            this.previousImage();
        });
        this.lightbox.querySelector('.lightbox-next').addEventListener('click', (e) => {
            e.stopPropagation();
            this.nextImage();
        });
        this.lightbox.addEventListener('click', (e) => {
            if (e.target === this.lightbox) {
                this.closeLightbox();
            }
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (this.lightbox.classList.contains('active')) {
                if (e.key === 'Escape') this.closeLightbox();
                if (e.key === 'ArrowLeft') this.previousImage();
                if (e.key === 'ArrowRight') this.nextImage();
            }
        });
    }
    
    async loadImages() {
        const gallery = document.getElementById(this.galleryId);
        const grid = gallery.querySelector('.gallery-grid');
        
        // Show loading state
        grid.innerHTML = '<div class="gallery-loading">Lade Galerie...</div>';
        
        try {
            // Try to load images from the specified folder
            // This is a placeholder - you'll need to replace with actual image loading logic
            const imageFiles = await this.getImageFiles();
            
            if (imageFiles.length === 0) {
                this.showEmptyState(grid);
                return;
            }
            
            this.images = imageFiles;
            this.renderImages(grid);
            
        } catch (error) {
            console.error('Error loading gallery images:', error);
            this.showEmptyState(grid);
        }
    }
    
    async getImageFiles() {
        // This is a placeholder function
        // In a real implementation, you would:
        // 1. Make an API call to get the list of images
        // 2. Or have a predefined list of image filenames
        // 3. Or scan a directory (not possible in browser)
        
        // For now, return an empty array
        // You'll need to replace this with actual image loading
        return [];
    }
    
    showEmptyState(grid) {
        grid.innerHTML = `
            <div class="gallery-empty">
                <h3>Galerie wird vorbereitet</h3>
                <p>Die Galerie wird bald mit neuen Bildern gefüllt.</p>
                <a href="https://www.instagram.com/${this.getInstagramHandle()}/" target="_blank">
                    Besuche mich auf Instagram
                </a>
            </div>
        `;
    }
    
    getInstagramHandle() {
        // Extract Instagram handle based on gallery ID
        const handles = {
            'alex-gallery': 'lx.ink.666',
            'basti-gallery': 'basti_datura',
            'carlotta-gallery': 'blackbelladonnatattoo'
        };
        return handles[this.galleryId] || 'instagram';
    }
    
    renderImages(grid) {
        grid.innerHTML = '';
        
        this.images.forEach((image, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.innerHTML = `<img src="${image.url}" alt="${image.alt || 'Gallery Image'}" loading="lazy">`;
            
            item.addEventListener('click', () => this.openLightbox(index));
            grid.appendChild(item);
        });
    }
    
    openLightbox(index) {
        this.currentIndex = index;
        const img = this.lightbox.querySelector('img');
        img.src = this.images[index].url;
        img.alt = this.images[index].alt || 'Gallery Image';
        
        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    closeLightbox() {
        this.lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    previousImage() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        const img = this.lightbox.querySelector('img');
        img.src = this.images[this.currentIndex].url;
        img.alt = this.images[this.currentIndex].alt || 'Gallery Image';
    }
    
    nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        const img = this.lightbox.querySelector('img');
        img.src = this.images[this.currentIndex].url;
        img.alt = this.images[this.currentIndex].alt || 'Gallery Image';
    }
}

// Initialize galleries when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize galleries for each artist
    const galleries = [
        { id: 'alex-gallery', folder: 'images/alex-gallery/' },
        { id: 'basti-gallery', folder: 'images/basti-gallery/' },
        { id: 'carlotta-gallery', folder: 'images/carlotta-gallery/' }
    ];
    
    galleries.forEach(gallery => {
        if (document.getElementById(gallery.id)) {
            new CustomGallery(gallery.id, gallery.folder);
        }
    });
});

// Function to manually add images to a gallery
function addImagesToGallery(galleryId, images) {
    const gallery = document.getElementById(galleryId);
    if (!gallery) {
        console.error('Gallery not found:', galleryId);
        return;
    }
    
    const grid = gallery.querySelector('.gallery-grid');
    if (!grid) {
        console.error('Gallery grid not found in:', galleryId);
        return;
    }
    
    console.log('Adding', images.length, 'images to gallery:', galleryId);
    
    // Clear existing content
    grid.innerHTML = '';
    
    // Add images to grid
    images.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `<img src="${image.url}" alt="${image.alt || 'Gallery Image'}" loading="lazy">`;
        
        item.addEventListener('click', () => openLightbox(galleryId, index, images));
        grid.appendChild(item);
    });
}

// Simple lightbox function
function openLightbox(galleryId, index, images) {
    // Create lightbox if it doesn't exist
    let lightbox = document.getElementById(`lightbox-${galleryId}`);
    if (!lightbox) {
        const lightboxHTML = `
            <div class="lightbox" id="lightbox-${galleryId}">
                <div class="lightbox-content">
                    <button class="lightbox-close">&times;</button>
                    <button class="lightbox-nav lightbox-prev">‹</button>
                    <button class="lightbox-nav lightbox-next">›</button>
                    <img src="" alt="Gallery Image">
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', lightboxHTML);
        lightbox = document.getElementById(`lightbox-${galleryId}`);
        
        // Add event listeners
        lightbox.querySelector('.lightbox-close').addEventListener('click', () => closeLightbox(galleryId));
        lightbox.querySelector('.lightbox-prev').addEventListener('click', (e) => {
            e.stopPropagation();
            previousImage(galleryId, images);
        });
        lightbox.querySelector('.lightbox-next').addEventListener('click', (e) => {
            e.stopPropagation();
            nextImage(galleryId, images);
        });
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox(galleryId);
            }
        });
    }
    
    // Show current image
    const img = lightbox.querySelector('img');
    img.src = images[index].url;
    img.alt = images[index].alt || 'Gallery Image';
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Store current index
    lightbox.currentIndex = index;
    lightbox.images = images;
}

function closeLightbox(galleryId) {
    const lightbox = document.getElementById(`lightbox-${galleryId}`);
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function previousImage(galleryId, images) {
    const lightbox = document.getElementById(`lightbox-${galleryId}`);
    if (lightbox) {
        lightbox.currentIndex = (lightbox.currentIndex - 1 + images.length) % images.length;
        const img = lightbox.querySelector('img');
        img.src = images[lightbox.currentIndex].url;
        img.alt = images[lightbox.currentIndex].alt || 'Gallery Image';
    }
}

function nextImage(galleryId, images) {
    const lightbox = document.getElementById(`lightbox-${galleryId}`);
    if (lightbox) {
        lightbox.currentIndex = (lightbox.currentIndex + 1) % images.length;
        const img = lightbox.querySelector('img');
        img.src = images[lightbox.currentIndex].url;
        img.alt = images[lightbox.currentIndex].alt || 'Gallery Image';
    }
}

// Example usage for adding images:
// addImagesToGallery('alex-gallery', [
//     { url: 'images/alex-gallery/image1.jpg', alt: 'Alex Tattoo 1' },
//     { url: 'images/alex-gallery/image2.jpg', alt: 'Alex Tattoo 2' },
//     // ... more images
// ]);
