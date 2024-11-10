function openModal(src) {
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = src;
  }
  
  function closeModal() {
    document.getElementById("imgModal").style.display = "none";
  }
  