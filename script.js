function myFunction() {
    var productBox = document.getElementById("sectionproduct").getElementsByTagName("article");
    document.getElementById("datetime").innerHTML = Date();
    var productBoxCount = productBox.length;

    for (i = 0; i < productBoxCount;i += 1) {
        var r;
        productBox[i].onclick = function(e) {
            if (this.id == "ertiga")
                confirm("You want to rent Proton ertiga??") ? openInNewTab('enquiry.html?product=ertiga') : false;
            else if (this.id == "innova")
                confirm("You want to rent Toyota innova??") ? openInNewTab('enquiry.html?product=innova') : false;
            else if (this.id == "alphrad")
                confirm("You want to rent Toyota alphrad??") ? openInNewTab('enquiry.html?product=alphrad') : false;
            else if (this   .id == "vellfire")
                confirm("You want to rent Toyota vellfire??") ? openInNewTab('enquiry.html?product=vellfire') : false;
            else if (this.id == "sienna")
                confirm("You want to rent Toyota Sienna??")  ? openInNewTab('enquiry.html?product=sienna') : false;
            else if(this.id == "bezza")
                confirm("You want to rent Proton bezza??")  ? openInNewTab('enquiry.html?product=bezza') : false;
            else if(this.id == "perdana")
                confirm("You want to rent Proton perdana??")  ? openInNewTab('enquiry.html?product=perdana') : false;
            else if(this.id == "city")
                confirm("You want to rent Honda city??")  ? openInNewTab('enquiry.html?product=city') : false;
            else if(this.id == "vios")
                confirm("You want to rent Toyota vios??")  ? openInNewTab('enquiry.html?product=vios') : false;
            else if(this.id == "bezza")
                confirm("You want to rent Perodua Bezza??")  ? openInNewTab('enquiry.html?product=bezza') : false;
            else if(this.id == "m4")
                confirm("You want to rent GREATWALL HAVAl M4??")  ? openInNewTab('enquiry.html?product=m4') : false;
            else if(this.id == "hrv")
                confirm("You want to rent HONDA HR-V??")  ? openInNewTab('enquiry.html?product=hrv') : false;
            else if(this.id == "cx5")
                confirm("You want to rent MAZDA CX-5<??")  ? openInNewTab('enquiry.html?product=cx5') : false;
            else if(this.id == "tucson")
                confirm("You want to rent HYUNDAI TUCSON??")  ? openInNewTab('enquiry.html?product=tucson') : false;
            else if(this.id == "m3")
                confirm("You want to rent Greatwall BMW M3??")  ? openInNewTab('enquiry.html?product=m3') : false;
            else if(this.id == "cclass")
                confirm("You want to rent MERCEDES C CLASS??")  ? openInNewTab('enquiry.html?product=cclass') : false;
            else if(this.id == "mazda6")
                confirm("You want to rent MAZDA 6??")  ? openInNewTab('enquiry.html?product=mazda6') : false;
            else if(this.id == "civictyper")
                confirm("You want to rent Mazda 6??")  ? openInNewTab('enquiry.html?product=civictyper') : false;
            else if(this.id == "cayman")
                confirm("You want to rent HONDA CIVIC TYPE R??")  ? openInNewTab('enquiry.html?product=cayman') : false;
            else if(this.id == "civictyper")
                confirm("You want to rent Honda Civic Type R??")  ? openInNewTab('enquiry.html?product=civictyper') : false;

        }
    }
    

}

window.onload = myFunction;


function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

