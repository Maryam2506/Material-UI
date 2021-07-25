import { useState } from 'react'
import { TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Container, makeStyles } from "@material-ui/core"
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
})


const Form = () => {
    const classes = useStyles()
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
    const [category, setCategory] = useState('money')

    const handleSubmit = (e) => {
        e.preventDefault()
        setTitleError(false)
        setDetailsError(false)

        if (title === '') {
            setTitleError(true)
        }
        if (details === '') {
            setDetailsError(true)
        }
        if (title && details) {
            fetch('http://localhost:8000/notes', {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ title, details, category })
            }).then(() => history.push('/'))
        }
    }

    return (
        <Container size="sm">
             <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField className={classes.field}
                onChange={(e) => setTitle(e.target.value)}
                label="Note Title"
                variant="outlined"
                color="secondary"
                fullWidth
                required
                error={titleError}
            />
            <TextField className={classes.field}
                onChange={(e) => setDetails(e.target.value)}
                label="Details"
                variant="outlined"
                color="secondary"
                multiline
                rows={4}
                fullWidth
                required
                error={detailsError}
            />

            {/* <Radio value="hello" />
        <Radio value="goodbye" /> */}

            <FormControl className={classes.field}>
                <FormLabel>Note Category</FormLabel>
                <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                    <FormControlLabel value="money" control={<Radio />} label="Money" />
                    <FormControlLabel value="todos" control={<Radio />} label="Todos" />
                    <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
                    <FormControlLabel value="work" control={<Radio />} label="Work" />
                </RadioGroup>
            </FormControl>

            <Button
                type="submit"
                color="secondary"
                variant="contained"
            >
                Submit
            </Button>
        </form>

        </Container>
    )
}
export default Form;