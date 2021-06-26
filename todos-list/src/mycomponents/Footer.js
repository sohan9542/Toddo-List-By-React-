import React from 'react'

export const Footer = () => {
    let footerStyle = {
        margin: "10px 0 0 0"
    }
    return (
        <footer className="bg-dark text-light py-2" style={footerStyle}>
            <p className="text-center">Copyright &copy; MyTOdosList.com</p>
        </footer>
    )
}
