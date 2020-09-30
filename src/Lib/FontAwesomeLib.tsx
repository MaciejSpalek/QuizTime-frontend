import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faPersonBooth, faHome, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
 
const FontAwesomeLibrary = (): JSX.Element => {
    library.add(
        fab,
        fas
    )
    return (<></>)
}


export default FontAwesomeLibrary;