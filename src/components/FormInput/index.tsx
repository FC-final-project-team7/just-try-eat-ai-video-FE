import * as S from './style';

interface Props {
  type: string;
  label?: string;
  placeholder: string;
  errorMsg: string | undefined;
  inputProps?: object;
}

const FormInput = ({
  type,
  label,
  placeholder,
  errorMsg,
  inputProps,
}: Props) => {
  return (
    <div>
      <S.Label>{label}</S.Label>
      <S.Input placeholder={placeholder} type={type} {...inputProps} />
      <S.ErrorMsg>{errorMsg}</S.ErrorMsg>
    </div>
  );
};

export default FormInput;
