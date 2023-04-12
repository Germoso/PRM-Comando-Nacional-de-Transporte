import React from "react"
import { Card, Container, Grid, Navbar, Row, Text } from "@nextui-org/react"
import Form from "@/components/Form/Form"
import Image from "next/image"
// import Four from "@/components/icons/Four"
import four from "../../public/four.png"

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
                            <Image
                                src={four}
                                alt="4+"
                                width={100}
                                style={{ position: "absolute", right: 20, top: -5 }}
                            />
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
