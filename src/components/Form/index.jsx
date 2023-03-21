import React, { useEffect, useState } from "react"
import { userScheme } from "@/firebase/userScheme"
import { create } from "@/firebase/client"
import { Button, Col, Container, Grid, Input, Loading, Modal, Row, Text } from "@nextui-org/react"
import Head from "next/head"
import FormModal from "./FormModal"

const STATUS = {
    initial: Symbol("initial"),
    loading: Symbol("loading"),
    success: Symbol("success"),
    error: Symbol("error"),
}

const index = () => {
    const [data, setData] = useState(userScheme)
    const [status, setStatus] = useState(STATUS.initial)
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false)

    /**
     * Set the input data to the data state
     * @param {Event} e onChange event
     */
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        console.log(status)
    }, [status])

    return (
        <>
            <form>
                <Head>
                    <title>Formulario de registro</title>
                </Head>
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
                                disabled={status.description === STATUS.loading.description}
                                onClick={() => {
                                    setStatus(STATUS.loading)
                                    create(data)
                                        .then(() => {
                                            setStatus(STATUS.success)
                                            setIsSuccessModalOpen(true)
                                            setData(userScheme)
                                        })
                                        .catch((e) => {
                                            setStatus(STATUS.error)
                                            setIsErrorModalOpen(true)
                                        })
                                }}
                            >
                                {status.description == STATUS.loading.description ? <Loading /> : "Registrar"}
                            </Button>
                        </Row>
                    </Grid>
                </Grid.Container>
            </form>
            <FormModal close={() => setIsErrorModalOpen(false)} isOpen={isErrorModalOpen} type={"Error"} />
            <FormModal close={() => setIsSuccessModalOpen(false)} isOpen={isSuccessModalOpen} type={"Success"} />
        </>
    )
}

export default index
