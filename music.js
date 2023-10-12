function playAudio() {
      const audio1 = document.getElementById('birthdayAudio1');

      audio1.play().catch(error => console.error('Error playing audio 1:', error));
      audio1.loop=True
    }

    // Call the playAudio function when the user scrolls
    window.onscroll = function() {
      playAudio();
      // Remove the event listener to ensure audio is only played once
      window.onscroll = null;
    };
