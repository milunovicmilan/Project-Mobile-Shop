/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.addEventListener("DOMContentLoaded", function () {
    // FAQ Toggle Functionality
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", function () {
            const answer = this.nextElementSibling;
            const icon = this.querySelector(".toggle-icon");

            if (answer.style.display === "none" || answer.style.display === "") {
                answer.style.display = "block";
               
                icon.classList.add("bi-chevron-up");
            } else {
                answer.style.display = "none";
                icon.classList.remove("bi-chevron-up");
               
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Get all "View options" buttons for iPhone 15 Pro
    const viewOptionsButtonsPro = document.querySelectorAll(".view-options-btn-pro");

    viewOptionsButtonsPro.forEach((button) => {
        // Add click event listener to each button
        button.addEventListener("click", function () {
            // Show the modal for iPhone 15 Pro
            const modal = new bootstrap.Modal(document.getElementById("phoneOptionsModalPro"));
            modal.show();
        });
    });

    // Get all "View options" buttons for iPhone 15 Pro Max
    const viewOptionsButtonsProMax = document.querySelectorAll(".view-options-btn-pro-max");

    viewOptionsButtonsProMax.forEach((button) => {
        // Add click event listener to each button
        button.addEventListener("click", function () {
            // Show the modal for iPhone 15 Pro Max
            const modal = new bootstrap.Modal(document.getElementById("phoneOptionsModalProMax"));
            modal.show();
        });
    });
});

 // Get all "View options" buttons for iPhone 15 Plus
 const viewOptionsButtonsPlus = document.querySelectorAll(".view-options-btn-plus");

 viewOptionsButtonsPlus.forEach((button) => {
     // Add click event listener to each button
     button.addEventListener("click", function () {
         // Show the modal for iPhone 15 Plus
         const modal = new bootstrap.Modal(document.getElementById("phoneOptionsModalPlus"));
         modal.show();
     });
 });

 // Get all "View options" buttons for iPhone 15
 const viewOptionsButtons = document.querySelectorAll(".view-options-btn");

 viewOptionsButtons.forEach((button) => {
     // Add click event listener to each button
     button.addEventListener("click", function () {
         // Show the modal for iPhone 15
         const modal = new bootstrap.Modal(document.getElementById("phoneOptionsModal"));
         modal.show();
     });
 });

   const viewOptionsButtons14Plus = document.querySelectorAll(".view-options-btn-14plus");

    viewOptionsButtons14Plus.forEach((button) => {
        button.addEventListener("click", function () {
            const modal = new bootstrap.Modal(document.getElementById("phoneOptionsModal14Plus"));
            modal.show();
        });
    });

    const viewOptionsButtons14 = document.querySelectorAll(".view-options-btn-14");

    viewOptionsButtons14.forEach((button) => {
        button.addEventListener("click", function () {
            const modal = new bootstrap.Modal(document.getElementById("phoneOptionsModal14"));
            modal.show();
        });
    });

    const viewOptionsButtons13 = document.querySelectorAll(".view-options-btn-13");

    viewOptionsButtons13.forEach((button) => {
        button.addEventListener("click", function () {
            const modal = new bootstrap.Modal(document.getElementById("phoneOptionsModal13"));
            modal.show();
        });
    });

    const viewOptionsButtonsSE = document.querySelectorAll(".view-options-btn-se");

    viewOptionsButtonsSE.forEach((button) => {
        button.addEventListener("click", function () {
            const modal = new bootstrap.Modal(document.getElementById("phoneOptionsModalSE"));
            modal.show();
        });
    });

    $(document).ready(function () {
        let cartCount = 0;
    
        // Function to show the modal
        function showModal() {
            const modal = new bootstrap.Modal(document.getElementById("addToCartModal"));
            modal.show();
        }
    
        // Update cart count without showing modal
        $(".btn-add-to-cart").on("click", function () {
            cartCount++;
            $("#cart-count").text(cartCount);
        });
    
        // Show modal when clicking the cart button in navbar
        $("#cart-button").on("click", function (event) {
            event.preventDefault();
            showModal();
        });
    
        // jQuery Validation for the form
        $("#addToCartForm").validate({
            rules: {
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                    minlength: 8,
                    maxlength: 20,
                    pwcheck: true
                },
                cardNumber: {
                    required: true,
                    creditcard: true
                },
                date: {
                    required: true,
                    date: true
                }
            },
            messages: {
                email: {
                    required: "Please enter your email address",
                    email: "Please enter a valid email address"
                },
                password: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 8 characters long",
                    maxlength: "Your password must be no more than 20 characters long"
                },
                cardNumber: {
                    required: "Please enter your card number",
                    creditcard: "Please enter a valid card number"
                },
                date: {
                    required: "Please select a date",
                    date: "Please enter a valid date"
                }
            }
        });
    
        // Custom method for password validation
        $.validator.addMethod("pwcheck", function (value) {
            return /^[A-Za-z0-9\d=!\-@._*]+$/.test(value) // consists of only these
                && /[a-z]/.test(value) // has a lowercase letter
                && /\d/.test(value) // has a digit
        }, "Your password must contain at least one letter and one number");
    });
    

   document.addEventListener("DOMContentLoaded", function () {
    let cartCount = 0;

    // Function to show the modal
    function showModal(modalId) {
        const modal = new bootstrap.Modal(document.getElementById(modalId));
        modal.show();
    }

    // Function to sort products
    function sortProducts() {
        const gallery = document.querySelector(".row-cols-2"); // Adjust this selector if needed
        const products = Array.from(gallery.getElementsByClassName("col"));

        // Define the order of products
        const order = [
            "iPhone 15 Pro 256GB Black Titanium",
            "iPhone 15 Plus 512GB Black Titanium",
            "iPhone 14 Plus 128GB Blue",
            "iPhone 13 128GB Black"
        ];

        // Sort products based on the defined order
        products.sort((a, b) => {
            const nameA = a.querySelector(".fw-bolder").textContent.trim();
            const nameB = b.querySelector(".fw-bolder").textContent.trim();
            const indexA = order.indexOf(nameA);
            const indexB = order.indexOf(nameB);

            if (indexA === -1 && indexB === -1) {
                return 0;
            } else if (indexA === -1) {
                return 1;
            } else if (indexB === -1) {
                return -1;
            } else {
                return indexA - indexB;
            }
        });

        // Remove all products from the gallery
        while (gallery.firstChild) {
            gallery.removeChild(gallery.firstChild);
        }

        // Add sorted products back to the gallery
        products.forEach(product => {
            gallery.appendChild(product);
        });

        // Reattach event listeners for cart and view options buttons
        attachEventListeners();
    }

    // Function to attach event listeners
    function attachEventListeners() {
        // Update cart count
        $(".btn-add-to-cart").off("click").on("click", function () {
            cartCount++;
            $("#cart-count").text(cartCount);
        });

        // Show modal when clicking the cart button in navbar
        $("#cart-button").off("click").on("click", function (event) {
            event.preventDefault();
            showModal("addToCartModal");
        });

        // Show view options modal
        $(".view-options-btn").off("click").on("click", function () {
            const modalId = $(this).data("target");
            showModal(modalId);
        });
    }

    // Attach initial event listeners
    attachEventListeners();

    // Sort products when clicking on the best sale button
    $("#best-sale-button").on("click", function (event) {
        event.preventDefault();
        sortProducts();
    });

    // jQuery Validation for the form
    $("#addToCartForm").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8,
                maxlength: 20,
                pwcheck: true
            },
            cardNumber: {
                required: true,
                creditcard: true
            },
            date: {
                required: true,
                date: true
            }
        },
        messages: {
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 8 characters long",
                maxlength: "Your password must be no more than 20 characters long"
            },
            cardNumber: {
                required: "Please enter your card number",
                creditcard: "Please enter a valid card number"
            },
            date: {
                required: "Please select a date",
                date: "Please enter a valid date"
            }
        }
    });

    // Custom method for password validation
    $.validator.addMethod("pwcheck", function (value) {
        return /^[A-Za-z0-9\d=!\-@._*]+$/.test(value) // consists of only these
            && /[a-z]/.test(value) // has a lowercase letter
            && /\d/.test(value) // has a digit
    }, "Your password must contain at least one letter and one number");
});

document.addEventListener("DOMContentLoaded", function () {
    let cartCount = 0;

    // Function to show the modal
    function showModal(modalId) {
        const modal = new bootstrap.Modal(document.getElementById(modalId));
        modal.show();
    }

    // Function to sort products
    function sortProducts() {
        const gallery = document.querySelector(".row-cols-2, .row-cols-md-3, .row-cols-xl-4");
        const products = Array.from(gallery.getElementsByClassName("col"));

        // Define the order of products
        const order = [
            "iPhone 15 Pro 256GB Black Titanium",
            "iPhone 15 Plus 512GB Black Titanium",
            "iPhone 14 Plus 128GB Blue",
            "iPhone 13 128GB Black"
        ];

        // Sort products based on the defined order
        products.sort((a, b) => {
            const nameA = a.querySelector(".fw-bolder").textContent.trim();
            const nameB = b.querySelector(".fw-bolder").textContent.trim();
            const indexA = order.indexOf(nameA);
            const indexB = order.indexOf(nameB);

            if (indexA === -1 && indexB === -1) {
                return 0;
            } else if (indexA === -1) {
                return 1;
            } else if (indexB === -1) {
                return -1;
            } else {
                return indexA - indexB;
            }
        });

        // Remove all products from the gallery
        while (gallery.firstChild) {
            gallery.removeChild(gallery.firstChild);
        }

        // Add sorted products back to the gallery
        products.forEach(product => {
            gallery.appendChild(product);
        });

        // Reattach event listeners for cart and view options buttons
        attachEventListeners();
    }

    // Function to attach event listeners
    function attachEventListeners() {
        // Update cart count
        $(".btn-add-to-cart").off("click").on("click", function () {
            cartCount++;
            $("#cart-count").text(cartCount);
        });

        // Show modal when clicking the cart button in navbar
        $("#cart-button").off("click").on("click", function (event) {
            event.preventDefault();
            showModal("addToCartModal");
        });

        // Show view options modal
        $(".view-options-btn").off("click").on("click", function () {
            const modalId = $(this).data("target");
            showModal(modalId);
        });
    }

    // Attach initial event listeners
    attachEventListeners();

    // Sort products when clicking on the best sale button
    $("#best-sale-button").on("click", function (event) {
        event.preventDefault();
        sortProducts();
    });
    // Theme switcher functionality
    $("#theme-switcher").on("click", function (event) {
        event.preventDefault();
        document.body.classList.toggle("dark-theme");
        const isDark = document.body.classList.contains("dark-theme");
        document.querySelector("#theme-switcher i").className = isDark ? "bi bi-sun" : "bi bi-moon";
        document.querySelector("#theme-switcher span").textContent = isDark ? "Light Mode" : "Dark Mode";
    });
    // jQuery Validation for the form
    $("#addToCartForm").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8,
                maxlength: 20,
                pwcheck: true
            },
            cardNumber: {
                required: true,
                creditcard: true
            },
            date: {
                required: true,
                date: true
            }
        },
        messages: {
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 8 characters long",
                maxlength: "Your password must be no more than 20 characters long"
            },
            cardNumber: {
                required: "Please enter your card number",
                creditcard: "Please enter a valid card number"
            },
            date: {
                required: "Please select a date",
                date: "Please enter a valid date"
            }
        }
    });

    // Custom method for password validation
    $.validator.addMethod("pwcheck", function (value) {
        return /^[A-Za-z0-9\d=!\-@._*]+$/.test(value) // consists of only these
            && /[a-z]/.test(value) // has a lowercase letter
            && /\d/.test(value) // has a digit
    }, "Your password must contain at least one letter and one number");
});

// Smooth scroll to products section
$("#all-products-link").on("click", function (event) {
    event.preventDefault();
    document.getElementById("products-section").scrollIntoView({
        behavior: 'smooth'
    });
});

