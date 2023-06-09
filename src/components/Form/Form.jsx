import React, { useEffect, useState } from "react"
import { userScheme } from "@/firebase/userScheme"
import { create } from "@/firebase/client"
import { Button, Grid, Input, Loading, Row } from "@nextui-org/react"
import Head from "next/head"
import FormModal from "./FormModal"

const STATUS = {
    initial: Symbol("initial"),
    loading: Symbol("loading"),
    success: Symbol("success"),
    error: Symbol("error"),
}

const Form = () => {
    const [data, setData] = useState(userScheme)
    const [status, setStatus] = useState(STATUS.initial)
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

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
                            helperText="Nombre"
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
                            helperText="Apellido"
                            value={data.apellido}
                            onChange={(e) => handleChange(e)}
                            name="apellido"
                            width="100%"
                        />
                    </Grid>
                    <Grid md={6} xs={12}>
                        <Input
                            placeholder="Cedula"
                            clearable
                            helperText="Numero de cedula"
                            value={data.cedula}
                            onChange={(e) => handleChange(e)}
                            name="cedula"
                            width="100%"
                        />
                    </Grid>
                    <Grid md={6} xs={12}>
                        <Input
                            placeholder="Domicilio"
                            clearable
                            helperText="Domicilio"
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
                            helperText="Telefono"
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
                            helperText="Nombre de tu colegio electoral"
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
                            helperText="Ubicacion de tu colegio electoral"
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
                                            console.log("CREADO")
                                            setStatus(STATUS.success)
                                            setIsSuccessModalOpen(true)
                                            setData(userScheme)
                                        })
                                        .catch((e) => {
                                            console.log("NO CREADO")
                                            console.log(e)

                                            setErrorMessage(e)
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
            <FormModal
                close={() => setIsErrorModalOpen(false)}
                isOpen={isErrorModalOpen}
                type={"Error"}
                errorMessage={errorMessage}
            />
            <FormModal close={() => setIsSuccessModalOpen(false)} isOpen={isSuccessModalOpen} type={"Success"} />
        </>
    )
}

export default Form
