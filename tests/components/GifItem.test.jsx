import { render } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem";
describe('Prueba en GifItem.jsx', () => {

  const title = 'Saitama';
  const url   = 'http://onepunch-man.com/saitama.jpg'
  test('debe de hacer match con el snapshot', () => {
    const { container } = render(<GifItem title={title} url={url}/>);
    expect(container).toMatchSnapshot();
  })
})