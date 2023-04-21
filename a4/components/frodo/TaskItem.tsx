import { DeleteIcon } from "@chakra-ui/icons"
import { Checkbox, HStack, IconButton, Text } from "@chakra-ui/react"
import { TaskWithId } from "../../types"

type Props = {
  readonly task: TaskWithId
}

const TaskItem = ({ task: { id, text, checked } }: Props) => {
  const toggleTask = () => {
    // TODO: Implement this!
  }

  const deleteTask = () => {
    // TODO: Implement this!
  }

  return (
    <HStack w="100%">
      <Checkbox isChecked={checked} onChange={toggleTask} />
      <Text textDecorationLine={checked ? "line-through" : "initial"}>
        {text}
      </Text>
      <IconButton
        aria-label="delete task"
        size="xs"
        variant="ghost"
        colorScheme="red"
        icon={<DeleteIcon />}
        onClick={deleteTask}
      />
    </HStack>
  )
}

export default TaskItem
