<script>
  // Function to create typewriter effect
  function typeWriter(text, i, callback) {
    if (i < text.length) {
      document.getElementById("typewriter-text").innerHTML += text.charAt(i);
      i++;
      setTimeout(function () {
        typeWriter(text, i, callback);
      }, 100); // Adjust the delay (in milliseconds) to control the typing speed
    } else {
      if (typeof callback === "function") {
        callback();
      }
    }
  }

  // Call the typewriter effect function with your text
  typeWriter("Driving Innovation in Logistics: Your Trusted Minority-Owned Courier Business", 0);
</script>
