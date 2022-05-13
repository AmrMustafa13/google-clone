import React from 'react'
import { Oval } from 'react-loader-spinner'

const Spinner = () => {
    const styles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <div style={styles}>
            <Oval color="#00BFFF" height={80} width={80} />
        </div>
    )
}

export default Spinner