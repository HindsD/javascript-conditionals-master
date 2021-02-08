let counter = 0;

$(document).ready(function () {
    // add the functions as event listeners
    // to the forms in the HTML
    $("#clickForm").submit(countClick);
    $("#ageForm").submit(checkAge);
    $("#taxForm").submit(calcSalesTax);
    $("#catForm").submit(recommendFood);
    $("#cardForm").submit(drawCard);

	function countClick(event) {
	    event.preventDefault();

		// Increment a variable that tracks the
		// number of button clicks

        counter += 1;

		// Print the current number of clicks to the
		// <p> with ID "clickCountOutput"
        $("p#clickCountOutput").text(counter);

		// When the count gets to 10, reset it to 0
        if (counter === 10){
            counter = 0;
        }

	}

    function checkAge(event) {
        event.preventDefault();

        // Get the user's birth year from the text
        // box with ID of "birthYear"
        let year = $("input#birthYear").val();
        let age = 2021 - year;

        // If they are currently under 18, print "Child"
        // to the <p> with ID of "birthYearOutput"
        if (age < 18){
            $("p#birthYearOutput").text("Child");
        }
        else{
            $("p#birthYearOutput").text("Adult");
        }

        // If they are 18 or over, print "Adult" instead

    }

    function calcSalesTax(event) {
        event.preventDefault();

        // Get the purchase amount from the text
        // box with ID of "purchaseAmount"
        let amount = parseFloat($("input#purchaseAmount").val());

        // Get the state from the text box with ID "state"
        let stateAbbrev = $("input#state").val();

        // Tax rates are: WI 5%, IL 8%, MN 7.5%, MI 5.5%
        if(stateAbbrev === "WI"){
            $("p#salesTaxOutput").text(amount * 0.05);
        }
        else if(stateAbbrev === "IL"){
            $("p#salesTaxOutput").text(amount * 0.08);
        }
        else if(stateAbbrev === "MN"){
            $("p#salesTaxOutput").text(amount * 0.075);
        }
        else if(stateAbbrev === "MI"){
            $("p#salesTaxOutput").text(amount * 0.055);
        }
        else{
            $("p#salesTaxOutput").text("Error!");
        }

        // Calculate the sales tax amount and print to
        // the <p> with ID of "salesTaxOutput"

        // If the user enters a state not listed above,
        // print "Error" instead


    }

    function recommendFood(event) {
        event.preventDefault();

        // Get the cat's age from the text box with
        // ID of "catAge"
        let age = parseInt( $("input#catAge").val());

        // Cats under 2 get "kitten chow", between 2 and 10
        // get "adult chow", and over 10 get "senior chow"
        if(age < 2){
            $("p#catAgeOutput").text("Kitten Chow");
        }
        else if(age < 11){
            $("p#catAgeOutput").text("Adult Chow");
        }
        else{
            $("p#catAgeOutput").text("Senior Chow");
        }

        // Print the food recommendation to the <p> with
        // ID of "catAgeOutput"


    }

    function drawCard(event) {
        event.preventDefault();

        // Generate a random card face value (1 - 13)
        let faceValue = Math.floor(Math.random() * 13) + 1;

        // Generate a random suit (1 - 4)
        let suit = Math.floor(Math.random() * 4) + 1;

        // Create the description of the card, for example
        // "King of Spades" or "2 of Hearts"
        let description;

        // For face values 2 - 10, you can just print the number
        // Face value 1 is "Ace", 11 is "Jack", 12 is "Queen",
        // and 13 is "King"
        if (faceValue === 1){
            description = "Ace";
        }
        else if(faceValue === 11){
            description = "Jack";
        }
        else if(faceValue === 12){
            description = "Queen";
        }
        else if(faceValue === 13){
            description = "King";
        }
        else{
            description = faceValue;
        }

        // For the suits, 1 is "Clubs", 2 is "Spades",
        // 3 is "Hearts", 4 is "Diamonds"
        if(suit === 1){
            description = description + " of Clubs";
        }
        else if(suit === 2){
            description = description + " of Spades";
        }
        if(suit === 3){
            description = description + " of Hearts";
        }
        if(suit === 4){
            description = description + " of Diamonds";
        }

        // Print the card's description to the <p> with
        // ID of "drawCardOutput"
        $("p#drawCardOutput").text(description);


    }

});