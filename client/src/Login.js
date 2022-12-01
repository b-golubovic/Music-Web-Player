import React from "react"
import { Container } from "react-bootstrap"

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=613949829fd64ecfaa5f1cc2914ed6f8&response_type=code&redirect_uri=http://localhost:3000/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
  function MoveDiv() {
    var fragment = document.createDocumentFragment();
    fragment.appendChild(document.getElementById('root'));
    document.getElementById('test').appendChild(fragment);
  }
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
    >
      <a className="btn btn-success btn-lg" href={AUTH_URL}>
        Login sa Spotify-em
      </a>

    </Container>
  )
}