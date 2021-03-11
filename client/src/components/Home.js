import React from 'react'

export default function Home() {
    return (
        <div>
            <h1>Today I Learned</h1>
            <form action='/' method='POST'>
                <label><br></br><input placeholder="title" type="text"/><br></br></label>
                <label><br></br><input placeholder="author" type="text" /><br></br></label>
                <label><br></br><input placeholder="date" type="text" /><br></br></label>
                <label><br></br><input placeholder="tags" type="text" /><br></br></label>
                <label><br></br><textarea placeholder="entry" type="text" /><br></br></label>
                <input type="submit" />
            </form>
            {/* adding a post, viewing all, crud */}
        </div>
    )
}
