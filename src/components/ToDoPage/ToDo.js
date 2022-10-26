import { useState } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import styles from './ToDo.module.css'

const ToDo = ({ todo, handleDelete, handleUpdate }) => {
    const [updating, setUpdating] = useState(true)

    const handleUpdating = () => {
        setUpdating(!updating)
    }

    return (
        <li key={todo.id} className={styles.Li}>
            {updating ? (
                <>
                    <input
                        type="checkbox"
                        defaultChecked={todo.isCompleted}
                        onChange={() =>
                            handleUpdate({
                                ...todo,
                                isCompleted: !todo.isCompleted,
                            })
                        }
                    />
                    <span className={styles.Todo}>{todo.todo}</span>

                    <button id="삭제" onClick={() => handleDelete(todo.id)}>
                        <AiFillDelete />
                    </button>
                    <button id="수정" onClick={handleUpdating}>
                        <AiFillEdit />
                    </button>
                </>
            ) : (
                <div className={styles.Update}>
                    <form
                        id="update"
                        onSubmit={(e) => {
                            e.preventDefault()
                            handleUpdate({
                                ...todo,
                                todo: e.target[0].value,
                            })
                            handleUpdating()
                        }}
                    >
                        <input
                            type="text"
                            name="todoInput"
                            defaultValue={todo.todo}
                        />
                    </form>
                    <button type="submit" form="update">
                        수정
                    </button>
                    <button id="취소" onClick={handleUpdating}>
                        취소
                    </button>
                </div>
            )}
        </li>
    )
}

export default ToDo