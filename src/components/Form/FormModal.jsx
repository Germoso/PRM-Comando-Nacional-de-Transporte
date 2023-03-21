import React from "react"
import { Modal, Button, Text } from "@nextui-org/react"

const FormModal = ({ type = "Success", errorMessage = "", isOpen, close }) => {
    const data = {}

    switch (type) {
        case "Error":
            data.title = "Error"
            data.color = "error"
            data.body = errorMessage || "Error al registrar ciudadano"
            break
        case "Success":
            data.color = "success"
            data.title = "Ciudadano Registrado"
            data.body = "Ciudadano registrado sastifactoriamente"
            break
        default:
            break
    }

    return (
        <Modal css={{ margin: "$0 $10" }} open={isOpen} preventClose>
            <Modal.Header>
                <Text color={data.color || "default"} size={18}>
                    {data.title}
                </Text>
            </Modal.Header>
            <Modal.Body>
                <Text>{data.body}</Text>
            </Modal.Body>
            <Modal.Footer>
                <Button auto flat color="error" onPress={close}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default FormModal
