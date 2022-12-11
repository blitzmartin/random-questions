export default function CustomRound({ 
    input, setInput, handleSubmit 
}) {

    return (
        <div>
            <h3>Add new question</h3>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="type new question" type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)} />
            </form>
        </div>
    )
}
