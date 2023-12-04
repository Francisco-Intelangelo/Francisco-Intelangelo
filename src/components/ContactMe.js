import styled from "styled-components"

export const ContactMe = () => {
    return(
        <Form>
            <LabelForm>Name*</LabelForm>
            <InputForm placeholder="Example Example"/>
            <LabelForm>Email*</LabelForm>
            <InputForm placeholder="example@example.com"/>
            <LabelForm>Message</LabelForm>
            <TextArea placeholder="Hello!!👋👋 " rows="5" cols="33"/>
        </Form>
    )
    
}
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 300px;
`;
const LabelForm = styled.label`
    color: #d7d7d7;
    padding: 10px;
`;
const InputForm = styled.input`
    border: none;
    width: 200px;
    height: 20px;
    border-radius: 10px;
    padding-bottom: 10px;
    padding: 5px;
`;
const TextArea = styled.textarea`
    border: none;
    border-radius: 10px;
    padding: 5px;
    width: 250px;
    min-width: 250px;
    max-width: 400px;
    height: 90px;
    min-height: 90px;
    max-height: 150px;
`;