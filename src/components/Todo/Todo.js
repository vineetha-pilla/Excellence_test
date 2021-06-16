
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import DoneIcon from '@material-ui/icons/Done';

const Todo = () => {
    const [list, setList] = useState([])
    const [text, setText] = useState('')
    return (
        <div>
            <h1>Todo</h1>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
                <TextField onChange={e => setText(e.target.value)} value={text} style={{ width: '80%' }} size="small" id="outlined-basic" label="Enter Task" variant="outlined" />
                <Button onClick={() => {
                    let data = [...list]
                    data.push({ text: text, status: 'todo' })
                    setList(data)
                    setText('')
                }} startIcon={<AddCircleIcon />} style={{ marginLeft: 20 }} variant="contained" color="primary">
                    Add
                </Button>
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                {
                    list.map((e, i) => (
                        <List style={{ width: '60%' }}>
                            <ListItem>
                                <ListItemText
                                    style={{ textDecoration: e.status == 'completed' ? 'line-through' : 'none' }}
                                    primary={e.text}
                                />
                                <ListItemSecondaryAction>
                                    {
                                        e.status !== 'completed' ?
                                            <Button style={{ color: 'green', marginRight: 20 }} onClick={() => {
                                                let data = [...list]
                                                data[i].status = 'completed'
                                                setList(data)
                                            }} edge="end" variant="contained" startIcon={<DoneIcon />}>
                                                Mark as done
                                            </Button> : null
                                    }

                                    <Button style={{ color: 'red' }} onClick={() => {
                                        let data = [...list]
                                        data.splice(i, 1)
                                        setList(data)
                                    }} edge="end" variant="contained" startIcon={<DeleteIcon />} aria-label="delete">
                                        Remove
                                    </Button>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider />
                        </List>
                    ))
                }
            </div>
        </div>
    )
}

export default Todo