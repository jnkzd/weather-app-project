import { useState } from "react"

const UnitsToggle = () => {
    const [selected, setSelected] = useState(false);
    
    const handleToggle = () => {
        setSelected(!selected);
    }
    return (
        <>
        <div onClick={handleToggle}>
            {selected ? 'Celsius' : 'Fahr'}
        </div>
        </>
    )
}

export default UnitsToggle