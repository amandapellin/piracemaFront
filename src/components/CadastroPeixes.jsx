import { Button, Container, Divider, FormControlLabel, FormGroup, List, ListItem, ListItemText, responsiveFontSizes, Switch, TextField } from '@mui/material';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { useForm } from 'react-hook-form';


function CadastroPeixes() {

  const [recaptura, setRecaptura] = useState(false)
  const { register, handleSubmit } = useForm();

  const onSubmit = (e) => {
    console.log(e);
    fetch("http://localhost:4050/fish",
      {
        method: 'POST',
        body: JSON.stringify(e),
        headers: {
          contentType: "application/json; charset=utf-8",
        }
      }
    )
      .then(response => {
        console.log(response);
      });

  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div>
          <List>
            <ListItem >
              <ListItemText primary="Dados de cadastro dos peixes" />
            </ListItem>
            <Divider />
          </List>
          <Grid container spacing={2} style={{ justifyContent: 'center', textAlign: 'center' }} >
            <Grid item xs={5} sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} autoComplete="off" >
              <TextField
                name='pitTag'
                label="PitTag"
                variant='outlined'
                color='primary'
                required
                {...register("pitTag")}
              />

              <TextField
                name='standardLength'
                label="Comprimento Padrão"
                variant='outlined'
                color='primary'
                required
                {...register("standardLength")}
              />

              <TextField
                name='captureSpot:'
                label="Local de Captura"
                variant='outlined'
                color='primary'
                required
                {...register("captureSpot")}
              />

              <TextField
                name='releaseDate'
                label="Data de Soltura"
                variant='outlined'
                color='primary'
                required
                {...register("releaseDate")}
              />

              <TextField
                name='dnaSample'
                label="Código da Amostra de DNA"
                variant='outlined'
                color='primary'
                required
                {...register("dnaSample")}
              />
            </Grid>

            <Grid item xs={5}
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              autoComplete="off"
            >
              <TextField
                name='scientificName'
                label="Nome Científico da Espécie"
                variant='outlined'
                color='primary'
                required
                {...register("scientificName")}
              />

              <TextField
                name='totalLength'
                label="Comprimento total"
                variant='outlined'
                color='primary'
                required
                {...register("totalLength")}
              />

              <TextField
                name='releaseWeight'
                label="Peso na Soltura"
                variant='outlined'
                color='primary'
                required
                {...register("releaseWeight")}
              />

              <TextField
                name="releaseSpot"
                label="Local da soltura"
                variant='outlined'
                color='primary'
                required
                {...register("releaseSpot")}
              />

              <FormGroup>
                <FormControlLabel label="Recaptura" onChange={(e) => { setRecaptura(e.target.checked) }} control={<Switch />} />
              </FormGroup>

              {console.log(recaptura)}

            </Grid>
          </Grid>
        </div>

        {recaptura && (
          <div>
            <List>
              <ListItem >
                <ListItemText primary="Informações de Recaptura" />
              </ListItem>
              <Divider />
            </List>
            <Grid container spacing={2} style={{ justifyContent: 'center', textAlign: 'center' }} >
              <Grid item xs={5}
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                autoComplete="off"
              >

                <TextField
                  label="Comprimento total"
                  variant='outlined'
                  color='primary'
                  required
                />

                <TextField
                  label="Peso na soltura"
                  variant='outlined'
                  color='primary'
                  required
                />

                <TextField
                  label="Local da Soltura"
                  variant='outlined'
                  color='primary'
                  required
                />

                <TextField
                  label="Recaptura"
                  variant='outlined'
                  color='primary'
                  required />

              </Grid>

              <Grid item xs={5} sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} autoComplete="off" >
                <TextField
                  label="Local da Captura"
                  variant='outlined'
                  color='primary'
                  required
                />

                <TextField
                  label="Data de Captura"
                  variant='outlined'
                  color='primary'
                  required
                />

                <TextField
                  label="Código da Amostra de DNA"
                  variant='outlined'
                  color='primary'
                  required
                />
              </Grid>
            </Grid>
          </div>
        )}

        <br />
        <div style={{ justifyContent: 'center', textAlign: 'right' }} >
          <Button size='large' variant='outlined' color='inherit' type='submit' style={{ margin: '5px', }} >Salvar</Button>
          <Button size='large' variant='outlined' color='inherit' style={{ margin: '5px' }} >Cancelar</Button>
        </div>
      </form>
    </Container>
  );
}
export default CadastroPeixes;