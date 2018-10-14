document.getElementById('imgPicker').onchange = function() {
    var imgFile = this.files[0];
    var fr = new FileReader();
    fr.onload = function() {
        document.getElementById('uploaded_img').src = fr.result;
    };
    fr.readAsDataURL(imgFile);
};

document.getElementById('cancel_uploaded').onclick = function () {
    document.getElementById('uploaded_img').src = '../../img/uploaded.png';
}