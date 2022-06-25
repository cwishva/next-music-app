import { Button, CircularProgress, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

interface IProps {
  btnText: string;
  onClick?: () => void;
  formState?: any;
  isDisabled?: boolean;
  isLoading?: boolean;
}

export default function PrimaryButton({
  btnText,
  onClick,
  formState,
  isDisabled,
  isLoading
}: IProps) {
  // eslint-disable-next-line
  formState
    ? formState
    : (formState = { isDirty: true, isValid: true, isSubmitting: false });
  const { isDirty, isValid, isSubmitting } = formState;
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setDisabled(!isDirty || !isValid);
    if (isDisabled) setDisabled(true);
  }, [isDirty, isValid, isDisabled]);

  return (
    <Button
      fullWidth
      variant="contained"
      disableElevation
      size="large"
      type="submit"
      color="primary"
      onClick={onClick}
      disabled={disabled}
      sx={{
        height: '3rem',
        lineHeight: '3rem',
        textTransform: 'none',
        borderRadius: '2.75rem'
      }}
    >
      {isSubmitting || isLoading ? (
        <CircularProgress size={30} sx={{ color: 'white' }} />
      ) : (
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          {btnText}
        </Typography>
      )}
    </Button>
  );
}
