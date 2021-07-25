import { Button } from "@material-ui/core";

const Btn = () => {

    return (
        <>
            <Button onClick={() => console.log("You Clicked ")} variant="contained">Default</Button>
            <Button variant="contained" color="primary">
                Primary
            </Button>
            <Button variant="contained" color="secondary">
                Secondary
            </Button>
            <Button variant="contained" disabled>
                Disabled
            </Button>
            <Button variant="contained" color="primary" href="#contained-buttons">
                Link
            </Button>
        </>
    )
}
export default Btn;
