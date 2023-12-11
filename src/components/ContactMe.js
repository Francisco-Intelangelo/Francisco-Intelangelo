import styled from "styled-components"

export const ContactMe = () => {
    return(
        <>
            <Form>
                <LabelForm>Name</LabelForm>
                <InputForm placeholder="Example Example" required/>
            </Form>
        </>
    )
    
}
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    height: auto;
    border: 1px solid #ff8000;
`;
const LabelForm = styled.label`
    color: #d7d7d7;
    padding: .6rem 0;
    font-size: 1rem;
`;
const InputForm = styled.input`
    border: none;
    width: auto;
    max-width: auto;
    min-width: auto;
    height: 3vh;
    border-radius: 3rem;
    padding: .3rem;
    font-size: 2vh;
`;