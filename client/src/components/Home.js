import React from 'react'

export default function Home() {
    return (
        <div>
            <h1>Today I Learned</h1>
            <form action='/' method='POST'>
                <label>Entry: <input name="entry" type="text"/></label>
                <label>Tags: <input name="tags" type="text" /></label>
                <input type="submit" />
            </form>
            {/* adding a post, viewing all, crud */}
        </div>
    )
}
