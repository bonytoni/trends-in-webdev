import { Button, HStack, Input } from "@chakra-ui/react"
import { FormEventHandler, useState } from "react"
import { Task } from "../../types"

const TaskAddControl = () => {
  const [input, setInput] = useState("")

  const addTask: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (input === "") return

    // TODO: Add the task to Firebase
    const task: Task = {
      text: input,
      checked: false,
    }

    // TODO: Clear current input field
  }

  return (
    <form onSubmit={addTask}>
      <HStack shouldWrapChildren>
        <Input
          value={input}
          type="text"
          placeholder="Do the dishes..."
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit">Add Task</Button>
      </HStack>
    </form>
  )
}

export default TaskAddControl
