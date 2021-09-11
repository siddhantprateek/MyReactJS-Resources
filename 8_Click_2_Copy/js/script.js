const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

const copyText = (e) => {
    e.preventDefault();

    coupon.select();
    coupon.setSelectionRange(0, 99999);
    
    navigator.clipboard.writeText(coupon.value);
    // alert("Text " + coupon.value + " is copied.")

    /* copy with button */
    btn.textContent = "COPIED!"
    setTimeout(() => {
        btn.textContent = "Copy";
    }, 4000);
    // end //
    
}

btn.addEventListener("click", copyText);