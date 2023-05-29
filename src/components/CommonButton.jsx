import styled from 'styled-components'

export const CommonButton = () => {
  const Container = styled.div`
    display        : flex;
    width          : calc(var(--bv) * 50);
    flex-wrap      : wrap;
    justify-content: space-between;
    gap            : calc(var(--bv) * 2) 0;
  `
  const FirstButton = styled.button`
    flex            : 0 0 calc((100% / 3) - calc(var(--bv) * 3));
    width           : calc((100% / 3) - calc(var(--bv) * 3));
    height          : calc(var(--bv) * 3);
    padding         : var(--bv);
    color           : var(--white);
    border          : none;
    border-radius   : var(--button-border-radius);
    background-color: var(--pink);
    transition      : opacity .3s;

    :hover {
      opacity: .65;
    }

    span {
      font-size: 12px;
    }
  `
  const SecondButton = styled(FirstButton)`
    background-color: var(--red);
  `
  const ThirdButton = styled(SecondButton)`
  background-color: ${({dark}) => dark ? '#333' : 'green' };
`

  return (
    <>
      <Container>
        <FirstButton>
          <span>ボタン</span>
        </FirstButton>
        <SecondButton>
          <span>ボタン2</span>
        </SecondButton>
        <ThirdButton>
          <span>ボタン3</span>
        </ThirdButton>
        <ThirdButton dark>
          <span>ボタン3</span>
        </ThirdButton>
        <ThirdButton >
          <span>ボタン4</span>
        </ThirdButton>
        <ThirdButton dark>
          <span>ボタン5</span>
        </ThirdButton>
        <ThirdButton dark>
          <span>ボタン6</span>
        </ThirdButton>
      </Container>
    </>
  )
}
export default CommonButton