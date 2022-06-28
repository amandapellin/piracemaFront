import { Box, Button, ButtonGroup, Divider, Stack, TextField, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { useState } from 'react';


export default function PeixesCadastrados() {
    const [peixe, setPeixe] = useState([{}])

    fetch("http://localhost:4050/fish")
    .then(response => {
        return response.json();
    })
    .then(data => { setPeixe(data); });

    return (
        peixe.map((fish, i) => (
            <div key={i}>
                <br />
                <Container >
                    <Stack direction='row' spacing={50}   >
                        <Stack direction='column' spacing={2}   >

                            <Typography>Identificador:{fish.id}</Typography>
                            <Typography>PitTag:{fish.pitTag}</Typography>
                            <Typography>Nome Científico da Espécie:{fish.scientificName}</Typography>
                            <Typography>Comprimento Total:{fish.totalLength}</Typography>
                            <Typography>Peso de Soltura:{fish.releaseWeight}</Typography>
                            <Typography>Código de Amostra do DNA:{fish.dnaSample}</Typography>
                            <Typography>Recaptura:{fish.recapture}</Typography>
                        </Stack>

                        <Stack direction='column' spacing={25}   >
                            <TextField

                                label="Digite para buscar um peixe"
                                variant='outlined'
                                color='primary'
                                required

                            />
                            <Box>
                                <ButtonGroup size="small" aria-label=" small button group" variant='text' color="inherit">
                                    <Button>Recaptura</Button>
                                    <Button>Editar</Button>
                                    <Button>Excluir</Button>
                                </ButtonGroup>

                            </Box>
                        </Stack>

                    </Stack>

                </Container>
                <br />
                <Divider />
            </div>
        ))
    )
}