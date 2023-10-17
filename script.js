document.addEventListener("DOMContentLoaded", function () {
    const randomFacts = [
        "I have logged over 200 hours on the game Euro Truck Simulator 2. It's a real blast to play, just driving from city to city, delivering cargo.",
        "My favourite game of all time is Pro Evolution Soccer 6 on the PlayStation 2. I picked Fiorentina for the Master League because I liked the purple kits they wear, plus they had some amazing lineups in the past.",
        "I used to really dislike black olives, but lately they've grown on me, they're not so bad now.",
        "My favourite flavour of curry has to be the dansak, it is the right balance of spiciness but not too over the top as to cause problems later.",
        "My name in Japanese roughly translates to 'Charuzu', which sounds a bit like the name of a character out of Dragon Ball Z or someone like that, I like it.",
        "If I could be any type of dog, probably a westie terrier or something like that, they're a bit tempermental so that reminds me a bit of myself.",
        "When I was younger and was playing Tekken, I would always end up playing as Eddy Gordo, it was a bit easy as you could just spam his spin kicking moves using X and O over and over again.",
        "Don't ever have moussaka for dinner and follow that up with a shot of rakia. I learned the hard way when I did that on holiday in Istanbul when I was younger.",
        "When at secondary school, I once won some award for 'best behaved student' or something like that, I proceeded to milk the whole celebration collecting the award by doing a lap around the hall, doing loads of fist-bumping and knee slides, cupping my ear like Hulk Hogan would do. It was hilarious, I'd do it again."
    ]
    
    const factContainer = document.getElementById("randomfact");
    let currentIndex = Math.floor(Math.random() * randomFacts.length);
    
    function displayRandomFact() {
        factContainer.textContent = randomFacts[currentIndex];
        currentIndex = (currentIndex + 1) % randomFacts.length;
    }
    
    // Call the function to display a random fact when the page loads
    displayRandomFact();
    
    // Set an interval to change the fact every 10 seconds (10000 milliseconds)
    setInterval(displayRandomFact, 10000);
});

