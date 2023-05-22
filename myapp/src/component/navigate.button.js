import { useNavigate } from "react-router"
import PropTypes from 'prop-types'
import { memo } from "react"

function NavigateButton({ url, name }) {

    const navigate = useNavigate()
    return (
        <button className='Home' onClick={() => navigate(url)}>{name}</button>
    )
}

NavigateButton.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}
export default memo(NavigateButton) 