



document.addEventListener("DOMContentLoaded", function () {
    const options = document.querySelectorAll(".option");
    const totalPriceElement = document.getElementById("total-price");

    options.forEach(option => {
        option.addEventListener("click", function () {
            
            options.forEach(opt => opt.classList.remove("selected"));

           
            this.classList.add("selected");

            // Update total price
            const priceElement = this.querySelector(".price");
            if (priceElement) {
                const price = parseFloat(priceElement.textContent.replace(/[^0-9.]/g, ""));
                totalPriceElement.textContent = `$${price.toFixed(2)} USD`;
            }

           
            const dropdowns = this.querySelector(".dropdowns");
            if (dropdowns) {
                dropdowns.style.display = "block";
            }

            
            options.forEach(opt => {
                if (opt !== this) {
                    const otherDropdowns = opt.querySelector(".dropdowns");
                    if (otherDropdowns) {
                        otherDropdowns.style.display = "none";
                    }
                }
            });
        });

        
        const sizeSelectors = option.querySelectorAll(".size");
        const colorSelectors = option.querySelectorAll(".color");

        sizeSelectors.forEach((sizeSelect, index) => {
            sizeSelect.addEventListener("change", function () {
                updateSelectedText(option, index);
            });
        });

        colorSelectors.forEach((colorSelect, index) => {
            colorSelect.addEventListener("change", function () {
                updateSelectedText(option, index);
            });
        });
    });

    function updateSelectedText(option, index, value, type) {
        let displayElement = option.querySelector(`.selected-${type}-${index}`);
        if (!displayElement) {
            displayElement = document.createElement("p");
            displayElement.classList.add(`selected-${type}-${index}`, "selected-option");
            option.querySelector(".dropdowns").appendChild(displayElement);
        }
        displayElement.textContent = `${type.charAt(0).toUpperCase() + type.slice(1)}: ${value}`;
    }
});
