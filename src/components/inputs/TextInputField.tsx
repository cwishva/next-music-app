import { TextField } from '@mui/material';
import { useState } from 'react';
import { Controller } from 'react-hook-form';

interface InputFieldProps {
    name: string;
    label?: string;
    rules: any;
    control: any;
    type?: string;
}

export default function TextInputField({
    name,
    label,
    rules,
    control,
    type
}: InputFieldProps) {
    const [showError, setShowError] = useState(false);

    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            defaultValue={''}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                    fullWidth
                    color="primary"
                    variant="standard"
                    label={label}
                    type={ type ? type : 'text'}
                    value={value}
                    onChange={onChange}
                    onBlur={() => setShowError(!!error)}
                    error={showError && !!error}
                    helperText={showError && error ? error.message : null}
                />
            )}
        />
    );
}
