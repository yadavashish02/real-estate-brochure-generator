import 'dotenv/config'
import app from './app.js'

const port = process.env.PORT || 4040

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})