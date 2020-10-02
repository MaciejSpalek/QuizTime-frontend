import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far} from '@fortawesome/free-regular-svg-icons';
const FontAwesomeLibrary = (): JSX.Element => {
    library.add(
        fab,
        fas,
        far
    )
    return (<></>)
}

export default FontAwesomeLibrary;