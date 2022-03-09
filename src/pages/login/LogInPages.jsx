import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { 
  Formulario, 
  Label, 
  GrupoInput, 
  Input, 
  LeyendaError, 
  IconoValidacion, 
  ContenedorBotonCentrado,
  Boton, 
  MensajeExito, 
  MensajeError 
} from './Formularios';


export default function LogInPages() {
  return (
    <main>
      <section>
        <Formulario action = "">
          <p>Bienvenid@ a LabNotes </p>
          <div>
            <Label htmlFor="email">Email</Label>
            <GrupoInput>
              <Input type="email" placeholder="Email" id="email" />
              <IconoValidacion icon={faCheckCircle} />
            </GrupoInput>     
            <LeyendaError>Lorem ipsum dolor sit amet veniam! Saepe est et aperiam, fugiat soluta ducimus.</LeyendaError>
          </div>   
          <div>
            <Label htmlFor="password">Password</Label>
            <GrupoInput>
              <Input type="password" placeholder="password" id="password" />
              <IconoValidacion icon={faCheckCircle} />
            </GrupoInput>     
            <LeyendaError>Lorem ipsum dolor sit amet veniam! Saepe est et aperiam, fugiat soluta ducimus.</LeyendaError>
          </div> 
          <p>¿Has Olvidado la Contraseña?</p>
          <MensajeError>
            <p>
              <IconoValidacion icon={faTriangleExclamation}/>
              <b>Error:</b>Por favor rellene el formulario correctamente
            </p>
          </MensajeError> 
          <ContenedorBotonCentrado>
            <Boton type="submit">Enviar</Boton>
            <MensajeExito>Formulario enviado exitosamente</MensajeExito>
          </ContenedorBotonCentrado> 
        </Formulario>
      </section> 
      <section>
        <p>O Inicia Session Con:</p>
        <div style={{fontSize:"2em", color: "black", textAlign: "center"}}>           
          <FontAwesomeIcon icon={faGoogle} /> {" "}
        </div>
        <p>¿No tienes una cuenta?</p>
      </section>  
    </main>
  )
}