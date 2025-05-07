// Lista de imágenes por proyecto
const projectImages = [
    [ // Proyecto 1
      "lonquen_panguiles/lonquen3.jpeg",
      "lonquen_panguiles/lonquen1.jpeg",
      "lonquen_panguiles/lonquen2.jpeg",
      "lonquen_panguiles/lonquen4.jpeg",
      "lonquen_panguiles/lonquen5.jpeg"
    ],
    [ // Proyecto 2
      "img/img-contruccion2.jpg",
      "img/img-contruccion-4.jpg"
    ],
    [ // Proyecto 3
      "img/img-contruccion3.jpg"
    ]
  ];
  
  let currentProject = 0;
  let currentImageIndex = 0;
  
  function openLightbox(projectIndex) {
    currentProject = projectIndex;
    currentImageIndex = 0;
    updateLightboxImage();
    document.getElementById("lightbox").classList.add("show");
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.style.overflow = "hidden";
  }
  
  function closeLightbox() {
    document.getElementById("lightbox").classList.remove("show");
    document.body.style.overflow = "auto";
  }
  
  function changeImage(direction) {
    const images = projectImages[currentProject];
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    updateLightboxImage();
  }
  
  function updateLightboxImage() {
    const img = document.getElementById("lightbox-img");
    img.src = projectImages[currentProject][currentImageIndex];
  }
  