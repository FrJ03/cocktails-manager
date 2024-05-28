import { app } from "./app";
import * as config from './commons/utils/config'

const PORT: string | number = config.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});