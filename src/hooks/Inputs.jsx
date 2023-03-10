import { useState } from 'react';

export function useInputs(initialValue) {
    const [inputValue, setInputValue] = useState(initialValue);

    const onChangeHandler = (e) => {
        setInputValue(e.target?.value);
    };

    return [inputValue, onChangeHandler, setInputValue];
}
