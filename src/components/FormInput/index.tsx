import * as S from './style';

interface Props {
  width?: string;
  type: string;
  label?: string;
  placeholder?: string;
  errorMsg?: string | undefined;
  inputProps?: object;
}

const FormInput = ({
  width,
  type,
  label,
  placeholder,
  errorMsg,
  inputProps,
}: Props) => {
  return (
    <div>
      <S.Label>{label}</S.Label>
      <S.Input
        width={width}
        placeholder={placeholder}
        type={type}
        {...inputProps}
      />
      <S.ErrorMsg>{errorMsg}</S.ErrorMsg>
    </div>
  );
};

export default FormInput;
