import { Divider, Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { useState } from 'react';

export default function RegistroPassagens() {
    const [passagens, setPassagens] = useState([])

    fetch("http://localhost:4050/passes")
        .then(response => {
            return response.json();
        })
        .then(jsondata => {
            setPassagens(jsondata);
        });

    return (
        passagens.map((pas, i) => (

            <div key={i}>
                <Container >
                    <br />
                    <Stack direction='row' spacing={50} >
                        <Stack direction='column' spacing={3} >
                            <Typography>Identificador:</Typography>
                            <Typography>PitTag: {pas.pitTag}</Typography>
                            <Typography>Nome Científico da Espécie:{pas.scientificName}</Typography>
                            <Typography>Comprimento Padrão:{pas.fish}</Typography>
                            <Typography>Comprimento Total:{pas.totalLength}</Typography>

                        </Stack>

                        <Stack direction='column' spacing={3} >
                            <Typography>Data da Soltura:{pas.releaseDate}</Typography>
                            <Typography>Local da Soltura:{pas.releaseSpot}</Typography>
                            <Typography>Recaptura:</Typography>
                            <Typography>Nome da Antena: {pas.antenna}</Typography>
                            <Typography>Data e Hora do Registro: {pas.passDate}</Typography>
                        </Stack>

                    </Stack>
                    <br />
                    <Divider />
                </Container>
            </div>
        ))
    )
}