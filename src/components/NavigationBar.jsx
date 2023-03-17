import React from "react"
import { Navbar, Text } from "@nextui-org/react"

const NavigationBar = () => {
    return (
        <Navbar>
            <Navbar.Brand>
                <Text b size={"$3xl"}>
                    CNT
                </Text>
            </Navbar.Brand>
            <Navbar.Content>
                <Navbar.Link isActive={true}>Formulario</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content></Navbar.Content>
        </Navbar>
    )
}

export default NavigationBar
