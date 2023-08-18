
function myFunction() {
    let searchValue = document.getElementById("search").value;
    let youtube = "https://www.youtube.com/results?search_query="+searchValue;
    window.open(youtube);
}
document.getElementById("demo").onclick = () => {
    myFunction()
};
