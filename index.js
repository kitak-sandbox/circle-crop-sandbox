document.addEventListener('DOMContentLoaded', () => {
  let fileEl = document.getElementById('selectImage');
  let imgEl = document.getElementById('selectedImage');

  fileEl.addEventListener('change', (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let dataUrl = reader.result;

      imgEl.src = dataUrl;
      imgEl.width = imgEl.naturalWidth;
      imgEl.height = imgEl.naturalHeight;
      imgEl.parentElement.parentElement.style.width = imgEl.naturalWidth+'px';
      imgEl.parentElement.parentElement.style.height = imgEl.naturalHeight+'px';
    }
  });
});
