import React from "react";
import { TextField, Button, Paper } from "@mui/material";
import { flexbox } from "@mui/system";
import { useState } from "react"

export default function Form({addTodo}) {
    const [ text, setText ] = useState(null);
    const [ id, setId ] = useState(0)

    const todoCreate = (text) => {
        const todoObject = { text: text, id: id}
        setId(id + 1)
        addTodo(todoObject)
        document.getElementById("outlined-basic").value = null;
    }

  return (
      <Paper style={{ padding: "1em" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TextField id="outlined-basic" label="Tarefa" variant="outlined" onChange={(e) => setText(e.target.value)} fullWidth />
          <Button variat="text" onClick={ () => todoCreate(text) }>Add</Button>
        </div>
      </Paper>
  );
}