import { Divider, Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';

export default function StatusAntenas() {
    const [antenas, setAntenas] = useState([])
    const [status, setStatus] = useState([])

    fetch("http://localhost:4050/statusantenna/all")
        .then(response => {
            return response.json();
        })
        .then(data => {
            setAntenas(data.Passagens);
            setStatus(data.Status_Antenas);
        });


    return (
        antenas.map((ant, i) => (
            <div key={i}>
                <Container >
                    <Stack direction='row' spacing={50} >
                        <Stack direction='column' spacing={3} >
                            <Avatar sx={{ width: 300, height: 300 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </Stack>

                        <Stack direction='column' spacing={3} >
                            <Typography>Nome:{ant.id}</Typography>
                            <Typography>Status:</Typography>
                            <Typography>Latitude:{ant.Latitude}</Typography>
                            <Typography>Longitude:{ant.Longitude}</Typography>
                            <Typography>Data da mudança:{ant.statusChangeDate}</Typography>
                            <Typography>Data de Instalação:{ant.installDate}</Typography>
                            <Typography>Data Desativação:{ant.deactivationDate}</Typography>
                        </Stack>
                    </Stack>
                    <br />
                    <Divider />

                </Container>
            </div>
        ))
    )
}