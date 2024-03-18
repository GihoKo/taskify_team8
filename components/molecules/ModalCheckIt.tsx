import styled from 'styled-components';

interface ModalCheckItProps {
  submitButton: string;
  text: string;
  cancelButton?: string;
  wrong: any;
}

export default function ModalCheckIt({ submitButton, text, cancelButton, wrong }: ModalCheckItProps) {
  return (
    <>
      <S.background>
        <S.container height={'25rem'} width={'54rem'}>
          <S.description>{text}</S.description>
          <S.buttonFlex>
            {cancelButton && <S.cancelButton>{cancelButton}</S.cancelButton>}
            <S.button onClick={wrong}>{submitButton}</S.button>
          </S.buttonFlex>
        </S.container>
      </S.background>
    </>
  );
}

const S = {
  background: styled.div`
    width: 100%;
    z-index: 999;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.7);
    height: 100%;
  `,
  container: styled.div<{ width?: string; height?: string }>`
    padding: 3.2rem 2.8rem 2.8rem 2.8rem;
    width: ${(props) => props?.width || ''};
    height: ${(props) => props?.height || ''};
    flex-shrink: 0;
    border-radius: 0.8rem;
    background: ${({ theme }) => theme.color.white_FFFFFF};
    flex-direction: column;
    display: flex;
    justify-content: center;

    @media (max-width: 767px) {
      padding: 2.8rem 2rem 2.8rem 2rem;
      width: initial;
      height: initial;
    }
  `,
  description: styled.p`
    margin-top: 7rem;
    color: ${({ theme }) => theme.color.black_333236};
    text-align: center;

    font-size: 1.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
  `,
  buttonFlex: styled.div`
    margin-top: 2.8rem;
    justify-content: flex-end;
    display: flex;
    gap: 1.2rem;
  `,
  cancelButton: styled.button`
    display: flex;
    padding: 1.4rem 4.6rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-shrink: 0;
    border-radius: 0.8rem;
    border: 1px solid ${({ theme }) => theme.color.gray_D9D9D9};
    color: ${({ theme }) => theme.color.gray_787486};
    text-align: center;
    font-size: 1.6rem;
    font-weight: 500;

    @media (max-width: 767px) {
      padding: 1.2rem 5.6rem;
      font-size: 1.4rem;
    }
  `,
  button: styled.button`
    display: flex;
    padding: 1.4rem 4.6rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-shrink: 0;
    border-radius: 0.8rem;
    background: ${(props) =>
      props.disabled ? 'var(--violet-violet-8, #F1EFFD)' : 'var(--violet-violet_5534DA, #5534DA)'};
    color: var(--white-FFFFFF) !important;
    text-align: center;

    font-size: 1.5rem;
    font-weight: 500;

    &:hover {
      background: ${(props) =>
        props.disabled ? 'var(--violet-violet-8, #F1EFFD)' : 'var(--violet-violet_5534DA, #5534DA)'} !important;
      color: var(--white-FFFFFF) !important;
    }

    @media (max-width: 767px) {
      padding: 1.2rem 5.6rem;
      font-size: 1.4rem;
    }
  `,
};
