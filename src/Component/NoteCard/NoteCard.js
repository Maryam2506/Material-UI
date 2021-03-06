import { Card, CardHeader, CardContent, IconButton, Typography, Avatar, makeStyles } from '@material-ui/core'
import { DeleteOutlined } from '@material-ui/icons'
import { yellow, green, pink, blue } from '@material-ui/core/colors'

const useStyles = makeStyles({
    avatar: {
      backgroundColor: (note) => {
        if (note.category === 'work') {
          return yellow[700]
        }
        if (note.category === 'money') {
          return green[500]
        }
        if (note.category === 'todos') {
          return pink[500]
        }
        return blue[500]
      },
    }
  })

const NoteCard = ({ note, handleDelete }) => {

    const classes = useStyles(note)

    return (
        <>
            <Card elevation={1} className={classes.test}>
                <CardHeader
                 avatar={
                    <Avatar className={classes.avatar}>
                      {note.category[0].toUpperCase()}
                    </Avatar>}
                    action={
                        <IconButton onClick={() => handleDelete(note.id)}>
                            <DeleteOutlined />
                        </IconButton>} title={note.title}
                    subheader={note.category} />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>

        </>
    )
}
export default NoteCard;