import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: rgb(29,35,57);
  }
`
export default EstiloGlobal

export const Container = styled.div`
  display: grid;
  grid-template-columns: 350px auto 350px;
  height: calc(100vh - 200px);
`
