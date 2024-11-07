import exp from 'constants'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const Foto = styled.img`
  width: 112.57px;
  height: auto;
  margin-top: 25px;
  margin-left: 100px;
  margin-bottom: 25px;
  // arredonda as bordas da imagem apenas no canto superior direito e inferior esquerdo
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.5);
`

export const Div = styled.div`
  color: #fff;
  margin-top: 40px;
  margin-left: 80px;
`

export const Hi = styled.p`
  font-size: 24px;
`
export const H1 = styled.h1`
  font-size: 34px;
  margin-top: 5px;
  font-weight: normal;
`
export const Span = styled.span`
  font-weight: bold;
`
export const H2 = styled.h2`
  font-size: 24px;
  margin-top: 5px;
  font-weight: lighter;
  font-style: italic;
`
