import React from "react"
import { Card, Container, Grid, Navbar, Row, Text } from "@nextui-org/react"
import Form from "@/components/Form/Form"

const Index = () => {
    return (
        <>
            {/* <NavigationBar /> */}
            <Container>
                <Grid.Container justify={"center"}>
                    <Grid md={6} css={{ height: "fit-content", marginTop: "$20", marginBottom: "$20" }}>
                        <Card variant="shadow">
                            <Text size={"$2xl"} h1 css={{ marginTop: "$10", textAlign: "center" }}>
                                EQUIPO NACIONAL DE TRANSPORTE
                            </Text>
                            <Text h4 css={{ textAlign: "center" }}>
                                Registro Nacional de militantes
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
