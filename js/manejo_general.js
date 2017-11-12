document.getElementById('btn_top').addEventListener('click', scroll_up);
window.onscroll = on_scroll;

function on_scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btn_top").style.display = "block";
    } else {
        document.getElementById("btn_top").style.display = "none";
    }
}

function scroll_up() {
	window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}