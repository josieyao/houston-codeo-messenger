const messagesURL = `http://10.185.1.104:3000/messages`


document.addEventListener('DOMContentLoaded', () => { 
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  setInterval( () => {  
    fetch(messagesURL)
    .then(function(response){
      return response.json() 
    })
    .then(function(messages){
      const msgListSection = document.querySelector('#messages') 
      msgListSection.innerText = " " 
      messages.forEach(function(message){ 
        message = new Message(message)
      })
    })
  }, 500)
  

  const form = document.querySelector('#message_form') 
  const msgInput = document.querySelector('#message_input') 
  form.addEventListener('submit', (e) => { 
      e.preventDefault()
      Message.createMsg(msgInput.value) 
      form.reset() 
  })

})

