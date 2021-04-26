var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1
    }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
};
$(function () {
    $('.summary').hide();
    $('.cdata-overlay').hide();
    //let get the inputs//
    $("#checkout").click(function () {
        let flavour = $(".flavour option:selected").val();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val()
        console.log(size)

        let order = (f, s, c, t, n, total) => {
            return {
                f,
                s,
                c,
                t,
                n,
                total
            };
        };
        //price
        let price, totalPrice;
        switch (flavour) {
            case flavour = "cheese":
                switch (size) {
                    case size = "large":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 120
                        } else {
                            totalPrice = (price * number) + 280
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 120
                        } else {
                            totalPrice = (price * number) + 280
                        }
                        break;
                }
                break;
            case flavour = "pepperoni":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 120;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 120;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 120;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
            case flavour = "meat":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 120;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 120;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 120;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
            case flavour = "bbqchicken":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 120;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 120;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 120;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
            case flavour = "veggie":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 120;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 120;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 120;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
            case flavour = "hawaiian":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 120;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 120;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 120;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
            case flavour = "mushroom":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 120;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 120;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 120;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
            case flavour = "regina":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 120;
                        } else {
                            totalPrice = (price * number) + 280;
                        }

                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 120;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 120;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
        }
        switch (topping) {
            case topping = "olives":
                totalPrice = totalPrice + 250;
                break;
            case topping = "shrimp":
                totalPrice = totalPrice + 550;
                break;
            case topping = "garlic":
                totalPrice = totalPrice + 250;
                break;
            case topping = "brocoli":
                totalPrice = totalPrice + 350;
                break;
            case topping = "pepperoni":
                totalPrice = totalPrice + 250;
                break;
            case topping = "chicken":
                totalPrice = totalPrice + 500;
                break;
            case topping = "sausage":
                totalPrice = totalPrice + 250;
                break;
            case topping = "egglant":
                totalPrice = totalPrice + 350;
                break;
            case topping = "spinach":
                totalPrice = totalPrice + 500;
                break;
            case topping = "brocoli rabe":
                totalPrice = totalPrice + 500;
                break;
            case topping = "beef":
                totalPrice = totalPrice + 170;
                break;

        }

        let newOrder = order(flavour, size, crust, topping, number, totalPrice);
        console.log(newOrder);

        $('.summary').slideDown(2000);
        $('.cdata-overlay').slideUp();
        $('#list').slideDown();
        $('.deliver').show(1000);
        $('.delivernot').show(1000);

        $('#list').text(" ");
        $("#list").append("<br>" + "Flavour :   " + newOrder.f + "<br>" + "Size :   " +
            newOrder.s + "<br>" + "Crust :     " +
            newOrder.c + "<br>" + "Toppings :     " +
            newOrder.t + "<br>" + " Number of pizzas :    " +
            newOrder.n + "<br>" + "Total Price :  " +
            newOrder.total + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');
    });

    $(".deliver").click(function () {
        $('.summary').slideUp();
        $('#list').slideUp();
        $('.summary').text("Provide location details").slideDown();
        $('.deliver').hide(1000);
        $('.delivernot').hide(1000);
        $('.cdata-overlay').slideDown();
    });


    $(".delivernot").click(function () {

    });

    $(function () {
        $.scrollify.move('#sum-order');
    });
    event.preventDefault()
});