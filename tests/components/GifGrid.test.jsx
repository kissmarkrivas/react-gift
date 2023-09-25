import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe('pruebas en <GifGrid/>', () => {
  const category = 'One Punch';
  test('debe de mostrar el loafing inicialmente', () => {
    render( <GifGrid category={ category }/>);
    // screen.debug()
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText( category ));
  })

  test('debe de mostrar items cuandos e cargan las imagenes useFetchGi', () => {

  })

})