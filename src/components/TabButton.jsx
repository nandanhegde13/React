
export function TabButton ({name,onSelect})
{
    

    return(
       <li>
        <button onClick={onSelect}>{name}</button>
        </li>
    )
}