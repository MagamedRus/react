import React, { useContext } from "react"
import Context from '../context'


const styles = { 
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignIntems: "center",
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    }
}


export default function TodoItem({ todo, index, onChange }) {
    const {removeTodo} = useContext(Context)
    const classes = []
    if (todo.complited) {
        classes.push('done')
    }
    return (
        <li style={styles.li}>
            <span className={classes.join(" ")}>
                <input 
                    type="checkbox"
                    onChange={() => onChange(todo.id)}
                    checked={todo.complited}
                ></input>
                <strong> {index + 1} </strong>
                &nbsp;
                {todo.title}
            </span>
            <button className="rm" onClick={removeTodo.bind(null, todo.id)}>&times;</button>
        </li>
        )
}