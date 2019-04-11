class Message {
    constructor(message){
        this.message = message
        // this.createMsg(this)--instance method

        const msgListSection = document.querySelector('#messages') //find the ul section
        const msgListItem = document.createElement('li') //create a new li
        // console.log(message) 
        msgListItem.innerText = message["content"] //this & message is the same thing
        msgListSection.append(msgListItem)
    }

    static createMsg(message){ //class method to create messages for the whole class
        fetch(`${messagesURL}`, { //need to interpolate the messagesURL
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: message //message needs to match the argument being passed in
            })
        })
        .then(function(response) {
            return response.json()
        })
        .then(function(response){
            new Message(response) //create a new message with the response given 
        })
    }

}
