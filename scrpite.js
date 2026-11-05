
// TravelNest Website JavaScript

document.addEventListener("DOMContentLoaded", function () {

    // 1. MOBILE NAVIGATION MENU
    const menuBtn = document.getElementById("menuBtn");
    const nav = document.getElementById("nav");

    if (menuBtn && nav) {
        menuBtn.addEventListener("click", function () {
            nav.classList.toggle("open");
        });

        nav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                nav.classList.remove("open");
            });
        });
    }


    // 2. HOME PAGE DESTINATION SEARCH
    const homeSearch = document.getElementById("homeSearch");
    const searchBtn = document.getElementById("searchBtn");

    if (homeSearch && searchBtn) {

        function searchDestinations() {
            const keyword = homeSearch.value.toLowerCase().trim();

            const cards = document.querySelectorAll(
                ".destination-card"
            );

            let found = 0;

            cards.forEach(function (card) {
                const name = card.dataset.name.toLowerCase();

                if (name.includes(keyword)) {
                    card.classList.remove("hidden");
                    found++;
                } else {
                    card.classList.add("hidden");
                }
            });

            const noResults = document.getElementById("noResults");

            if (noResults) {
                noResults.classList.toggle("hidden", found > 0);
            }

            document.getElementById("destinations")
                .scrollIntoView({ behavior: "smooth" });
        }

        searchBtn.addEventListener("click", searchDestinations);

        homeSearch.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                searchDestinations();
            }
        });

        homeSearch.addEventListener("input", function () {
            if (homeSearch.value.trim() === "") {
                document.querySelectorAll(".destination-card")
                    .forEach(function (card) {
                        card.classList.remove("hidden");
                    });

                document.getElementById("noResults")
                    .classList.add("hidden");
            }
        });
    }


    // 3. GET TODAY'S LOCAL DATE
    function getLocalDate() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");

        return year + "-" + month + "-" + day;
    }


    // 4. BOOKING FORM VALIDATION
    const bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {
        const travelDate = document.getElementById("travelDate");
        const destination = document.getElementById("destination");
        const bookingStatus = document.getElementById("bookingStatus");

        travelDate.min = getLocalDate();

        // Get selected destination from Home page
        const params = new URLSearchParams(window.location.search);
        const selectedDestination = params.get("destination");

        if (selectedDestination) {
            Array.from(destination.options).forEach(function (option) {
                if (
                    option.value.toLowerCase() ===
                    selectedDestination.toLowerCase()
                ) {
                    destination.value = option.value;
                }
            });
        }

        bookingForm.addEventListener("submit", function (event) {
            event.preventDefault();

            bookingStatus.textContent = "";

            // Check required fields and email
            if (!bookingForm.checkValidity()) {
                bookingForm.reportValidity();
                bookingStatus.textContent =
                    "Please complete all required fields correctly.";
                return;
            }

            // Validate travel date
            if (travelDate.value < getLocalDate()) {
                bookingStatus.textContent =
                    "Travel date cannot be in the past.";
                return;
            }

            // Validate phone number
            const phone = document.getElementById("phone")
                .value.trim();

            const phonePattern = /^\+?[0-9\s-]{10,15}$/;

            if (!phonePattern.test(phone)) {
                bookingStatus.textContent =
                    "Please enter a valid phone number.";
                return;
            }

            // Frontend demo confirmation
            bookingStatus.textContent =
                "✓ Booking request submitted successfully! (Demo only)";

            bookingForm.reset();
            travelDate.min = getLocalDate();
        });
    }


    // 5. CONTACT FORM VALIDATION
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        const contactStatus = document.getElementById("contactStatus");

        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            contactStatus.textContent = "";

            // Validate all required fields
            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                contactStatus.textContent =
                    "Please fill in all fields correctly.";
                return;
            }

            // Frontend demo confirmation
            contactStatus.textContent =
                "✓ Thank you! Your message was received in this demo.";

            contactForm.reset();
        });
    }

});
