(function ($) {
    "use strict";

    /*
    if (localStorage.getItem('theme') === 'dark') {
        $("body").removeClass("dark-theme");
        $("body").addClass("dark-theme");
        $("#theme-checkbox").prop("checked", true);
    }
    */

    if (localStorage.getItem('theme') === 'dark') {
        $("#theme-checkbox").prop("checked", true);
        $(".theme-mode-text").css("margin-top", "0");
    }


    $(document).ready(function () {

        // Side menu change item on click
        $(".navbar-nav .nav-item").on("click", function () {
            $(".navbar-nav .nav-item").removeClass("active");
            $(this).addClass("active");
        });

        // Add noscroll class to body when modal is opened
        $("#addItem").on("click", function () {
            $(".side-modal-backgdrop").toggleClass("d-none");
            $("body").toggleClass("noscroll");
        });

        // Show modal backdrop
        $(".close-sidemodal").on("click", function () {
            $(".side-modal-backgdrop").toggleClass("d-none");
            $("body").toggleClass("noscroll");
        });

        // Toggle side menu
        $("#toggle-sidemenu").on("click", function () {
            $("body").toggleClass("expanded");
            if ($("body").hasClass("expanded")) {
                $("#toggle-sidemenu").html('<i class="fa-solid fa-bars-staggered text-dark fa-xl"></i>');
            } else {
                $("#toggle-sidemenu").html('<i class="fa-solid fa-bars text-dark fa-xl"></i>');
            }
        });

        // Toggle mobile menu
        $("#toggle-mobilemenu, #close-sidemenu").on("click", function () {
            $("body").toggleClass("mobexpanded");
            $("body").toggleClass("noscroll");
            $(".side-menu").toggleClass("d-none");
            $(".side-menu").toggleClass("d-flex");
            $(".mobile-menu-backdrop").toggleClass("d-none");
        });

        // Minimize side menu on smaller screens
        $(window).bind("load resize", function () {
            var width = $(window).width();
            if (width <= 1200) {
                $("body").removeClass("expanded");
                $("#toggle-sidemenu").html('<i class="fa-solid fa-bars text-dark fa-xl"></i>');
            } else {
                $("body").removeClass("expanded");
                $("body").addClass("expanded");
                $("#toggle-sidemenu").html('<i class="fa-solid fa-bars-staggered text-dark fa-xl"></i>');
            }
        });

        // Toggle dark theme
        $("#theme-checkbox").on("click", function () {
            $("body").toggleClass("dark-theme");
            $("table").toggleClass("table-dark");
            if ($("body").hasClass("dark-theme")) {
                localStorage.setItem('theme', 'dark');
                $(".theme-mode-text").css("margin-top", "0");
            } else {
                localStorage.setItem('theme', 'light');
                $(".theme-mode-text").css("margin-top", "-24px");
            }
        });

    });




    // Add country row
    $('body').on('click', '#addCountryRow', function (e) {
        const htmlCountryRow = '<div class="country-row d-flex justify-content-start align-items-center mb-3"><select class="selectpicker" title="Select item" aria-label="Select item" data-size="5" data-live-search="true"><option value="1950">Item #1950</option><option value="1951">Item #1951</option><option value="1952">Item #1952</option><option value="1953">Item #1953</option><option value="1954">Item #1954</option><option value="1955">Item #1955</option><option value="1956">Item #1956</option><option value="1957">Item #1957</option><option value="1958">Item #1958</option><option value="1959">Item #1959</option><option value="1960">Item #1960</option><option value="1961">Item #1961</option><option value="1962">Item #1962</option><option value="1963">Item #1963</option><option value="1964">Item #1964</option><option value="1965">Item #1965</option><option value="1966">Item #1966</option><option value="1967">Item #1967</option><option value="1968">Item #1968</option><option value="1969">Item #1969</option><option value="1970">Item #1970</option><option value="1971">Item #1971</option><option value="1972">Item #1972</option><option value="1973">Item #1973</option><option value="1974">Item #1974</option><option value="1975">Item #1975</option><option value="1976">Item #1976</option><option value="1977">Item #1977</option><option value="1978">Item #1978</option><option value="1979">Item #1979</option><option value="1980">Item #1980</option><option value="1981">Item #1981</option><option value="1982">Item #1982</option><option value="1983">Item #1983</option><option value="1984">Item #1984</option><option value="1985">Item #1985</option><option value="1986">Item #1986</option><option value="1987">Item #1987</option> <option value="1988">Item #1988</option><option value="1989">Item #1989</option><option value="1990">Item #1990</option><option value="1991">Item #1991</option><option value="1992">Item #1992</option><option value="1993">Item #1993</option><option value="1994">Item #1994</option><option value="1995">Item #1995</option><option value="1996">Item #1996</option><option value="1997">Item #1997</option><option value="1998">Item #1998</option><option value="1999">Item #1999</option><option value="2000">Item #2000</option><option value="2001">Item #2001</option><option value="2002">Item #2002</option><option value="2003">Item #2003</option><option value="2004">Item #2004</option><option value="2005">Item #2005</option><option value="2006">Item #2006</option><option value="2007">Item #2007</option><option value="2008">Item #2008</option><option value="2009">Item #2009</option><option value="2010">Item #2010</option><option value="2011">Item #2011</option><option value="2012">Item #2012</option><option value="2013">Item #2013</option><option value="2014">Item #2014</option><option value="2015">Item #2015</option><option value="2016">Item #2016</option><option value="2017">Item #2017</option><option value="2018">Item #2018</option><option value="2019">Item #2019</option><option value="2020">Item #2020</option><option value="2021">Item #2021</option><option value="2022">Item #2022</option><option value="2023">Item #2023</option><option value="2024">Item #2024</option><option value="2025">Item #2025</option><option value="2026">Item #2026</option><option value="2027">Item #2027</option><option value="2028">Item #2028</option><option value="2029">Item #2029</option><option value="2030">Item #2030</option></select><div class="input-group ms-2"><span class="input-group-text">Qty</span><input type="number" class="form-control" placeholder="1" aria-label="Percentage" aria-describedby="basic-addon2" value="1"></div><button type="button" class="btn btn-danger minbtn ms-2 removeCountryRow"><i class="fa-solid fa-minus"></i></button></div>'

        $(htmlCountryRow).insertBefore(this);

        $('.selectpicker').selectpicker('refresh');
    });

    // Remove country row
    $('body').on('click', '.removeCountryRow', function (e) {
        $(this).parent('.country-row').remove();
    });


    // Select all checkboxes in a table
    $('body').on('click', '.selectallcheckbox', function (e) {
        var table = $(e.target).closest('table');
        $('td input:checkbox', table).prop('checked', this.checked);
    });



})(jQuery);