import { Button } from 'react-bootstrap';

const ButtonForm = ({ text, block=false, disabled=false }) => (
    <>
        <Button 
            type="submit" 
            block={block}
            disabled={disabled}
        >
            {text}
        </Button>
    </>
)


export default ButtonForm