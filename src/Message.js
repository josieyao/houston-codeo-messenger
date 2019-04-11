class Comment {

    constructor({ content }){
        this.li = document.createElement('li')
        this.li.append( content )
    }

    render(){
        return this.li
    }

    static create(comment){
        fetch('https://randopic.herokuapp.com/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
             body: JSON.stringify(comment)
        })
        return new Comment(comment)
    }

}