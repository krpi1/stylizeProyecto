function LoadPage() {
    var body = document.getElementById("body");
    body.style.opacity = 1;
    body.style.transform = "translate(0,0)";
    
}
var accessKey= "AOC6vfR2JZU46x1JDuTQRki0NzpBrzEng-zFjW-0LQ";
fetch(`https://api.unsplash.com/photos/random/?query=electronics&orientation=landscape&client_id=${accessKey}`)
.then(response => response.json())
.then(data => {
    document.body.style.backgroundImage = `url('${data.urls.raw}')`;
})
.catch(error => {
    console.log('Error:', error);
});