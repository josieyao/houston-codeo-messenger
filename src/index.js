const messagesURL = `http://10.185.1.104:3000/messages`


document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  setInterval( () => {  //refreshes the page every 5 seconds
    fetch(messagesURL) //fetches the existing database
    .then(function(response){
      return response.json()
    })
    .then(function(messages){
      const msgListSection = document.querySelector('#messages') //finds the ul section
      msgListSection.innerText = " " //resets the page to " " because setInterval will refresh the page every 5 secs
      messages.forEach(function(message){ 
        message = new Message(message)
      })
    })
  }, 500)
  

  const form = document.querySelector('#message_form') //finding the whole form
  const msgInput = document.querySelector('#message_input') //finding the text box where the user inputs their msg
  form.addEventListener('submit', (e) => { //listening on a submit to the form
      e.preventDefault()
      Message.createMsg(msgInput.value) //acting on the whole class of Message to create a message with what the user inputted
      form.reset() //resets the form to blank
  })

})

