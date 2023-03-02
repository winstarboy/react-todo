import { useState } from "react"

export const Form = () => {
    const [username, setUsername] = useState('')
    const [comments, setComments] = useState('')
    const [topic, setTopic] = useState('react')
    const handleSubmit = (e) => {
        alert(`${username} ${comments} ${topic}`)
        e.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <input type="text" value={username} onChange={ (e) => setUsername(e.target.value) } />
            </div>
            <div>
                <label>Comments</label>
                <textarea value={comments} onChange={ (e) => setComments(e.target.value) }></textarea>
            </div>
            <div>
                <label>Topic</label>
                <select value={topic} onChange={ (e) => setTopic(e.target.value) }>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                </select>
            </div>
            <button onclick={handleSubmit} type="submit">Submit</button>
        </form>
    )

}