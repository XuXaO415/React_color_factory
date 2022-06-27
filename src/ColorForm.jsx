import React, {useState} from "react";

function ColorForm() {
    const [color, setColor] = useState("");
    const [colors, setColors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setColors([...colors, color]);
        setColor("");
    }

    const handleChange = (e) => {
        setColor(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={color} onChange={handleChange} />
            <button type="submit">Add</button>
            <ul>
                {colors.map((color, index) => <li key={index}>{color}</li>)}
            </ul>
        </form>
    );
}

export default ColorForm;