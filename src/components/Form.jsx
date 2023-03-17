import React, { useEffect, useState } from "react"
import { userScheme } from "@/firebase/userScheme"
import { create } from "@/firebase/client"
import { Button, Col, Container, Grid, Input, Loading, Modal, Row, Text } from "@nextui-org/react"

const STATUS = {
    initial: Symbol("initial"),
    loading: Symbol("loading"),
    success: Symbol("success"),
    error: Symbol("error"),
}

const Form = () => {
    const [data, setData] = useState(userScheme)
    const [status, setStatus] = useState(STATUS.initial)

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        console.log(status)
    }, [status])

    return (
        <form>
            <Grid.Container gap={3}>
                <Grid md={6} xs={12}>
                    <Input
                        placeholder="Nombre"
                        clearable
                        helperText="Por favor ingresa tu nombre"
                        value={data.nombre}
                        onChange={(e) => handleChange(e)}
                        name="nombre"
                        width="100%"
                    />
                </Grid>
                <Grid md={6} xs={12}>
                    <Input
                        placeholder="Apellido"
                        clearable
                        helperText="Por favor ingresa tu apellido"
                        value={data.apellido}
                        onChange={(e) => handleChange(e)}
                        name="apellido"
                        width="100%"
                    />
                </Grid>
                <Grid md={6} xs={12}>
                    <Input
                        placeholder="Domicilio"
                        clearable
                        helperText="Por favor ingresa tu Domicilio"
                        value={data.domicilio}
                        onChange={(e) => handleChange(e)}
                        name="domicilio"
                        width="100%"
                    />
                </Grid>
                <Grid md={6} xs={12}>
                    <Input
                        placeholder="Telefono"
                        clearable
                        helperText="Por favor ingresa tu telefono"
                        value={data.telefono}
                        onChange={(e) => handleChange(e)}
                        name="telefono"
                        width="100%"
                    />
                </Grid>
                <Grid md={6} xs={12}>
                    <Input
                        placeholder="Colegio Electoral"
                        clearable
                        helperText="Ingresa el nombre de tu colegio electoral"
                        value={data.colegioElectoral}
                        onChange={(e) => handleChange(e)}
                        name="colegioElectoral"
                        width="100%"
                    />
                </Grid>
                <Grid md={6} xs={12}>
                    <Input
                        placeholder="Ubicacion Colegio Electoral"
                        clearable
                        helperText="Ingresa la ubicacion de tu colegio electoral"
                        value={data.ubicacionColegioElectoral}
                        onChange={(e) => handleChange(e)}
                        name="ubicacionColegioElectoral"
                        width="100%"
                    />
                </Grid>
                <Grid xs={12} css={{ marginBottom: "$10" }}>
                    <Row justify="center">
                        <Button
                            flat={status.description === STATUS.error.description}
                            disabled={
                                status.description === STATUS.loading.description
                                // || status.description === STATUS.error.description
                            }
                            // color={status.description === STATUS.success.description ? "success" : "default"}
                            onClick={() => {
                                setStatus(STATUS.loading)
                                create(data)
                                    .then(() => setStatus(STATUS.success))
                                    .catch((e) => {
                                        console.log(e)
                                        setStatus(STATUS.error)
                                    })
                            }}
                        >
                            {status.description == STATUS.loading.description ? <Loading /> : "Registrar"}
                        </Button>
                    </Row>
                    {/* <Row>
                        {status.description == STATUS.error.description && (
                            <Text color="error" size="$xs" css={{ textAlign: "center" }}>
                                Ha ocurrido un error, favor intentar nuevamente
                            </Text>
                        )}
                    </Row> */}
                </Grid>
            </Grid.Container>
            {status.description === STATUS.error.description ||
                (status.description === STATUS.success.description && (
                    <Modal css={{ margin: "$0 $10" }} open={true}>
                        <Modal.Header>
                            <Text
                                color={
                                    (status.description === STATUS.error.description && "error") ||
                                    (status.description === STATUS.success.description && "success")
                                }
                                size={18}
                                b
                            >
                                {status.description === STATUS.error.description && "Error al registrar el ciudadano"}
                                {status.description === STATUS.success.description && "Ciudadano registrado"}
                            </Text>
                        </Modal.Header>
                        <Modal.Body>
                            <Text>Ciudadano registrado sastifactoriamente</Text>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button auto flat color="error">
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                ))}
        </form>
    )
}

export default Form
