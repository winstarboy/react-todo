export const NameList = () => {
    const names = ['Kewin', 'Mohan', 'Saam']
    return (
        <div>
            {names.map((name => {
                return <h2 key={name}>{name}</h2>
            }))}
        </div>
    )
}