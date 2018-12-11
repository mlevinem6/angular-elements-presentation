setEventListeners = function() {
  let poll = document.querySelector('user-poll');
  
  poll.addEventListener('voted', (vote) => {
    const message = vote.detail === 'yes'
      ? 'That is the correct vote'
      : 'Look, if you wanted everything, the characters, the events, to be the same' +
        ' as the original trilogy, just watch the original trilogy.  This was unpredictable,' +
        ' it still had the characters we know and love, and has everyone super-excited for episode IX.\n' +
        'I suppose I could have done without the character of Rose - that was just awkward';

    alert(message);
  });
}();