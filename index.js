async function showPhoto() {
  try {
    const ress = await fetch("https://dog.ceo/api/breeds/image/random");
    const datas = await ress.json();
    console.log(datas);

    const img = document.getElementById("photo");
    img.src = datas.message;
    img.style.display = "block";
  } catch (error) {
    console.log(error);
  }
}
showPhoto();
