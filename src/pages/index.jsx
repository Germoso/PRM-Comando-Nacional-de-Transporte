import React, { useEffect, useState } from "react"
import { Card, Container, Grid, Navbar, Row, Text } from "@nextui-org/react"
import Form from "@/components/Form"
import Link from "next/link"
import NavigationBar from "@/components/NavigationBar"

const Index = () => {
    return (
        <>
            {/* <NavigationBar /> */}
            <Container>
                <Grid.Container justify={"center"}>
                    <Grid md={6} css={{ height: "fit-content", marginTop: "$20", marginBottom: "$20" }}>
                        <Card variant="shadow">
                            <Text h3 css={{ marginTop: "$10", textAlign: "center" }}>
                                Comando Transporte Nacional
                            </Text>
                            <Form />
                        </Card>
                    </Grid>
                </Grid.Container>
            </Container>
        </>
    )
}

export default Index
