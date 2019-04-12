class Message {
    constructor(message){ 
        this.message = message

        const msgListSection = document.querySelector('#messages') 
        const msgListItem = document.createElement('li')
        // console.log(message) 
        msgListItem.innerText = message.content
        msgListSection.append(msgListItem)
    }

    static createMsg(message){ 
        fetch(`${messagesURL}`, { 
            method: "POST",
            headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                content: message 
            })
        })
        .then(function(response) {
            return response.json()
        })
        .then(function(response){
            new Message(response) 
        })
    }

}
