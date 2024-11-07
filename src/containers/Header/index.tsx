import perfil from '../../assets/Foto pessoal .jpg'
import * as S from './styles'

const Header = () => {
  return (
    <S.Container>
      <S.Foto src={perfil} alt="" />
      <S.Div>
        <S.Hi>HI!</S.Hi>
        <S.H1>
          Me chamo <S.Span>Anderson Costa</S.Span>
        </S.H1>
        <S.H2>Frontend Developer</S.H2>
      </S.Div>
    </S.Container>
  )
}
export default Header
