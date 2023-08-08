function navClick(cur_id) {
    if (cur_id=="login") {
        $("login-page").toggle();
    }
    else {
        let ids = ["home", "about", "products", "contact"];
        for (let id of ids) {
            if ($("#"+id+"-page").is(":visible")) {
                if (id=="home")
                    $("#login-btn").toggle();
                $("#"+id+"-page").toggle();
                $("#"+id+"-btn").removeClass("active");
            }
        }
        if (cur_id=="home")
            $("#login-btn").toggle();
        $("#"+cur_id+"-page").toggle();
        $("#"+cur_id+"-btn").addClass("active");
        $("#navbarSupportedContent").removeClass("show");
        /*
        let elem =  document.getElementById("navbarSupportedContent");
        //let elem = $("#navbarSupportedContent");
        //let elem = document.getElementsByClassName("show");
        //let classes = elem.attr("class");
        let classes = elem.classList;
        let boolean = classes.contains("show");
        let styles = window.getComputedStyle(elem);
        //for (let prop in styles)
            //console.log(prop,styles[prop],styles.getPropertyValue(styles[prop]));
        console.log(JSON.stringify(classes));
        //$("#navbarSupportedContent").removeClass("show");
        */
    }
}