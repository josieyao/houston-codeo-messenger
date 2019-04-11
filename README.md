# Houston Codeo Chat

### Setup

#### Allowed Resources

 1. Your brain!
 2. No more than one page (front and back) of hand written notes
 3. The Debugger. Please run and debug your code
 4. The general internet
 
#### Banned Resources

 1. Other students
 2. Any prepared materials (besides notes)
 3. Any lessons
 4. Any solution code from any lab, whether you wrote it or Flatiron School did
 5. Code from any lecture

#### Cloning
* Clone this repo down (don't fork!)
* Create and checkout a branch **before you start coding**:
  `git checkout -b "your-name"`

### Deliverables
This code challenge can be broken down into 7 steps. It is recommended that you commit after each step:

1. Get messages by **requesting** it from **the server**
2. Create a `Message` class, and use it to **render** each of the messages in a list 
3. **Listen** for when a user tries to add a new message
4. When a user makes a message, **Render** the new message in the message list *without refreshing the page*
5. When a user makes a message, **Send** the message to the server so that it persists
6. Use `setInterval` to re-request the messages every 500 ms and re-render them in the list
7. **Refactor** your code to make it as *clean* as possible

#### Getting the messages
The endpoint for getting image looks like this:
```js
GET 'http://10.185.1.104:3000/messages'
```

```json
Example Response:
[
  {
    "id": 1,
    "content": "Hello Houston Codeo!"
  }
]
```

> If you cannot get your fetch request to work correctly, you can  use the example response above to append content to the DOM and attempt the subsequent steps


#### Sending the messages
```js
POST 'http://10.185.1.104:3000/messages'

Required keys in the body of the request:
{
  content: (insert message content here)
}

Required Headers
{
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}
```

### Submission
```
git add .

git commit -m "complete"

git push
```